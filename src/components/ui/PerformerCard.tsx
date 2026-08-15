import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Performer } from "@/data/performers";

export default function PerformerCard({ performer }: { performer: Performer }) {
  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-black transition-all duration-300 hover:border-[#5C0005]/60 hover:shadow-xl">
      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-gradient-to-br from-[#3b0003] via-[#5C0005] to-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.15),transparent_65%)]" />
        <span className="relative font-script text-8xl text-white/90 transition-transform duration-500 group-hover:scale-105">
          {performer.name.charAt(0)}
        </span>
        {performer.availableToday && (
          <span className="absolute right-3 top-3 border border-white/30 bg-black/70 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Available Today
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between bg-black">
        <div>
          <h3 className="font-display text-xl font-bold text-white group-hover:text-[#5C0005] transition-colors">
            {performer.name}
          </h3>
          <p className="mt-1 font-body text-xs uppercase tracking-widest text-white/60 font-semibold">
            {performer.city} &middot; {performer.hairColor}
          </p>
        </div>
        <Link
          href={`/performers/${performer.slug}`}
          className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-body text-xs font-semibold uppercase tracking-widest text-[#5C0005] transition-transform duration-300 group-hover:translate-x-1"
        >
          <span>View Profile</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

