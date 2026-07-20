import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { stateGroups } from "@/data/cities";

export const metadata: Metadata = {
  title: "Cities We Serve | Velvet Girl Entertainment",
  description:
    "Velvet Girl Entertainment books professional entertainers in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis — with more cities coming soon.",
};

export default function CitiesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="CITIES"
        title="Now Booking in 8 Cities"
        subtitle="We're onboarding dancers in new markets regularly. Browse our current cities below to see local performers and popular areas we cover."
      />
      <div className="px-6 pt-12">
        <Reveal className="mx-auto flex max-w-2xl items-start gap-3 rounded-2xl border border-velvet-pink/30 bg-white/5 p-5 text-left">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-velvet-pink" />
          <p className="font-body text-xs leading-relaxed text-white/70">
            We&rsquo;re one of the only booking agencies that posts{" "}
            <span className="text-velvet-pink">real, unedited photos</span> of
            our dancers on every city page. No bait-and-switch — you know
            exactly who&rsquo;s showing up.
          </p>
        </Reveal>
      </div>
      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-14">
          {stateGroups.map((group, gi) => (
            <Reveal key={group.slug} delay={(gi % 4) * 0.06}>
              <h2 className="font-display text-2xl text-white">
                {group.name}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {group.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.stateSlug}/${city.slug}`}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4 font-body text-sm text-white/75 transition-colors duration-300 hover:border-velvet-pink/40 hover:text-white"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-velvet-pink" />
                    {city.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <CtaSection />
    </>
  );
}
