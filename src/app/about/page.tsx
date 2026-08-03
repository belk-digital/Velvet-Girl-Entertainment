import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaSection from "@/components/home/CtaSection";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";


export const metadata: Metadata = {
  title: "About Us | Velvet Girl Entertainment",
  description:
    "Learn how Velvet Girl Entertainment connects clients with verified, professional entertainers for private celebrations nationwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Velvet Girl Entertainment",
    description:
      "Verified performers, real unedited photos, and a dedicated booking team — how Velvet Girl Entertainment operates nationwide.",
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: "About Us | Velvet Girl Entertainment",
    description:
      "Verified performers, real unedited photos, and a dedicated booking team for private celebrations nationwide.",
  },
};

const standards = [
  "Every dancer is verified before joining our roster.",
  "Real, unedited photos — no bait-and-switch, ever.",
  "Bookings are confirmed with clear, written communication.",
  "Dancers arrive on time and follow the agreed booking scope.",
  "Client privacy is protected at every stage of the process.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://velvetgirlentertainment.com/about/#webpage",
      url: "https://velvetgirlentertainment.com/about",
      name: "About Us | Velvet Girl Entertainment",
      description:
        "Learn how Velvet Girl Entertainment connects clients with verified, professional entertainers for private celebrations nationwide.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://velvetgirlentertainment.com/#organization",
      name: "Velvet Girl Entertainment",
      url: "https://velvetgirlentertainment.com/",
      description:
        "Velvet Girl Entertainment books verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide.",
      knowsAbout: [
        "Bachelor Party Entertainment",
        "Private Event Booking",
        "Professional Dancer Verification",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="ABOUT US"
        title="About Velvet Girl Entertainment"
        subtitle="Velvet Girl Entertainment connects clients with experienced, professional entertainers for private celebrations across the United States."
        bgImage="/gallery images/Velvet girl.webp"
      />

      <Section eyebrow="OUR STORY" title="Built around discretion and reliability">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-black/80 sm:text-lg font-medium">
            Velvet Girl Entertainment was built to solve a simple problem:
            booking professional entertainment for a private celebration
            shouldn&rsquo;t be stressful, uncertain, or unsafe. We work with a
            vetted roster of performers and a dedicated booking team so every
            client gets a smooth, discreet experience from first contact to
            the night of the event.
          </p>
          <p className="font-body text-base leading-relaxed text-black/80 sm:text-lg font-medium">
            Every booking is handled with professionalism, discretion, and
            attention to detail. Whether you&rsquo;re planning a bachelor
            party, birthday celebration, VIP gathering, or private event, our
            booking specialists help match you with dancers that fit your
            occasion.
          </p>
          <p className="font-body text-base leading-relaxed text-black/80 sm:text-lg font-medium">
            We&rsquo;re also one of the only booking agencies that posts real,
            unedited photos of every dancer on our roster. No stock photos,
            no bait-and-switch — you know exactly who&rsquo;s showing up.
          </p>

          {/* Luxury Editorial Photo Grid (.webp from gallery images) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/80 aspect-[4/5] group">
              <Image
                src={encodeURI("/gallery images/BACHELOR PARTY_GUYS NIGHT.webp")}
                alt="Bachelor Party VIP Entertainment"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
                Bachelor Parties &amp; Guys Nights
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/80 aspect-[4/5] group">
              <Image
                src={encodeURI("/gallery images/BREAKFAST WITH BABES.webp")}
                alt="Breakfast With Babes Package"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
                VIP Daytime Packages
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/80 aspect-[4/5] group">
              <Image
                src={encodeURI("/gallery images/GAME DAY GIRLS.webp")}
                alt="Game Day Girls Entertainment"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
                Game Day VIP Gatherings
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="OUR MISSION"
        title="A premium, worry-free booking experience"
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Our mission is to be the most reliable name in private
            entertainment booking nationwide — pairing clients with verified
            performers, backing every booking with responsive support, and
            protecting privacy at every step.
          </p>
        </Reveal>
      </Section>

      <WhyChooseUs />

      <Section eyebrow="OUR STANDARDS" title="What every booking is held to">
        <Reveal className="mx-auto max-w-3xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((item, idx) => (
              <li
                key={item}
                className={`flex items-start gap-4 border border-black/10 bg-white p-6 transition-all duration-300 hover:border-[#740107]/50 hover:shadow-md ${
                  idx === standards.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-body text-base text-black/85 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section eyebrow="FROM OUR TEAM" title="A note from Velvet Girl Entertainment">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-lg sm:text-xl leading-relaxed text-black/85 font-medium italic">
            &ldquo;We built this agency because we were tired of seeing bait-and-switch
            booking sites. Every performer on our roster is verified, every photo
            is real, and every booking is backed by a team that actually answers
            the phone. That&rsquo;s the whole promise.&rdquo;
          </p>
          <p className="mt-4 font-body text-sm font-bold uppercase tracking-widest text-[#740107]">
            — The Velvet Girl Entertainment Team
          </p>
        </Reveal>
      </Section>

      <Section
        id="our-process"
        eyebrow="BOOKING PROCESS"
        title="How booking works"
        theme="muted"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Choose city", "Select your dancers", "Confirm booking", "Enjoy your event"].map(
            (step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="h-full border border-black/10 bg-white p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <span className="font-display text-4xl font-bold text-[#740107] group-hover:scale-110 inline-block transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-body text-base font-bold text-black uppercase tracking-wider">
                    {step}
                  </p>
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
        <Reveal className="mx-auto max-w-3xl">
          <div className="border border-[#740107]/30 bg-[#740107]/5 p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#740107] text-white shadow-md">
              <Lock className="h-7 w-7" />
            </div>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-black/85 font-medium">
              Discretion is a core part of how we operate — from how our
              booking team communicates to how dancers arrive and depart
              your event. Your personal information is never shared beyond
              what&rsquo;s required to fulfill your booking. Read our full{" "}
              <Link
                href="/privacy"
                className="text-[#740107] font-semibold underline underline-offset-4 hover:text-[#4a0105]"
              >
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
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white shadow-md">
            <MapPin className="h-7 w-7" />
          </div>
          <p className="mt-6 font-body text-base sm:text-lg text-white/85 font-medium">
            We currently serve Charleston, Myrtle Beach, Charlotte, Savannah,
            Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis — and
            we&rsquo;re onboarding dancers in new cities regularly.
          </p>
          <Link
            href="/cities"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#740107] px-8 py-4 font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 border border-white shadow-md group"
          >
            <span>VIEW ALL CITIES</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* Signature Crimson Velvet Curtains Transition */}
      <VelvetCurtains variant="bottom" />
      <CtaSection />
      <FaqSection />
    </>
  );
}


