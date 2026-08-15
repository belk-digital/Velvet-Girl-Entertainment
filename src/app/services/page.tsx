import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Velvet Girl Entertainment",
    description:
      "Explore every entertainment service offered by Velvet Girl Entertainment, from bachelor parties to corporate events.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Velvet Girl Entertainment",
    description:
      "Explore every entertainment service offered by Velvet Girl Entertainment, from bachelor parties to corporate events.",
  },
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

const serviceImages: Record<string, string> = {
  "bachelor-parties": "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
  "birthday-parties": "/gallery images/BREAKFAST WITH BABES.webp",
  "private-events": "/gallery images/GAME DAY GIRLS.webp",
  "vip-experiences": "/gallery images/DIOR.webp",
  "corporate-entertainment": "/gallery images/LOTUS.webp",
  "couples-entertainment": "/gallery images/BAD COP.webp",
  "girls-night-out": "/gallery images/SEXY NURSE.webp",
  "pool-parties": "/gallery images/BOAT_ POOL PARTY_.webp",
  "yacht-parties": "/gallery images/BOAT_ POOL PARTY_.webp",
  "special-requests": "/gallery images/DOMINATRIX.webp",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Entertainment For Every Occasion"
        subtitle="Every service is available across all 8 of our served cities. Pick your occasion to see what's included."
        bgImage="/gallery images/BREAKFAST WITH BABES.webp"
      />
      <div className="px-6 py-20 sm:py-28 bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Sparkles;
            const imgUrl = serviceImages[service.slug] || "/gallery images/Velvet girl.webp";
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-800 bg-black transition-all duration-500 hover:border-[#380605]/60 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                      <Image
                        src={encodeURI(imgUrl)}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#380605] text-white shadow-md">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h2 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-sm text-stone-300 leading-relaxed font-medium">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mx-6 mb-6 pt-4 border-t border-white/10 flex items-center justify-between font-body text-xs font-bold uppercase tracking-widest text-[#380605] group-hover:translate-x-1 transition-transform">
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

