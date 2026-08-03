"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Phone } from "lucide-react";

const HERO_IMAGE_URL = "/images/HARLEY.jpg";

export default function Hero() {
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
      className="relative overflow-hidden bg-[#FBFAF8] min-h-screen flex"
    >

      {/* ── MOBILE ONLY: Full background image ── */}
      <div data-hero-img className="absolute inset-0 opacity-0 lg:hidden">
        <Image
          src={HERO_IMAGE_URL}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* ── LEFT: Text Content ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-8 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:py-0 min-h-screen">
        {/* Desktop-only subtle glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#740107] rounded-full blur-[280px] opacity-[0.06] pointer-events-none hidden lg:block" />

        <h1
          data-hero-heading
          className="relative font-script font-normal leading-[1.1] opacity-0 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl
            text-white lg:text-black"
        >
          Luxury Entertainment.
          <br />
          Professional Performers.
          <br />
          <span className="font-script mt-1 inline-block text-[#e87d7d] lg:text-[#740107]">
            Nationwide.
          </span>
        </h1>

        <p
          data-hero-sub
          className="relative mt-8 max-w-lg font-body text-base opacity-0 sm:text-lg font-medium leading-relaxed
            text-white/85 lg:text-black/70"
        >
          Elite entertainers for bachelor parties, private celebrations, VIP
          events, and unforgettable nights.
        </p>

        <div
          data-hero-actions
          className="relative mt-10 flex flex-row items-center gap-3 opacity-0 flex-wrap sm:gap-4"
        >
          <a
            href="tel:8439387377"
            className="tracking-caps group flex items-center justify-center gap-2 bg-[#740107] hover:bg-[#5c0911] px-5 py-3 sm:px-8 sm:py-5 font-body text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse" />
            <span>CALL NOW: (843) 938-7377</span>
          </a>
          <Link
            href="/book-now"
            className="tracking-caps group flex items-center justify-center gap-2 bg-stone-900 hover:bg-black px-5 py-3 sm:px-8 sm:py-5 font-body text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>BOOK ONLINE</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Full-height image panel (desktop only) ── */}
      <div
        data-hero-img
        className="relative opacity-0 hidden lg:block w-[42%] xl:w-[40%] flex-shrink-0"
      >
        <Image
          src={HERO_IMAGE_URL}
          alt="Velvet Girl Entertainment performer"
          fill
          priority
          sizes="40vw"
          className="object-cover object-center"
        />
        {/* Left-side fade so image blends into background */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBFAF8] to-transparent pointer-events-none z-10" />
      </div>

    </div>
  );
}
