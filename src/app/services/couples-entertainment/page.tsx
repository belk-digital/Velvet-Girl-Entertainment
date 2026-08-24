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
  title: "Couples Entertainment | Velvet Girl Entertainment",
  description:
    "Book private entertainment for two at your home, hotel suite, or vacation rental. Verified entertainers, real photos, discreet booking across 8 cities.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/couples-entertainment",
  },
  openGraph: {
    title: "Couples Entertainment | Velvet Girl Entertainment",
    description:
      "Private entertainment bookings for couples at residences, hotel suites, and vacation rentals with verified performers and real, unedited photos.",
    url: "https://velvetgirlentertainment.com/services/couples-entertainment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couples Entertainment | Velvet Girl Entertainment",
    description:
      "Book private entertainment for two at your home, hotel suite, or vacation rental. Verified entertainers, real photos, discreet booking across 8 cities.",
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

export const couplesFaqs = [
  {
    question: "What is couples entertainment?",
    answer:
      "It is a private entertainment booking made by two people rather than a group. A verified professional entertainer is booked to your home, a hotel suite, or a vacation rental, and the booking is arranged around the date, setting, and preferences you provide when you inquire.",
  },
  {
    question: "Is couples entertainment private?",
    answer:
      "Yes. The booking is arranged for the two of you. Your information is used to coordinate it and is not sold, and it is shared only where fulfilling the booking requires it, such as with your assigned entertainer, or where the law requires it. We do not use your details for marketing without your prior consent. Full detail is in our Privacy Policy.",
  },
  {
    question: "Can couples entertainment be booked at a hotel?",
    answer:
      "Yes. Hotel suites and hotel rooms are supported settings. Check your hotel's policy before you confirm, since responsibility for making sure the venue permits the booking sits with the customer.",
  },
  {
    question: "Can couples entertainment be booked at home?",
    answer:
      "Yes. Private residences are a supported setting. If rules apply to your building or residential community, it is worth checking those before you confirm.",
  },
  {
    question: "Can couples entertainment be booked at a vacation rental?",
    answer:
      "Yes. Vacation rentals are a supported setting. Check the property's house rules first, for the same reason as a hotel booking.",
  },
  {
    question: "Can couples entertainment be customized for an anniversary or other occasion?",
    answer:
      "Yes. Theme, costume, dancer count, and upgrades such as extra time can be set when you build your package, and your booking specialist can help match them to what you are celebrating. Allow two to four weeks if you want a custom theme.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is quoted per booking rather than published, because it depends on your city and venue, your date, the entertainer you request, dancer count, and any theme or upgrade options. Travel expenses may apply for locations outside a thirty-mile radius of Charleston, South Carolina. Fees are itemized and confirmed in writing before the booking is confirmed.",
  },
  {
    question: "Is a deposit required, and when is the balance due?",
    answer:
      "Yes. A non-refundable deposit, together with your acceptance of our Terms of Service, is what confirms the booking and secures your date. The remaining balance is due on your entertainer's arrival, before the performance begins. Online deposit payment is available for bookings made at least 24 hours in advance.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "One to two weeks works for most dates, and further ahead for weekends and holidays such as Valentine's Day. Allow two to four weeks for a custom theme or a booking that involves travel. Same-day inquiries are welcome by phone or text and remain subject to entertainer availability.",
  },
  {
    question: "Can we request a specific entertainer?",
    answer:
      "Yes. Browse the entertainers on your city page and name the one you would like. Requests are subject to her availability on your date. Photos on the roster are real and unedited. If a confirmed entertainer becomes unavailable, our booking team will work to offer a comparable replacement.",
  },
  {
    question: "Who can attend, and what requirements apply to the booking?",
    answer:
      "All attendees must be 18 or over. Customers and entertainers each provide valid government-issued photo ID before a booking is confirmed, which is how age and identity are verified. A six-foot distance is maintained between the entertainer and attendees, and this no-contact rule is a condition of performance. Local ordinances may set minimum attire requirements. Confirming that your venue may lawfully host the entertainment you have booked is the customer's responsibility. Full detail is in our Terms of Service.",
  },
  {
    question: "What if we need to cancel or reschedule?",
    answer:
      "Cancellations must be submitted in writing. If you cancel at least two days before the event, nothing further is owed beyond the non-refundable deposit. Cancelling less than two days ahead incurs a fee of 50% of the total booking fee. Rescheduling also needs at least two days' written notice, is subject to availability, and incurs a rescheduling fee.",
  },
];

export default function CouplesEntertainmentPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/couples-entertainment";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Couples Entertainment",
        serviceType: "Entertainment booking for couples",
        description:
          "A private entertainment booking for two people. A verified professional entertainer is booked to a private residence, hotel suite, or vacation rental, with theme, costume, dancer count, and upgrade options set by the customer.",
        url: pageUrl,
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Myrtle Beach", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Orlando", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
        ],
        availableChannel: [
          {
            "@type": "ServiceChannel",
            name: "Online booking inquiry",
            serviceUrl: "https://velvetgirlentertainment.com/book-now",
          },
          {
            "@type": "ServiceChannel",
            name: "Phone and text booking",
            servicePhone: "+1-843-938-7377",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Couples Entertainment", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: couplesFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
              .replace(/\[Privacy Policy\]\(https:\/\/velvetgirlentertainment\.com\/privacy\)/g, "Privacy Policy")
              .replace(/\[Terms of Service\]\(https:\/\/velvetgirlentertainment\.com\/terms\)/g, "Terms of Service"),
          },
        })),
      },
    ],
  };

  const whatsIncludedItems = [
    "Verified professional entertainers",
    "Real, unedited performer photos",
    "Private residence bookings",
    "Hotel suite and hotel room bookings",
    "Vacation rental bookings",
    "Custom celebration themes & upgrades",
    "Itemized costs confirmed in writing",
    "Discreet booking process & arrival",
  ];

  const bookingSteps = [
    {
      title: "Choose your city",
      subtitle: "STEP 01 · LOCATION",
      description:
        "Select your event city from our eight active markets. Planning a retreat or getaway elsewhere? Ask about a destination booking.",
    },
    {
      title: "Select performer",
      subtitle: "STEP 02 · REAL PHOTOS",
      description:
        "Browse real, unedited photos of entertainers available in your area and request the performer you would like.",
    },
    {
      title: "Confirm booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description:
        "Inquire online, by phone, or by text. A booking specialist confirms availability and pricing in writing.",
    },
    {
      title: "Your evening",
      subtitle: "STEP 04 · SHOWTIME",
      description:
        "Your entertainer arrives at the agreed time and performs to the scope agreed when you booked.",
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
        title="Couples Entertainment"
        subtitle="Verified professional entertainers, booked privately for two, at your home, hotel suite, or vacation rental across our eight active cities."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for couples entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Couples Entertainment</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="What Couples Entertainment Is">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Couples entertainment is a private booking made by two people rather than a group. You choose the setting, the date, and the entertainer you would like to request, and the booking is arranged around those details.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            It suits anniversaries, birthdays, Valentine&apos;s Day, and other private celebrations, and it works equally well when there is no particular occasion attached. What separates it from our group services is scale and coordination: the booking is built for two, and the conversation with your specialist covers your preferences directly rather than headcount and logistics.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            If you are planning something for a larger group instead, our{" "}
            <Link href="https://velvetgirlentertainment.com/services/private-events" className="text-[#C5A880] underline hover:text-white transition-colors">
              private group events
            </Link>{" "}
            service is the better fit.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Couples Book With Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Performer photos are real and unedited. The photos on our roster are the entertainers themselves, not stock imagery. You can{" "}
            <Link href="https://velvetgirlentertainment.com/girls" className="text-[#C5A880] underline hover:text-white transition-colors">
              browse the roster
            </Link>{" "}
            on your city page and request the entertainer you would like, subject to her availability on your date. If a confirmed entertainer becomes unavailable, our booking team will work to offer a comparable replacement.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Entertainers are verified before joining our roster. Verification is completed before an entertainer is listed, not after a booking.{" "}
            <Link href="https://velvetgirlentertainment.com/about" className="text-[#C5A880] underline hover:text-white transition-colors">
              How we vet performers
            </Link>
            .
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Discretion is built into how we operate. Your information is used to coordinate your booking and is not sold. It is shared only where fulfilling the booking requires it, such as with your assigned entertainer, or where the law requires it. We do not use your details for marketing without your prior consent. Discretion also extends to how our booking team communicates and to how entertainers arrive and depart. Full detail is in our{" "}
            <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Costs are agreed before you commit. Fees are itemized and confirmed in writing before a booking is confirmed, so the cost and the scope are settled in advance rather than on the night.
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
            When you inquire, have your city, date, venue, and a rough idea of what you are celebrating ready. If you already know which entertainer you would like to request, or which theme or upgrades you want, mention those too.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A booking specialist follows up within a few hours to go over availability, pricing, and any specific requests. Our booking concierge is reachable 24/7 by phone or text.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Pricing is quoted per booking rather than published, because it depends on the details: your city and venue, your date, the entertainer you request, dancer count, and any theme or upgrade options you add. Travel expenses may apply for locations outside a thirty-mile radius of Charleston, South Carolina, and any such fees are disclosed in your booking confirmation. Fees are itemized before anything is confirmed.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A non-refundable deposit confirms the booking and, together with your acceptance of our Terms of Service, is what secures the date. The remaining balance is due on your entertainer&apos;s arrival, before the performance begins. Online deposit payment is available for bookings made at least 24 hours in advance; for anything closer, submit the inquiry and then call or text.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            All bookings are subject to our published eligibility, safety, and venue requirements, which are set out in our{" "}
            <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
              Terms of Service
            </Link>{" "}
            and summarized in the FAQ below.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="Four steps to arrange private entertainment for two."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Couples Entertainment in Your City"
        subtitle="We hold active, onboarded performer rosters in eight cities across South Carolina, North Carolina, Georgia, Florida, and Indiana."
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
      <CtaSection subtitle="Share your city, date, and venue details, and a booking specialist will confirm availability and prepare a quote." />

      {/* FAQ */}
      <FaqSection
        items={couplesFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "Is couples entertainment private?" ? (
                <>
                  Yes. The booking is arranged for the two of you. Your information is used to coordinate it and is not sold, and it is shared only where fulfilling the booking requires it, such as with your assigned entertainer, or where the law requires it. We do not use your details for marketing without your prior consent. Full detail is in our{" "}
                  <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </>
              ) : faq.question === "Who can attend, and what requirements apply to the booking?" ? (
                <>
                  All attendees must be 18 or over. Customers and entertainers each provide valid government-issued photo ID before a booking is confirmed, which is how age and identity are verified. A six-foot distance is maintained between the entertainer and attendees, and this no-contact rule is a condition of performance. Local ordinances may set minimum attire requirements. Confirming that your venue may lawfully host the entertainment you have booked is the customer&apos;s responsibility. Full detail is in our{" "}
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
        title="Couples Entertainment FAQ"
      />
    </>
  );
}
