import Link from "next/link";
import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { cities, featuredCitySlugs } from "@/data/cities";

const homeCities = featuredCitySlugs
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function CitiesSection() {
  return (
    <Section
      eyebrow="CITIES"
      title="Now Booking in 8 Cities"
      subtitle="We're onboarding new markets regularly — more cities coming soon."
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {homeCities.map((city, i) => (
          <Reveal key={city.slug} delay={(i % 5) * 0.06}>
            <Link
              href={`/cities/${city.stateSlug}/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4 font-body text-sm text-white/75 transition-colors duration-300 hover:border-velvet-pink/40 hover:text-white"
            >
              <MapPin className="h-4 w-4 shrink-0 text-velvet-pink" />
              {city.name}
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/cities"
          className="tracking-caps inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
        >
          VIEW ALL CITIES
        </Link>
      </div>
    </Section>
  );
}
