import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import PerformerCard from "@/components/ui/PerformerCard";

import CtaSection from "@/components/home/CtaSection";
import { cities, getCityBySlug } from "@/data/cities";
import { homepageServiceSlugs, services } from "@/data/services";
import { homepageFaqs } from "@/data/faqs";
import { performers } from "@/data/performers";

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const cityData = getCityBySlug(state, city);
  if (!cityData) return {};
  return {
    title: `${cityData.name} Entertainment Booking | Velvet Girl Entertainment`,
    description: `Professional entertainers available throughout ${cityData.name} and surrounding areas.`,
  };
}

const cityServices = services.filter((s) =>
  homepageServiceSlugs.slice(0, 6).includes(s.slug)
);

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const cityData = getCityBySlug(state, city);
  if (!cityData) notFound();

  const localPerformers = performers.filter(
    (p) => p.citySlug === cityData.slug
  );
  const nearbyPerformers = performers.filter(
    (p) => p.stateSlug === cityData.stateSlug && p.citySlug !== cityData.slug
  );
  const showPerformers = localPerformers.length
    ? localPerformers
    : nearbyPerformers.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={cityData.stateName}
        title={`${cityData.name} Entertainment Booking`}
        subtitle={`Professional entertainers available throughout ${cityData.name} and surrounding areas.`}
      />

      <Section eyebrow="SERVICES" title={`Popular Services in ${cityData.name}`}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cityServices.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full border border-black/10 bg-white p-8 transition-all duration-300 hover:border-[#740107]/60 hover:shadow-xl"
              >
                <h3 className="font-display text-2xl font-bold text-black group-hover:text-[#740107] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm text-black/70 leading-relaxed font-medium">
                  {service.shortDescription}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="POPULAR AREAS"
        title={`Areas We Cover Around ${cityData.name}`}
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {cityData.popularAreas.map((area) => (
            <span
              key={area}
              className="border border-black/15 bg-white px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-black/85 shadow-sm"
            >
              {area}
            </span>
          ))}
        </Reveal>
      </Section>

      {showPerformers.length > 0 && (
        <Section
          eyebrow="REAL PHOTOS, REAL DANCERS"
          title={`Dancers Available in ${cityData.name}`}
        >
          <Reveal className="mx-auto mb-10 flex max-w-3xl items-start gap-4 border border-[#740107]/30 bg-[#740107]/5 p-6 text-left shadow-sm">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#740107] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-black/85 font-medium">
              Every photo below is real and unedited — no filters, no
              stock images, no bait-and-switch. Who you see is who shows up.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {showPerformers.map((performer, i) => (
              <Reveal key={performer.slug} delay={(i % 4) * 0.08}>
                <PerformerCard performer={performer} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <FaqSection />

      <CtaSection />
    </>
  );
}


