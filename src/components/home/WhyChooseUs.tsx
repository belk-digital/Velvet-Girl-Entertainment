import {
  BadgeCheck,
  Headset,
  MapPinned,
  Lock,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Verified Performers",
    description: "Every performer is verified before joining our roster.",
  },
  {
    icon: Headset,
    title: "Professional Booking",
    description: "Dedicated booking agents available day and night.",
  },
  {
    icon: MapPinned,
    title: "Nationwide Coverage",
    description: "Available in more than fifty major cities.",
  },
  {
    icon: Lock,
    title: "Private & Discreet",
    description: "Your privacy is always protected.",
  },
  {
    icon: CalendarCheck,
    title: "Reliable Scheduling",
    description: "On-time arrivals and dependable communication.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Designed for unforgettable celebrations.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      eyebrow="WHY CHOOSE US"
      title="Built for premium, worry-free celebrations"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-velvet-pink/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-velvet-pink/40 text-velvet-pink">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg text-white">
                {title}
              </h3>
              <p className="mt-2 font-body text-xs text-white/60">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
