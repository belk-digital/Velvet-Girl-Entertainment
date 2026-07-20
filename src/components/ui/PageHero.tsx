import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-velvet-deep/60 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,128,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="tracking-caps mb-4 font-body text-xs font-semibold text-velvet-pink">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl font-body text-sm text-white/65 sm:text-base">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
