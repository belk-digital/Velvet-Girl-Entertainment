"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GalleryHero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
    gsap.from([textRef.current, subtitleRef.current], {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.2
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
          src={encodeURI("/gallery images/IMG_9368.webp")}
          alt="Velvet Girl Gallery"
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 w-full px-6 text-center mt-16">
        <h1 
          ref={textRef}
          className="font-display text-5xl md:text-6xl lg:text-8xl text-white font-normal leading-none tracking-wide drop-shadow-md mb-6"
        >
          GALLERY
        </h1>
        <p 
          ref={subtitleRef}
          className="font-body text-sm md:text-base text-white/80 uppercase tracking-widest max-w-xl mx-auto"
        >
          Authentic, unedited moments from our events.
        </p>
      </div>
    </div>
  );
}
