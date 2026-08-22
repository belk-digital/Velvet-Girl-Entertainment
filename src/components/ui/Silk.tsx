/* eslint-disable react/no-unknown-property */
"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { forwardRef, useRef, useMemo, useLayoutEffect, useEffect, useState } from 'react';
import { Color } from 'three';

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace('#', '');
  return [
    parseInt(cleanHex.slice(0, 2), 16) / 255,
    parseInt(cleanHex.slice(2, 4), 16) / 255,
    parseInt(cleanHex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;
uniform float uAspect;

float noise(vec2 texCoord) {
  return fract(sin(dot(texCoord, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

vec3 getSilkPalette(float t, vec3 baseColor) {
  float p = clamp(t, 0.0, 1.0);
  p = pow(p, 1.35); 

  // Derive shades by darkening the base color and optionally adding a slight blue/cool tint in shadows
  vec3 shadowTint = vec3(baseColor.r * 0.8, baseColor.g, baseColor.b * 1.2); 
  
  vec3 c1 = shadowTint * 0.05;         // Deepest shadow
  vec3 c2 = shadowTint * 0.15;         // Dark shadow
  vec3 c3 = shadowTint * 0.35;         // Mid shadow
  vec3 c4 = baseColor * 0.60;          // Midtone
  vec3 c5 = baseColor * 0.85;          // Highlight
  vec3 c6 = mix(baseColor, vec3(1.0), 0.1); // Peak highlight (slightly brightened base)

  if (p < 0.20) {
    return mix(c1, c2, p * 5.0);
  } else if (p < 0.45) {
    return mix(c2, c3, (p - 0.20) * 4.0);
  } else if (p < 0.70) {
    return mix(c3, c4, (p - 0.45) * 4.0);
  } else if (p < 0.90) {
    return mix(c4, c5, (p - 0.70) * 5.0);
  } else {
    return mix(c5, c6, (p - 0.90) * 10.0);
  }
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  aspectUv   = vec2((vUv.x - 0.5) * uAspect + 0.5, vUv.y);
  vec2  uv         = rotateUvs(aspectUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  float normP = clamp((pattern - 0.2) / 0.8, 0.0, 1.0);
  vec3 paletteColor = getSilkPalette(normP, uColor);

  vec4 col = vec4(paletteColor, 1.0) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef<any, any>(function SilkPlane({ uniforms, isVisible }, ref: any) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref && "current" in ref && ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
      ref.current.material.uniforms.uAspect.value = viewport.width / viewport.height;
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    if (!isVisible) return;
    if (ref && "current" in ref && ref.current) {
      const clampedDelta = Math.min(delta, 0.1);
      ref.current.material.uniforms.uTime.value += 0.1 * clampedDelta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
});
SilkPlane.displayName = 'SilkPlane';

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk = ({ speed = 5, scale = 1, color = '#7B7481', noiseIntensity = 1.5, rotation = 0 }: SilkProps) => {
  const meshRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
      uAspect: { value: 1 }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uSpeed.value = speed;
    uniforms.uScale.value = scale;
    uniforms.uNoiseIntensity.value = noiseIntensity;
    uniforms.uColor.value.setRGB(...hexToNormalizedRGB(color));
    uniforms.uRotation.value = rotation;
  }, [speed, scale, noiseIntensity, color, rotation, uniforms]);

  // Pause animation updates when scrolled off-screen to eliminate CPU/GPU lag
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        dpr={1}
        frameloop={isVisible ? "always" : "never"}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          depth: false,
          stencil: false,
          alpha: false,
          preserveDrawingBuffer: false,
        }}
      >
        <SilkPlane ref={meshRef} uniforms={uniforms} isVisible={isVisible} />
      </Canvas>
    </div>
  );
};

export default Silk;
