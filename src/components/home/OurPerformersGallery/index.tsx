"use client";

import { useEffect, useRef } from "react";
import { createGalleryExperience } from "./engine/createGalleryExperience";
import { galleryPlaneData } from "./engine/galleryData";

const PLANE_COUNT = galleryPlaneData.length;

export default function OurPerformersGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !container || !canvas) return;

    const getScrollProgress = () => {
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / total));
    };

    const experience = createGalleryExperience({ canvas, container, getScrollProgress });

    // Only render while the section is on/near screen.
    const io = new IntersectionObserver(
      (entries) => experience.setActive?.(entries[0]?.isIntersecting ?? false),
      { rootMargin: "200px 0px" }
    );
    io.observe(wrapper);

    const handleResize = () => experience.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", handleResize);
      experience.dispose();
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[120rem] px-6 pt-16 pb-10 text-center sm:pt-24">
        <p className="tracking-caps mb-3 font-body text-xs font-semibold text-velvet-pink">
          OUR PERFORMERS
        </p>
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
          Step into their world
        </h2>
        <p className="mt-4 font-body text-sm text-white/60 sm:text-base">
          Scroll to move through the gallery — every performer sets her own mood.
        </p>
      </div>

      <div
        ref={wrapperRef}
        style={{ height: `${PLANE_COUNT * 100}vh` }}
        className="relative w-full"
      >
        <div
          ref={containerRef}
          className="sticky top-0 h-screen w-full overflow-hidden touch-pan-y"
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
