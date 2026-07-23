"use client";

import Link from "next/link";
import { cities, featuredCitySlugs } from "@/data/cities";

const homeCities = featuredCitySlugs
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function CitiesSection() {
  return (
    <section className="w-full bg-[#f90066] py-20 md:py-32 font-sans border-t border-black/10 overflow-hidden flex flex-col items-center">
      
      <div className="mb-12 md:mb-16 text-center px-4 relative z-10">
         <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">
           Now Booking in <span className="text-white">{homeCities.length} Cities</span>
         </h2>
         <p className="text-black/80 max-w-lg mx-auto font-medium">
           We're onboarding new markets regularly — more cities coming soon.
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
        
        @keyframes spin3d-cities {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      `}} />
      
      {/* 3D Carousel Wrapper */}
      <div 
        className="cities-carousel relative w-full h-[250px] md:h-[400px] flex items-center justify-center pointer-events-none" 
        style={{ 
          perspective: '1200px',
          maskImage: 'linear-gradient(to right, transparent, #f90066 15%, #f90066 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #f90066 15%, #f90066 85%, transparent)'
        }}
      >
        
        {/* The rotating container */}
        <div 
          className="relative w-full h-full flex items-center justify-center pointer-events-auto" 
          style={{ transformStyle: 'preserve-3d', animation: 'spin3d-cities 25s linear infinite' }}
        >
          {homeCities.map((city, i) => {
            const angle = (360 / homeCities.length) * i;
            return (
              <div
                key={city.slug}
                className="absolute flex items-center justify-center origin-center"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`,
                  backfaceVisibility: 'visible',
                }}
              >
                <Link
                  href={`/cities/${city.stateSlug}/${city.slug}`}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase whitespace-nowrap text-black hover:text-white transition-colors"
                  style={{
                    // Adding a slight text stroke to make the overlapping text pop
                    WebkitTextStroke: '1px rgba(255,255,255,0.2)'
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
          className="inline-flex items-center gap-2 border border-black/20 bg-black px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-black hover:bg-black/90"
        >
          VIEW ALL CITIES
        </Link>
      </div>
      
    </section>
  );
}
