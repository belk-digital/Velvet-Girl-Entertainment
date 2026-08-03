"use client";

import React from "react";
import Image from "next/image";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  {
    number: "500+",
    label:
      "Events booked across the East Coast with repeat clients nationwide.",
  },
  {
    number: "100%",
    label:
      "Real photos verified — the girl in the photo is the girl at your door.",
  },
  {
    number: "24/7",
    label:
      "Dedicated booking concierges available day and night to assist you.",
  },
  {
    number: "50+",
    label:
      "Cities and prime destinations served with elite professional standards.",
  },
];

export default function VelvetDifference() {
  return (
    <section
      id="velvet-difference"
      className="relative w-full min-h-screen overflow-hidden py-24 sm:py-32 flex items-center bg-black"
    >
      {/* Full Section Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/velvet-difference/real-results.jpg"
          alt="Real Results Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-[120rem] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/70">
                THE VELVET DIFFERENCE
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-tight mb-6">
              Proven Results,
              <br />
              Better Outcomes
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg font-body">
              Transforming your events through verified performers, professional
              booking concierges, and 100% real photos that guarantee an
              unforgettable experience every single time.
            </p>
          </div>

          {/* Right Column: 2x2 Frosted Glass Stat Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="relative bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-sm overflow-hidden shadow-2xl transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30"
                >
                  {/* Corner Rivet Dots */}
                  <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none" />

                  {/* Top Half: Number */}
                  <div className="p-6 sm:p-8 border-b border-white/15">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white block">
                      {stat.number}
                    </span>
                  </div>

                  {/* Bottom Half: Label */}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-body">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
