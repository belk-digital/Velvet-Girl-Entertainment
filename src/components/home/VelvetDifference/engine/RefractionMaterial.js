import { ShaderMaterial, Vector3 } from "three";

// Samples the rendered scene (envMap) through the diamond, bending rays using
// the front + back normals for a faux multi-side refraction. Ported from the
// the-substance demo.
export default class RefractionMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: `varying vec3 worldNormal;
      varying vec3 viewDirection;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.);
        vec4 transformedPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;
        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,
      fragmentShader: `uniform sampler2D envMap;
      uniform sampler2D backfaceMap;
      uniform vec2 resolution;
      uniform vec3 uTint;
      uniform vec3 uEdge;
      varying vec3 worldNormal;
      varying vec3 viewDirection;
      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);
      }
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;
        // Refract the scene behind the gem, then tint it crystal blue so it
        // reads as a real diamond instead of the near-black background.
        vec3 refr = texture2D(envMap, uv + refract(viewDirection, normal, 1.0/1.5).xy).rgb;
        vec3 base = uTint + refr * 0.4;
        float fres = fresnelFunc(viewDirection, normal);
        gl_FragColor = vec4(mix(base, uEdge, fres), 1.0);
      }`,
      uniforms: {
        envMap: { value: options.envMap },
        backfaceMap: { value: options.backfaceMap },
        resolution: { value: options.resolution },
        // raw sRGB (this shader writes gl_FragColor with no output-encoding)
        uTint: { value: new Vector3(0.24, 0.62, 0.98) }, // crystal blue body
        uEdge: { value: new Vector3(0.85, 0.96, 1.0) }, // bright sparkle edges
      },
    });
  }
}
