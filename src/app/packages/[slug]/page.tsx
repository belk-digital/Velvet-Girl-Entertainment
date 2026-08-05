import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
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
      <PageHero
        eyebrow="PACKAGES"
        title={`${theme.name} Package`}
        subtitle={theme.heroDescription}
        bgImage={theme.image || "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"}
      />

      <Section eyebrow="HIGHLIGHTS" title="What to expect">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {theme.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-stone-200/80 rounded-xl bg-white p-6 shadow-sm hover:border-[#740107]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-display text-base font-bold text-stone-900">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {theme.perfectFor && theme.perfectFor.length > 0 && (
        <Section eyebrow="PERFECT FOR" title="Great fit for">
          <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {theme.perfectFor.map((item) => (
              <span
                key={item}
                className="border border-black/15 bg-white px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-black/85 shadow-sm"
              >
                {item}
              </span>
            ))}
          </Reveal>
        </Section>
      )}

      <Section eyebrow="CUSTOMIZE" title={`Build your ${theme.name} package`} theme="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          {theme.comingSoon ? (
            <>
              <p className="font-body text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                {theme.name} isn&rsquo;t live yet, but we&rsquo;re rolling it
                out to select cities soon. Reach out to be the first to know
                when it launches near you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-[#740107] transition-all duration-300 hover:scale-105 border border-white shadow-md"
              >
                <span>NOTIFY ME</span>
              </Link>
            </>
          ) : (
            <>
              <p className="font-body text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                Launch our interactive booking wizard with {theme.name} pre-selected to choose verified VIP entertainers, costumes, and upgrades.
              </p>
              <Link
                href={`/book-now?theme=${theme.slug}`}
                className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-[#740107] transition-all duration-300 hover:scale-105 border border-white shadow-md"
              >
                <span>CUSTOMIZE & BOOK THIS PACKAGE</span>
              </Link>
            </>
          )}
        </Reveal>
      </Section>

      <CtaSection />
      <FaqSection />
    </>
  );
}


