"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Phone } from "lucide-react";

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/denskvdyt/image/upload/v1784580159/hero-banner_d2oozv.png";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-bg]",
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
        0
      )
        .fromTo(
          "[data-hero-heading]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-actions]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden bg-white px-6 min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-hero-bg
        src={HERO_IMAGE_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[120rem] mx-auto text-left lg:px-6">
        <h1
          data-hero-heading
          className="font-display text-5xl leading-tight text-black opacity-0 sm:text-6xl md:text-8xl drop-shadow-sm"
        >
          Luxury Entertainment.
          <br />
          Professional Performers.
          <br />
          <span className="font-script text-6xl text-[#740107] sm:text-7xl md:text-9xl mt-2 inline-block drop-shadow-sm">
            Nationwide.
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-8 max-w-2xl font-body text-base text-black/90 opacity-0 sm:text-lg drop-shadow-sm font-medium"
        >
          Elite entertainers for bachelor parties, private celebrations, VIP
          events, and unforgettable nights.
        </p>

        <div
          data-hero-actions
          className="mt-12 flex flex-col items-stretch sm:items-center gap-4 opacity-0 sm:flex-row flex-wrap"
        >
          <a
            href="tel:8439387377"
            className="tracking-caps group flex items-center justify-center gap-2.5 bg-[#740107] hover:bg-[#5c0911] px-8 py-5 font-body text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="h-4 w-4 animate-pulse" />
            <span>CALL NOW: (843) 938-7377</span>
          </a>
          <Link
            href="/book-now"
            className="tracking-caps group flex items-center justify-center gap-2 bg-stone-900 hover:bg-black px-8 py-5 font-body text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>BOOK ONLINE</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
