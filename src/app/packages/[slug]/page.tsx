import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CarMeetHero from "@/components/packages/CarMeetHero";
import CarMeetHighlights from "@/components/packages/CarMeetHighlights";
import CarMeetPerfectFor from "@/components/packages/CarMeetPerfectFor";
import CarMeetGallery from "@/components/packages/CarMeetGallery";
import BoatPartyHero from "@/components/packages/BoatPartyHero";
import BoatPartyHighlights from "@/components/packages/BoatPartyHighlights";
import BoatPartyPerfectFor from "@/components/packages/BoatPartyPerfectFor";
import BoatPartyGallery from "@/components/packages/BoatPartyGallery";
import BreakfastHero from "@/components/packages/BreakfastHero";
import BreakfastHighlights from "@/components/packages/BreakfastHighlights";
import BreakfastPerfectFor from "@/components/packages/BreakfastPerfectFor";
import BreakfastGallery from "@/components/packages/BreakfastGallery";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

import { packageThemes, getPackageThemeBySlug } from "@/data/packages";
import { homepageFaqs } from "@/data/faqs";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return packageThemes.map((t) => ({ slug: t.slug }));
}

const siteUrl = "https://velvetgirlentertainment.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getPackageThemeBySlug(slug);
  if (!theme) return {};
  const title = `${theme.name} Package | Velvet Girl Entertainment`;
  return {
    title,
    description: theme.heroDescription,
    alternates: {
      canonical: `/packages/${theme.slug}`,
    },
    openGraph: {
      title,
      description: theme.heroDescription,
      url: `${siteUrl}/packages/${theme.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: theme.heroDescription,
    },
  };
}

export default async function PackageThemeDetailPage({ params }: Props) {
  const { slug } = await params;
  const theme = getPackageThemeBySlug(slug);
  if (!theme) notFound();

  const pageUrl = `${siteUrl}/packages/${theme.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: `${theme.name} Package`,
        description: theme.heroDescription,
        url: pageUrl,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Velvet Girl Entertainment",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Packages", item: `${siteUrl}/packages` },
          { "@type": "ListItem", position: 3, name: `${theme.name} Package`, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {slug === "car-meet" ? (
        <CarMeetHero themeName={theme.name} />
      ) : slug === "boat-pool-party" ? (
        <BoatPartyHero themeName={theme.name} />
      ) : slug === "breakfast-with-babes" ? (
        <BreakfastHero themeName={theme.name} />
      ) : (
        <PageHero
          eyebrow="PACKAGES"
          title={`${theme.name} Package`}
          subtitle={theme.heroDescription}
          bgImage={theme.image || "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"}
        />
      )}

      {slug === "car-meet" ? (
        <CarMeetHighlights />
      ) : slug === "boat-pool-party" ? (
        <BoatPartyHighlights />
      ) : slug === "breakfast-with-babes" ? (
        <BreakfastHighlights />
      ) : (
        <Section eyebrow="HIGHLIGHTS" title="What to expect">
          <Reveal className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {theme.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border border-white/10 rounded-xl bg-black p-6 shadow-sm hover:border-[#5C0005]/50 transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5C0005]/10 text-[#5C0005]">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-display text-base font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      )}

      <section className="relative w-full overflow-hidden bg-[#5C0005]">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center lg:py-24">
          <p className="mb-4 inline-block border-t-2 border-white/70 pt-2 text-xs font-bold uppercase tracking-widest text-white/80 md:text-base">
            CUSTOMIZE
          </p>
          <h2 className="mb-6 font-display text-[40px] font-bold uppercase leading-none tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build your {theme.name} package
          </h2>
          <Reveal className="mx-auto max-w-3xl text-center mt-2">
            {theme.comingSoon ? (
              <>
                <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  {theme.name} isn&rsquo;t live yet, but we&rsquo;re rolling it
                  out to select cities soon. Reach out to be the first to know
                  when it launches near you.
                </p>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-[#5C0005] transition-all duration-300 hover:scale-105 border border-white shadow-md rounded-full"
                >
                  <span>NOTIFY ME</span>
                </Link>
              </>
            ) : (
              <>
                <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  Launch our interactive booking wizard with {theme.name} pre-selected to choose verified VIP entertainers, costumes, and upgrades.
                </p>
                <Link
                  href={`/book-now?theme=${theme.slug}`}
                  className="mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-[#5C0005] transition-all duration-300 hover:scale-105 border border-white shadow-md rounded-full"
                >
                  <span>CUSTOMIZE & BOOK THIS PACKAGE</span>
                </Link>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {theme.perfectFor && theme.perfectFor.length > 0 && (
        slug === "car-meet" ? (
          <CarMeetPerfectFor items={theme.perfectFor} />
        ) : slug === "boat-pool-party" ? (
          <BoatPartyPerfectFor items={theme.perfectFor} />
        ) : slug === "breakfast-with-babes" ? (
          <BreakfastPerfectFor items={theme.perfectFor} />
        ) : (
          <Section eyebrow="PERFECT FOR" title="Great fit for">
            <Reveal className="mx-auto max-w-4xl">
              <div className="flex flex-wrap justify-center gap-3">
                {theme.perfectFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-white/10 px-6 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/20"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </Section>
        )
      )}

      {slug === "car-meet" && (
        <CarMeetGallery />
      )}
      {slug === "boat-pool-party" && (
        <BoatPartyGallery />
      )}
      {slug === "breakfast-with-babes" && (
        <BreakfastGallery />
      )}


      <CtaSection />
      <FaqSection />
    </>
  );
}


