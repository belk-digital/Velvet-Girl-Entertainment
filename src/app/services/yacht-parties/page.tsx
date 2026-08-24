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
  title: "Yacht Party Entertainment | Velvet Girl Entertainment",
  description:
    "Book professional entertainers for yacht and boat parties. Marina arrival coordinated around your departure time and charter length. Call or text 24/7.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/yacht-parties",
  },
  openGraph: {
    title: "Yacht Party Entertainment | Velvet Girl Entertainment",
    description:
      "Book professional entertainers for yacht and boat parties. Marina arrival coordinated around your departure time and charter length. Call or text 24/7.",
    url: "https://velvetgirlentertainment.com/services/yacht-parties",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Party Entertainment | Velvet Girl Entertainment",
    description:
      "Book professional entertainers for yacht and boat parties. Marina arrival coordinated around your departure time and charter length. Call or text 24/7.",
  },
};

const activeCities = [
  { name: "Charleston", href: "https://velvetgirlentertainment.com/cities/south-carolina/charleston" },
  { name: "Myrtle Beach", href: "https://velvetgirlentertainment.com/cities/south-carolina/myrtle-beach" },
  { name: "Charlotte", href: "https://velvetgirlentertainment.com/cities/north-carolina/charlotte" },
  { name: "Savannah", href: "https://velvetgirlentertainment.com/cities/georgia/savannah" },
  { name: "Atlanta", href: "https://velvetgirlentertainment.com/cities/georgia/atlanta" },
  { name: "Miami", href: "https://velvetgirlentertainment.com/cities/florida/miami" },
];

export const yachtPartyFaqs = [
  {
    question: "Do I need to provide the marina and departure time when booking?",
    answer:
      "Yes. Charters run on a fixed schedule, so we need your marina location, departure time, and charter length before we can confirm anything. Your booking specialist uses those three details to set an arrival window that gets your entertainer to the dock with time to spare. Without them we can discuss a date but not a workable arrival plan.",
  },
  {
    question: "Can you coordinate directly with our charter company or captain?",
    answer:
      "In many cases, yes. If arrival needs to be cleared through the charter company rather than your group, share their contact details when you book and your specialist can work with them on timing and dock access. Boarding arrangements vary from one operator and marina to the next, so telling us early how your group gets aboard gives us more room to plan around it.",
  },
  {
    question: "How far in advance should I book yacht party entertainment?",
    answer:
      "We recommend at least one to two weeks ahead, and earlier for weekends, which book out fastest. For destination events or larger group packages, two to four weeks gives us room to lock in availability and travel logistics. Yacht bookings benefit from lead time because the arrival window is tied to a departure you cannot move. Same-day and short-notice requests are welcome — call or text directly rather than booking online, and we will tell you honestly what is open.",
  },
  {
    question: "Can I request a specific entertainer for my charter?",
    answer:
      "Yes. Browse the profiles for your city and tell your specialist who you want. Requests are subject to that performer's availability on your date. Every photo on the site is real and unedited, so the dancer you select from a profile is the one who meets you at the dock. If your first choice is unavailable, your booking specialist can go through the alternatives open on your date.",
  },
  {
    question: "How many entertainers should I book for a yacht party?",
    answer:
      "It depends on your group size and how much of the charter you want the entertainment to cover — a small bachelor group on a shorter sunset cruise is a different booking from a large group on a longer charter. Dancer count is one of the things you set when you build your package, and your booking specialist will give you a straight recommendation once they know your headcount and charter length.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is quoted per event rather than published as a flat rate, because it moves with your city, date, number of dancers, charter length, and any upgrades you add. Send your charter details and our booking team will come back with a personalised quote. A deposit secures your booking and your confirmed entertainer, with the remaining balance handled through your specialist ahead of the event.",
  },
  {
    question: "Can you arrange entertainment for a yacht bachelor party?",
    answer:
      "Yes — bachelor charters are one of the most common yacht bookings we handle. The structure is the same as any other private booking: pick your dancers, set your theme and dancer count, and give us the marina and departure time. If you want the send-off built out further, our Bachelor Party package covers multiple dancer options, themed entrances, and group-friendly games you can apply to a boat event.",
  },
  {
    question: "Can I book entertainment for a birthday or a private celebration on the water?",
    answer:
      "Yes. Birthdays, group weekends, and closed private charters are all bookable, and the guest list stays yours — these are private bookings, not public events. Tell your specialist the occasion when you inquire so the theme, costume, and package can be set up to match rather than defaulting to a generic booking.",
  },
  {
    question: "What happens if my charter time changes?",
    answer:
      "Tell your booking specialist as soon as you know. Departure delays and schedule changes are a normal part of being on the water, and the arrival window can usually be re-worked around a new time. The earlier the notice, the more room there is to adjust. If a change means moving the date entirely, your specialist will walk you through what applies — cancellation and rescheduling terms depend on how close to the event the change happens.",
  },
  {
    question: "Can I book entertainment for a boat rather than a yacht?",
    answer:
      "Yes. Pontoons, cruisers, party boats, and private charters are all handled the same way. What matters is not the size of the vessel but whether there is a fixed departure time and a marina we need to reach. Our Boat/Pool Party package is built for exactly this kind of on-the-water event and can be customised before you book.",
  },
  {
    question: "What should I confirm with my yacht or charter company before booking?",
    answer:
      "Rules vary by vessel and operator, so this one is worth handling on your side first. Confirm with your yacht or charter company that outside entertainment is permitted aboard, and ask about their guest-count, boarding, and dock access requirements. We cannot speak for what any individual captain or operator allows. Getting a clear answer from them before you book means the arrival plan we build with you is one that will actually work on the day.",
  },
  {
    question: "Is yacht party entertainment available in my area?",
    answer:
      "Yacht and boat bookings are handled through our established service markets — Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, and Miami are linked on this page. If your marina sits outside those cities, reach out anyway. We do send performers to destination events, and requests are reviewed based on performer availability and travel logistics rather than assumed either way.",
  },
];

