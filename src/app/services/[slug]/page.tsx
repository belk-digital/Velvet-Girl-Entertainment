import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/home/CtaSection";
import { services, getServiceBySlug } from "@/data/services";
import { homepageFaqs } from "@/data/faqs";
import { featuredCitySlugs, cities } from "@/data/cities";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Velvet Girl Entertainment`,
    description: service.heroDescription,
  };
}

const linkCities = featuredCitySlugs
  .slice(0, 6)
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title={`${service.title} Entertainment`}
        subtitle={service.heroDescription}
      />

      <Section eyebrow="WHAT'S INCLUDED" title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Check className="h-4 w-4 shrink-0 text-velvet-pink" />
                <span className="font-body text-sm text-white/75">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="BOOKING PROCESS"
        title="How booking works"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.bookingSteps.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <span className="font-display text-3xl text-velvet-pink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-body text-sm text-white">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="AVAILABLE NATIONWIDE"
        title={`Book ${service.title} in your city`}
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {linkCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.stateSlug}/${city.slug}`}
              className="rounded-full border border-white/15 px-5 py-2.5 font-body text-xs text-white/70 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
            >
              {city.name}
            </Link>
          ))}
          <Link
            href="/cities"
            className="rounded-full border border-velvet-pink/40 px-5 py-2.5 font-body text-xs text-velvet-pink"
          >
            View all cities
          </Link>
        </Reveal>
      </Section>

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
