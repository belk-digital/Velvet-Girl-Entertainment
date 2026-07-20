import type { Metadata } from "next";
import Link from "next/link";
import {
  PartyPopper,
  Cake,
  Home as HomeIcon,
  Crown,
  Briefcase,
  Wine,
  Heart,
  Waves,
  Anchor,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Velvet Girl Entertainment",
  description:
    "Explore every entertainment service offered by Velvet Girl Entertainment, from bachelor parties to corporate events.",
};

const icons: Record<string, LucideIcon> = {
  "bachelor-parties": PartyPopper,
  "birthday-parties": Cake,
  "private-events": HomeIcon,
  "vip-experiences": Crown,
  "corporate-entertainment": Briefcase,
  "couples-entertainment": Heart,
  "girls-night-out": Wine,
  "pool-parties": Waves,
  "yacht-parties": Anchor,
  "special-requests": Sparkles,
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Entertainment For Every Occasion"
        subtitle="Every service is available across all 8 of our served cities. Pick your occasion to see what's included."
      />
      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Sparkles;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-velvet-pink/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-velvet-pink/40 text-velvet-pink">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 font-display text-lg text-white">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 font-body text-xs text-white/60">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-velvet-pink opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
      <CtaSection />
    </>
  );
}
