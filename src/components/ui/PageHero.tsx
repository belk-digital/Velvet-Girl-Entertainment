import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  theme?: "light" | "crimson" | "dark";
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  theme = "light",
  className = "",
}: PageHeroProps) {
  const isCrimson = theme === "crimson";
  const isDark = theme === "dark";

  return (
    <div
      className={`relative overflow-hidden px-6 py-24 sm:py-32 transition-colors duration-300 ${
        isCrimson
          ? "bg-[#740107] text-white border-b border-[#5a0105]"
          : isDark
          ? "bg-[#0f0f11] text-white border-b border-white/10"
          : "bg-white text-black border-b border-black/10"
      } ${className}`}
    >
      {/* Subtle luxury backdrop glow */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-20 ${
          isCrimson ? "bg-black" : "bg-[#740107]"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className={`h-[1px] w-8 ${
                isCrimson ? "bg-white/40" : "bg-[#740107]"
              }`}
            />
            <p
              className={`text-xs md:text-sm font-bold uppercase tracking-widest ${
                isCrimson
                  ? "text-white/90"
                  : isDark
                  ? "text-[#740107]"
                  : "text-[#740107]"
              }`}
            >
              {eyebrow}
            </p>
            <span
              className={`h-[1px] w-8 ${
                isCrimson ? "bg-white/40" : "bg-[#740107]"
              }`}
            />
          </div>
        )}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight ${
            isCrimson || isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mx-auto mt-6 max-w-2xl font-body text-base sm:text-lg font-medium leading-relaxed ${
              isCrimson
                ? "text-white/85"
                : isDark
                ? "text-white/70"
                : "text-black/75"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}

