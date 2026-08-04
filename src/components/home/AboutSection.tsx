"use client";

import { useRef } from "react";
import { ArrowRight, Lock, Gem, ShieldCheck, Crown, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ABOUT_IMAGE_URL =
  "https://res.cloudinary.com/denskvdyt/image/upload/v1784625942/kimi-about-image_w6t4qm.webp";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    // Animate large faint text
    tl.fromTo(
      ".about-bg-text",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate title parts
    tl.fromTo(
      ".about-title-part",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=1.2"
    );

    // Animate the pink stroke under "Meets Reality"
    tl.fromTo(
      ".about-stroke-path",
      { strokeDasharray: 400, strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut", stagger: 0.2 },
      "-=0.6"
    );

    // Animate paragraph text
    tl.fromTo(
      ".about-paragraph",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.6"
    );

    // Animate CTA buttons
    tl.fromTo(
      ".about-cta",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.4"
    );

    // Animate the image column
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate bottom features
    gsap.fromTo(
      ".about-feature",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 90%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-black text-white pt-28 pb-16 overflow-hidden">
      <div className="mx-auto w-full max-w-[120rem] px-6 lg:px-12">
        
        {/* Main 3-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-16 lg:gap-10 xl:gap-16">
          
          {/* Left Column: Text Content */}
          <div ref={textRef} className="relative flex-1 max-w-2xl py-10 lg:py-20 flex flex-col justify-center">
            {/* Background Faint Text */}
            <div className="about-bg-text absolute -left-16 top-0 text-[14rem] xl:text-[18rem] font-script text-velvet-pink/[0.03] select-none -z-10 leading-none whitespace-nowrap tracking-tighter">
              Velvet
            </div>
            
            <h2 className="flex flex-col">
              <span className="about-title-part font-display text-4xl xl:text-5xl tracking-widest text-white ml-1">WHERE</span>
              <span className="about-title-part font-display text-[clamp(3rem,9vw,9rem)] text-velvet-pink leading-[0.75] uppercase mt-2">Fantasy</span>
              <span className="about-title-part font-script text-[clamp(2.25rem,4vw,4rem)] text-white -mt-4 ml-24 xl:ml-32 z-10 relative w-max">
                Meets Reality
                <svg viewBox="0 0 300 24" className="about-stroke absolute top-[70%] left-[-2%] w-[105%] h-auto text-velvet-pink -z-10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="about-stroke-path" d="M2,18 Q100,5 298,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path className="about-stroke-path" d="M35,22 Q120,12 280,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <div className="mt-12 space-y-6 text-base xl:text-lg text-white/60 max-w-[90%] leading-relaxed font-medium">
              <p className="about-paragraph">
                Velvet Girl Entertainment is America's most trusted exotic dancer and stripper booking agency. We represent only the most stunning, professional performers — artists who bring confidence, elegance, and raw electricity to every private event.
              </p>
              <p className="about-paragraph">
                From intimate one-on-one bookings to full-scale bachelor party productions, we handle every detail with precision and discretion. Our standard isn't just high — it's the highest.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 about-cta">
              <Link
                href="/book-now"
                className="bg-velvet-pink text-white px-10 py-5 text-sm font-bold flex items-center gap-3 hover:bg-velvet-pink-hot transition-colors tracking-widest"
              >
                BOOK YOUR EXPERIENCE <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3 text-xs font-bold text-white/80 tracking-wider">
                <Lock className="w-6 h-6 text-velvet-pink" strokeWidth={1.5} />
                <span className="flex flex-col leading-snug">
                  <span>100% DISCREET</span>
                  <span>&amp; CONFIDENTIAL</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Arch Image */}
          <div ref={imageRef} className="flex-1 flex justify-center lg:justify-end relative w-full max-w-lg xl:max-w-xl mx-auto lg:mx-0 self-end z-10 mt-12 lg:mt-0 opacity-0 translate-y-[100px]">
            {/* The outline wrapper that extends down */}
            <div className="relative w-[85%] pb-6">
              {/* Thin Border Outline */}
              <div className="absolute inset-0 border-[1px] border-velvet-pink/60 border-b-0 rounded-t-[500px] pointer-events-none" />

              {/* Solid Pink Arch Background (Studio Gradient) */}
              <div className="relative w-[92%] aspect-[1/1.6] mx-auto mt-4 rounded-t-[500px] rounded-b-none bg-radial from-[#ff338f] via-[#d2165d] to-[#800040] flex justify-center shadow-inner">
                <Image
                  src={ABOUT_IMAGE_URL}
                  alt="Velvet Girl Model"
                  width={800}
                  height={1280}
                  sizes="(max-width: 640px) 90vw, 500px"
                  className="absolute bottom-0 w-[145%] max-w-none h-auto object-contain object-bottom z-20 pointer-events-none drop-shadow-2xl"
                  style={{ transform: "translateY(1%)" }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Features */}
        <div ref={featuresRef} className="mt-4 pt-12 border-t border-velvet-pink/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 pb-4">
          {[
            { icon: Gem, title: "ELITE PERFORMERS", subtitle: "VETTED & VERIFIED" },
            { icon: Crown, title: "PREMIUM EXPERIENCES", subtitle: "TAILORED TO YOU" },
            { icon: ShieldCheck, title: "DISCRETION", subtitle: "ALWAYS GUARANTEED" },
            { icon: Clock, title: "24/7 CONCIERGE", subtitle: "SUPPORT" },
          ].map((feature, idx) => (
            <div key={idx} className="about-feature flex items-center gap-5 justify-center sm:justify-start">
              <feature.icon className="w-10 h-10 xl:w-12 xl:h-12 text-velvet-pink flex-shrink-0" strokeWidth={1.25} />
              <div className="flex flex-col text-[11px] xl:text-xs font-bold text-white tracking-widest uppercase">
                <span>{feature.title}</span>
                <span className="text-white/50">{feature.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
