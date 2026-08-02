"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftBtnRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const cardBtnsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Animate Left Heading with smooth blur-in and slide-up
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
      )
        // 2. Animate Subtitle paragraph
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        )
        // 3. Animate Left column button
        .fromTo(
          leftBtnRef.current,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.6)" },
          "-=0.6"
        )
        // 4. Animate Right Card Quote Text from right
        .fromTo(
          quoteRef.current,
          { opacity: 0, x: 40, filter: "blur(8px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out" },
          "-=0.9"
        )
        // 5. Animate Right Card 3 buttons stagger in
        .fromTo(
          cardBtnsRef.current ? Array.from(cardBtnsRef.current.children) : [],
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" },
          "-=0.7"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white border-t border-b border-stone-100 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 font-sans"
    >
      <div className="w-full relative mx-auto max-w-[120rem] px-5 sm:px-6 lg:px-12 py-2 sm:py-4">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0 relative">

            {/* Left Column (col-span-6 = 0% to 50% width): Heading, Subtitle, and Booking CTA */}
            <div className="md:col-span-6 xl:col-span-6 z-10 py-2 md:pr-8 lg:pr-12">
              <h2
                ref={headingRef}
                className="font-display text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] text-stone-900 tracking-tight leading-[1.15] font-semibold"
              >
                Ready to Plan <br />
                <span className="font-script font-semibold text-[#740107] text-5xl sm:text-6xl md:text-7xl lg:text-[70px] leading-none block sm:inline my-1">
                  Your Event?
                </span>{" "}
                <br />
                <span className="whitespace-nowrap">Let&apos;s Make It Unforgettable.</span>
              </h2>

              <p
                ref={subtitleRef}
                className="mt-4 text-stone-800 text-base sm:text-lg lg:text-[18px] max-w-sm leading-relaxed font-normal"
              >
                Contact our booking team today to discuss availability and receive a
                personalized quote.
              </p>

              {/* Button with stacked text below it */}
              <div ref={leftBtnRef} className="mt-6 flex flex-col items-start gap-3.5">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center bg-[#740107] hover:bg-[#590105] text-white font-bold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(116,1,7,0.35)] hover:shadow-[0_15px_30px_rgba(116,1,7,0.5)] transition-all duration-300 hover:scale-105"
                >
                  BOOK ONLINE
                </Link>
                <div className="text-left space-y-0.5 mt-0.5">
                  <p className="text-xs sm:text-sm text-stone-700 font-normal">
                    Our team is ready to help you create
                  </p>
                  <p className="font-normal text-stone-900 tracking-wide text-xs sm:text-sm uppercase">
                    MEMORIES • MOMENTS
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile-Only Overlapping Woman Image (< 768px) */}
            <div className="md:hidden flex justify-center -mb-16 sm:-mb-20 -mt-4 relative z-20 pointer-events-none select-none">
              <img
                src="/images/gallery/cta-girl-image.webp"
                alt="Velvet Girl Entertainer"
                className="w-[270px] sm:w-[320px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/gallery/cta-girl-image.png";
                }}
              />
            </div>

            {/* Right Column (col-span-6 = 50% to 100% width): Deep Burgundy Card starting from model elbow */}
            <div className="md:col-span-6 xl:col-span-6 z-10 md:ml-4 lg:ml-8 xl:ml-12 2xl:ml-16">
              <div className="bg-[#740107] text-white rounded-xl py-8 sm:py-10 lg:py-12 pr-6 sm:pr-8 lg:pr-12 pl-6 sm:pl-8 md:pl-14 lg:pl-20 xl:pl-24 min-h-[440px] lg:min-h-[500px] xl:min-h-[560px] 2xl:min-h-[600px] shadow-2xl relative overflow-hidden border border-white/10 flex flex-col justify-between">
                {/* Subtle Background Glow Inside Card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                {/* Right-aligned content wrapper on tablet/desktop, full-width on mobile */}
                <div className="w-full md:max-w-[320px] lg:max-w-[370px] xl:max-w-[410px] 2xl:max-w-[440px] md:ml-auto flex flex-col justify-between h-full min-h-[360px] lg:min-h-[440px] xl:min-h-[480px] z-10 relative">
                  <div ref={quoteRef}>
                    {/* Shining Silver Heart Icon (Static) */}
                    <div className="mb-3 inline-flex items-center">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        viewBox="0 0 24 24"
                        fill="url(#shiningSilver)"
                        stroke="url(#shiningSilverStroke)"
                        strokeWidth="1"
                      >
                        <defs>
                          <linearGradient id="shiningSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="25%" stopColor="#E2E8F0" />
                            <stop offset="50%" stopColor="#94A3B8" />
                            <stop offset="75%" stopColor="#F8FAFC" />
                            <stop offset="100%" stopColor="#CBD5E1" />
                          </linearGradient>
                          <linearGradient id="shiningSilverStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="50%" stopColor="#94A3B8" />
                            <stop offset="100%" stopColor="#FFFFFF" />
                          </linearGradient>
                        </defs>
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>

                    <p className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[34px] font-normal leading-snug sm:leading-tight">
                      We&apos;re here to make <br />
                      your event planning <br />
                      simple, smooth, <br />
                      and stress-free.
                    </p>
                  </div>

                  {/* 3 Stacked Buttons Aligned Right */}
                  <div ref={cardBtnsRef} className="mt-8 flex flex-col gap-3 w-full">
                    {/* 1. CALL NOW */}
                    <a
                      href="tel:8439387377"
                      className="group flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white rounded-full py-3.5 sm:py-4 px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                      <span className="font-semibold text-xs sm:text-sm lg:text-base tracking-wider uppercase">
                        CALL NOW: (843) 938-7377
                      </span>
                    </a>

                    {/* 2. TEXT VIP */}
                    <a
                      href="sms:8439387377"
                      className="group flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white rounded-full py-3.5 sm:py-4 px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                      <span className="font-semibold text-xs sm:text-sm lg:text-base tracking-wider uppercase">
                        TEXT VIP: (843) 938-7377
                      </span>
                    </a>

                    {/* 3. BOOK ONLINE */}
                    <Link
                      href="/book-now"
                      className="group flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white rounded-full py-3.5 sm:py-4 px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                      <span className="font-semibold text-xs sm:text-sm lg:text-base tracking-wider uppercase">
                        BOOK ONLINE
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Tablet/Desktop Overlapping Woman Image - Elbow aligned with start of burgundy container */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-[48%] lg:-translate-x-[50%] xl:-translate-x-[50%] w-[370px] lg:w-[450px] xl:w-[520px] 2xl:w-[580px] z-20 pointer-events-none select-none">
        <img
          src="/images/gallery/cta-girl-image.webp"
          alt="Velvet Girl Entertainer"
          className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/gallery/cta-girl-image.png";
          }}
        />
      </div>
    </section>
  );
}
