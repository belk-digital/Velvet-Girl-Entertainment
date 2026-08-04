import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import PerformerGalleryGrid from "@/components/gallery/PerformerGalleryGrid";

import CtaSection from "@/components/home/CtaSection";
import { cities, getCityBySlug } from "@/data/cities";
import { homepageServiceSlugs, services } from "@/data/services";
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
  const title = `${cityData.name} Exotic Dancers & Stripper Booking | Velvet Girl Entertainment`;
  const description = cityData.content.intro.slice(0, 155).trim() + "…";
  return {
    title,
    description,
    alternates: {
      canonical: `/cities/${cityData.stateSlug}/${cityData.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://velvetgirlentertainment.com/cities/${cityData.stateSlug}/${cityData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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

  // Real GSC query data shows demand for "stripper" phrasing alongside
  // "exotic dancer" — append a matching FAQ to every city automatically
  // rather than hand-editing each city's data entry.
  const cityFaqs = [
    ...cityData.faqs,
    {
      question: `Do you provide strippers in ${cityData.name}?`,
      answer: `Yes — Velvet Girl Entertainment is a professional exotic dancer and stripper booking agency serving ${cityData.name} and the surrounding area. Every performer is verified, and every photo on our site is real and unedited, so you know exactly who's showing up to your event.`,
    },
  ];

  const pageUrl = `https://velvetgirlentertainment.com/cities/${cityData.stateSlug}/${cityData.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}/#business`,
        name: `Velvet Girl Entertainment — ${cityData.name}`,
        url: pageUrl,
        description: cityData.content.intro,
        sameAs: ["https://www.instagram.com/velvetgirlentertainment"],
        areaServed: {
          "@type": "City",
          name: cityData.name,
          containedInPlace: {
            "@type": "State",
            name: cityData.stateName,
          },
        },
        telephone: "+1-843-938-7377",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Cities", item: "https://velvetgirlentertainment.com/cities" },
          { "@type": "ListItem", position: 3, name: cityData.stateName, item: `https://velvetgirlentertainment.com/cities/${cityData.stateSlug}` },
          { "@type": "ListItem", position: 4, name: cityData.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cityFaqs.map(({ question, answer }) => ({
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
        eyebrow={cityData.stateName}
        title={`${cityData.name} Exotic Dancer & Stripper Booking`}
        subtitle={`Professional exotic dancers and strippers available throughout ${cityData.name} and surrounding areas.`}
        bgImage="/gallery images/BEACH DAY PACKAGE OR BEACH CITY PAGE.webp"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-500">
          <Link href="/cities" className="hover:text-[#740107] transition-colors">
            Cities
          </Link>
          <span className="text-[#740107]">/</span>
          <span className="text-stone-800">{cityData.stateName}</span>
          <span className="text-[#740107]">/</span>
          <span className="text-stone-800">{cityData.name}</span>
        </nav>
      </PageHero>

      <Section eyebrow="ABOUT THIS MARKET" title={`Entertainment Booking in ${cityData.name}`}>
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-700 sm:text-lg font-medium">
            {cityData.content.intro}
          </p>
        </Reveal>
      </Section>

      <Section
        eyebrow="WHY BOOK WITH US"
        title={`Why Choose Velvet Girl in ${cityData.name}`}
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            {cityData.content.whyChooseUs}
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="LOCAL COVERAGE" title={`The ${cityData.name} Scene`}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-stone-700 sm:text-lg font-medium">
            {cityData.content.localScene}
          </p>
        </Reveal>
      </Section>

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
          <PerformerGalleryGrid
            performers={showPerformers}
            emptyStateMessage={`We're onboarding new performers in ${cityData.name} — check back soon or contact us for availability.`}
          />
        </Section>
      )}

      <CtaSection />
      <FaqSection items={cityFaqs} title={`${cityData.name} FAQ`} />
    </>
  );
}


