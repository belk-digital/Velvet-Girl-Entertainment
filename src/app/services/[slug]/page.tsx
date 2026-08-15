import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import HowToBookTimeline from "@/components/ui/HowToBookTimeline";

import { services, getServiceBySlug } from "@/data/services";
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
  const title = `${service.title} | Velvet Girl Entertainment`;
  return {
    title,
    description: service.heroDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description: service.heroDescription,
      url: `https://velvetgirlentertainment.com/services/${service.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.heroDescription,
    },
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

  const pageUrl = `https://velvetgirlentertainment.com/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: `${service.title} Entertainment`,
        serviceType: service.title,
        description: service.content.intro,
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "Velvet Girl Entertainment",
          url: "https://velvetgirlentertainment.com/",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="SERVICES"
        title={`${service.title} Entertainment`}
        subtitle={service.heroDescription}
        bgImage="/gallery images/DIOR.webp"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="/services" className="hover:text-[#540403] transition-colors">
            Services
          </Link>
          <span className="text-[#540403]">/</span>
          <span className="text-white">{service.title}</span>
        </nav>
      </PageHero>

      <Section eyebrow="OVERVIEW" title={`About ${service.title}`}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            {service.content.intro}
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            {service.content.whyChooseUs}
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="WHAT'S INCLUDED" title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-white/10 rounded-xl bg-black p-6 shadow-sm hover:border-[#540403]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#540403]/10 text-[#540403]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-display text-base font-bold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="WHAT TO EXPECT" title="What to Expect" theme="muted">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            {service.content.whatToExpect}
          </p>
        </Reveal>
      </Section>

      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="We make the entire booking process simple, transparent, and discreet."
      >
        <HowToBookTimeline steps={service.bookingSteps} />
      </Section>

      <Section
        eyebrow="AVAILABLE NATIONWIDE"
        title={`Book ${service.title} in your city`}
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {linkCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.stateSlug}/${city.slug}`}
              className="border border-white/10 rounded-full bg-black px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#540403] hover:bg-[#540403] hover:text-white shadow-sm"
            >
              {city.name}
            </Link>
          ))}
        </Reveal>
      </Section>

      <CtaSection />
      <FaqSection items={service.faqs} title={`${service.title} FAQ`} />
    </>
  );
}
