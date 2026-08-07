"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cities, featuredCitySlugs } from "@/data/cities";

const homeCities = featuredCitySlugs
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const SPIN_DURATION_MS = 25000;
const MAX_BLUR_PX = 5;

const DEFAULT_EYEBROW = "MARKETS WE SERVE";
const DEFAULT_DESCRIPTION = "We're onboarding new markets regularly — more cities coming soon.";

export default function CitiesSection({
  eyebrow = DEFAULT_EYEBROW,
  description = DEFAULT_DESCRIPTION,
  sectionId,
}: {
  eyebrow?: string;
  description?: string;
  sectionId?: string | null;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const baseRotation = -((elapsed / SPIN_DURATION_MS) * 360) % 360;

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${baseRotation}deg)`;
      }

      homeCities.forEach((city, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        const itemAngle = (360 / homeCities.length) * i;
        let current = (itemAngle + baseRotation) % 360;
        if (current > 180) current -= 360;
        if (current < -180) current += 360;

        // frontFactor: 1 = facing the viewer, -1 = facing directly away
        const frontFactor = Math.cos((current * Math.PI) / 180);
        const blur = ((1 - frontFactor) / 2) * MAX_BLUR_PX;
        const opacity = 0.55 + 0.45 * ((frontFactor + 1) / 2);

        el.style.filter = `blur(${blur.toFixed(2)}px)`;
        el.style.opacity = `${opacity.toFixed(2)}`;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full bg-[#740107] py-20 md:py-32 font-sans border-t border-black/10 overflow-hidden flex flex-col items-center">
      
      <div className="mb-12 md:mb-16 text-center px-4 relative z-10">
        <p
          data-cms-section={sectionId ?? undefined}
          data-cms-type="cities"
          data-cms-field="eyebrow"
          className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3"
        >
          {eyebrow}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-tight mb-4">
          Now Booking in{" "}
          <span className="text-white">
            {homeCities.length} Cities
          </span>
        </h2>
        <p
          data-cms-section={sectionId ?? undefined}
          data-cms-type="cities"
          data-cms-field="description"
          className="text-white/80 max-w-lg mx-auto font-body"
        >
          {description}
        </p>
      </div>

      {/* 3D Carousel Styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .cities-carousel {
          --carousel-radius: 300px;
        }
        @media (min-width: 768px) {
          .cities-carousel { --carousel-radius: 400px; }
        }
        @media (min-width: 1024px) {
          .cities-carousel { --carousel-radius: 550px; }
        }
        @media (min-width: 1280px) {
          .cities-carousel { --carousel-radius: 700px; }
        }
      `}} />

      {/* 3D Carousel Wrapper */}
      <div
        className="cities-carousel relative w-full h-[250px] md:h-[400px] flex items-center justify-center pointer-events-none"
        style={{
          perspective: '1200px',
          maskImage: 'linear-gradient(to right, transparent, #740107 15%, #740107 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #740107 15%, #740107 85%, transparent)'
        }}
      >

        {/* The rotating container (rotation driven via rAF in useEffect) */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center pointer-events-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {homeCities.map((city, i) => {
            const angle = (360 / homeCities.length) * i;
            return (
              <div
                key={city.slug}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="absolute flex items-center justify-center origin-center"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`,
                  backfaceVisibility: 'visible',
                }}
              >
                <Link
                  href={`/cities/${city.stateSlug}/${city.slug}`}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase whitespace-nowrap text-white hover:text-white/70 transition-colors"
                  style={{
                    textShadow: '0 2px 12px rgba(0,0,0,0.35)',
                  }}
                >
                  {city.name}
                </Link>
              </div>
            );
          })}
        </div>

      </div>

      <div className="mt-12 md:mt-16 text-center z-10 relative">
        <Link
          href="/cities"
          className="inline-flex items-center gap-2 border border-white/20 bg-white px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:border-white hover:bg-white/90 shadow-lg"
        >
          VIEW ALL CITIES
        </Link>
      </div>
      
    </section>
  );
}
