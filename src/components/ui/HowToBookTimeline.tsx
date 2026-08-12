import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export interface StepItem {
  title: string;
  subtitle?: string;
  description?: string;
}

const defaultStepMetadata: Record<
  string,
  { subtitle: string; description: string }
> = {
  "Choose city": {
    subtitle: "(STEP 01 · LOCATION)",
    description:
      "Browse our nationwide roster and select your event destination from our 8+ served luxury cities.",
  },
  "Select performers": {
    subtitle: "(STEP 02 · REAL PHOTOS)",
    description:
      "Explore 100% real, unedited photos of available entertainers in your area — who you see is who arrives.",
  },
  "Confirm booking": {
    subtitle: "(STEP 03 · 24/7 CONCIERGE)",
    description:
      "Submit your inquiry online, by phone, or text. Our booking concierge will quickly confirm availability and pricing.",
  },
  "Enjoy your event": {
    subtitle: "(STEP 04 · SHOWTIME)",
    description:
      "Your entertainer arrives on time, verified, and professional — so you can relax and focus on celebrating with your group.",
  },
  "Tell us your vision": {
    subtitle: "(STEP 01 · CUSTOM REQUEST)",
    description:
      "Share your event date, location, and specific entertainment vision with our concierge team.",
  },
  "Get a custom proposal": {
    subtitle: "(STEP 02 · PERSONALIZED QUOTE)",
    description:
      "Receive a tailored proposal with hand-selected performer options and transparent pricing.",
  },
  "Send Your Inquiry": {
    subtitle: "(STEP 01 · INQUIRY)",
    description:
      "Tell us your event type, date, and city using our booking form, or reach out directly by phone, text, or email.",
  },
  "Speak With a Specialist": {
    subtitle: "(STEP 02 · CONCIERGE)",
    description:
      "A booking specialist follows up within a few hours to go over availability, pricing, and specific requests.",
  },
  "Confirm & Reserve": {
    subtitle: "(STEP 03 · RESERVATION)",
    description:
      "Once details are set, a deposit secures your date and locks in your entertainer for the event.",
  },
  "Enjoy Your Event": {
    subtitle: "(STEP 04 · CELEBRATE)",
    description:
      "Your entertainer arrives on time and ready to go, so you can focus on celebrating with your group.",
  },
  "Submit Your Application": {
    subtitle: "(STEP 01 · APPLICATION)",
    description:
      "Fill out our confidential online form with your basic details, experience, and recent photos.",
  },
  "We Review & Reach Out": {
    subtitle: "(STEP 02 · SCREENING)",
    description:
      "Our talent team reviews every application within 48 hours and contacts candidates who are a great fit.",
  },
  "Onboarding & Verification": {
    subtitle: "(STEP 03 · ONBOARDING)",
    description:
      "Complete a quick verification and onboarding call so we can set up your profile and schedule.",
  },
  "Start Receiving Bookings": {
    subtitle: "(STEP 04 · EARN & PERFORM)",
    description:
      "Get matched with verified private bookings in your city with competitive pay and full privacy protection.",
  },
};

export function normalizeStep(
  step: string | StepItem,
  index: number
): StepItem {
  if (typeof step === "string") {
    const meta = defaultStepMetadata[step] || {
      subtitle: `(STEP 0${index + 1} · BOOKING)`,
      description:
        "Our concierge team guides you through this step with full transparency and discretion.",
    };
    return {
      title: step,
      subtitle: meta.subtitle,
      description: meta.description,
    };
  }
  return {
    title: step.title,
    subtitle: step.subtitle || `(STEP 0${index + 1} · BOOKING)`,
    description:
      step.description ||
      "Our concierge team guides you through this step with full transparency and discretion.",
  };
}

interface HowToBookTimelineProps {
  steps: (string | StepItem)[];
  className?: string;
}

