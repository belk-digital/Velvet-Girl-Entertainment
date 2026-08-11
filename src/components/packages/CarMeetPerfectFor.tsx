"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CarMeetPerfectForProps {
  items: string[];
}

export default function CarMeetPerfectFor({ items }: CarMeetPerfectForProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const container = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const visibleItems = isExpanded ? items : items.slice(0, 3);

  useGSAP(() => {
    // Fade up header
    gsap.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    // Staggered fade up for list items
    gsap.from(listRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 75%",
      },
    });
  }, { scope: container, dependencies: [isExpanded] });

  return (
    <section ref={container} className="w-full bg-[#FAF7F2]">
      <div className="relative mx-auto max-w-[120rem] overflow-hidden px-6 py-20 lg:px-12 lg:py-32">
      <Image
        src="/images/event gallery/IMG_4361.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Header Area */}
      <div ref={headerRef} className="relative z-10 mx-auto mb-16 flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3.5 h-3.5 rounded-full border border-white/50 shadow-sm"></div>
            <p className="text-white/90 text-xs font-bold tracking-widest uppercase drop-shadow-md">
              PERFECT FOR
            </p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide drop-shadow-lg">
            GREAT FIT FOR
          </h2>
        </div>
        <div className="max-w-xs md:text-right">
          <p className="text-white/80 text-[10px] md:text-xs font-bold tracking-wider uppercase leading-relaxed drop-shadow-md">
            Tailored experiences, built for every automotive event.
          </p>
        </div>
      </div>

      {/* List Area */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <ul ref={listRef} className="flex flex-col border-b border-white/20">
          {visibleItems.map((item, index) => {
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <li 
                key={index} 
                className="flex items-center justify-between py-6 md:py-8 lg:py-10 border-t border-white/20 px-2 md:px-6 -mx-2 md:-mx-6 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:gap-12 lg:gap-16">
                  <span className="text-white/60 text-xs md:text-sm font-mono drop-shadow-sm">
                    {num}
                  </span>
                  <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wide drop-shadow-md">
                    {item}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {items.length > 3 && (
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-bold uppercase tracking-widest text-[#5C0005] bg-white hover:bg-[#FAF7F2] transition-colors py-3 px-8 rounded-full shadow-md"
            >
              {isExpanded ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
