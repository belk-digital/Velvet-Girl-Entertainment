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
  title: "Pool Party Entertainment & Dancers | Velvet Girl Entertainment",
  description:
    "Book pool party entertainment for private homes, vacation rentals, and resort or hotel pools — verified entertainers, daytime or evening slots. Adults 18+.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/pool-parties",
  },
  openGraph: {
    title: "Pool Party Entertainment & Dancers | Velvet Girl Entertainment",
    description:
      "Book pool party entertainment for private homes, vacation rentals, and resort or hotel pools — verified entertainers, daytime or evening slots. Adults 18+.",
    url: "https://velvetgirlentertainment.com/services/pool-parties",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool Party Entertainment & Dancers | Velvet Girl Entertainment",
    description:
      "Book pool party entertainment for private homes, vacation rentals, and resort or hotel pools — verified entertainers, daytime or evening slots. Adults 18+.",
  },
};

const activeCities = [
  { name: "Charleston", href: "https://velvetgirlentertainment.com/cities/south-carolina/charleston" },
  { name: "Myrtle Beach", href: "https://velvetgirlentertainment.com/cities/south-carolina/myrtle-beach" },
  { name: "Charlotte", href: "https://velvetgirlentertainment.com/cities/north-carolina/charlotte" },
  { name: "Savannah", href: "https://velvetgirlentertainment.com/cities/georgia/savannah" },
  { name: "Atlanta", href: "https://velvetgirlentertainment.com/cities/georgia/atlanta" },
  { name: "Miami", href: "https://velvetgirlentertainment.com/cities/florida/miami" },
  { name: "Orlando / Daytona Beach", href: "https://velvetgirlentertainment.com/cities/florida/orlando-daytona-beach" },
  { name: "Indianapolis", href: "https://velvetgirlentertainment.com/cities/indiana/indianapolis" },
];

export const poolPartyFaqs = [
  {
    question: "Do you book pool parties at resorts, or only private residences?",
    answer:
      "Both. We book pool party entertainment at private residences, vacation rentals, and resort or hotel pools. Resort and hotel bookings just need a bit more detail up front — note your cabana or pool area, any guest-access rules, and the time window you've reserved, and your booking specialist will build the arrival around it.",
  },
  {
    question: "Are pool party bookings available during the day?",
    answer:
      "Yes — daytime and evening slots are both available. Pool celebrations often start in the early afternoon, and we keep performers available across both windows for exactly that reason. Tell us your preferred time when you book and we'll confirm what's open on your date.",
  },
  {
    question: "Can I book pool party entertainment at an Airbnb or vacation rental?",
    answer:
      "Yes. Vacation rentals are one of the most common venues we book poolside entertainment for, particularly for bachelor weekends and group trips. Check your rental agreement first — some listings limit guest counts, events, or noise after a certain hour — because confirming that the venue permits your booking is the host's responsibility, not ours.",
  },
  {
    question: "Do I need permission from the venue?",
    answer:
      "Yes, and it's on you to get it. Under our terms, the customer is responsible for confirming that the venue is legally permitted to host the entertainment being booked. For a private home you own, that's usually straightforward. For a resort pool, an HOA or community pool, or a rental property, check with management or your host before the deposit — it's a five-minute conversation that prevents a very awkward one later.",
  },
  {
    question: "How far in advance should I book a pool party?",
    answer:
      "One to two weeks is the sweet spot, especially for weekend dates in summer. Shorter notice is often workable in our active cities — call or text rather than booking online, since online deposit payment is only available for bookings made 24 or more hours ahead. Destination bookings, custom themes, and larger groups need more runway: plan on two to four weeks.",
  },
  {
    question: "Can I request a specific performer for my pool party?",
    answer:
      "Yes, subject to her availability on your date. Browse performer profiles on your city page and name who you'd like when you inquire. The photos are real and unedited, so the person you select is the person who shows up.",
  },
  {
    question: "How much does pool party entertainment cost?",
    answer:
      "Pricing depends on your city, date, time window, how many entertainers you book, and any upgrades you add, so we quote per booking rather than publishing a flat rate. Every fee is itemized and confirmed in writing before you pay anything. Call or text (843) 938-7377 with your date and group size for a quote.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes. A non-refundable deposit confirms your booking and locks in your entertainer. The remaining balance is due on arrival, before the performance begins. Bookings are only confirmed once the deposit is received and availability is confirmed in writing.",
  },
  {
    question: "What happens if it rains on my pool party date?",
    answer:
      "Reach out to your booking specialist as early as you can. Rescheduling is subject to performer availability and a rescheduling fee, and requests need to be in writing at least two days before the original date. If you cancel instead, cancelling two or more days out costs only the deposit; inside two days, a fee equal to 50% of the booking applies. Weather is unpredictable — an early call gives us more room to work with.",
  },
  {
    question: "Which cities do you book pool parties in?",
    answer:
      "We currently book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis, and we onboard new markets regularly. For events outside those cities — a beach house down the coast, a destination bachelor weekend — send us your dates and location and we'll confirm whether we can arrange travel.",
  },
  {
    question: "Can I book pool party entertainment for a bachelor party or birthday?",
    answer:
      "Yes — those are two of the most common reasons people book poolside. Group celebrations, birthdays, and bachelor weekends all work well in a pool setting, and you can pick a theme, costumes, and dancer count when you build your package. See our bachelor party and birthday party services for occasion-specific details.",
  },
  {
    question: "What are the rules at a Velvet Girl pool party?",
    answer:
      "Every event is adults-only and every attendee must be 18 or older with valid government-issued ID available. A six-foot buffer is maintained between the performer and guests at all times — it's a no-contact booking. Performances comply with local attire and conduct ordinances for your area, and both the performer and our team reserve the right to end a booking if those rules aren't respected. Full details are in our Terms of Service.",
  },
];

