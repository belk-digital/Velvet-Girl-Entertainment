"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Award,
  CalendarCheck,
  Map,
  Lock,
  Clock,
  Diamond,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const Silk = dynamic(() => import("@/components/ui/Silk"), { ssr: false });

const leftReasons = [
  {
    icon: Award,
    title: "Verified Performers",
    description: "Every performer is verified before joining our roster.",
  },
  {
    icon: CalendarCheck,
    title: "Professional Booking",
    description: "Dedicated booking agents available day and night.",
  },
  {
    icon: Map,
    title: "Nationwide Coverage",
    description: "Available in more than fifty major cities.",
  },
];

const rightReasons = [
  {
    icon: Lock,
    title: "Private & Discreet",
    description: "Your privacy is always protected.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "On-time arrivals and dependable communication.",
  },
  {
    icon: Diamond,
    title: "Premium Experience",
    description: "Designed for unforgettable celebrations.",
  },
];

// Mirrors the reference mock: 3 rows of (left badge, right badge) floating over the model.
const mobileBadges = [
  { icon: Lock, title: "Private & Discreet", side: "left" as const, top: "54%" },
  { icon: Map, title: "Nationwide Coverage", side: "right" as const, top: "54%" },
  { icon: Award, title: "Verified Performers", side: "left" as const, top: "68%" },
  { icon: CalendarCheck, title: "Professional Booking", side: "right" as const, top: "68%" },
  { icon: Diamond, title: "Premium Experience", side: "left" as const, top: "90%" },
  { icon: Clock, title: "Reliable Scheduling", side: "right" as const, top: "90%" },
];

const DEFAULT_EYEBROW = "WHY US";
const DEFAULT_TITLE = "Why Choose Velvet Girl";

export default function WhyChooseUs({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  sectionId,
}: {
  eyebrow?: string;
  title?: string;
  sectionId?: string | null;
}) {
  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-[#380605] flex flex-col pb-0 pt-16 sm:pt-24 lg:min-h-screen lg:justify-between">
      {/* Interactive WebGL Animated Silk Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#A80512"
          noiseIntensity={0.8}
          rotation={1.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 flex-1 flex flex-col lg:justify-between">

        {/* Title */}
        <div className="mb-12 md:mb-16 text-center z-20 relative">
          <p
            data-cms-section={sectionId ?? undefined}
            data-cms-type="whyChooseUs"
            data-cms-field="eyebrow"
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3"
          >
            {eyebrow}
          </p>
          <h2
            data-cms-section={sectionId ?? undefined}
            data-cms-type="whyChooseUs"
            data-cms-field="title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-tight mb-4"
          >
            {title}
          </h2>
        </div>

        {/* Mobile: image with floating icon+label badges scattered over it, flush to the bottom of the section */}
        <div className="lg:hidden relative mx-auto mt-4 w-full max-w-sm z-10">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://res.cloudinary.com/denskvdyt/image/upload/v1784623153/about-image_zwdvdt.webp"
              alt="Why Choose Us Model"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
              priority
            />

            {mobileBadges.map(({ icon: Icon, title, side, top }) => (
              <div
                key={title}
                className={`absolute z-20 max-w-[44%] ${side === "left" ? "left-0" : "right-0"}`}
                style={{ top }}
              >
                <div className={`flex items-center gap-1 ${side === "right" ? "flex-row-reverse" : ""}`}>
                  <span className="font-body text-[9px] leading-tight sm:text-[11px] font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                    {title}
                  </span>
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-md border border-white/60 bg-black/10 backdrop-blur-sm">
                    <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" strokeWidth={2} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Grid (desktop) */}
        <div className="relative hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-end gap-0 max-w-[85rem] mx-auto z-10 w-full mt-auto">

          {/* Left Features */}
          <div className="flex flex-col gap-10 lg:gap-16 z-20 pr-8 xl:pr-12 self-center pb-12 lg:pb-24">
             {leftReasons.map(({icon: Icon, title, description}, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex-shrink-0 text-white">
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-1 sm:mt-2 font-body text-sm sm:text-base text-white/80 font-medium">{description}</p>
                    </div>
                  </div>
                </Reveal>
             ))}
          </div>

          {/* Center Image */}
          <div className="relative h-[450px] sm:h-[600px] lg:h-[750px] w-full lg:w-[450px] xl:w-[550px] mx-auto z-0 lg:-mx-8 pointer-events-none self-end mb-0">
             <Image
                src="https://res.cloudinary.com/denskvdyt/image/upload/v1784623153/about-image_zwdvdt.webp"
                alt="Why Choose Us Model"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-contain object-bottom"
             />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-10 lg:gap-16 z-20 pl-8 xl:pl-12 self-center pb-12 lg:pb-24">
             {rightReasons.map(({icon: Icon, title, description}, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex-shrink-0 text-white">
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-1 sm:mt-2 font-body text-sm sm:text-base text-white/80 font-medium">{description}</p>
                    </div>
                  </div>
                </Reveal>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
