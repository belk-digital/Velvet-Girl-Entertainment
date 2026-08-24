import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import HowToBookTimeline from "@/components/ui/HowToBookTimeline";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = {
  title: "Bachelor Party Entertainment | Velvet Girl Entertainment",
  description:
    "Book professional entertainers for bachelor parties at hotels, vacation rentals, party buses, and private venues. Real photos, deposit-confirmed dates.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/bachelor-parties",
  },
  openGraph: {
    title: "Bachelor Party Entertainment | Velvet Girl Entertainment",
    description:
      "Book professional entertainers for bachelor parties at hotels, vacation rentals, party buses, and private venues. Real photos, deposit-confirmed dates.",
    url: "https://velvetgirlentertainment.com/services/bachelor-parties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bachelor Party Entertainment | Velvet Girl Entertainment",
    description:
      "Book professional entertainers for bachelor parties at hotels, vacation rentals, party buses, and private venues. Real photos, deposit-confirmed dates.",
  },
};

const activeCityGroups = [
  {
    state: "South Carolina",
    cities: [
      { name: "Charleston", href: "/cities/south-carolina/charleston" },
      { name: "Myrtle Beach", href: "/cities/south-carolina/myrtle-beach" },
    ],
  },
  {
    state: "North Carolina",
    cities: [{ name: "Charlotte", href: "/cities/north-carolina/charlotte" }],
  },
  {
    state: "Georgia",
    cities: [
      { name: "Savannah", href: "/cities/georgia/savannah" },
      { name: "Atlanta", href: "/cities/georgia/atlanta" },
    ],
  },
  {
    state: "Florida",
    cities: [
      { name: "Miami", href: "/cities/florida/miami" },
      { name: "Orlando / Daytona Beach", href: "/cities/florida/orlando-daytona-beach" },
    ],
  },
  {
    state: "Indiana",
    cities: [{ name: "Indianapolis", href: "/cities/indiana/indianapolis" }],
  },
];

