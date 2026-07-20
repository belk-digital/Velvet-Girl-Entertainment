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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { homepageServiceSlugs, services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  "bachelor-parties": PartyPopper,
  "birthday-parties": Cake,
  "private-events": HomeIcon,
  "vip-experiences": Crown,
  "corporate-entertainment": Briefcase,
  "girls-night-out": Wine,
  "couples-entertainment": Heart,
  "pool-parties": Waves,
};

const homeServices = homepageServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export default function ServicesGrid() {
  return (
    <Section
      eyebrow="SERVICES"
      title="Entertainment for every occasion"
      subtitle="From bachelor parties to corporate celebrations, our roster covers it all."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {homeServices.map((service, i) => {
          const Icon = icons[service.slug];
          return (
            <Reveal key={service.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-velvet-pink/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-velvet-pink/40 text-velvet-pink">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-lg text-white">
                  {service.title}
                </h3>
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
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="tracking-caps inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
        >
          VIEW ALL SERVICES
        </Link>
      </div>
    </Section>
  );
}
