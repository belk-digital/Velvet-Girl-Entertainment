"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CarMeetHeroProps {
  themeName: string;
}

export default function CarMeetHero({ themeName }: CarMeetHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial load animation for text
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: container });

  return (
    <div 
      ref={container}
      className="relative flex h-[65vh] min-h-[500px] md:h-screen md:min-h-[640px] w-full items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          ref={imageRef}
          src="/images/performers profile images/Harley/HARLEY(1).webp"
          alt={themeName}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[22%_85%] md:object-top"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
      <div ref={textRef} className="relative z-10 w-full px-6 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-normal leading-none tracking-wide drop-shadow-md">
          {themeName}
        </h1>
        <Link
          href="/book-now?theme=car-meet"
          className="mt-8 inline-flex items-center justify-center bg-transparent border border-white px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 shadow-lg rounded-full"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
