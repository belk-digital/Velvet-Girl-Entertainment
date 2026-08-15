"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PackageCardData {
  number: string;
  title: string;
  slug: string;
  image?: string;
  video?: string;
  description: string;
  minDancers: string;
}

const packageCards: PackageCardData[] = [
  {
    number: "01",
    title: "Car & Bike Meet",
    slug: "car-meet",
    video: "https://res.cloudinary.com/denskvdyt/video/upload/v1785953309/Car_meet_package_page_hn3yep.mov",
    description: "Rev up your engines with the ultimate car meet experience and stunning company.",
    minDancers: "2 DANCERS MINIMUM",
  },
  {
    number: "02",
    title: "Private Party",
    slug: "private-party",
    image: "/images/gallery/img1.jpg",
    description:
      "Exclusive, personalized and all about you. The ultimate private experience.",
    minDancers: "2 DANCERS MINIMUM",
  },
  {
    number: "03",
    title: "Bachelor Party",
    slug: "bachelor-party",
    image: "/images/services/bachelor.png",
    description:
      "Make his last night legendary with a party he'll never forget.",
    minDancers: "2 DANCERS MINIMUM",
  },
  {
    number: "04",
    title: "Boat / Pool Party",
    slug: "boat-pool-party",
    image: "/images/services/yacht.png",
    description:
      "Sun, water and stunning company. Let's make waves together.",
    minDancers: "2 DANCERS MINIMUM",
  },
  {
    number: "05",
    title: "Guys Night",
    slug: "guys-night",
    image: "/images/services/vip.png",
    description:
      "Round up the crew and we'll handle the rest.",
    minDancers: "2 DANCERS MINIMUM",
  },
];

const DEFAULT_EYEBROW = "PACKAGES";
const DEFAULT_TITLE = "Choose Your Experience";
const DEFAULT_DESCRIPTION =
  "From private gatherings to unforgettable nights out, our packages are designed to deliver the ultimate experience—tailored to your vibe.";

export default function PackagesSection({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  sectionId,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  sectionId?: string | null;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="w-full bg-black py-20 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p
              data-cms-section={sectionId ?? undefined}
              data-cms-type="packages"
              data-cms-field="eyebrow"
              className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#380605] mb-3"
            >
              {eyebrow}
            </p>
            <h2
              data-cms-section={sectionId ?? undefined}
              data-cms-type="packages"
              data-cms-field="title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-tight mb-4"
            >
              {title}
            </h2>
            <p
              data-cms-section={sectionId ?? undefined}
              data-cms-type="packages"
              data-cms-field="description"
              className="text-white/65 text-base md:text-lg max-w-xl font-body"
            >
              {description}
            </p>
          </div>

          <Link
            href="/packages"
            className="flex items-center gap-2 font-bold text-xs md:text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors group shrink-0"
          >
            <span>VIEW ALL PACKAGES</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Package Cards Accordion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/10 bg-black divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {packageCards.map((pkg, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={pkg.slug}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden cursor-pointer ${
                  isActive
                    ? "h-[380px] sm:h-[540px] lg:h-[680px] bg-black text-white shadow-2xl z-20"
                    : "h-[120px] sm:h-[540px] lg:h-[680px] bg-black text-white hover:bg-white/[0.05]"
                }`}
              >
                {/* Background Image for active card */}
                <div
                  className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out pointer-events-none ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                >
                  {pkg.video ? (
                    <video
                      src={pkg.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-700"
                    />
                  ) : pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover scale-105 transition-transform duration-700"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                </div>

                {/* Top Area: Large Number */}
                <div className="z-10 relative">
                  <span
                    className={`text-6xl sm:text-7xl font-black tracking-tighter transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    {pkg.number}
                  </span>
                </div>

                {/* Bottom Area: Title, Description, and Button */}
                <div className="z-10 relative flex flex-col items-start">
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-500 text-white`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                      isActive
                        ? "text-white/90 mb-6 block"
                        : "text-white/65 hidden sm:block"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Button only visible when active */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "max-h-20 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="inline-block bg-black text-white px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-white/90 transition-colors shadow-lg"
                    >
                      View package
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explore More Packages Bar */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-4 sm:gap-6">
          <div className="h-[1px] bg-white/15 w-16 sm:w-32 md:w-48"></div>
          <Link
            href="/packages"
            className="flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors group"
          >
            <span>EXPLORE MORE PACKAGES</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="h-[1px] bg-white/15 w-16 sm:w-32 md:w-48"></div>
        </div>
      </div>
    </section>
  );
}
