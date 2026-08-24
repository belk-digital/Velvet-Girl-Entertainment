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
import { featuredCitySlugs, cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "VIP Experiences | VIP Entertainment Booking | Velvet Girl Entertainment",
  description:
    "VIP Experiences is Velvet Girl Entertainment's top booking tier, with a dedicated concierge, top-tier performers, and custom VIP entertainment.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/vip-experiences",
  },
  openGraph: {
    title: "VIP Experiences | VIP Entertainment Booking | Velvet Girl Entertainment",
    description:
      "A dedicated booking concierge and customized entertainment coordinated around your venue, lineup, timing, and event.",
    url: "https://velvetgirlentertainment.com/services/vip-experiences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP Experiences | VIP Entertainment Booking | Velvet Girl Entertainment",
    description:
      "VIP entertainment experiences built around your venue, performers, timing, and event with dedicated booking coordination.",
  },
};

const linkCities = featuredCitySlugs
  .slice(0, 6)
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function VipExperiencesPage() {
  const service = getServiceBySlug("vip-experiences");
  const pageUrl = "https://velvetgirlentertainment.com/services/vip-experiences";

  const faqs = service?.faqs || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "VIP Experiences | VIP Entertainment Booking",
        description:
          "VIP Experiences is Velvet Girl Entertainment's top booking tier, with a dedicated concierge, top-tier performers, and custom VIP entertainment.",
        isPartOf: { "@id": "https://velvetgirlentertainment.com/#website" },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": `${pageUrl}#primaryimage`,
          url: "https://velvetgirlentertainment.com/gallery%20images/DIOR.webp",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "VIP Experiences", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "VIP Experiences",
        serviceType: "VIP entertainment booking",
        url: pageUrl,
        description:
          "VIP Experiences is Velvet Girl Entertainment's top booking tier, built for private event entertainment that needs real coordination. A dedicated booking concierge takes the event from the first phone call through the last hour of the night, pairing available performers with the client's chosen venue, and handling multi-performer lineups, custom add-ons, and venue-specific timing or access requirements.",
        provider: {
          "@type": "Organization",
          name: "Velvet Girl Entertainment",
          url: "https://velvetgirlentertainment.com/",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Adults 18 and over",
          suggestedMinAge: 18,
        },
        areaServed: linkCities.map((c) => ({
          "@type": "City",
          name: c.name,
          addressRegion: c.stateSlug === "south-carolina" ? "SC" : c.stateSlug === "north-carolina" ? "NC" : c.stateSlug === "georgia" ? "GA" : c.stateSlug === "florida" ? "FL" : "IN",
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${pageUrl}#included`,
          name: "What's Included",
          itemListElement: (service?.whatsIncluded || [
            "Top-Tier Performers",
            "Dedicated Booking Concierge",
            "Private Location Entertainment",
            "Hotel Suite Entertainment",
            "Vacation Rental Entertainment",
            "Party Bus Entertainment",
            "Yacht Party Entertainment",
            "Custom VIP Add-Ons",
          ]).map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
        "mainEntityOfPage": { "@id": `${pageUrl}#webpage` },
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to book a VIP Experience with Velvet Girl Entertainment",
        description:
          "Four steps from first inquiry to showtime, with the booking team coordinating everything in between.",
        about: { "@id": `${pageUrl}#service` },
        inLanguage: "en-US",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Choose Your City",
            text: "Start with one of Velvet Girl Entertainment's active service cities, or ask about destination coverage if your event is outside those markets.",
            url: `${pageUrl}#step-01`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Select Performers",
            text: "Review available entertainers and their real, unedited profile photos, then shortlist the performers you want for your event.",
            url: `${pageUrl}#step-02`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Confirm Your Booking",
            text: "Send your inquiry online, by phone, or by text. The booking team confirms availability, pricing, venue details, and the requirements for your event.",
            url: `${pageUrl}#step-03`,
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Enjoy Your Event",
            text: "Once the booking is confirmed, the entertainment team coordinates arrival timing and agreed event details so you can focus on your guests.",
            url: `${pageUrl}#step-04`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#cities`,
        name: "Book VIP Experiences in Your City",
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: linkCities.length,
        itemListElement: linkCities.map((city, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: city.name,
          url: `https://velvetgirlentertainment.com/cities/${city.stateSlug}/${city.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
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
      title: "Choose Your City",
      subtitle: "STEP 01 · LOCATION",
      description:
        "Start with one of Velvet Girl Entertainment's active service cities, or ask about destination coverage if your event is outside those markets.",
    },
    {
      title: "Select Performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description:
        "Review available entertainers and their real, unedited profile photos, then shortlist the performers you want for your event.",
    },
    {
      title: "Confirm Your Booking",
      subtitle: "STEP 03 · BOOKING TEAM",
      description:
        "Send your inquiry online, by phone, or by text. The booking team confirms availability, pricing, venue details, and the requirements for your event.",
    },
    {
      title: "Enjoy Your Event",
      subtitle: "STEP 04 · SHOWTIME",
      description:
        "Once the booking is confirmed, the entertainment team coordinates arrival timing and agreed event details so you can focus on your guests.",
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
        title="VIP Entertainment Experiences"
        subtitle="Velvet Girl Entertainment's top tier of VIP entertainment experiences, with a dedicated concierge from first call to showtime."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for VIP entertainment experiences service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">VIP Experiences</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About VIP Experiences">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            VIP Experiences is Velvet Girl Entertainment&apos;s top booking tier, built for private event entertainment that needs real coordination rather than a confirmation email. A dedicated booking concierge takes the event from the first phone call through the last hour of the night, pairing available performers with the venue you&apos;ve chosen — a luxury hotel suite, a private estate, a vacation rental, a chartered yacht, or a party bus. Multi-performer lineups, custom VIP add-ons, and venue-specific timing or access requirements are handled as part of the service rather than treated as exceptions. Destination bookings may also be available outside Velvet Girl Entertainment&apos;s regular city markets, subject to performer availability and travel logistics.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A{" "}
            <Link
              href="/services"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              standard booking
            </Link>{" "}
            with Velvet Girl Entertainment is handled by the general booking team. VIP Experiences adds dedicated entertainment coordination: one point of contact who knows your date, guest count, venue, performer preferences, and timing. That coordination can include custom add-ons, multi-performer lineups, venue access requirements, and day-of timing details. The goal is simple: you make the decisions, while the booking team handles the entertainment coordination around them.
          </p>
        </Reveal>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(
              service?.whatsIncluded || [
                "Top-Tier Performers",
                "Dedicated Booking Concierge",
                "Private Location Entertainment",
                "Hotel Suite Entertainment",
                "Vacation Rental Entertainment",
                "Party Bus Entertainment",
                "Yacht Party Entertainment",
                "Custom VIP Add-Ons",
              ]
            ).map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-white/10 rounded-xl bg-black p-6 shadow-sm hover:border-[#380605]/50 transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#380605]/10 text-[#380605]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-display text-base font-bold text-white">
                  {item === "Yacht Party Entertainment" ? (
                    <Link href="/services/yacht-parties" className="hover:text-[#C5A880] transition-colors">
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section eyebrow="WHAT TO EXPECT" title="What to Expect" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Every VIP Experience begins with a conversation about the event: the venue, access rules, guest count, timing, performer preferences, and any custom requests. From there, the booking team confirms performer availability and pricing and coordinates the entertainment around the event schedule. The proposal is built around the specific booking rather than forcing every event into the same package. If something changes before or during the event, the client has a direct point of contact for booking coordination.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="Four steps from first inquiry to showtime, with the booking team coordinating everything in between."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* DESTINATION EVENTS */}
      <Section eyebrow="DESTINATION EVENTS" title="Destination VIP Entertainment">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            If your event is somewhere Velvet Girl Entertainment doesn&apos;t have a local roster, ask anyway. Performers travel for destination bachelor and bachelorette weekends, wedding weekends, and group celebrations, and the booking team confirms whether it&apos;s workable for your dates before anything is committed. Availability depends on the performers you want, the date, the location, and travel logistics, so destination events are worth raising as early as you can.
          </p>
        </Reveal>
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book VIP Experiences in Your City"
        subtitle="Velvet Girl Entertainment offers VIP entertainment in its active service markets and may arrange destination coverage for private events outside those markets, subject to availability and travel requirements."
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {linkCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.stateSlug}/${city.slug}`}
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
      <FaqSection items={faqs} title="VIP Experiences FAQ" />
    </>
  );
}
