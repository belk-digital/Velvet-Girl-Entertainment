import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PerformerCard from "@/components/ui/PerformerCard";
import { featuredPerformers } from "@/data/performers";

export default function FeaturedPerformers() {
  return (
    <Section
      eyebrow="FEATURED PERFORMERS"
      title="Meet a few of our performers"
      subtitle="Verified, professional entertainers available across our served cities."
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredPerformers.map((performer, i) => (
          <Reveal key={performer.slug} delay={(i % 4) * 0.08}>
            <PerformerCard performer={performer} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/performers"
          className="tracking-caps inline-flex items-center gap-2 border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
        >
          VIEW ALL PERFORMERS
        </Link>
      </div>
    </Section>
  );
}
