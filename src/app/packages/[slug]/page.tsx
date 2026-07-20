import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
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
        <Reveal className="mx-auto max-w-2xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {theme.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Check className="h-4 w-4 shrink-0 text-velvet-pink" />
                <span className="font-body text-sm text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={theme.comingSoon ? "COMING SOON" : "CUSTOMIZE"}
        title={theme.comingSoon ? "Join the waitlist" : "Make it yours"}
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto max-w-xl text-center">
          {theme.comingSoon ? (
            <>
              <p className="font-body text-sm text-white/65">
                {theme.name} isn&rsquo;t live yet, but we&rsquo;re rolling it
                out to select cities soon. Reach out to be the first to know
                when it launches near you.
              </p>
              <Link
                href="/contact"
                className="tracking-caps mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-8 py-3.5 font-body text-xs font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                NOTIFY ME
              </Link>
            </>
          ) : (
            <>
              <p className="font-body text-sm text-white/65">
                Choose your costume, dancer count, and any upgrades on our
                package builder, then continue straight to booking.
              </p>
              <Link
                href={`/packages?theme=${theme.slug}#customize`}
                className="tracking-caps mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-8 py-3.5 font-body text-xs font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                CUSTOMIZE THIS PACKAGE
              </Link>
            </>
          )}
        </Reveal>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={homepageFaqs} />
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
