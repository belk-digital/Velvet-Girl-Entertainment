import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import HowToBookTimeline from "@/components/ui/HowToBookTimeline";

export const metadata: Metadata = {
  title: "Private Event Entertainment | Velvet Girl Entertainment",
  description:
    "Book professional entertainers for private events at residences, hotel suites and vacation rentals. Verified performers, real photos, discreet booking.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/private-events",
  },
  openGraph: {
    title: "Private Event Entertainment | Velvet Girl Entertainment",
    description:
      "Discreet private event entertainment — private residences, hotel suites and vacation rentals, with verified entertainers and real, unedited photos.",
    url: "https://velvetgirlentertainment.com/services/private-events",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Event Entertainment | Velvet Girl Entertainment",
    description:
      "Discreet private event entertainment — private residences, hotel suites and vacation rentals, with verified entertainers and real, unedited photos.",
  },
};

const activeCities = [
  { name: "Charleston", href: "https://velvetgirlentertainment.com/cities/south-carolina/charleston", state: "South Carolina" },
  { name: "Myrtle Beach", href: "https://velvetgirlentertainment.com/cities/south-carolina/myrtle-beach", state: "South Carolina" },
  { name: "Charlotte", href: "https://velvetgirlentertainment.com/cities/north-carolina/charlotte", state: "North Carolina" },
  { name: "Savannah", href: "https://velvetgirlentertainment.com/cities/georgia/savannah", state: "Georgia" },
  { name: "Atlanta", href: "https://velvetgirlentertainment.com/cities/georgia/atlanta", state: "Georgia" },
  { name: "Miami", href: "https://velvetgirlentertainment.com/cities/florida/miami", state: "Florida" },
  { name: "Orlando / Daytona Beach", href: "https://velvetgirlentertainment.com/cities/florida/orlando-daytona-beach", state: "Florida" },
  { name: "Indianapolis", href: "https://velvetgirlentertainment.com/cities/indiana/indianapolis", state: "Indiana" },
];

export const privateEventsFaqs = [
  {
    question: "What kinds of events qualify as a private event booking?",
    answer:
      "Any adult celebration that doesn't fit one of our named categories — divorce parties, promotions, reunions, homecomings, anniversaries, going-away parties, and unstructured group nights. If your event does fit a category, such as a bachelor party, birthday or girls' night out, that service page will serve you better. Not sure which applies? Submit a Private Events inquiry and a booking specialist will point you to the right one.",
  },
  {
    question: "Can I book entertainers for a private residence?",
    answer:
      "Yes. Private residences are among the most common settings for these bookings. Share the city, the date and your expected guest count when you inquire, and your specialist will confirm availability and coordinate arrival details. As the host, you're responsible for confirming that this type of entertainment is permitted at your address.",
  },
  {
    question: "Do you book hotel suites and vacation rentals?",
    answer:
      "Yes. Hotel suites, vacation rentals and rented venues are all supported alongside private residences. Access and arrival differ at each, so mention the venue type in your inquiry — for hotels, have the room number and any guest access details ready.",
  },
  {
    question: "Which cities do you cover for private events?",
    answer:
      "We book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach and Indianapolis, and we onboard new markets regularly. Every service, including Private Events, is available in every active city.",
  },
  {
    question: "Can you cover a city that isn't on the list?",
    answer:
      "Often, yes. We regularly send performers to events beyond our primary cities for destination celebrations and group weekends. Send your dates, location and headcount and we'll confirm availability and travel logistics. Allow two to four weeks for destination bookings, and note that travel costs may apply for events well outside our home market — these are itemised in your booking confirmation.",
  },
  {
    question: "How many entertainers can I book for one private event?",
    answer:
      "Performer count is flexible and set by your group size and the format you want. Tell your specialist your guest count and they'll recommend a number. You can also set the dancer count yourself, along with theme, costume and upgrades, through the package builder.",
  },
  {
    question: "How do I choose who performs, and are the photos real?",
    answer:
      "Browse performer profiles on your city page and request specific entertainers, subject to availability on your date. Every photo published on the site is real and unedited — no stock images. What you see is who shows up, and your confirmed performers are named in writing before the event.",
  },
  {
    question: "How much does private event entertainment cost?",
    answer:
      "There's no flat rate. Pricing depends on your city, date, performer count, booking length and any upgrades you add, so quotes are prepared per event. Travel costs may apply for events well outside our home market. Every fee is itemised and communicated to you before your booking is confirmed — nothing is added afterwards.",
  },
  {
    question: "Is a deposit required, and when is the balance due?",
    answer:
      "Yes. A booking is confirmed once we receive a deposit, which is non-refundable, and availability is confirmed to you in writing. The balance is settled before the performance begins. Online deposit payment is available for bookings made 24 or more hours ahead; inside that window, submit the form and then call or text the booking line directly.",
  },
  {
    question: "How far in advance should I book a private event?",
    answer:
      "One to two weeks is the general recommendation, and longer for weekend dates, when availability moves fastest. Same-day and last-minute requests are still welcome — call or text (843) 938-7377 rather than booking online. Destination bookings outside our active cities need two to four weeks so travel can be arranged.",
  },
  {
    question: "How private is the booking process?",
    answer:
      "Discretion is built into how the booking team communicates and how entertainers arrive and depart. Velvet Girl Entertainment does not sell your personal information. Your details are used to coordinate your booking and shared only where fulfilling it requires — with the entertainers assigned to your event, and with the service providers who handle things like payment processing. The Privacy Policy sets out the full picture.",
  },
  {
    question: "What if I need to cancel, reschedule, or my entertainer becomes unavailable?",
    answer:
      "Tell your specialist as soon as you know. Cancellations are made in writing: cancel at least two days before the event and nothing is owed beyond the non-refundable deposit; inside two days, a cancellation fee of 50% of the total booking applies. Rescheduling also needs at least two days' written notice and depends on availability. In the rare case a confirmed entertainer becomes unavailable, the booking team moves quickly to offer a comparable replacement so your event isn't affected. Full terms are on the Terms of Service page.",
  },
];

