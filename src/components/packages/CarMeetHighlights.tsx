"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Handshake, Camera, Shirt, Smartphone, Car, Users, Sparkles, Ticket, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CarMeetHighlights() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "PROFESSIONAL",
      desc: "Promotional models",
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "MEET & GREET",
      desc: "with attendees",
    },
    {
      icon: <Camera className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "PHOTOS",
      desc: "with guests and featured vehicles",
    },
    {
      icon: <Shirt className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "MERCHANDISE",
      desc: "and sponsor apparel modeling",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "SOCIAL MEDIA",
      desc: "photos and behind-the-scenes content",
    },
    {
      icon: <Car className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "CAR WASH",
      desc: "optional promotional demonstrations",
    },
    {
      icon: <Users className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "CROWD ENGAGEMENT",
      desc: "and event interaction",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "CUSTOM OUTFITS",
      desc: "available upon request",
    },
    {
      icon: <Ticket className="h-8 w-8 text-white" strokeWidth={1.5} />,
      title: "RAFFLES & GAMES",
      desc: "assisting with raffles or other event games",
    },
  ];

  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle parallax effect on the video removed per user request

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
    <section ref={container} className="relative w-full overflow-hidden bg-[#380605]">
      {/* Top Content Area */}
      <div ref={textRef} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center lg:py-24">
        <p className="mb-4 inline-block border-t-2 border-white/70 pt-2 text-xs font-bold uppercase tracking-widest text-white/80 md:text-base">
          HIGHLIGHTS
        </p>
        <h2 className="mb-6 font-display text-[40px] font-bold uppercase leading-none tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
          WHAT TO EXPECT
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          From engaging with your guests to posing for photos and representing your brand, our sexy promotional models will be the cherry on top of your event.
        </p>
      </div>

      {/* Bottom Grid and Banner Area */}
      <div className="relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-24 xl:px-24">
        <img
          src="/images/HARLEY.jpg"
          alt="Car Meet Highlights"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Icons Grid */}
        <div ref={gridRef} className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
          {features.map((feat, i) => (
            <div key={i} className={`group flex min-h-40 flex-col items-center justify-center bg-transparent p-4 text-center backdrop-blur-[2px] transition-colors duration-300 hover:bg-white/10 ${i === features.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
              <div className="mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110 lg:mb-4">
                {/* Clone element to override icon size on mobile */}
                <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                  {feat.icon}
                </div>
              </div>
              <h3 className="mb-1 font-bold text-[10px] uppercase leading-tight tracking-wider text-white sm:text-xs lg:text-[15px]">{feat.title}</h3>
              <p className="px-1 text-[9px] leading-tight text-white/80 sm:text-[11px] lg:text-[13px]">{feat.desc}</p>
              <div className="mt-3 h-[2px] w-8 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-black"></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div ref={bannerRef} className="relative z-10 mx-auto mt-10 flex max-w-2xl items-center justify-center gap-4 border-t border-white/25 pt-6 text-center">
          <div className="shrink-0 rounded-full bg-white p-2.5 text-[#380605] shadow-sm">
            <Star className="h-5 w-5" fill="currentColor" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight text-white lg:text-base">Elevate your event.</h4>
            <p className="mt-1 text-xs leading-normal text-white/80 lg:text-sm">Let our models help create an unforgettable experience for your brand and guests.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
