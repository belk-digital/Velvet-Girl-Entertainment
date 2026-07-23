"use client";

import Link from "next/link";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/gallery/img1.jpg",
  "/images/gallery/img2.jpg",
  "/images/gallery/img3.jpg",
  "/images/gallery/img4.png",
  "/images/gallery/img5.jpg"
];

export default function ShowcaseGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollContentRef.current || !scrollWrapperRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Horizontal Scroll Animation for Desktop
      const scrollWidth = scrollContentRef.current!.scrollWidth;
      
      gsap.to(scrollContentRef.current, {
        x: () => -(scrollWidth - window.innerWidth + 64), // 64px for padding right
        ease: "none",
        scrollTrigger: {
          trigger: scrollWrapperRef.current,
          start: "center center",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1, // Smooth scrubbing
          invalidateOnRefresh: true, // Recalculates on resize
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black relative py-12 md:py-20 font-sans border-t border-white/10 overflow-hidden">
      
      {/* Top Text Section (Left Aligned Heading, Right Aligned Text) */}
      <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 pb-16 md:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        
        {/* Left: Stacked 3D Heading */}
        <div className="relative shrink-0 pb-6 sm:pb-10 md:pb-12">
          <h2 className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-[#f90066] leading-[0.9] tracking-tighter relative z-30">
            GALLERY
          </h2>
          <h2 
            className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-3 sm:top-5 md:top-6 left-0 z-20"
            style={{ WebkitTextStroke: '2px #f90066' }}
            aria-hidden="true"
          >
            GALLERY
          </h2>
          <h2 
            className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-6 sm:top-10 md:top-12 left-0 z-10"
            style={{ WebkitTextStroke: '2px #f90066', opacity: 0.4 }}
            aria-hidden="true"
          >
            GALLERY
          </h2>
        </div>

        {/* Right: Subheading Text */}
        <div className="max-w-lg lg:text-right relative z-30 pb-2 flex flex-col items-start lg:items-end gap-6">
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
            Welcome to our exclusive gallery. Take a look behind the scenes and explore a curated collection of our finest moments. Browse through these stunning visuals to get a true taste of the unforgettable experiences <span className="text-[#f90066] font-bold">Velvet Girls</span> brings to every event.
          </p>
        </div>
      </div>

      {/* Middle Gallery Section with Horizontal Scroll */}
      <div ref={scrollWrapperRef} className="w-full relative py-10 md:py-20 flex items-center min-h-[60vh]">
        
        {/* The Outline Text (Fixed behind scrolling images) */}
        <div className="absolute top-4 md:top-12 left-1/2 -translate-x-1/2 w-full px-4 z-0 pointer-events-none flex justify-center overflow-hidden">
          <h1 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-black uppercase text-transparent tracking-wider whitespace-nowrap opacity-80"
            style={{ WebkitTextStroke: '2px #f90066' }}
          >
            VELVET // GALLERY
          </h1>
        </div>

        {/* Scrolling Images Container */}
        <div className="w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <div ref={scrollContentRef} className="relative z-10 flex gap-6 lg:gap-10 px-8 md:px-8 w-max pb-8 md:pb-0 pt-4 md:pt-0">
            {images.map((src, idx) => (
              <div key={idx} className="snap-center relative w-[80vw] sm:w-[450px] md:w-[550px] aspect-[4/3] group overflow-hidden cursor-pointer shrink-0 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none" 
                />
                
                {/* Special Overlay for the Last Image */}
                {idx === images.length - 1 && (
                  <>
                    <div className="absolute inset-0 bg-[#f90066] mix-blend-multiply opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <div className="relative z-20 flex flex-col items-center justify-center text-center">
                      <span className="text-white text-3xl md:text-5xl font-black uppercase tracking-widest drop-shadow-lg">
                        View Full
                      </span>
                      <span className="text-white text-3xl md:text-5xl font-black uppercase tracking-widest drop-shadow-lg mt-2">
                        Gallery
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Control Section */}
      <div className="w-full max-w-[1800px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-12 pb-8 gap-8">
        
        <div className="flex items-center gap-6 self-start md:self-auto w-full md:w-auto">
          <button className="bg-[#f90066] text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:bg-white hover:text-black transition-colors shrink-0">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>
          <span className="text-white/60 tracking-[0.2em] text-xs md:text-sm font-medium">VELVET GIRLS</span>
        </div>

        <div className="flex-1 w-full max-w-lg items-center px-4 hidden md:flex">
          <div className="h-[2px] bg-white/10 w-full relative">
            <div className="absolute top-0 left-0 h-full bg-white/70 w-1/3 transition-all duration-500"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 self-end md:self-auto">
          <span className="text-white/60 tracking-[0.2em] text-xs md:text-sm font-medium">{new Date().getFullYear()}</span>
          <button className="border-2 border-white/20 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-colors shrink-0">
            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

      </div>

    </section>
  );
}
