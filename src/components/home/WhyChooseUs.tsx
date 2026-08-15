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
    <section id="why-choose-us" className="relative w-full min-h-screen overflow-hidden bg-[#540403] flex flex-col justify-between pt-16 sm:pt-24 pb-0">
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

      <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 flex-1 flex flex-col justify-between">

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

        {/* 3-Column Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end gap-12 lg:gap-0 max-w-[85rem] mx-auto z-10 w-full mt-auto">
          
          {/* Left Features */}
          <div className="order-1 flex flex-col gap-10 lg:gap-16 z-20 lg:pr-8 xl:pr-12 self-center pb-12 lg:pb-24">
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
          <div className="order-3 lg:order-2 relative h-[450px] sm:h-[600px] lg:h-[750px] w-full lg:w-[450px] xl:w-[550px] mx-auto z-0 mt-4 lg:mt-0 lg:-mx-8 pointer-events-none self-end mb-0">
             <Image
                src="https://res.cloudinary.com/denskvdyt/image/upload/v1784623153/about-image_zwdvdt.webp"
                alt="Why Choose Us Model"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-contain object-bottom"
             />
          </div>

          {/* Right Features */}
          <div className="order-2 lg:order-3 flex flex-col gap-10 lg:gap-16 z-20 lg:pl-8 xl:pl-12 self-center pb-12 lg:pb-24">
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
