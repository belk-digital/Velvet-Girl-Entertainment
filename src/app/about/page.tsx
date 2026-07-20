import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaSection from "@/components/home/CtaSection";
import { homepageFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "About Us | Velvet Girl Entertainment",
  description:
    "Learn how Velvet Girl Entertainment connects clients with verified, professional entertainers for private celebrations nationwide.",
};

const standards = [
  "Every dancer is verified before joining our roster.",
  "Real, unedited photos — no bait-and-switch, ever.",
  "Bookings are confirmed with clear, written communication.",
  "Dancers arrive on time and follow the agreed booking scope.",
  "Client privacy is protected at every stage of the process.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="About Velvet Girl Entertainment"
        subtitle="Velvet Girl Entertainment connects clients with experienced, professional entertainers for private celebrations across the United States."
      />

      <Section eyebrow="OUR STORY" title="Built around discretion and reliability">
        <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="font-body text-sm leading-relaxed text-white/65 sm:text-base">
            Velvet Girl Entertainment was built to solve a simple problem:
            booking professional entertainment for a private celebration
            shouldn&rsquo;t be stressful, uncertain, or unsafe. We work with a
            vetted roster of performers and a dedicated booking team so every
            client gets a smooth, discreet experience from first contact to
            the night of the event.
          </p>
          <p className="font-body text-sm leading-relaxed text-white/65 sm:text-base">
            Every booking is handled with professionalism, discretion, and
            attention to detail. Whether you&rsquo;re planning a bachelor
            party, birthday celebration, VIP gathering, or private event, our
            booking specialists help match you with dancers that fit your
            occasion.
          </p>
          <p className="font-body text-sm leading-relaxed text-white/65 sm:text-base">
            We&rsquo;re also one of the only booking agencies that posts real,
            unedited photos of every dancer on our roster. No stock photos,
            no bait-and-switch — you know exactly who&rsquo;s showing up.
          </p>
        </Reveal>
      </Section>

      <Section
        eyebrow="OUR MISSION"
        title="A premium, worry-free booking experience"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm leading-relaxed text-white/65 sm:text-base">
            Our mission is to be the most reliable name in private
            entertainment booking nationwide — pairing clients with verified
            performers, backing every booking with responsive support, and
            protecting privacy at every step.
          </p>
        </Reveal>
      </Section>

      <WhyChooseUs />

      <Section eyebrow="OUR STANDARDS" title="What every booking is held to">
        <Reveal className="mx-auto max-w-2xl">
          <ul className="space-y-4">
            {standards.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-velvet-pink" />
                <span className="font-body text-sm text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section
        id="our-process"
        eyebrow="BOOKING PROCESS"
        title="How booking works"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Choose city", "Select your dancers", "Confirm booking", "Enjoy your event"].map(
            (step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <span className="font-display text-3xl text-velvet-pink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-body text-sm text-white">{step}</p>
                </div>
              </Reveal>
            )
          )}
        </div>
      </Section>

      <Section
        id="safety-privacy"
        eyebrow="SAFETY & PRIVACY"
        title="Your privacy commitment"
      >
        <Reveal className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-velvet-pink/30 bg-white/5 p-8 text-center">
            <Lock className="mx-auto h-8 w-8 text-velvet-pink" />
            <p className="mt-4 font-body text-sm leading-relaxed text-white/70">
              Discretion is a core part of how we operate — from how our
              booking team communicates to how dancers arrive and depart
              your event. Your personal information is never shared beyond
              what&rsquo;s required to fulfill your booking. Read our full{" "}
              <Link href="/privacy" className="text-velvet-pink hover:underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="GROWING COVERAGE"
        title="Now booking in 8 cities"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <MapPin className="mx-auto h-8 w-8 text-velvet-pink" />
          <p className="mt-4 font-body text-sm text-white/65 sm:text-base">
            We currently serve Charleston, Myrtle Beach, Charlotte, Savannah,
            Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis — and
            we&rsquo;re onboarding dancers in new cities regularly.
          </p>
          <Link
            href="/cities"
            className="tracking-caps mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-velvet-pink/50 hover:text-velvet-pink"
          >
            VIEW ALL CITIES
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
