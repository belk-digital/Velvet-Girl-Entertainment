"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  CalendarCheck,
  Map,
  Lock,
  Clock,
  Diamond,
  User,
  Camera,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const Silk = dynamic(() => import("@/components/ui/Silk"), { ssr: false });

const leftReasons = [
  {
    icon: Lock,
    title: "Private & Discreet",
    description: "Your privacy is always protected.",
  },
  {
    icon: User,
    title: "Verified Performers",
    description: "Every performer is verified before joining our roster.",
  },
  {
    icon: Diamond,
    title: "Premium Experience",
    description: "Designed for unforgettable celebrations.",
  },
];

const rightReasons = [
  {
    icon: Map,
    title: "Nationwide Coverage",
    description: "Available in more than fifty major cities.",
  },
  {
    icon: Camera,
    title: "Real Photos",
    description: "What you see is who you get.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "On-time arrivals and dependable communication.",
  },
];

// Mirrors the reference mock: 3 rows of floating badges over the model.
const mobileBadges = [
  { icon: Lock, title: "Private &\nDiscreet", side: "left" as const, top: "48%" },
  { icon: Map, title: "Nationwide\nCoverage", side: "right" as const, top: "48%" },
  { icon: User, title: "Verified\nPerformers", side: "left" as const, top: "66%" },
  { icon: Camera, title: "Real\nPhotos", side: "right" as const, top: "66%" },
  { icon: Diamond, title: "Premium\nExperience", side: "left" as const, top: "84%" },
  { icon: Clock, title: "Reliable\nScheduling", side: "right" as const, top: "84%" },
];

const DEFAULT_EYEBROW = "WHY US";
const DEFAULT_TITLE = "Why Choose Velvet Girls";

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
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-[#2a0404] flex flex-col pb-0 pt-16 sm:pt-24 lg:min-h-screen lg:justify-between">
      {/* Interactive WebGL Animated Silk Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#8a030b"
          noiseIntensity={0.8}
          rotation={1.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 flex-1 flex flex-col lg:justify-between">

        {/* Title */}
        <div className="mb-2 md:mb-12 text-center z-20 relative">
          <p
            data-cms-section={sectionId ?? undefined}
            data-cms-type="whyChooseUs"
            data-cms-field="eyebrow"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-4"
          >
            {eyebrow}
          </p>
          <h2
            data-cms-section={sectionId ?? undefined}
            data-cms-type="whyChooseUs"
            data-cms-field="title"
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal text-white leading-[1.1]"
          >
            {title}
          </h2>
        </div>

        {/* Mobile: image with floating icon+label badges scattered over it, flush to the bottom of the section */}
        <div className="lg:hidden relative mx-auto mt-0 sm:mt-4 w-full max-w-sm z-10 h-[550px]">
          <div className="relative h-full w-full">
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
                className={`absolute z-20 w-24 ${side === "left" ? "left-0 sm:left-4" : "right-0 sm:right-4"}`}
                style={{ top, transform: 'translateY(-50%)' }}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[10px] border border-white/30 bg-transparent">
                    <Icon className="h-5 w-5 sm:h-5 sm:w-5 text-white" strokeWidth={1} />
                  </span>
                  <span className="font-body text-[11px] leading-[1.3] sm:text-xs font-medium text-white text-center whitespace-pre-line drop-shadow-md">
                    {title}
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
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
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
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
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
