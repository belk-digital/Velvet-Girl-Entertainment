"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ─── constants ─────────────────────────────────────────────────────── */
const PINK   = "#FF007F";
const PINK2  = "rgba(255,0,127,";

/* ─── deterministic particle layout ────────────────────────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left:     8  + ((i * 67) % 84),
  bottom:   12 + ((i * 31) % 30),
  size:     1.2 + (i % 4) * 0.5,
  glow:     3   + (i % 5),
  delay:    (i  * 0.43) % 7,
  duration: 3.5 + (i % 6),
  xDrift:   -32 + (i % 7) * 11,
  rise:     50  + (i % 5) * 16,
}));

export default function NeonStage() {
  const wrapRef     = useRef<HTMLDivElement>(null);

  /* ring layers */
  const coreRef     = useRef<HTMLDivElement>(null);
  const outerGlRef  = useRef<HTMLDivElement>(null);
  const ambientRef  = useRef<HTMLDivElement>(null);

  /* ripples */
  const rip1Ref     = useRef<HTMLDivElement>(null);
  const rip2Ref     = useRef<HTMLDivElement>(null);

  /* floor / spotlight */
  const spotRef     = useRef<HTMLDivElement>(null);
  const reflRef     = useRef<HTMLDivElement>(null);
  const bloomRef    = useRef<HTMLDivElement>(null);

  /* particles */
  const partRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── RING BREATHING (every 2.5s, glow 100→118→100%) ─────────── */
      const breathTL = gsap.timeline({ repeat: -1 });
      breathTL
        .to([coreRef.current, outerGlRef.current], {
          boxShadow: [
            `0 0 70px 22px ${PINK}`,
            `0 0 140px 60px ${PINK2}0.50)`,
            `inset 0 0 30px ${PINK2}0.30)`,
          ].join(", "),
          duration: 2.5,
          ease: "sine.inOut",
          stagger: 0,
        })
        .to([coreRef.current, outerGlRef.current], {
          boxShadow: [
            `0 0 40px 10px ${PINK}`,
            `0 0 90px 32px ${PINK2}0.27)`,
            `inset 0 0 14px ${PINK2}0.13)`,
          ].join(", "),
          duration: 2.5,
          ease: "sine.inOut",
          stagger: 0,
        });

      /* ── SPOTLIGHT BREATHE ───────────────────────────────────────── */
      gsap.to(spotRef.current, {
        opacity: 0.26,
        scale: 1.07,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── LENS BLOOM PULSE ────────────────────────────────────────── */
      gsap.to(bloomRef.current, {
        opacity: 0.22,
        scale: 1.12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });

      /* ── RIPPLE HELPER ───────────────────────────────────────────── */
      const fireRipple = (
        el: HTMLDivElement | null,
        cfg: { delay: number; opacity0: number; scale1: number; blur1: number; dur: number; pause: number }
      ) => {
        if (!el) return;
        const loop = () => {
          const intensity = 0.82 + Math.random() * 0.36;
          gsap.fromTo(el,
            { scale: 0.6, opacity: cfg.opacity0 * intensity, filter: "blur(0px)" },
            {
              scale: cfg.scale1,
              opacity: 0,
              filter: `blur(${cfg.blur1}px)`,
              duration: cfg.dur,
              ease: "power2.out",
              onComplete: () => gsap.delayedCall(cfg.pause, loop),
            }
          );
        };
        gsap.delayedCall(cfg.delay, loop);
      };

      /* primary ripple */
      fireRipple(rip1Ref.current, { delay: 0.2, opacity0: 0.60, scale1: 3.0, blur1: 24, dur: 2.2, pause: 1.8 });
      /* secondary ripple — 600ms later, softer */
      fireRipple(rip2Ref.current, { delay: 0.8, opacity0: 0.30, scale1: 3.5, blur1: 36, dur: 2.8, pause: 1.2 });

      /* ── REFLECTION BREATHE ──────────────────────────────────────── */
      gsap.to(reflRef.current, {
        opacity: 0.38,
        scaleX: 1.04,
        duration: 3.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.0,
      });

      /* ── PARTICLES ───────────────────────────────────────────────── */
      PARTICLES.forEach((pd, i) => {
        const el = partRefs.current[i];
        if (!el) return;
        gsap.set(el, { opacity: 0, y: 0, x: 0 });
        const loop = () => {
          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(el, { y: 0, x: 0 });
              gsap.delayedCall(Math.random() * 2, loop);
            },
          });
          tl.to(el, { opacity: 0.06 + Math.random() * 0.14, duration: 0.4, ease: "power1.in" })
            .to(el, { y: -pd.rise, x: pd.xDrift, duration: pd.duration, ease: "power1.inOut" }, "<")
            .to(el, { opacity: 0, duration: 0.2, ease: "power2.in", yoyo: true, repeat: 1 }, `-=${pd.duration * 0.5}`)
            .to(el, { opacity: 0, duration: 0.9, ease: "power2.in" }, `-=${pd.duration * 0.28}`);
        };
        gsap.delayedCall(pd.delay, loop);
      });

    }, wrapRef);
    return () => ctx.revert();
  }, []);

  /* ─── render ───────────────────────────────────────────────────────── */
  return (
    <div
      ref={wrapRef}
      aria-hidden
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "44px",
        width: "800px",
        height: "320px",
        pointerEvents: "none",
        zIndex: 4,
      }}
    >

      {/* ── SOFT CENTER SPOTLIGHT ──────────────────────────────────── */}
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          left: "50%", top: "22%",
          transform: "translateX(-50%)",
          width: "520px", height: "260px",
          background: `radial-gradient(ellipse at center, ${PINK2}0.16) 0%, transparent 65%)`,
          borderRadius: "50%",
          filter: "blur(22px)",
          opacity: 0.16,
        }}
      />

      {/* ── LENS BLOOM (cinematic soft circle) ─────────────────────── */}
      <div
        ref={bloomRef}
        style={{
          position: "absolute",
          left: "50%", top: "26%",
          transform: "translateX(-50%)",
          width: "400px", height: "220px",
          background: `radial-gradient(ellipse at center, ${PINK2}0.09) 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(30px)",
          opacity: 0.13,
        }}
      />

      {/* ── 3-D FLOOR RING (perspective projection) ─────────────────── */}
      <div style={{
        position: "absolute", inset: 0,
        perspective: "480px",
        perspectiveOrigin: "50% 8%",
      }}>
        <div style={{
          position: "absolute",
          left: "50%", top: "58%",
          width: "640px", height: "180px",
          transform: "translateX(-50%) rotateX(72deg)",
          transformOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}>

          {/* LAYER 4 – Center ambient fill */}
          <div
            ref={ambientRef}
            style={{
              position: "absolute",
              inset: "14%",
              background: `radial-gradient(ellipse at center, ${PINK2}0.10) 0%, transparent 85%)`,
              borderRadius: "50%",
            }}
          />

          {/* LAYER 2 – Outer soft bloom (extends 120-180px beyond ring) */}
          <div
            ref={outerGlRef}
            style={{
              position: "absolute",
              inset: "-110px",
              background: `radial-gradient(ellipse at center, transparent 38%, ${PINK2}0.20) 62%, ${PINK2}0.08) 80%, transparent 100%)`,
              borderRadius: "50%",
              filter: "blur(28px)",
            }}
          />

          {/* LAYER 1 – Neon core ring */}
          <div
            ref={coreRef}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2.5px solid #FF007F",
              boxShadow: [
                `0 0 42px 12px ${PINK}`,
                `0 0 100px 38px ${PINK2}0.32)`,
                `inset 0 0 20px ${PINK2}0.20)`,
              ].join(", "),
            }}
          />

          {/* LAYER 3 – Inner highlight (glossy specular) */}
          <div style={{
            position: "absolute",
            inset: "32%",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.14)",
            filter: "blur(1.5px)",
          }} />

          {/* CHROMATIC ABERRATION — subtle color shift on ring edges */}
          <div style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "50%",
            border: "1px solid rgba(0,180,255,0.12)",
            filter: "blur(2px)",
          }} />
          <div style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "50%",
            border: "1px solid rgba(255,60,180,0.12)",
            filter: "blur(2px)",
          }} />

          {/* LAYER 6 – Ripple 1 (primary) */}
          <div
            ref={rip1Ref}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `2px solid ${PINK}`,
              boxShadow: `0 0 24px 8px ${PINK2}0.58), inset 0 0 10px ${PINK2}0.2)`,
              opacity: 0,
            }}
          />

          {/* LAYER 6 – Ripple 2 (secondary, softer) */}
          <div
            ref={rip2Ref}
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              border: `1.5px solid ${PINK2}0.40)`,
              boxShadow: `0 0 16px 5px ${PINK2}0.28)`,
              opacity: 0,
            }}
          />

        </div>
      </div>

      {/* ── LAYER 5 – GROUND REFLECTION ────────────────────────────── */}
      <div
        ref={reflRef}
        style={{
          position: "absolute",
          left: "50%", top: "74%",
          transform: "translateX(-50%) scaleY(-0.28)",
          transformOrigin: "50% 0%",
          width: "620px", height: "170px",
          borderRadius: "50%",
          border: `1.5px solid ${PINK2}0.22)`,
          boxShadow: [
            `0 0 55px 18px ${PINK2}0.14)`,
            `inset 0 0 30px ${PINK2}0.06)`,
          ].join(", "),
          filter: "blur(10px)",
          opacity: 0.28,
        }}
      />

      {/* Faint radial ground wash */}
      <div style={{
        position: "absolute",
        left: "50%", top: "72%",
        transform: "translateX(-50%)",
        width: "720px", height: "120px",
        background: `radial-gradient(ellipse at center, ${PINK2}0.10) 0%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(18px)",
        opacity: 0.4,
      }} />

      {/* ── PARTICLES ──────────────────────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {PARTICLES.map((pd, i) => (
          <div
            key={i}
            ref={el => { partRefs.current[i] = el; }}
            style={{
              position: "absolute",
              left: `${pd.left}%`,
              bottom: `${pd.bottom}%`,
              width: `${pd.size}px`,
              height: `${pd.size}px`,
              borderRadius: "50%",
              backgroundColor: PINK,
              opacity: 0,
              boxShadow: `0 0 ${pd.glow}px ${pd.glow * 1.5}px ${PINK}`,
            }}
          />
        ))}
      </div>

    </div>
  );
}
