import { ShaderMaterial, Vector3 } from "three";

// Chromatic-aberration + vertical-bend material, ported verbatim from the
// Codrops "the-substance" demo (Paul Henschel). `shift` is driven by scroll
// velocity, `scale` by scroll position — together they smear the RGB channels
// and curve the plane as you scroll.
export default class CustomMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `uniform float scale;
      uniform float shift;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
      fragmentShader: `uniform sampler2D uTexture;
      uniform float hasTexture;
      uniform float shift;
      uniform float scale;
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float angle = 1.55;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(uTexture, p + offset);
        vec4 cga = texture2D(uTexture, p);
        vec4 cb = texture2D(uTexture, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
      }`,
      uniforms: {
        uTexture: { value: null },
        hasTexture: { value: 0 },
        scale: { value: 0 },
        shift: { value: 0 },
        opacity: { value: 1 },
        // vec3 (not THREE.Color) so the renderer's color-management doesn't
        // re-convert it — we upload linear values directly.
        color: { value: new Vector3(1, 1, 1) },
      },
    });
  }

  set scale(value) {
    this.uniforms.scale.value = value;
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set shift(value) {
    this.uniforms.shift.value = value;
  }
  get shift() {
    return this.uniforms.shift.value;
  }
  set map(value) {
    this.uniforms.hasTexture.value = value ? 1 : 0;
    this.uniforms.uTexture.value = value;
  }
  get map() {
    return this.uniforms.uTexture.value;
  }
  get color() {
    return this.uniforms.color.value;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(value) {
    if (this.uniforms) this.uniforms.opacity.value = value;
  }
}
