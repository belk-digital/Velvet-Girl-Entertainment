import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  theme?: "light" | "muted" | "crimson" | "dark";
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  theme = "light",
  className = "",
  children,
}: SectionProps) {
  const isCrimson = theme === "crimson";
  const isDark = theme === "dark";
  const isMuted = theme === "muted";
  const isDeepText = isCrimson || isDark || isMuted;

  return (
    <section
      id={id}
      className={`px-6 py-20 sm:py-28 transition-colors duration-300 ${
        isCrimson
          ? "bg-[#740107] text-white"
          : isDark
          ? "bg-[#0f0f11] text-white"
          : isMuted
          ? "bg-[#5c0105] text-white border-y border-black/10 shadow-xs"
          : "bg-[#FAF7F2] text-stone-900"
      } ${className}`}
    >
      <div className="mx-auto max-w-[120rem] lg:px-6">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-3xl text-center">
            {eyebrow && (
              <p
                className={`text-xs md:text-sm font-bold uppercase tracking-widest mb-3 ${
                  isDeepText ? "text-white/80" : "text-[#740107]"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider leading-tight ${
                  isDeepText ? "text-white" : "text-[#740107]"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 font-body text-base sm:text-lg font-medium leading-relaxed ${
                  isCrimson
                    ? "text-white/90"
                    : isDark || isMuted
                    ? "text-white/70"
                    : "text-stone-700"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
