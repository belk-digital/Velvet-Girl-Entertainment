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
      {/* Custom Left-Aligned Stacked Heading */}
      <div className="mb-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 pt-16 sm:pt-24">
        <div className="relative">
          <h2 className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-[#f90066] leading-[0.9] tracking-tighter relative z-30">
            OUR PERFORMERS
          </h2>
          <h2 
            className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-3 sm:top-5 md:top-6 left-0 z-20"
            style={{ WebkitTextStroke: '2px #f90066' }}
            aria-hidden="true"
          >
            OUR PERFORMERS
          </h2>
          <h2 
            className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-6 sm:top-10 md:top-12 left-0 z-10"
            style={{ WebkitTextStroke: '2px #f90066', opacity: 0.4 }}
            aria-hidden="true"
          >
            OUR PERFORMERS
          </h2>
        </div>
        <p className="mt-12 md:mt-24 font-body text-sm text-white/60 sm:text-base max-w-lg relative z-30">
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
