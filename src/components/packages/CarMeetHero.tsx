"use client";

import { useRef } from "react";
import Image from "next/image";
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
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Parallax effect on the image
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

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
      className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden h-[120%] -top-[10%]">
        <Image
          ref={imageRef}
          src="/images/paclages-image/car-bike-meet-package.webp"
          alt={themeName}
          fill
          priority
          className="object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
      <div className="relative z-10 w-full px-6 text-center">
        <h1 
          ref={textRef}
          className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-normal leading-none tracking-wide drop-shadow-md"
        >
          {themeName}
        </h1>
      </div>
    </div>
  );
}
