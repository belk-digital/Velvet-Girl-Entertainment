import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ThemeCard from "@/components/ui/ThemeCard";
import { packageThemes } from "@/data/packages";

export default function PackagesSection() {
  return (
    <Section
      eyebrow="PACKAGES"
      title="Pick your party theme"
      subtitle="Every theme is fully customizable — choose your costume, dancer count, and upgrades."
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {packageThemes.map((theme, i) => (
          <Reveal key={theme.slug} delay={(i % 4) * 0.08}>
            <ThemeCard theme={theme} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/packages"
          className="tracking-caps inline-flex items-center gap-2 border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
        >
          BUILD YOUR PACKAGE
        </Link>
      </div>
    </Section>
  );
}
