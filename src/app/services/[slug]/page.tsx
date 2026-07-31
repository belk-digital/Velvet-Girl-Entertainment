import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-black/10 bg-white p-6 shadow-sm hover:border-[#740107]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-body text-base text-black/85 font-medium">
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
        theme="muted"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.bookingSteps.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="h-full border border-black/10 bg-white p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
                <span className="font-display text-4xl font-bold text-[#740107] group-hover:scale-110 inline-block transition-transform">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-body text-base font-bold text-black uppercase tracking-wider">
                  {step}
                </p>
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
              className="border border-black/15 bg-white px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-black/85 transition-all duration-300 hover:border-[#740107] hover:bg-[#740107] hover:text-white shadow-sm"
            >
              {city.name}
            </Link>
          ))}
        </Reveal>
      </Section>

      <FaqSection />

      <CtaSection />
    </>
  );
}


