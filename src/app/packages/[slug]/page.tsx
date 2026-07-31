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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getPackageThemeBySlug(slug);
  if (!theme) return {};
  return {
    title: `${theme.name} Package | Velvet Girl Entertainment`,
    description: theme.heroDescription,
  };
}

export default async function PackageThemeDetailPage({ params }: Props) {
  const { slug } = await params;
  const theme = getPackageThemeBySlug(slug);
  if (!theme) notFound();

  return (
    <>
      <PageHero
        eyebrow="PACKAGES"
        title={`${theme.name} Package`}
        subtitle={theme.heroDescription}
      />

      <Section eyebrow="HIGHLIGHTS" title="What to expect">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {theme.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-black/10 bg-white p-6 shadow-sm hover:border-[#740107]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-body text-base text-black/85 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={theme.comingSoon ? "COMING SOON" : "CUSTOMIZE"}
        title={theme.comingSoon ? "Join the waitlist" : "Make it yours"}
        theme="muted"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          {theme.comingSoon ? (
            <>
              <p className="font-body text-base sm:text-lg text-black/80 font-medium leading-relaxed">
                {theme.name} isn&rsquo;t live yet, but we&rsquo;re rolling it
                out to select cities soon. Reach out to be the first to know
                when it launches near you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#740107] px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 border border-[#740107] shadow-md"
              >
                <span>NOTIFY ME</span>
              </Link>
            </>
          ) : (
            <>
              <p className="font-body text-base sm:text-lg text-black/80 font-medium leading-relaxed">
                Choose your costume, dancer count, and any upgrades on our
                package builder, then continue straight to booking.
              </p>
              <Link
                href={`/packages?theme=${theme.slug}#customize`}
                className="mt-8 inline-flex items-center gap-2 bg-[#740107] px-8 py-4 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 border border-[#740107] shadow-md"
              >
                <span>CUSTOMIZE THIS PACKAGE</span>
              </Link>
            </>
          )}
        </Reveal>
      </Section>

      <FaqSection />

      <CtaSection />
    </>
  );
}


