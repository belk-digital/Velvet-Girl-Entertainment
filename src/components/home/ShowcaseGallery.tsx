"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultImages = [
  "/images/gallery/img1.jpg",
  "/images/gallery/img2.jpg",
  "/images/gallery/img3.jpg",
  "/images/gallery/img4.png",
  "/images/gallery/img5.jpg"
];

const DEFAULT_EYEBROW = "GALLERY";
const DEFAULT_TITLE = "Real Moments, No Filters";

export default function ShowcaseGallery({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  sectionId,
  images = defaultImages,
  linkHref = "/gallery",
}: {
  eyebrow?: string;
  title?: string;
  sectionId?: string | null;
  images?: string[];
  linkHref?: string;
}) {
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
    <section ref={containerRef} className="w-full bg-[#380605] text-white relative py-12 md:py-20 font-sans border-t border-white/10 overflow-hidden">
      
      {/* Top Header Section */}
      <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p
            data-cms-section={sectionId ?? undefined}
            data-cms-type="gallery"
            data-cms-field="eyebrow"
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#C5A880] mb-3"
          >
            {eyebrow}
          </p>
          <h2
            data-cms-section={sectionId ?? undefined}
            data-cms-type="gallery"
            data-cms-field="title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-tight mb-4"
          >
            {title}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-xl font-body">
            Welcome to our exclusive gallery. Take a look behind the scenes and explore a curated collection of our finest moments.
          </p>
        </div>
      </div>

      {/* Middle Gallery Section with Horizontal Scroll */}
      <div ref={scrollWrapperRef} className="w-full relative py-10 md:py-20 flex items-center min-h-[60vh]">

        {/* Scrolling Images Container */}
        <div className="w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <div ref={scrollContentRef} className="relative z-10 flex gap-6 lg:gap-10 px-8 md:px-8 w-max pb-8 md:pb-0 pt-4 md:pt-0">
            {images.map((src, idx) => {
              const isLast = idx === images.length - 1;
              const cardContent = (
                <>
                  <Image
                    src={src}
                    alt={`Real, unedited moment from a Velvet Girl Entertainment VIP event, photo ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 450px, 550px"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none"
                  />
                  
                  {/* Special Overlay for the Last Image */}
                  {isLast && (
                    <>
                      <div className="absolute inset-0 bg-black/75 group-hover:bg-black/90 transition-colors duration-500"></div>
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
                </>
              );

              return isLast ? (
                <Link
                  key={idx}
                  href={linkHref}
                  className="snap-center relative w-[80vw] sm:w-[450px] md:w-[550px] aspect-[4/3] group overflow-hidden cursor-pointer shrink-0 flex items-center justify-center"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={idx}
                  className="snap-center relative w-[80vw] sm:w-[450px] md:w-[550px] aspect-[4/3] group overflow-hidden cursor-pointer shrink-0 flex items-center justify-center"
                >
                  {cardContent}
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Bottom Control Section */}
      <div className="w-full max-w-[1800px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-12 pb-8 gap-8">
        
        <div className="flex items-center gap-6 self-start md:self-auto w-full md:w-auto">
          <button className="bg-white text-[#380605] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:bg-black hover:text-white transition-colors shrink-0">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>
          <span className="text-white/80 tracking-[0.2em] text-xs md:text-sm font-medium">VELVET GIRL</span>
        </div>

        <div className="flex-1 w-full max-w-lg items-center px-4 hidden md:flex">
          <div className="h-[2px] bg-white/20 w-full relative">
            <div className="absolute top-0 left-0 h-full bg-white/80 w-1/3 transition-all duration-500"></div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-6 self-end md:self-auto">
          <span className="text-white/80 tracking-[0.2em] text-xs md:text-sm font-medium">{new Date().getFullYear()}</span>
          <Link
            href={linkHref}
            className="border-2 border-white/30 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-black hover:text-[#380605] hover:border-white transition-colors shrink-0"
            aria-label="View full gallery"
          >
            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>


      </div>

    </section>
  );
}
