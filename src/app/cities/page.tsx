import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ShieldCheck, ArrowRight, Plane } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { stateGroups } from "@/data/cities";

export const metadata: Metadata = {
  title: "Areas We Serve | Cities & Destination Bookings | Velvet Girl Entertainment",
  description:
    "See where Velvet Girl Entertainment books professional entertainers — Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis. Destination bookings available for other cities.",
  alternates: {
    canonical: "/cities",
  },
  openGraph: {
    title: "Areas We Serve | Velvet Girl Entertainment",
    description:
      "Professional entertainers booked across 8 active cities, with destination bookings available for bachelor parties and events elsewhere.",
    url: "/cities",
  },
  twitter: {
    card: "summary",
    title: "Areas We Serve | Velvet Girl Entertainment",
    description:
      "See where Velvet Girl Entertainment books professional entertainers, plus destination booking options for other cities.",
  },
};

const faqs = [
  {
    question: "What cities does Velvet Girl Entertainment currently serve?",
    answer:
      "We have active, onboarded performer rosters in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis. We're onboarding new markets regularly — check back or contact us if your city isn't listed yet.",
  },
  {
    question: "Can I book entertainment for a city that's not listed?",
    answer:
      "Often, yes. For destination bachelor parties, weddings, and group events — think Nashville, Las Vegas, or a beach-house weekend — we can arrange for a performer to travel to your event. Reach out with your dates and location and we'll confirm availability.",
  },
  {
    question: "How do I know the performer will match their photos?",
    answer:
      "We post real, unedited photos of every performer on their city page — no bait-and-switch. What you see is who shows up.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For our active cities, we can often accommodate short-notice requests. For destination bookings, custom themes, or larger group packages, we recommend booking at least 2-4 weeks ahead to lock in availability and travel logistics.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://velvetgirlentertainment.com/cities/#webpage",
      url: "https://velvetgirlentertainment.com/cities",
      name: "Areas We Serve | Velvet Girl Entertainment",
      description:
        "See where Velvet Girl Entertainment books professional entertainers — Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://velvetgirlentertainment.com/#organization",
      name: "Velvet Girl Entertainment",
      url: "https://velvetgirlentertainment.com/",
      sameAs: ["https://www.instagram.com/velvetgirlentertainment"],
      areaServed: stateGroups.flatMap((g) =>
        g.cities.map((c) => ({
          "@type": "City",
          name: c.name,
        }))
      ),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function CitiesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="AREAS WE SERVE"
        title="Now Booking in 8 Cities"
        subtitle="We're onboarding dancers in new markets regularly. Browse our current cities below to see local performers and popular areas we cover."
        bgImage="/gallery images/MYRTLE BEACH.webp"
      />

      <div className="px-6 pt-12 bg-black">
        <Reveal className="mx-auto flex max-w-3xl items-start gap-4 border border-[#4C0C0A]/30 bg-[#4C0C0A]/5 p-6 text-left shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4C0C0A] text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="font-body text-sm sm:text-base leading-relaxed text-stone-300 font-medium">
            We&rsquo;re one of the only booking agencies that posts{" "}
            <span className="text-[#4C0C0A] font-bold">real, unedited photos</span> of
            our dancers on every city page. No bait-and-switch — you know
            exactly who&rsquo;s showing up.
          </p>
        </Reveal>
      </div>

      <div className="px-6 py-20 sm:py-28 bg-black">
        <div className="mx-auto max-w-7xl space-y-16">
          {stateGroups.map((group, gi) => (
            <Reveal key={group.slug} delay={(gi % 4) * 0.06}>
              <div className="border-b border-white/10 pb-4 mb-6">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                  {group.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.stateSlug}/${city.slug}`}
                    className="group flex items-center justify-between border border-white/10 bg-black px-6 py-5 font-body text-base font-bold text-white transition-all duration-300 hover:border-[#4C0C0A] hover:bg-[#4C0C0A] hover:text-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 shrink-0 text-[#4C0C0A] group-hover:text-white transition-colors" />
                      <span>{city.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Section eyebrow="DESTINATION BOOKINGS" title="Planning an event outside these cities?" theme="muted">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <Plane className="h-6 w-6" />
          </div>
          <p className="mt-6 font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Planning a destination bachelor party, wedding weekend, or group
            celebration somewhere we don&rsquo;t have a local roster yet? We
            regularly send performers to events outside our primary cities —
            think Nashville, Las Vegas, or a rented beach house down the coast.
            Share your dates, headcount, and location, and we&rsquo;ll confirm
            availability and travel logistics for your{" "}
            <Link href="/packages/bachelor-party" className="font-bold text-white underline">
              bachelor party package
            </Link>
            .
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="tracking-caps inline-flex items-center gap-2 bg-white text-[#4C0C0A] px-9 py-4 font-body text-sm font-semibold transition-transform duration-300 hover:scale-105"
            >
              Inquire About a Destination Booking
            </Link>
          </div>

          {/* Destination Showcase Photo Grid (.webp) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 aspect-[16/10] group">
              <Image
                src={encodeURI("/gallery images/BEACH DAY PACKAGE OR BEACH CITY PAGE.webp")}
                alt="Beach Day VIP Destination Package"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold uppercase tracking-wider">
                Beach House &amp; Coastal Getaways
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 aspect-[16/10] group">
              <Image
                src={encodeURI("/gallery images/BOAT_ POOL PARTY_.webp")}
                alt="Boat and Pool Party Destinations"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold uppercase tracking-wider">
                Resort Pool &amp; Yacht Experiences
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="FAQ" title="Areas We Serve — Common Questions">
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map(({ question, answer }) => (
            <Reveal key={question}>
              <div className="border border-white/10 rounded-xl bg-black p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{question}</h3>
                <p className="mt-2 font-body text-sm text-stone-300 font-medium leading-relaxed">
                  {answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
