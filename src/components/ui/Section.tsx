import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="tracking-caps mb-3 font-body text-xs font-semibold text-velvet-pink">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 font-body text-sm text-white/60 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
