import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Performer } from "@/data/performers";

export default function PerformerCard({ performer }: { performer: Performer }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-velvet-pink/50">
      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-gradient-to-br from-velvet-deep via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,128,0.3),transparent_65%)]" />
        <span className="relative font-script text-8xl text-velvet-pink/70">
          {performer.name.charAt(0)}
        </span>
        {performer.availableToday && (
          <span className="absolute right-3 top-3 rounded-full border border-velvet-pink/50 bg-black/60 px-3 py-1 font-body text-[10px] font-semibold tracking-caps text-velvet-pink backdrop-blur-sm">
            Available Today
          </span>
        )}
      </div>
      <div className="p-5 text-left">
        <h3 className="font-display text-xl text-white">{performer.name}</h3>
        <p className="mt-1 font-body text-xs text-white/50">
          {performer.city} &middot; {performer.hairColor}
        </p>
        <Link
          href={`/performers/${performer.slug}`}
          className="mt-4 inline-flex items-center gap-2 font-body text-xs font-semibold tracking-caps text-velvet-pink transition-transform duration-300 hover:translate-x-1"
        >
          VIEW PROFILE
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
