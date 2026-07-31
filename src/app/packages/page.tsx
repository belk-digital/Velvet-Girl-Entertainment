import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ThemeCard from "@/components/ui/ThemeCard";
import PackageBuilder from "@/components/forms/PackageBuilder";
import CtaSection from "@/components/home/CtaSection";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import { packageThemes } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages | Velvet Girl Entertainment",
  description:
    "Browse our party themes and build your own custom package — pick a theme, costume, dancer count, and upgrades.",
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

      <Section eyebrow="THEMES" title="Choose your party theme">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
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
        title="Build your package"
        subtitle="Select a theme, costume, and dancer count, then choose any upgrades — we'll carry your selections into the booking form."
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl">
          <Suspense fallback={null}>
            <PackageBuilder />
          </Suspense>
        </Reveal>
      </Section>

      <VelvetCurtains variant="bottom" />
      <CtaSection />
    </>
  );
}