export default function PrivateEventsPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/private-events";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Private Event Entertainment",
        serviceType: "Private event entertainment booking",
        description:
          "Professional entertainers booked for private adult celebrations at private residences, hotel suites, vacation rentals and rented venues, across Velvet Girl Entertainment's active markets in the United States.",
        url: pageUrl,
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        audience: {
          "@type": "Audience",
          audienceType: "Adults 18 and over",
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
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://velvetgirlentertainment.com/book-now",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: privateEventsFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
              .replace(/\[package builder\]\(https:\/\/velvetgirlentertainment\.com\/packages\)/g, "package builder")
              .replace(/\[Privacy Policy\]\(https:\/\/velvetgirlentertainment\.com\/privacy\)/g, "Privacy Policy")
              .replace(/\[Terms of Service\]\(https:\/\/velvetgirlentertainment\.com\/terms\)/g, "Terms of Service"),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Private Events", item: pageUrl },
        ],
      },
    ],
  };

  const whatsIncludedItems = [
    "Verified professional entertainers",
    "Real, unedited performer photos to choose from",
    "Flexible performer count for your group size",
    "Private residence bookings",
    "Hotel suite bookings",
    "Vacation rental and rented venue bookings",
    "Flexible scheduling, daytime through late night",
    "Discreet communication and arrival coordination",
    "A dedicated booking specialist from inquiry to event night",
    "Itemised fees confirmed before you commit",
  ];

  const bookingSteps = [
    {
      title: "Choose city",
      subtitle: "STEP 01 · LOCATION",
      description:
        "Select your event city from our active markets. Planning something elsewhere? Ask about a destination booking — we regularly send performers to events outside our primary cities.",
    },
    {
      title: "Select performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description:
        "Browse real, unedited photos of entertainers available in your area and request the ones you want, subject to availability on your date.",
    },
    {
      title: "Confirm booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description:
        "Submit your inquiry online, by phone or by text. Our booking concierge confirms availability and pricing in writing, and a deposit confirms the booking.",
    },
    {
      title: "Enjoy your event",
      subtitle: "STEP 04 · SHOWTIME",
      description:
        "Your entertainer arrives on time, verified and professional, so you can focus on the group rather than the logistics.",
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
        title="Private Events Entertainment"
        subtitle="Professional entertainers booked for private celebrations that don't fit a standard category — discreetly coordinated, with real photos of everyone on the roster."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for private events service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Private Events</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Private Events">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Private event entertainment covers any adult celebration that doesn&apos;t fit a named booking category: a divorce party, a promotion, a reunion, a homecoming, an anniversary, or a group of friends who want a night that feels different from the usual. Velvet Girl Entertainment books professional entertainers for private residences, hotel suites, vacation rentals and rented venues, so the setting can suit the occasion rather than the other way round.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            If your event does fit a category, there&apos;s a page for it —{" "}
            <Link href="https://velvetgirlentertainment.com/services/bachelor-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
              bachelor parties
            </Link>
            ,{" "}
            <Link href="https://velvetgirlentertainment.com/services/birthday-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
              birthday parties
            </Link>{" "}
            and{" "}
            <Link href="https://velvetgirlentertainment.com/services/girls-night-out" className="text-[#C5A880] underline hover:text-white transition-colors">
              girls&apos; night out
            </Link>{" "}
            are all handled separately. Private Events is for everything else, and for occasions that sit somewhere between two of them.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Private events span too wide a range for a fixed package to be the right starting point. Booking begins with a conversation instead: your specialist asks about the setting, the group size and the tone you&apos;re after, then recommends a performer count and timing that fits the event you&apos;re actually planning.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Two things distinguish the roster. Every performer is verified before joining it, and every photo published on the site is real and unedited. No stock imagery, no bait-and-switch — you know who you&apos;re booking before you commit.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Discretion isn&apos;t an add-on. How the booking team communicates, how performers arrive and depart, and how bookings are confirmed are all built around it from your first message.
          </p>
        </Reveal>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section eyebrow="WHAT'S INCLUDED" title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whatsIncludedItems.map((item) => (
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
      <Section eyebrow="WHAT TO EXPECT" title="What to Expect" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Tell us the occasion, the city, the date and roughly how many guests you&apos;re expecting. That&apos;s enough for a booking specialist to check availability and come back with a quote, along with a recommendation on performer count and timing.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Pricing depends on your city, date, performer count and how long you&apos;d like entertainers on site, which is why quotes are prepared per event rather than published as a flat rate. All fees are itemised and confirmed before your booking is finalised, including any travel costs for events well outside our home market. A non-refundable deposit confirms the booking and secures your entertainers; the balance is settled before the performance begins.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Two practical notes for private settings. Because private residences, rentals and hotel suites all differ on access, tell your specialist the venue type early so arrival can be planned around it. And as the host, you&apos;re responsible for confirming that entertainment of this kind is permitted at your venue — worth a quick check with a building manager or rental host before you book.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Plans shift, particularly on private events where the guest list is still forming. Your specialist stays reachable between confirmation and the event date to adjust details as things settle.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="Booking a private event takes four steps, and one specialist handles all of them."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Private Events in your city"
        subtitle="Velvet Girl Entertainment books private event entertainment across our active markets, with destination bookings arranged case by case elsewhere. Every service, including Private Events, is available in every active city."
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {activeCities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="border border-white/10 rounded-full bg-black px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#380605] hover:bg-[#380605] hover:text-white shadow-sm"
            >
              {city.name}
            </Link>
          ))}
        </Reveal>
        <Reveal className="mx-auto mt-6 max-w-3xl text-center">
          <p className="font-body text-sm font-medium text-stone-300">
            Somewhere else?{" "}
            <Link href="https://velvetgirlentertainment.com/contact" className="text-[#C5A880] underline hover:text-white transition-colors">
              Tell us where and when
            </Link>{" "}
            and we&apos;ll confirm availability and travel logistics.
          </p>
        </Reveal>
      </Section>

      {/* CTA BLOCK */}
      <CtaSection subtitle="Share your date, city and guest count, and a booking specialist will confirm availability and prepare a quote." />

      {/* FAQ */}
      <Section eyebrow="QUESTIONS & ANSWERS" title="Private Events FAQ">
        <FaqSection
          items={privateEventsFaqs.map((faq) => ({
            question: faq.question,
            answer: (
              <>
                {faq.question === "How many entertainers can I book for one private event?" ? (
                  <>
                    Performer count is flexible and set by your group size and the format you want. Tell your specialist your guest count and they&apos;ll recommend a number. You can also set the dancer count yourself, along with theme, costume and upgrades, through the{" "}
                    <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
                      package builder
                    </Link>
                    .
                  </>
                ) : faq.question === "How private is the booking process?" ? (
                  <>
                    Discretion is built into how the booking team communicates and how entertainers arrive and depart. Velvet Girl Entertainment does not sell your personal information. Your details are used to coordinate your booking and shared only where fulfilling it requires — with the entertainers assigned to your event, and with the service providers who handle things like payment processing. The{" "}
                    <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    sets out the full picture.
                  </>
                ) : faq.question === "What if I need to cancel, reschedule, or my entertainer becomes unavailable?" ? (
                  <>
                    Tell your specialist as soon as you know. Cancellations are made in writing: cancel at least two days before the event and nothing is owed beyond the non-refundable deposit; inside two days, a cancellation fee of 50% of the total booking applies. Rescheduling also needs at least two days&apos; written notice and depends on availability. In the rare case a confirmed entertainer becomes unavailable, the booking team moves quickly to offer a comparable replacement so your event isn&apos;t affected. Full terms are on the{" "}
                    <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
                      Terms of Service
                    </Link>{" "}
                    page.
                  </>
                ) : (
                  faq.answer
                )}
              </>
            ) as any,
          }))}
          eyebrow="QUESTIONS & ANSWERS"
          title="Private Events FAQ"
          hideBorder
        />
      </Section>
    </>
  );
}
