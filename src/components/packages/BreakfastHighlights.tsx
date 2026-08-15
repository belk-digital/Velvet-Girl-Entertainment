"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Coffee, Sun, HeartHandshake, Camera, Sparkles, Utensils, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BreakfastHighlights() {
  const features = [
    {
      icon: <Sun className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "MORNING VIBES",
      desc: "Start the day right",
    },
    {
      icon: <Coffee className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "PRE-PARTY WARMUP",
      desc: "Perfect morning energy",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "CASUAL FORMAT",
      desc: "Playful & engaging",
    },
    {
      icon: <Utensils className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "INTERACTIVE",
      desc: "Breakfast service",
    },
    {
      icon: <Camera className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "GROUP PHOTOS",
      desc: "Capture the moment",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#5C0005]" strokeWidth={1.5} />,
      title: "THEMED OUTFITS",
      desc: "Matching and stylish",
    },
  ];

  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Subtle parallax effect on the image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Staggered fade up for the top text
    gsap.from(textRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
      },
    });

    // Staggered fade up for grid items
    gsap.from(gridRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
      },
    });

    // Fade up for the bottom banner
    gsap.from(bannerRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 90%",
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-black py-8 lg:py-20 min-h-0 lg:min-h-[800px]">
      
      {/* Right Image Area (Absolute) */}
      <div className="absolute right-0 top-0 w-[45%] lg:w-[45%] xl:w-[40%] h-[320px] sm:h-[400px] md:h-[500px] lg:h-full lg:bottom-0 z-0 [clip-path:ellipse(140%_100%_at_140%_50%)] overflow-hidden">
        <Image
          ref={imageRef}
          src="/gallery images/BREAKFAST WITH BABES.webp"
          alt="Breakfast Package Highlight"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />
      </div>

      {/* Top Content Area */}
      <div ref={textRef} className="w-[55%] lg:w-[55%] xl:w-[60%] pl-4 pr-2 lg:px-6 lg:pl-16 xl:pl-24 relative z-10 flex flex-col justify-center mt-4 lg:mt-0 pb-6 lg:pb-0 min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0">
        <p className="text-[#5C0005] text-[10px] sm:text-xs md:text-base font-bold tracking-widest uppercase mb-2 lg:mb-4 border-t-[1.5px] lg:border-t-2 border-[#5C0005] pt-1 lg:pt-2 inline-block max-w-max">
          HIGHLIGHTS
        </p>
        <h2 className="font-display text-[32px] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-white mb-3 lg:mb-6">
          MORNINGS<br className="lg:hidden" /> <span className="text-[#5C0005]">ELEVATED</span>
        </h2>
        <p className="text-stone-300 max-w-xl text-[10px] sm:text-sm md:text-lg leading-tight md:leading-relaxed mb-4 lg:mb-12 pr-1">
          A playful daytime booking — a fun, low-key way to kick off a celebration weekend or recover with style.
        </p>
      </div>

      {/* Bottom Grid and Banner Area */}
      <div className="w-full px-2 sm:px-6 lg:pl-16 xl:pl-24 relative z-10 lg:w-[55%] xl:w-[60%]">
        {/* Icons Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-6 max-w-3xl">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="mb-2 lg:mb-4 flex justify-center lg:justify-start group-hover:scale-110 transition-transform duration-300">
                <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                  {feat.icon}
                </div>
              </div>
              <h3 className="font-bold text-[9px] sm:text-xs lg:text-[15px] text-[#5C0005] lg:text-white uppercase mb-1 tracking-wider leading-tight">{feat.title}</h3>
              <p className="text-[8px] sm:text-[10px] lg:text-[13px] text-stone-300 leading-tight px-1 lg:px-0">{feat.desc}</p>
              <div className="w-6 lg:w-8 h-[1.5px] lg:h-[2px] bg-[#5C0005]/40 mt-1.5 lg:mt-3 group-hover:w-10 group-hover:bg-[#5C0005] transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div ref={bannerRef} className="mt-8 lg:mt-16 flex items-center lg:items-start gap-3 lg:gap-4 bg-[#3d0f0f] lg:bg-transparent border-t-0 lg:border-t-2 border-white/10 p-3 lg:p-0 pt-3 lg:pt-6 rounded-lg lg:rounded-none mx-2 lg:mx-0 max-w-2xl shadow-md lg:shadow-none mb-4 lg:mb-0">
          <div className="bg-black lg:bg-[#5C0005] rounded-full p-2 lg:p-2.5 text-[#3d0f0f] lg:text-white shrink-0 shadow-sm">
            <Star className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" />
          </div>
          <div>
            <h4 className="font-bold text-white lg:text-[#5C0005] text-[11px] sm:text-sm lg:text-base leading-tight">Start the day right.</h4>
            <p className="text-[9px] sm:text-xs lg:text-sm text-stone-300 lg:text-stone-300 mt-0.5 leading-tight lg:leading-normal pr-2">Our entertainers provide a vibrant atmosphere from the moment you wake up.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
