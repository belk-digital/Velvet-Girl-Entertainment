import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Reviews() {
  return (
    <Section eyebrow="REVIEWS" title="What clients are saying">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <Quote className="h-6 w-6 text-velvet-pink/60" />
              <p className="mt-4 font-body text-sm leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-5 font-body text-xs font-semibold text-white">
                {t.name}
              </p>
              <p className="font-body text-xs text-white/50">{t.location}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
