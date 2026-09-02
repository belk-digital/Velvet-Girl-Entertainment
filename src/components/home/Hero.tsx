"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Phone } from "lucide-react";

// Source file is ~83MB, natively ~1080px wide (c_limit confirmed the same
// bytes come back for any requested width >= ~1080 — that's the ceiling,
// a higher-res source would be needed to look sharper on large screens).
// Deliver through Cloudinary's on-the-fly transforms: request the full
// native width so nothing is thrown away, with a "good" quality tier
// (eco/plain auto were soft/artifacted) — quality matters more than
// shaving a few more MB once we're already capped on resolution.
const HERO_VIDEO_BASE = "https://res.cloudinary.com/denskvdyt/video/upload";
const HERO_VIDEO_PATH = "v1785819233/Car_video_1_1_lcq3sc.mp4";
const heroVideoSrc = (transform: string) =>
  `${HERO_VIDEO_BASE}/${transform}/${HERO_VIDEO_PATH}`;
const HERO_VIDEO_DESKTOP = heroVideoSrc("q_auto:good,f_auto,w_1080,c_limit");
const HERO_VIDEO_MOBILE = heroVideoSrc("q_auto:good,f_auto,w_780,c_limit");

const DEFAULT_TITLE = "Luxury Entertainment. Professional Performers. Nationwide.";
const DEFAULT_SUBTITLE =
  "Elite entertainers for bachelor parties, private celebrations, VIP events, and unforgettable nights.";

export default function Hero({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  sectionId,
}: {
  title?: string;
  subtitle?: string;
  sectionId?: string | null;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-img]",
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
        0
      )
        .fromTo(
          "[data-hero-heading]",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.2
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-actions]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden min-h-screen flex flex-col lg:flex-row"
    >

      {/* ── LEFT: Content panel — transparent overlay on mobile (video shows through), solid red panel on desktop ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen lg:min-h-0 bg-black/45 lg:bg-black w-full lg:w-[52%] xl:w-[50%] flex-shrink-0 px-8 sm:px-12 lg:px-14 xl:px-20 pt-28 pb-16 lg:py-0">
        <h1
          data-hero-heading
          data-cms-section={sectionId ?? undefined}
          data-cms-type="hero"
          data-cms-field="title"
          className="relative font-script font-normal leading-[1.15] opacity-0 text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-white"
        >
          {title}
        </h1>

        <p
          data-hero-sub
          data-cms-section={sectionId ?? undefined}
          data-cms-type="hero"
          data-cms-field="subtitle"
          className="relative mt-8 max-w-lg font-body text-base opacity-0 sm:text-lg font-medium leading-relaxed text-white/85 lg:text-stone-300"
        >
          {subtitle}
        </p>

        <div
          data-hero-actions
          className="relative mt-10 flex flex-row items-center gap-3 opacity-0 flex-wrap sm:gap-4"
        >
          <a
            href="tel:8439387377"
            className="tracking-caps group flex items-center justify-center gap-2 rounded-full bg-white text-[#380605] hover:bg-white/90 lg:bg-[#380605] lg:text-white lg:hover:bg-[#5c0911] px-5 py-3 sm:px-8 sm:py-5 font-body text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse" />
            <span>CALL NOW</span>
          </a>
          <Link
            href="/book-now"
            className="tracking-caps group flex items-center justify-center gap-2 rounded-full bg-stone-900 hover:bg-black px-5 py-3 sm:px-8 sm:py-5 font-body text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>BOOK ONLINE</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Video — full-bleed background behind content on mobile, right-hand panel on desktop ── */}
      <div
        data-hero-img
        className="absolute inset-0 lg:relative lg:inset-auto lg:flex-1 lg:min-h-screen bg-black overflow-hidden opacity-0"
      >
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source media="(min-width: 1024px)" src={HERO_VIDEO_DESKTOP} type="video/mp4" />
          <source src={HERO_VIDEO_MOBILE} type="video/mp4" />
        </video> */}
        <img
          src="/images/velvet-image.jpeg"
          alt="Velvet Girls Entertainment"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

    </div>
  );
}
