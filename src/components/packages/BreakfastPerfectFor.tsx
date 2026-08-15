"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BreakfastPerfectForProps {
  items: string[];
}

export default function BreakfastPerfectFor({ items }: BreakfastPerfectForProps) {
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
    <section ref={container} className="w-full bg-black">
      <div className="max-w-[120rem] mx-auto bg-[#5C0005] py-20 lg:py-32 px-6 lg:px-12 rounded-none">
      {/* Header Area */}
      <div ref={headerRef} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3.5 h-3.5 rounded-full border border-white/50"></div>
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase">
              PERFECT FOR
            </p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF7F2] uppercase tracking-wide">
            GREAT FIT FOR
          </h2>
        </div>
        <div className="max-w-xs md:text-right">
          <p className="text-white/60 text-[10px] md:text-xs font-bold tracking-wider uppercase leading-relaxed">
            Tailored morning experiences to kickstart any celebration.
          </p>
        </div>
      </div>

      {/* List Area */}
      <div className="max-w-6xl mx-auto">
        <ul ref={listRef} className="flex flex-col border-b border-white/20">
          {visibleItems.map((item, index) => {
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <li 
                key={index} 
                className="flex items-center justify-between py-6 md:py-8 lg:py-10 border-t border-white/20 px-2 md:px-6 -mx-2 md:-mx-6"
              >
                <div className="flex items-center gap-6 md:gap-12 lg:gap-16">
                  <span className="text-white/50 text-xs md:text-sm font-mono">
                    {num}
                  </span>
                  <span className="text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wide">
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
              className="text-xs font-bold uppercase tracking-widest text-[#5C0005] bg-white hover:bg-black transition-colors py-3 px-8 rounded-full shadow-md"
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
