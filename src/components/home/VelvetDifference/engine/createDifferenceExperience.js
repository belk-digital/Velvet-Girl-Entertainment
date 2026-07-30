import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import CustomMaterial from "./CustomMaterial";
import BackfaceMaterial from "./BackfaceMaterial";
import RefractionMaterial from "./RefractionMaterial";
import { config, intro, paragraphs, outro, stripes, diamonds } from "./content";

const lerp = THREE.MathUtils.lerp;
const FONT_URL = "/velvet-difference/MOONGET_Heavy.blob";
const DIAMOND_URL = "/velvet-difference/diamond.glb";

/**
 * Vanilla-three port of the Codrops "the-substance" scroll/refraction section,
 * adapted to run inside a bounded, page-scroll-driven container (sticky canvas)
 * rather than the demo's full-screen wheel-scroll app.
 *
 * `getScrollProgress()` returns 0..1 for how far the host section has scrolled
 * through the viewport. Overlay (HTML) anchor positions are written to
 * `overlays` every frame for the React wrapper to read.
 */
export function createDifferenceExperience({ canvas, container, getScrollProgress }) {
  let disposed = false;
  let raf = null;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 20000);
  camera.position.set(0, 0, 500);
  camera.zoom = config.zoom;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false,
    });
  } catch (err1) {
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
        failIfMajorPerformanceCaveat: false,
      });
    } catch (err2) {
      console.warn("WebGL context unavailable, returning fallback object:", err2);
      return {
        resize: () => {},
        dispose: () => {},
        overlays: {},
        ready: Promise.resolve(),
        setActive: () => {},
        webglAvailable: false,
      };
    }
  }
  // Cap pixel ratio at 1.5 — the 4-pass diamond render makes higher ratios
  // expensive for little visible gain on this section.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(new THREE.Color(config.background), 1);
  renderer.autoClear = false;

  // Render only while the section is on/near screen (set via setActive).
  let paused = false;

  // Shared scroll state (matches the demo's `state.top`, in CSS pixels)
  const state = { top: 0, prevTop: 0, shift: 0 };

  // ---- Layout metrics (recomputed on resize) -------------------------------
  let W = 1;
  let H = 1;
  const metrics = {};
  function computeMetrics() {
    W = container.clientWidth || 1;
    H = container.clientHeight || 1;
    const zoom = config.zoom;
    metrics.mobile = W < 700;
    metrics.canvasWidth = W / zoom;
    metrics.canvasHeight = H / zoom;
    metrics.margin = metrics.canvasWidth * (metrics.mobile ? 0.2 : 0.1);
    metrics.contentMaxWidth = metrics.canvasWidth * (metrics.mobile ? 0.8 : 0.6);
    metrics.sectionHeight =
      metrics.canvasHeight * ((config.pages - 1) / (config.sections - 1));
  }

  // Refraction FBOs render the whole scene each frame; keep them at ~55% of
  // the drawing buffer (the on-screen `resolution` uniform stays full-res).
  const FBO_SCALE = 0.55;
  function fboW() {
    return Math.max(2, Math.floor(W * renderer.getPixelRatio() * FBO_SCALE));
  }
  function fboH() {
    return Math.max(2, Math.floor(H * renderer.getPixelRatio() * FBO_SCALE));
  }

  function resize() {
    computeMetrics();
    camera.left = -W / 2;
    camera.right = W / 2;
    camera.top = H / 2;
    camera.bottom = -H / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);
    const ratio = renderer.getPixelRatio();
    envFbo?.setSize(fboW(), fboH());
    backfaceFbo?.setSize(fboW(), fboH());
    if (refractionMaterial) refractionMaterial.uniforms.resolution.value.set(W * ratio, H * ratio);
    layoutRebuild();
  }

  // ---- Block parallax system ----------------------------------------------
  // Each block owns a group whose y = static-offset + smoothed-scroll, exactly
  // like the demo's <Block> (outer static offset + inner lerped scroll).
  const blocks = new Map();
  function block(key, offset, factor) {
    let b = blocks.get(key);
    if (!b) {
      const group = new THREE.Group();
      scene.add(group);
      b = { offset, factor, group, lerped: 0 };
      blocks.set(key, b);
    } else {
      b.offset = offset;
      b.factor = factor;
    }
    return b;
  }
  function blockWorldY(b) {
    return -metrics.sectionHeight * b.offset * b.factor + b.lerped;
  }
  function updateBlocks() {
    const zoom = config.zoom;
    blocks.forEach((b) => {
      b.lerped = lerp(b.lerped, (state.top / zoom) * b.factor, 0.1);
      b.group.position.y = blockWorldY(b);
    });
  }

  // ---- Materials registry (for global chromatic shift) ---------------------
  const customMaterials = [];
  function makeCustom(opts = {}) {
    const m = new CustomMaterial();
    m.transparent = true;
    m.depthWrite = false;
    if (opts.color) {
      // The shader writes gl_FragColor directly (no output-encoding), so feed
      // it the raw sRGB channel values parsed straight from the hex.
      const h = opts.color.replace("#", "");
      m.uniforms.color.value.set(
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255
      );
    }
    if (opts.map) m.map = opts.map;
    customMaterials.push(m);
    return m;
  }

  // ---- 3D text helpers -----------------------------------------------------
  let font = null;
  function makeText(str, { size = 1, color = "#ffffff", left, right, top, bottom }) {
    const geo = new TextGeometry(str, { font, size: 1, height: 0.01, curveSegments: 24 });
    geo.computeBoundingBox();
    const box = new THREE.Vector3();
    geo.boundingBox.getSize(box);
    const mat = makeCustom({ color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.x = left ? 0 : right ? -box.x : -box.x / 2;
    mesh.position.y = top ? 0 : bottom ? -box.y : -box.y / 2;
    const group = new THREE.Group();
    group.scale.set(size, size, 0.1);
    group.add(mesh);
    return group;
  }

  // ---- Overlay (HTML) anchors ----------------------------------------------
  // { id: { x, y, visible } } in CSS pixels within the container.
  const overlays = {};
  const _v = new THREE.Vector3();
  function projectAnchor(id, worldX, worldY, worldZ) {
    _v.set(worldX, worldY, worldZ).project(camera);
    overlays[id] = {
      x: (_v.x * 0.5 + 0.5) * W,
      y: (-_v.y * 0.5 + 0.5) * H,
      visible: _v.z > -1 && _v.z < 1,
    };
  }

  // ---- Diamonds (refraction) ----------------------------------------------
  let diamondMesh = null;
  let envFbo = null;
  let backfaceFbo = null;
  let backfaceMaterial = null;
  let refractionMaterial = null;
  const dummy = new THREE.Object3D();

  function buildDiamonds(geometry) {
    const ratio = renderer.getPixelRatio();
    envFbo = new THREE.WebGLRenderTarget(fboW(), fboH());
    backfaceFbo = new THREE.WebGLRenderTarget(fboW(), fboH());
    backfaceMaterial = new BackfaceMaterial();
    refractionMaterial = new RefractionMaterial({
      envMap: envFbo.texture,
      backfaceMap: backfaceFbo.texture,
      resolution: new THREE.Vector2(W * ratio, H * ratio),
    });
    diamondMesh = new THREE.InstancedMesh(geometry, refractionMaterial, diamonds.length);
    diamondMesh.position.set(0, 0, 50);
    diamondMesh.layers.set(1);
    diamondMesh.frustumCulled = false;
    scene.add(diamondMesh);
  }

  function updateDiamonds() {
    if (!diamondMesh) return;
    const t = performance.now() / 2000;
    const { contentMaxWidth, sectionHeight, mobile } = metrics;
    const zoom = config.zoom;
    diamonds.forEach((d, i) => {
      const s = (contentMaxWidth / 35) * d.scale;
      const targetY = -sectionHeight * d.offset * d.factor + (state.top / zoom) * d.factor;
      d._y = lerp(d._y ?? targetY, targetY, 0.1);
      dummy.position.set(mobile ? 0 : d.x, d._y, 0);
      if (i === diamonds.length - 1) dummy.rotation.set(0, t, 0);
      else dummy.rotation.set(t, t, t);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      diamondMesh.setMatrixAt(i, dummy.matrix);
    });
    diamondMesh.instanceMatrix.needsUpdate = true;
  }

  // ---- Build scene content -------------------------------------------------
  const built = { images: [], stripes: [], texts: [] };

  function layoutImagesAndText() {
    // (Re)position anything whose placement depends on metrics. Meshes live in
    // their block groups; we rebuild transforms here on resize.
    built.images.forEach((im) => im.place());
    built.stripes.forEach((s) => s.place());
    built.texts.forEach((t) => t.place());
  }
  function layoutRebuild() {
    if (!font) return;
    layoutImagesAndText();
  }

  function buildStripes() {
    stripes.forEach((s, i) => {
      const b = block(`stripe-${i}`, s.offset, -1.5);
      const geo = new THREE.PlaneGeometry(50, s.height, 16, 16);
      const mat = makeCustom({ color: s.color || config.stripeColor });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.z = Math.PI / 8;
      mesh.position.z = -10;
      b.group.add(mesh);
      built.stripes.push({ place: () => {} });
    });
  }

  function buildIntro() {
    // Headline (3D), stacked words. Block offset 0, factor 1.4.
    const b = block("intro-head", 0, 1.4);
    const w = metrics.contentMaxWidth;
    const size = w * 0.065;
    const lineHeight = w / 11;
    const headGroup = new THREE.Group();
    intro.headline.forEach((word, i) => {
      const t = makeText(word, { size, color: config.headlineColor, top: true, left: true });
      const hx = metrics.mobile ? -w / 2.1 : -w / 3.2;
      t.position.set(hx, 2.05 - i * lineHeight, -1);
      headGroup.add(t);
    });
    b.group.add(headGroup);
    built.texts.push({
      place: () => {
        const w2 = metrics.contentMaxWidth;
        const s2 = w2 * 0.065;
        const lh2 = w2 / 11;
        headGroup.children.forEach((t, i) => {
          t.scale.set(s2, s2, 0.1);
          const hx = metrics.mobile ? -w2 / 2.1 : -w2 / 3.2;
          t.position.set(hx, 2.05 - i * lh2, -1);
        });
      },
    });
  }

  function buildParagraphs() {
    paragraphs.forEach((p, index) => {
      const b = block(`para-${index}`, p.offset, p.factor);
      // Image plane
      const geo = new THREE.PlaneGeometry(1, 1, 32, 32);
      const mat = makeCustom({ map: p._texture });
      const imgGroup = new THREE.Group();
      const mesh = new THREE.Mesh(geo, mat);
      imgGroup.add(mesh);
      b.group.add(imgGroup);

      // Header 3D text
      const header = makeText(p.header, { size: 1, color: config.headerColor, top: true });
      b.group.add(header);

      // Big number 3D text (same block, sits behind the image)
      const number = makeText(p.number, { size: 1, color: config.numberColor });
      b.group.add(number);

      const place = () => {
        const { contentMaxWidth: w, canvasWidth, margin, mobile } = metrics;
        const size = p.aspect < 1 && !mobile ? 0.65 : 1;
        const alignRight = (canvasWidth - w * size - margin) / 2;
        const left = !(index % 2);
        const gx = left ? -alignRight : alignRight;

        imgGroup.position.set(gx, 0, 0);
        mesh.scale.set(w * size, (w * size) / p.aspect, 1);

        // header
        const hs = w * 0.04;
        header.scale.set(hs, hs, 0.1);
        // re-anchor header left/right
        anchorText(header, left ? "left" : "right", "top");
        header.position.set(((left ? -w : w) * size) / 2, (w * size) / p.aspect / 2 + 0.5, -1);

        // number
        const ns = w * 0.1;
        number.scale.set(ns, ns, 0.1);
        anchorText(number, "center", "center");
        number.position.set(((left ? w : -w) / 2) * size, (w * size) / p.aspect / 1.5, -10);

        // paragraph HTML anchor. On mobile, pin the caption to a small left
        // margin (left-aligned, near full width) so it reads on 2–3 lines
        // instead of a narrow clipped column.
        p._anchorLocal = {
          x: mobile ? -canvasWidth / 2 + margin * 0.1 : gx + (left ? -(w * size) / 2 : 0),
          y: -(w * size) / p.aspect / 2 - 0.4,
          z: 1,
          align: mobile ? "left" : left ? "left" : "right",
        };
      };
      built.images.push({ place });
      p._blockKey = `para-${index}`;
    });
  }

  // Re-anchor a text group's mesh given horizontal/vertical alignment
  function anchorText(group, halign, valign) {
    const mesh = group.children[0];
    const box = new THREE.Vector3();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.boundingBox.getSize(box);
    mesh.position.x = halign === "left" ? 0 : halign === "right" ? -box.x : -box.x / 2;
    mesh.position.y = valign === "top" ? 0 : valign === "bottom" ? -box.y : -box.y / 2;
  }

  // ---- Overlay anchor updates each frame -----------------------------------
  function updateOverlays() {
    const w = metrics.contentMaxWidth;
    const { canvasWidth, canvasHeight, mobile } = metrics;

    // eyebrow: intro-head block
    const bh = blocks.get("intro-head");
    const hx = mobile ? -w / 2.1 : -w / 3.2;
    if (bh) projectAnchor("eyebrow", hx, blockWorldY(bh) + 3.15, -1);

    // intro paragraph: block intro-text factor 1.4
    const bt = block("intro-text", 0, 1.4);
    const ix = mobile ? hx : w / 12;
    const iy = mobile ? -w * 0.4 : 0.4;
    projectAnchor("intro-text", ix, blockWorldY(bt) + iy, -1);

    // paragraphs
    paragraphs.forEach((p, index) => {
      const b = blocks.get(p._blockKey);
      const a = p._anchorLocal;
      if (b && a) projectAnchor(p.id, a.x, blockWorldY(b) + a.y, a.z);
    });

    // outro: centered finale — sits just below the centered diamond.
    const bo = block("outro", outro.offset, 1.25);
    projectAnchor("outro", 0, blockWorldY(bo) - 2.6, 0);
  }

  // ---- Frame ---------------------------------------------------------------
  function tick() {
    if (disposed || paused) {
      raf = null;
      return;
    }
    raf = requestAnimationFrame(tick);

    // scroll → virtual top (px). Clamp at the point where the outro is centered
    // so the last stretch of scroll HOLDS on the finale (centered diamond +
    // "Book With Confidence") instead of scrolling into empty black.
    const progress = getScrollProgress();
    const rawTop = progress * (config.pages - 1) * H;
    const holdTop =
      (outro.offset / (config.sections - 1)) * (config.pages - 1) * H;
    state.top = Math.min(rawTop, holdTop);

    // global chromatic shift from scroll velocity — kept subtle and clamped so
    // fast scrolling doesn't blow the RGB smear out into a heavy glitch.
    const rawShift = (state.top - state.prevTop) / 240;
    state.shift = THREE.MathUtils.clamp(lerp(state.shift, rawShift, 0.1), -0.3, 0.3);
    state.prevTop = state.top;

    // global chromatic shift on every custom material (like the demo's Text/Plane)
    customMaterials.forEach((m) => {
      m.shift = state.shift;
    });

    updateBlocks();
    updateDiamonds();
    updateOverlays();

    // ---- render (multi-pass for diamond refraction) ----
    renderer.setClearColor(new THREE.Color(config.background), 1);
    if (diamondMesh) {
      camera.layers.set(0);
      renderer.setRenderTarget(envFbo);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);

      camera.layers.set(1);
      diamondMesh.material = backfaceMaterial;
      renderer.setRenderTarget(backfaceFbo);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);

      camera.layers.set(0);
      renderer.setRenderTarget(null);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);

      camera.layers.set(1);
      diamondMesh.material = refractionMaterial;
      renderer.render(scene, camera);
      camera.layers.set(0);
    } else {
      renderer.setRenderTarget(null);
      renderer.clear(true, true, true);
      renderer.render(scene, camera);
    }
  }

  // ---- Init (async loads) --------------------------------------------------
  async function init() {
    computeMetrics();
    camera.left = -W / 2;
    camera.right = W / 2;
    camera.top = H / 2;
    camera.bottom = -H / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);

    const fontLoader = new FontLoader();
    const texLoader = new THREE.TextureLoader();
    const gltfLoader = new GLTFLoader();

    const [loadedFont] = await Promise.all([
      fontLoader.loadAsync(FONT_URL),
      ...paragraphs.map(async (p) => {
        const tex = await texLoader.loadAsync(p.image);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        p._texture = tex;
      }),
    ]);
    if (disposed) return;
    font = loadedFont;

    buildStripes();
    buildIntro();
    buildParagraphs();
    layoutImagesAndText();

    // diamonds (non-blocking; refraction is a nice-to-have)
    try {
      const gltf = await gltfLoader.loadAsync(DIAMOND_URL);
      if (disposed) return;
      let geometry = null;
      gltf.scene.traverse((o) => {
        if (o.isMesh && !geometry) geometry = o.geometry;
      });
      if (geometry) {
        geometry = geometry.clone();
        geometry.center();
        buildDiamonds(geometry);
        resize(); // size FBOs
      }
    } catch (e) {
      console.warn("Diamond load failed (skipping refraction)", e);
    }

    if (!paused) raf = requestAnimationFrame(tick);
  }

  // Pause/resume the render loop (driven by an IntersectionObserver so the
  // 4-pass render only runs while the section is on/near screen).
  function setActive(active) {
    paused = !active;
    if (active && !disposed && raf === null) raf = requestAnimationFrame(tick);
  }

  function dispose() {
    disposed = true;
    if (raf) cancelAnimationFrame(raf);
    renderer.setRenderTarget(null);
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    envFbo?.dispose();
    backfaceFbo?.dispose();
    paragraphs.forEach((p) => p._texture?.dispose());
    renderer.dispose();
  }

  const ready = init().catch((e) => console.error("VelvetDifference init failed", e));

  return { resize, dispose, overlays, ready, setActive, webglAvailable: true };
}
