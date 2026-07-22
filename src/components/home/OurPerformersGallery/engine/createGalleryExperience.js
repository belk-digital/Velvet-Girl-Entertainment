import * as THREE from "three";
import { Gallery } from "./Gallery";
import { Background } from "./Background";
import { Scroll } from "./Scroll";
import { Label } from "./Label";
import { TrailController } from "./TrailController";

async function preloadTextures(gallery) {
  const textureSources = gallery.getTextureSources();
  if (!textureSources.length) return new Map();

  const textureLoader = new THREE.TextureLoader();
  const loadedTextures = new Map();

  await Promise.all(
    textureSources.map(async (textureSource) => {
      try {
        const texture = await textureLoader.loadAsync(textureSource);
        texture.colorSpace = THREE.SRGBColorSpace;
        loadedTextures.set(textureSource, texture);
      } catch (error) {
        console.warn(`Texture failed to load: ${textureSource}`, error);
      }
    })
  );

  return loadedTextures;
}

/**
 * Creates and runs the depth gallery WebGL experience inside a bounded
 * container element (not the whole viewport). `getScrollProgress` is called
 * every frame and must return a 0..1 number representing how far the host
 * section has scrolled through the viewport.
 */
function createGalleryExperience({ canvas, container, getScrollProgress }) {
  let disposed = false
  let animationFrameId = null
  let paused = false

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(0, 0, 6)

  const gallery = new Gallery(container)
  const background = new Background()
  const scroll = new Scroll(camera, gallery)
  const label = new Label(gallery, container)
  const trailController = new TrailController({ gallery })

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.autoClear = false

  function resize() {
    const width = container.clientWidth || 1
    const height = container.clientHeight || 1
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
    gallery.updatePlaneScale()
    gallery.layoutPlanes()
  }

  function tick(time) {
    if (disposed || paused) {
      animationFrameId = null
      return
    }
    animationFrameId = requestAnimationFrame(tick)

    const progress = getScrollProgress()
    scroll.setProgress(progress)
    scroll.update()

    gallery.update(camera, scroll)
    label.update(camera)
    trailController.update(camera, scroll, time)

    const moodBlendData = gallery.getMoodBlendData(camera.position.z)
    if (moodBlendData) {
      background.setMoodBlend(moodBlendData)
    }

    const planeBlendData = gallery.getPlaneBlendData(camera.position.z)
    const depthProgress = gallery.getDepthProgress(camera.position.z)
    const velocityMax = scroll.velocityMax || 1
    const velocityIntensity = THREE.MathUtils.clamp(
      Math.abs(scroll.velocity || 0) / Math.max(velocityMax, 0.0001),
      0,
      1
    )
    const blend = planeBlendData?.blend ?? 0
    const distanceFromBlendCenter = Math.abs(blend - 0.5) * 2
    const transitionStability = THREE.MathUtils.smoothstep(distanceFromBlendCenter, 0.35, 1)
    const stabilizedVelocityIntensity = velocityIntensity * transitionStability

    background.setMotionResponse({
      depthProgress,
      velocityIntensity: stabilizedVelocityIntensity,
    })
    background.update(time)

    renderer.clear(true, true, true)
    background.render(renderer)
    renderer.clearDepth()
    renderer.render(scene, camera)
  }

  async function init() {
    const textures = await preloadTextures(gallery)
    if (disposed) return

    gallery.setPreloadedTextures(textures)
    await gallery.init(scene)
    background.init()
    label.init()
    scroll.init()
    trailController.init(scene, camera)
    resize()

    animationFrameId = requestAnimationFrame(tick)
  }

  function dispose() {
    disposed = true
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }

    gallery.dispose()
    background.dispose()
    label.dispose()
    scroll.dispose()
    trailController.dispose()
    renderer.dispose()
  }

  function setActive(active) {
    paused = !active
    if (active && !disposed && animationFrameId === null) {
      animationFrameId = requestAnimationFrame(tick)
    }
  }

  const readyPromise = init().catch((error) => {
    console.error("Gallery experience failed to initialize", error)
  })

  return { resize, dispose, readyPromise, setActive }
}

export { createGalleryExperience }
