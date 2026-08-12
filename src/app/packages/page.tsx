import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ThemeCard from "@/components/ui/ThemeCard";
import CtaSection from "@/components/home/CtaSection";
import { packageThemes } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages | Velvet Girl Entertainment",
  description:
    "Browse our party themes and build your own custom package — pick a theme, costume, dancer count, and upgrades.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Packages | Velvet Girl Entertainment",
    description:
      "Browse our party themes and build your own custom package — pick a theme, costume, dancer count, and upgrades.",
    url: "/packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages | Velvet Girl Entertainment",
    description:
      "Browse our party themes and build your own custom package — pick a theme, costume, dancer count, and upgrades.",
  },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="PACKAGES"
        title="Party Packages"
        subtitle="Pick a theme below, then build your own custom experience — theme, costume, dancer count, and upgrades, all in one place."
        bgImage="/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"
      />

      <Section
        eyebrow="THEMES"
        title="Choose your experience"
        subtitle="Each package is fully customizable. Select a theme to learn more or customize your package directly."
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packageThemes.map((theme, i) => (
            <Reveal key={theme.slug} delay={(i % 4) * 0.08}>
              <ThemeCard theme={theme} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="customize"
        eyebrow="CUSTOMIZE"
        title="Build Your VIP Package"
        subtitle="Launch our interactive 12-step booking and customization wizard to choose your event theme, verify entertainers in your city, pick costumes, and add luxury upgrades."
        theme="muted"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#5C0005]/10 to-transparent rounded-bl-full pointer-events-none" />
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 mb-3">
              Ready to Customize Your Night?
            </h3>
            <p className="text-stone-600 font-body text-sm sm:text-base mb-8 max-w-md mx-auto">
              Choose from verified VIP entertainers, select editorial costumes, and tailor upgrades in real time.
            </p>
            <Link
              href="/book-now"
              className="inline-flex items-center gap-3 rounded-full bg-[#5C0005] px-8 py-4 font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#5c0911] hover:scale-105"
            >
              <span>Launch Interactive Package Builder</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
