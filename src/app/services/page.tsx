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
      <div className="px-6 py-20 sm:py-28 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Sparkles;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between border border-black/10 bg-white p-8 transition-all duration-300 hover:border-[#740107]/60 hover:shadow-xl"
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107] transition-all duration-300 group-hover:bg-[#740107] group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold text-black group-hover:text-[#740107] transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-3 font-body text-sm text-black/70 leading-relaxed font-medium">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between font-body text-xs font-bold uppercase tracking-widest text-[#740107] group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
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

