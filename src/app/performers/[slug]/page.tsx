import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Globe, MapPin, Ruler, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/home/CtaSection";
import { performers, getPerformerBySlug } from "@/data/performers";
import { services } from "@/data/services";
import { homepageFaqs } from "@/data/faqs";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return performers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const performer = getPerformerBySlug(slug);
  if (!performer) return {};
  return {
    title: `${performer.name} | ${performer.city} Performer | Velvet Girl Entertainment`,
    description: performer.tagline,
  };
}

export default async function PerformerProfilePage({ params }: Props) {
  const { slug } = await params;
  const performer = getPerformerBySlug(slug);
  if (!performer) notFound();

  const offeredServices = services.filter((s) =>
    performer.services.includes(s.slug)
  );

  return (
    <>
      <div className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-deep/60 via-black to-black" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-3xl border border-velvet-pink/30 bg-gradient-to-br from-velvet-deep via-black to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,128,0.32),transparent_65%)]" />
              <span className="relative font-script text-[10rem] leading-none text-velvet-pink/70">
                {performer.name.charAt(0)}
              </span>
              {performer.availableToday && (
                <span className="absolute right-4 top-4 rounded-full border border-velvet-pink/50 bg-black/60 px-3 py-1 font-body text-[10px] font-semibold tracking-caps text-velvet-pink backdrop-blur-sm">
                  Available Today
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-3">
            <p className="tracking-caps font-body text-xs font-semibold text-velvet-pink">
              FEATURED PERFORMER
            </p>
            <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              {performer.name}
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/65 sm:text-base">
              {performer.tagline}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 font-body text-xs text-white/60">
                <MapPin className="h-4 w-4 text-velvet-pink" />
                {performer.city}
              </div>
              <div className="flex items-center gap-2 font-body text-xs text-white/60">
                <Ruler className="h-4 w-4 text-velvet-pink" />
                {performer.height}
              </div>
              <div className="flex items-center gap-2 font-body text-xs text-white/60">
                <Globe className="h-4 w-4 text-velvet-pink" />
                {performer.languages.join(", ")}
              </div>
            </div>

            <Link
              href="/book-now"
              className="tracking-caps box-glow-pink mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-9 py-4 font-body text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              BOOK {performer.name.toUpperCase()}
            </Link>
          </Reveal>
        </div>
      </div>

      <Section eyebrow="SERVICES OFFERED" title={`Event Types ${performer.name} Covers`}>
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {offeredServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-body text-xs text-white/70 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-velvet-pink" />
              {s.title}
            </Link>
          ))}
        </Reveal>
      </Section>

      <Section
        eyebrow="BOOKING INFORMATION"
        title="How to book"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm leading-relaxed text-white/65">
            Availability for {performer.name} is confirmed through our
            booking team. Submit a request with your event date and city, and
            we&rsquo;ll confirm availability along with pricing for your
            selected package.
          </p>
          <Link
            href="/packages"
            className="tracking-caps mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
          >
            VIEW PACKAGES
          </Link>
        </Reveal>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={homepageFaqs} />
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
