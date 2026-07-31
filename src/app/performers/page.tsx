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

      <div className="px-6 pt-12 pb-6 bg-white border-b border-black/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          <Link
            href="/performers"
            className={`px-6 py-3 font-body text-xs uppercase tracking-widest transition-all duration-300 ${
              !hair && !featured
                ? "border border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
                : "border border-black/15 bg-white text-black/75 hover:border-[#740107] hover:text-[#740107] font-semibold"
            }`}
          >
            All Performers
          </Link>
          {hairFilters.map((h) => (
            <Link
              key={h}
              href={`/performers?hair=${h}`}
              className={`px-6 py-3 font-body text-xs uppercase tracking-widest transition-all duration-300 ${
                hair === h
                  ? "border border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
                  : "border border-black/15 bg-white text-black/75 hover:border-[#740107] hover:text-[#740107] font-semibold"
              }`}
            >
              {h} Performers
            </Link>
          ))}
          <Link
            href="/performers?featured=true"
            className={`px-6 py-3 font-body text-xs uppercase tracking-widest transition-all duration-300 ${
              featured === "true"
                ? "border border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
                : "border border-black/15 bg-white text-black/75 hover:border-[#740107] hover:text-[#740107] font-semibold"
            }`}
          >
            Featured Performers
          </Link>
        </div>
      </div>

      <div className="px-6 py-20 sm:py-28 bg-white">
        {filtered.length > 0 ? (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((performer, i) => (
              <Reveal key={performer.slug} delay={(i % 4) * 0.08}>
                <PerformerCard performer={performer} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-body text-base text-black/70 font-medium">
              No performers match that filter right now — check back soon or{" "}
              <Link
                href="/contact"
                className="text-[#740107] font-bold underline underline-offset-4 hover:text-[#4a0105]"
              >
                contact us
              </Link>{" "}
              for availability.
            </p>
          </div>
        )}
      </div>

      <CtaSection />
    </>
  );
}