export default function HowToBookTimeline({
  steps,
  className = "",
}: HowToBookTimelineProps) {
  const normalizedSteps = steps.map((s, i) => normalizeStep(s, i));

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-[#5C0005]/20 p-8 sm:p-12 lg:p-16 shadow-2xl ${className}`}>
      {/* Ambient Velvet Crimson & Ruby Spotlight Aurora Background (replacing gray and blue with red!) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#FAF7F2]">
        {/* Subtle top light wash */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />

        {/* Soft bottom-up atmospheric crimson red aurora glow */}
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-[#5C0005]/25 via-[#5C0005]/10 to-transparent" />

        {/* Vertical Spotlight Light Cones rising from bottom (using Velvet Crimson #5C0005 instead of Blue!) */}
        <div className="absolute -bottom-16 left-[10%] h-[85%] w-[25%] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5C0005]/35 via-[#5C0005]/12 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 left-[30%] h-[95%] w-[25%] -translate-x-1/2 -rotate-6 rounded-full bg-gradient-to-t from-[#990000]/40 via-[#5C0005]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 left-[50%] h-[90%] w-[30%] -translate-x-1/2 rotate-6 rounded-full bg-gradient-to-t from-[#5C0005]/45 via-[#5C0005]/18 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 left-[70%] h-[95%] w-[25%] -translate-x-1/2 -rotate-6 rounded-full bg-gradient-to-t from-[#990000]/40 via-[#5C0005]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 left-[90%] h-[85%] w-[25%] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5C0005]/35 via-[#5C0005]/12 to-transparent blur-3xl" />
      </div>

      {/* Desktop Horizontal Roadmap Layout (lg and up) */}
      <div className="hidden lg:grid grid-cols-4 gap-x-0 w-full">
        {normalizedSteps.map((item, i) => {
          const isFirst = i === 0;
          const isLast = i === normalizedSteps.length - 1;

          return (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex flex-col items-start text-left group">
                {/* 1. Top Pill Badge */}
                <div className="h-9 mb-5 flex items-center">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-[#5C0005] border border-[#5C0005]/30 shadow-md group-hover:bg-[#5C0005] group-hover:text-white transition-all duration-300">
                    STEP 0{i + 1}
                  </span>
                </div>

                {/* 2. Timeline Connecting Line & Circle Node Row */}
                <div className="relative my-4 flex items-center w-full h-6">
                  {/* Continuous horizontal connecting line */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-stone-300 transition-colors duration-300 group-hover:bg-[#5C0005]/40 ${
                      isFirst
                        ? "left-2 right-0"
                        : isLast
                        ? "left-0 right-5"
                        : "left-0 right-0"
                    }`}
                  />

                  {/* Circular Node Dot */}
                  <div className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border-[3px] border-[#5C0005] ring-4 ring-[#5C0005]/15 shadow-sm group-hover:scale-125 transition-transform duration-300" />

                  {/* Right arrowhead terminating the roadmap */}
                  {isLast && (
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-hover:text-[#5C0005] group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </div>

                {/* 3. Step Title, Subtitle, & Description */}
                <div className="mt-5 pr-6 xl:pr-10">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#5C0005] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-1 font-body text-xs font-bold uppercase tracking-widest text-stone-400">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="mt-3 font-body text-sm xl:text-base text-stone-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Mobile & Tablet Vertical Roadmap Layout (below lg) */}
      <div className="lg:hidden space-y-10">
        {normalizedSteps.map((item, i) => {
          const isLast = i === normalizedSteps.length - 1;

          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative flex items-start gap-5 group">
                {/* Vertical connecting line */}
                {!isLast && (
                  <div className="absolute left-[9px] top-7 bottom-[-40px] w-[2px] bg-stone-300 group-hover:bg-[#5C0005]/40 transition-colors duration-300" />
                )}

                {/* Circular Node Dot */}
                <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border-[3px] border-[#5C0005] ring-4 ring-[#5C0005]/15 shadow-sm group-hover:scale-125 transition-transform duration-300" />

                {/* Right content column */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1 font-body text-[11px] font-bold uppercase tracking-widest text-[#5C0005] border border-[#5C0005]/30 shadow-sm group-hover:bg-[#5C0005] group-hover:text-white transition-all duration-300">
                      STEP 0{i + 1}
                    </span>
                    {item.subtitle && (
                      <span className="font-body text-xs font-bold uppercase tracking-widest text-stone-400">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#5C0005] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-body text-sm sm:text-base text-stone-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