export default function PoolPartiesPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/pool-parties";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Pool Party Entertainment & Dancers | Velvet Girl",
        description:
          "Book pool party entertainment for private homes, vacation rentals, and resort or hotel pools — verified entertainers, daytime or evening slots. Adults 18+.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://velvetgirlentertainment.com/#website" },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Pool Parties", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Pool Party Entertainment",
        serviceType: "Adult entertainment booking",
        description:
          "Booking of verified professional entertainers for poolside celebrations at private residences, vacation rentals, and resort or hotel pools, with daytime and evening availability. Adults 18 and over only.",
        url: pageUrl,
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
        },
        areaServed: [
          { "@type": "City", name: "Charleston", addressRegion: "SC", addressCountry: "US" },
          { "@type": "City", name: "Myrtle Beach", addressRegion: "SC", addressCountry: "US" },
          { "@type": "City", name: "Charlotte", addressRegion: "NC", addressCountry: "US" },
          { "@type": "City", name: "Savannah", addressRegion: "GA", addressCountry: "US" },
          { "@type": "City", name: "Atlanta", addressRegion: "GA", addressCountry: "US" },
          { "@type": "City", name: "Miami", addressRegion: "FL", addressCountry: "US" },
          {
            "@type": "Place",
            name: "Orlando / Daytona Beach",
            address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" },
          },
          { "@type": "City", name: "Indianapolis", addressRegion: "IN", addressCountry: "US" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: poolPartyFaqs.map(({ question, answer }) => ({
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
    "Flexible scheduling (daytime & evening slots)",
    "Private residence & backyard pool bookings",
    "Vacation rental pool bookings",
    "Resort & hotel pool bookings",
    "Cabana & daybed coordination",
    "Custom celebration themes & costume options",
    "Itemized costs confirmed in writing",
  ];

  const bookingSteps = [
    {
      title: "Choose your city",
      subtitle: "STEP 01 · LOCATION",
      description: "Select your city from the eight markets we currently serve.",
    },
    {
      title: "Select performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description: "Browse real, unedited photos of entertainers available for poolside bookings in your market.",
    },
    {
      title: "Confirm booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description: "Inquire online or by call/text. A booking specialist confirms availability, timing, and pricing in writing.",
    },
    {
      title: "Enjoy your party",
      subtitle: "STEP 04 · SHOWTIME",
      description: "Your confirmed entertainer arrives on schedule, prepared for a daytime or evening poolside performance.",
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
        title="Pool Party Entertainment"
        subtitle="Book verified entertainers for private homes, vacation rentals, and resort or hotel pools across our eight cities — daytime or evening slots."
        bgImage="/gallery images/BOAT_ POOL PARTY_.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for pool party entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Pool Parties</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Pool Party Entertainment">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Pool parties bring their own logistics — daytime sun, resort pool schedules, and a different energy than an evening indoor event — and Velvet Girl Entertainment books entertainers who are used to working in that setting. Whether it&apos;s a private residence pool, a vacation rental, or a resort pool day, we coordinate around daytime and evening availability depending on when your group is celebrating.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Resort and hotel pools often come with their own access rules, cabana reservations, and time windows, and our booking team factors that in when confirming arrival timing. We keep performers available across both daytime and evening slots specifically because pool party scheduling doesn&apos;t always follow a standard nighttime booking pattern.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Let us know your venue type — private residence, vacation rental, or resort pool — along with your date and time window, and a booking specialist will confirm availability that fits. A deposit locks in your booking, and your entertainer arrives ready for a daytime or evening poolside celebration depending on your schedule.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Every entertainer on our roster is verified before joining, and the photos you browse are real, unedited photographs of the performer herself. You can{" "}
            <Link href="https://velvetgirlentertainment.com/girls" className="text-[#C5A880] underline hover:text-white transition-colors">
              browse performer profiles
            </Link>{" "}
            for your city and request the entertainer you&apos;d like for your pool party, subject to availability on your date.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Discretion is built into how our team communicates and how entertainers arrive and depart. All pricing and terms are itemized and confirmed in writing before your deposit is paid, so there are no surprises on your party date.
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
            Provide your city, event date, preferred time window, and venue type when you inquire. A booking specialist confirms available entertainers for your schedule, provides an itemized quote, and confirms details in writing.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A non-refundable deposit confirms your booking. Under our{" "}
            <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
              Terms of Service
            </Link>
            , confirming that your venue permits the booked entertainment is the customer&apos;s responsibility. All attendees must be 18 or older with valid government photo ID, and a six-foot no-contact buffer is maintained during performances.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="Pick from the eight cities we currently serve."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Pool Party Entertainment in Your City"
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
      </Section>

      {/* CTA BAND */}
      <CtaSection />

      {/* FAQ */}
      <FaqSection
        items={poolPartyFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "Can I book pool party entertainment for a bachelor party or birthday?" ? (
                <>
                  Yes — those are two of the most common reasons people book poolside. Group celebrations, birthdays, and bachelor weekends all work well in a pool setting, and you can pick a theme, costumes, and dancer count when you build your package. See our{" "}
                  <Link href="https://velvetgirlentertainment.com/services/bachelor-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    bachelor party
                  </Link>{" "}
                  and{" "}
                  <Link href="https://velvetgirlentertainment.com/services/birthday-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    birthday party
                  </Link>{" "}
                  services for occasion-specific details.
                </>
              ) : faq.question === "What are the rules at a Velvet Girl pool party?" ? (
                <>
                  Every event is adults-only and every attendee must be 18 or older with valid government-issued ID available. A six-foot buffer is maintained between the performer and guests at all times — it&apos;s a no-contact booking. Performances comply with local attire and conduct ordinances for your area, and both the performer and our team reserve the right to end a booking if those rules aren&apos;t respected. Full details are in our{" "}
                  <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  .
                </>
              ) : (
                faq.answer
              )}
            </>
          ) as any,
        }))}
        eyebrow="QUESTIONS & ANSWERS"
        title="Pool Parties FAQ"
      />
    </>
  );
}