export default function BachelorPartiesPage() {
  const service = getServiceBySlug("bachelor-parties");

  const pageUrl = "https://velvetgirlentertainment.com/services/bachelor-parties";

  const faqs = service?.faqs || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: "Bachelor Party Entertainment",
        serviceType: "Bachelor Party Entertainment",
        description:
          "Book professional entertainers for bachelor parties at hotels, vacation rentals, party buses, and private venues. Real photos, deposit-confirmed dates.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "Velvet Girl Entertainment",
          url: "https://velvetgirlentertainment.com/",
        },
        areaServed: [
          { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Myrtle Beach", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Orlando / Daytona Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Bachelor Parties", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  const bookingSteps = [
    {
      title: "Choose city",
      subtitle: "STEP 01 · LOCATION",
      description:
        "Start with where the party is being held. Each city page shows the performers in that market. For events outside our active cities, inquire about a destination booking.",
    },
    {
      title: "Select performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description:
        "Review real, unedited photos of available entertainers and note anyone you would like to request. Requests are subject to availability on your date.",
    },
    {
      title: "Confirm your booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description:
        "Submit your inquiry online, by phone, or by text. Have four things ready: the date, the location, your guest count, and any theme preferences.",
    },
    {
      title: "Enjoy your event",
      subtitle: "STEP 04 · SHOWTIME",
      description:
        "A deposit secures your booking and your confirmed entertainer. The remaining balance is handled with your booking specialist ahead of the event.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <PageHero
        eyebrow="SERVICES"
        title="Bachelor Party Entertainment"
        subtitle="Professional entertainers booked for bachelor parties at hotels, vacation rentals, private locations, party buses, and yachts. Real, unedited photos of every performer, and a deposit that confirms your date."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer booked for a private bachelor party"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Bachelor Party</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Bachelor Party Entertainment">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Bachelor party entertainment means booking professional entertainers to come to your event rather than moving the group to a venue. The party stays where you have planned it — a hotel suite, a rented house, a party bus, a boat — and the entertainment comes to you.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Velvet Girl Entertainment handles the booking side of that arrangement. You choose your city and your party theme, review the performers available in that market, and tell us about your event. A booking specialist confirms availability, walks through pricing, and secures the date and the specific entertainer against a deposit. We work with whoever is organizing the party — the best man, the maid of honor, or the groom himself. Every service we offer is available in each of our active cities, so the process described on this page applies wherever the party is being held.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Planning is a separate exercise from booking. If the date, city, and venue are not settled yet, our{" "}
            <Link
              href="/blog/how-to-plan-the-perfect-bachelor-party"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              step-by-step bachelor party checklist
            </Link>{" "}
            covers the wider weekend, and our{" "}
            <Link
              href="/blog/ultimate-charleston-bachelor-party-guide"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              Charleston bachelor party guide
            </Link>{" "}
            works through one market in detail.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Real, unedited photos of every performer. No stock photos and no bait-and-switch. Current performers are published on each{" "}
            <Link href="/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
              city page
            </Link>{" "}
            and across our{" "}
            <Link href="/girls" className="text-[#C5A880] underline hover:text-white transition-colors">
              full roster
            </Link>
            . We have explained the reasoning behind this policy in more detail{" "}
            <Link
              href="/blog/real-photos-no-bait-and-switch"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              here
            </Link>
            .
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A deposit secures your booking and your confirmed entertainer. The remaining balance is handled with your booking specialist ahead of the event. The booking process is simple, transparent, and discreet. Submit your inquiry online, by phone, or by text, and a booking specialist takes it from there.
          </p>
        </Reveal>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section title="What's Included">
        <Reveal className="mx-auto max-w-3xl space-y-6 mb-10 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Bachelor party bookings cover a range of venues and formats. We book hotel visits, vacation rentals and short-term rental homes, private locations, party bus routes,{" "}
            <Link
              href="/services/pool-parties"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              poolside events
            </Link>
            , and{" "}
            <Link
              href="/services/yacht-parties"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              boat and yacht celebrations
            </Link>
            . Venue type affects what you will need to confirm before booking. For a rental property, confirm that the property allows guests.
          </p>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(service?.whatsIncluded || [
              "Professional entertainers",
              "Flexible scheduling",
              "Private locations",
              "Hotel visits",
              "Vacation rentals",
              "Party buses",
              "Yachts",
              "VIP events",
            ]).map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-white/10 rounded-xl bg-black p-6 shadow-sm hover:border-[#380605]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#380605]/10 text-[#380605]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-display text-base font-bold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section title="What to Expect" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            You choose your city and party theme, review real photos of available performers, and submit your event details — date, location, guest count, and any theme preferences. A booking specialist follows up to confirm availability and walk through pricing. A deposit then secures your booking and your confirmed entertainer, and the remaining balance is handled with your booking specialist ahead of the event.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            If plans change, contact your booking specialist as soon as possible. Timing, location, and headcount can often be adjusted with more than twenty-four hours&apos; notice. For same-day changes, call or text directly.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="How Booking Works"
        subtitle="We make the entire booking process simple, transparent, and discreet."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>



      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Bachelor Parties in your city"
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {[
            { name: "Charleston", href: "/cities/south-carolina/charleston" },
            { name: "Myrtle Beach", href: "/cities/south-carolina/myrtle-beach" },
            { name: "Charlotte", href: "/cities/north-carolina/charlotte" },
            { name: "Savannah", href: "/cities/georgia/savannah" },
            { name: "Atlanta", href: "/cities/georgia/atlanta" },
            { name: "Miami", href: "/cities/florida/miami" },
            { name: "Orlando / Daytona Beach", href: "/cities/florida/orlando-daytona-beach" },
            { name: "Indianapolis", href: "/cities/indiana/indianapolis" },
          ].map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="border border-white/10 rounded-full bg-black px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#380605] hover:bg-[#380605] hover:text-white shadow-sm"
            >
              {city.name}
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* CTA BLOCK */}
      <CtaSection />

      {/* FAQ */}
      <FaqSection items={faqs} title="Bachelor Party FAQ" />
    </>
  );
}