export default function YachtPartiesPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/yacht-parties";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Yacht Party Entertainment | Velvet Girl Entertainment",
        description:
          "Book professional entertainers for yacht and boat parties. Marina arrival coordinated around your departure time and charter length. Call or text 24/7.",
        isPartOf: { "@id": "https://velvetgirlentertainment.com/#website" },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Yacht Parties" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Yacht Party Entertainment",
        serviceType: "Adult entertainment booking for yacht and boat parties",
        url: pageUrl,
        description:
          "Velvet Girl Entertainment books verified professional entertainers and dancers for yacht parties, boat charters, and sunset cruises, coordinating marina arrival around the charter's departure time and length. Bookings include private, VIP, bachelor party, and birthday charters, arranged through a booking specialist.",
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        audience: {
          "@type": "Audience",
          audienceType: "Adults 18 and over",
        },
        isRelatedTo: [
          { "@type": "Service", name: "Bachelor Party Entertainment", url: "https://velvetgirlentertainment.com/services/bachelor-parties" },
          { "@type": "Service", name: "Birthday Party Entertainment", url: "https://velvetgirlentertainment.com/services/birthday-parties" },
          { "@type": "Service", name: "VIP Experiences", url: "https://velvetgirlentertainment.com/services/vip-experiences" },
          { "@type": "Service", name: "Pool Party Entertainment", url: "https://velvetgirlentertainment.com/services/pool-parties" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: yachtPartyFaqs.map(({ question, answer }) => ({
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

  const whatsIncludedItems = [
    "Verified professional entertainers",
    "Marina and dock arrival coordination",
    "Scheduling built around your charter time",
    "Multi-hour charter availability",
    "Sunset and evening bookings",
    "Custom themes and costumes",
    "Private and VIP charters",
    "Full privacy protocols",
  ];

  const bookingSteps = [
    {
      title: "Choose your city",
      subtitle: "STEP 01 · LOCATION",
      description: (
        <>
          Select the city your charter departs from. Yacht and boat bookings are handled through our established service markets, with nearby and{" "}
          <Link href="https://velvetgirlentertainment.com/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
            destination requests
          </Link>{" "}
          reviewed case by case.
        </>
      ) as any,
    },
    {
      title: "Select performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description: "Browse the entertainers available in your city. Every photo is real and unedited — no stock images, no bait-and-switch. You can request specific dancers, subject to availability on your date.",
    },
    {
      title: "Confirm your booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description: "Submit your inquiry online with Yacht Parties selected as your event type, or reach us by phone or text with your marina, departure time, and charter length. Our concierge is available 24/7 and a specialist typically follows up within a few hours to confirm availability and pricing. A deposit secures the date. Online deposits are available for bookings made 24 or more hours ahead; for anything sooner, submit the form and then call or text us directly.",
    },
    {
      title: "Enjoy your charter",
      subtitle: "STEP 04 · SHOWTIME",
      description: "Your entertainer arrives dockside before departure, verified and ready, so your group can board and get on the water without chasing anyone down.",
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
        title="Yacht Parties Entertainment"
        subtitle="Professional entertainers booked around your charter — marina arrival, departure time, and time on the water coordinated with your booking specialist."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for yacht parties entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Yacht Parties</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Yacht Parties">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Velvet Girl Entertainment books verified professional entertainers for yacht parties, boat charters, and sunset cruises. Every performer on the roster is verified before we book them, and bookings are handled by a booking specialist rather than an automated queue — which matters more on the water than it does anywhere else, because of the timing.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            A boat booking has a hard edge that a hotel suite or rental home does not. The charter leaves at a set time whether or not everyone is aboard, and once it does, there is no catching up. That single constraint shapes how we take yacht bookings: we ask for the marina, the departure time, and the charter length before anything else, and the arrival window is built backwards from there.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Most yacht bookings are{" "}
            <Link href="https://velvetgirlentertainment.com/services/private-events" className="text-[#C5A880] underline hover:text-white transition-colors">
              private celebrations
            </Link>{" "}
            rather than public events — bachelor parties, birthdays, group weekends, and VIP charters where the guest list is closed and discretion matters. As with our other private events, this is adult entertainment for guests 18 and over, and the dancers you book perform within the scope confirmed with your specialist.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            We treat dockside arrival as the deliverable, not a detail. Your booking specialist works from your departure time rather than your start time, so your entertainer is at the marina and aboard before the boat pulls away — not somewhere in the parking lot while the captain is waiting.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Where arrival needs to go through a third party, we can coordinate with your charter company or captain directly if you share their contact details. Access arrangements differ from one marina and operator to the next, so the more you can tell us about where and how your group boards, the tighter the arrival plan.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Two things carry over from every other booking we handle.{" "}
            <Link href="https://velvetgirlentertainment.com/about" className="text-[#C5A880] underline hover:text-white transition-colors">
              Every performer is verified
            </Link>{" "}
            before joining the roster, and every photo on this site is real and unedited — who you see on the profile is who meets you at the dock. Discretion is built into how we operate, from how the booking team communicates to how entertainers arrive and depart.
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
            Booking starts with four pieces of information: your city, your marina, your departure and return time, and your group size. Add the charter company name if arrival has to be cleared through them, and tell us if there is a specific dancer you want from{" "}
            <Link href="https://velvetgirlentertainment.com/girls" className="text-[#C5A880] underline hover:text-white transition-colors">
              your city&apos;s roster
            </Link>
            .
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            From there, a booking specialist confirms who is available on your date, goes over{" "}
            <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
              pricing and any upgrades
            </Link>
            , and takes a deposit to secure your booking and your confirmed entertainer. Your specialist then sets the dockside arrival window against your departure time and confirms it with you ahead of the event.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            On the day, your entertainer arrives at the marina before departure, boards with your group, and stays for the portion of the charter you have booked — a sunset cruise or a longer stretch on the water. If your charter time shifts, tell your specialist as early as you can so the arrival window can be re-worked against the new schedule, especially for{" "}
            <Link href="https://velvetgirlentertainment.com/services/vip-experiences" className="text-[#C5A880] underline hover:text-white transition-colors">
              VIP charters
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="Booking is straightforward, transparent, and handled discreetly from first contact."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Yacht party entertainment by city"
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center mb-8">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Yacht and boat bookings are handled through our established service markets, with the cities below linked for local rosters. Availability depends on your date, your departure time, and which dancers are open, so the fastest way to get a firm answer is to send your charter details and let a specialist check.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Planning something outside these cities? We do send performers to destination events, and requests are reviewed based on availability and travel logistics — share your dates, headcount, and location and we will confirm what is workable.
          </p>
        </Reveal>
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
      </Section>

      {/* CTA BAND */}
      <CtaSection subtitle="Send us your marina, date, and departure time and a booking specialist will come back with availability and a quote for your event." />

      {/* FAQ */}
      <FaqSection
        items={yachtPartyFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "Can you arrange entertainment for a yacht bachelor party?" ? (
                <>
                  Yes — bachelor charters are one of the most common yacht bookings we handle. The structure is the same as any other private booking: pick your dancers, set your theme and dancer count, and give us the marina and departure time. If you want the send-off built out further, our{" "}
                  <Link href="https://velvetgirlentertainment.com/packages/bachelor-party" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Bachelor Party package
                  </Link>{" "}
                  covers multiple dancer options, themed entrances, and group-friendly games you can apply to a boat event. See our{" "}
                  <Link href="https://velvetgirlentertainment.com/services/bachelor-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    bachelor charters
                  </Link>{" "}
                  page for details.
                </>
              ) : faq.question === "Can I book entertainment for a birthday or a private celebration on the water?" ? (
                <>
                  Yes. Birthdays, group weekends, and closed private charters are all bookable, and the guest list stays yours — these are private bookings, not public events. Tell your specialist the occasion when you inquire so the theme, costume, and package can be set up to match rather than defaulting to a generic booking. See our{" "}
                  <Link href="https://velvetgirlentertainment.com/services/birthday-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    birthday party entertainment
                  </Link>{" "}
                  page for details.
                </>
              ) : faq.question === "How many entertainers should I book for a yacht party?" ? (
                <>
                  It depends on your group size and how much of the charter you want the entertainment to cover — a small bachelor group on a shorter sunset cruise is a different booking from a large group on a longer charter. Dancer count is one of the things you set when you{" "}
                  <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
                    build your package
                  </Link>
                  , and your booking specialist will give you a straight recommendation once they know your headcount and charter length.
                </>
              ) : faq.question === "Can I book entertainment for a boat rather than a yacht?" ? (
                <>
                  Yes. Pontoons, cruisers, party boats, and private charters are all handled the same way. What matters is not the size of the vessel but whether there is a fixed departure time and a marina we need to reach. Our{" "}
                  <Link href="https://velvetgirlentertainment.com/packages/boat-pool-party" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Boat/Pool Party package
                  </Link>{" "}
                  is built for exactly this kind of on-the-water event and can be customised before you book.
                </>
              ) : faq.question === "Is yacht party entertainment available in my area?" ? (
                <>
                  Yacht and boat bookings are handled through our established{" "}
                  <Link href="https://velvetgirlentertainment.com/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
                    service markets
                  </Link>{" "}
                  — Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, and Miami are linked on this page. If your marina sits outside those cities, reach out anyway. We do send performers to destination events, and requests are reviewed based on performer availability and travel logistics rather than assumed either way.
                </>
              ) : (
                faq.answer
              )}
            </>
          ) as any,
        }))}
        eyebrow="QUESTIONS & ANSWERS"
        title="Yacht Parties FAQ"
      />
    </>
  );
}
