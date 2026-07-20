import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import PerformerCard from "@/components/ui/PerformerCard";
import CtaSection from "@/components/home/CtaSection";
import { performers } from "@/data/performers";

export const metadata: Metadata = {
  title: "Performers | Velvet Girl Entertainment",
  description:
    "Browse verified, professional performers available for booking across our served cities.",
};

interface Props {
  searchParams: Promise<{ hair?: string; featured?: string }>;
}

const hairFilters = ["Blonde", "Brunette", "Redhead"] as const;

export default async function PerformersIndexPage({ searchParams }: Props) {
  const { hair, featured } = await searchParams;

  let filtered = performers;
  if (hair) filtered = filtered.filter((p) => p.hairColor === hair);
  if (featured === "true") filtered = filtered.filter((p) => p.featured);

  return (
    <>
      <PageHero
        eyebrow="PERFORMERS"
        title="Meet Our Performers"
        subtitle="Every performer is verified before joining our roster. Filter by hair color or view our featured lineup."
      />

      <div className="px-6 pt-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
          <Link
            href="/performers"
            className={`rounded-full border px-5 py-2.5 font-body text-xs transition-colors duration-300 ${
              !hair && !featured
                ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
                : "border-white/15 text-white/70 hover:border-velvet-pink/40"
            }`}
          >
            All Performers
          </Link>
          {hairFilters.map((h) => (
            <Link
              key={h}
              href={`/performers?hair=${h}`}
              className={`rounded-full border px-5 py-2.5 font-body text-xs transition-colors duration-300 ${
                hair === h
                  ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
                  : "border-white/15 text-white/70 hover:border-velvet-pink/40"
              }`}
            >
              {h} Performers
            </Link>
          ))}
          <Link
            href="/performers?featured=true"
            className={`rounded-full border px-5 py-2.5 font-body text-xs transition-colors duration-300 ${
              featured === "true"
                ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
                : "border-white/15 text-white/70 hover:border-velvet-pink/40"
            }`}
          >
            Featured Performers
          </Link>
        </div>
      </div>

      <div className="px-6 py-16 sm:py-24">
        {filtered.length > 0 ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((performer, i) => (
              <Reveal key={performer.slug} delay={(i % 4) * 0.08}>
                <PerformerCard performer={performer} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center font-body text-sm text-white/50">
            No performers match that filter right now — check back soon or{" "}
            <Link href="/contact" className="text-velvet-pink hover:underline">
              contact us
            </Link>{" "}
            for availability.
          </p>
        )}
      </div>

      <CtaSection />
    </>
  );
}
