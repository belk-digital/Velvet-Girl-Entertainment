import Link from "next/link";
import { ArrowRight, PartyPopper } from "lucide-react";
import type { PackageTheme } from "@/data/packages";

export default function ThemeCard({ theme }: { theme: PackageTheme }) {
  const content = (
    <>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-velvet-deep via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,128,0.28),transparent_65%)]" />
        <PartyPopper className="relative h-10 w-10 text-velvet-pink/70" strokeWidth={1.5} />
        {theme.comingSoon && (
          <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/60 px-3 py-1 font-body text-[10px] font-semibold tracking-caps text-white/80 backdrop-blur-sm">
            Coming Soon
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-white">{theme.name}</h3>
        <p className="mt-2 font-body text-xs text-white/60">
          {theme.shortDescription}
        </p>
        {!theme.comingSoon && (
          <span className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-velvet-pink">
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </>
  );

  if (theme.comingSoon) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 opacity-70">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/packages/${theme.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-velvet-pink/40"
    >
      {content}
    </Link>
  );
}
