import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cityServices.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-velvet-pink/40"
              >
                <h3 className="font-display text-lg text-white">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-xs text-white/60">
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
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {cityData.popularAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/15 px-5 py-2.5 font-body text-xs text-white/70"
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
          <Reveal className="mx-auto mb-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-velvet-pink/30 bg-white/5 p-5 text-left">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-velvet-pink" />
            <p className="font-body text-xs leading-relaxed text-white/70">
              Every photo below is real and unedited — no filters, no
              stock images, no bait-and-switch. Who you see is who shows up.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showPerformers.map((performer, i) => (
              <Reveal key={performer.slug} delay={(i % 4) * 0.08}>
                <PerformerCard performer={performer} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section
        eyebrow="FAQ"
        title="Frequently asked questions"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={homepageFaqs} />
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
