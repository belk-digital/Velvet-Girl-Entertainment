import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PartyPopper } from "lucide-react";
import type { PackageTheme } from "@/data/packages";

export default function ThemeCard({ theme }: { theme: PackageTheme }) {
  const content = (
    <>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#5C0005]">
        {theme.image ? (
          <>
            <Image
              src={encodeURI(theme.image)}
              alt={theme.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.15),transparent_65%)]" />
            <PartyPopper
              className="relative h-12 w-12 text-white/90 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </>
        )}
        {theme.comingSoon && (
          <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/60 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Coming Soon
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between bg-black border-t border-stone-100">
        <div>
          <h3 className="font-display text-xl font-bold text-white group-hover:text-[#5C0005] transition-colors uppercase tracking-wide">
            {theme.name}
          </h3>
          <p className="mt-2 font-body text-sm text-stone-300 leading-relaxed">
            {theme.shortDescription}
          </p>
        </div>
        {!theme.comingSoon && (
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-body text-xs font-semibold uppercase tracking-widest text-[#5C0005] group-hover:translate-x-1 transition-transform">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </>
  );

  if (theme.comingSoon) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black opacity-75 shadow-sm">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/packages/${theme.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-[#5C0005]/60 hover:shadow-2xl transform hover:-translate-y-1"
    >
      {content}
    </Link>
  );
}
