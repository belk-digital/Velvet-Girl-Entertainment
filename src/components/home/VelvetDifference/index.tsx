"use client";

import { useEffect, useRef } from "react";
import { createDifferenceExperience } from "./engine/createDifferenceExperience";
import { config, intro, paragraphs, outro } from "./engine/content";

type OverlayPos = { x: number; y: number; visible: boolean };

export default function VelvetDifference() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = stickyRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !container || !canvas) return;

    const getScrollProgress = () => {
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / total));
    };

    const experience = createDifferenceExperience({ canvas, container, getScrollProgress });
    const overlays = experience.overlays as Record<string, OverlayPos>;

    let raf = 0;
    let active = false;
    const applyOverlays = () => {
      if (!active) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(applyOverlays);
      for (const id in overlayRefs.current) {
        const el = overlayRefs.current[id];
        const pos = overlays[id];
        if (!el || !pos) continue;
        const extra = el.dataset.extra || "";
        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) ${extra}`;
        el.style.opacity = pos.visible ? "1" : "0";
      }
    };

    // Only render / update overlays while the section is on or near the
    // viewport — the WebGL loop does a heavy 4-pass render every frame.
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        if (visible === active) return;
        active = visible;
        experience.setActive(visible);
        if (visible && raf === 0) raf = requestAnimationFrame(applyOverlays);
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(wrapper);

    const onResize = () => experience.resize();
    window.addEventListener("resize", onResize);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      experience.dispose();
    };
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    overlayRefs.current[id] = el;
  };

  const overlayBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    willChange: "transform, opacity",
    pointerEvents: "none",
    transition: "opacity 200ms ease",
  };

  return (
    <section className="relative bg-[#050506]">
      <div ref={wrapperRef} style={{ height: `${config.pages * 100}vh` }} className="relative w-full">
        <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

          {/* HTML caption overlays, positioned to 3D anchors each frame */}
          <div
            ref={setRef("eyebrow")}
            style={{
              ...overlayBase,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "13px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {intro.eyebrow}
          </div>

          <div
            ref={setRef("intro-text")}
            style={{ ...overlayBase, width: "min(26vw, 380px)" }}
            className="font-body text-sm leading-relaxed text-white/70"
          >
            {intro.text}
          </div>

          {paragraphs.map((p) => (
            <div
              key={p.id}
              ref={setRef(p.id)}
              style={{
                ...overlayBase,
                width: "min(24vw, 340px)",
                textAlign: p.offset % 2 ? "left" : "right",
                transform: "translate3d(0,0,0)",
              }}
              className="font-body text-sm leading-relaxed text-white/70"
            >
              {p.text}
            </div>
          ))}

          <div
            ref={setRef("outro")}
            data-extra="translate(-50%, 0)"
            style={{
              ...overlayBase,
              color: "#ffffff",
              fontSize: "clamp(1.6rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: "0.01em",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {outro.text}
          </div>
        </div>
      </div>
    </section>
  );
}
