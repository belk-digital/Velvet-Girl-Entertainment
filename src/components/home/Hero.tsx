"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          "[data-hero-heading]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-badge]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
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
      className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-velvet-deep/70 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,128,0.22),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p
          data-hero-eyebrow
          className="tracking-caps mb-5 font-body text-xs font-semibold text-velvet-pink opacity-0"
        >
          AMERICA&rsquo;S PREMIER ENTERTAINMENT BOOKING AGENCY
        </p>

        <h1
          data-hero-heading
          className="font-display text-4xl leading-tight text-white opacity-0 sm:text-5xl md:text-6xl"
        >
          Luxury Entertainment.
          <br />
          Professional Performers.
          <br />
          <span className="font-script text-5xl text-velvet-pink text-glow-pink sm:text-6xl md:text-7xl">
            Nationwide.
          </span>
        </h1>

        <p
          data-hero-sub
          className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/65 opacity-0 sm:text-base"
        >
          Elite entertainers for bachelor parties, private celebrations, VIP
          events, and unforgettable nights.
        </p>

        <div
          data-hero-badge
          className="tracking-caps mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-velvet-pink/40 bg-white/5 px-5 py-2 font-body text-[11px] font-semibold text-white/80 opacity-0"
        >
          Now Booking in 8 Cities &middot; 100% Real Photos
        </div>

        <div
          data-hero-actions
          className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
        >
          <Link
            href="/book-now"
            className="tracking-caps group box-glow-pink flex items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-9 py-4 font-body text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            BOOK NOW
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+18439387737"
            className="tracking-caps flex items-center gap-2 rounded-full border border-white/25 px-9 py-4 font-body text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            <Phone className="h-4 w-4 text-velvet-pink" />
            CALL NOW
          </a>
          <a
            href="sms:+18439387737"
            className="tracking-caps flex items-center gap-2 rounded-full border border-white/25 px-9 py-4 font-body text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            TEXT US
          </a>
        </div>
      </div>
    </div>
  );
}
