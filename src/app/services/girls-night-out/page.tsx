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
  title: "Girls Night Out Entertainment | Velvet Girl Entertainment",
  description:
    "Book verified entertainers for a girls' night at a private residence, hotel suite, or rental. Real unedited photos, fast confirmations, discreet. 18+.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/girls-night-out",
  },
  openGraph: {
    title: "Girls Night Out Entertainment | Velvet Girl Entertainment",
    description:
      "Verified entertainers, real unedited photos, and fast confirmations for girls' night celebrations at private residences, hotel suites, and rentals.",
    url: "https://velvetgirlentertainment.com/services/girls-night-out",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girls Night Out Entertainment | Velvet Girl Entertainment",
    description:
      "Book verified entertainers for a girls' night at a private residence, hotel suite, or rental. Real unedited photos, fast confirmations, discreet. 18+.",
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

export const girlsNightOutFaqs = [
  {
    question: "What is Girls Night Out entertainment?",
    answer:
      "It's a private booking in which a professional entertainer performs at a location your group chooses, rather than your group going out to a venue. Velvet Girl Entertainment books verified performers for girls' night celebrations at private residences, hotel suites, and rented spaces across the markets we serve. You select the location, the entertainer, and the theme; we confirm availability, coordinate the details, and manage the booking. All events are 18+ and no-contact.",
  },
  {
    question: "Can we book a girls' night on short notice?",
    answer:
      "Often, yes. Girls' night bookings tend to move faster than larger events, and we take same-day requests. One practical detail worth knowing: online deposit payment is only available for bookings made 24 or more hours in advance. If your event is sooner than that, submit the form and then call or text (843) 938-7377 so a specialist can confirm availability and arrange the deposit directly. Our booking concierge is reachable 24/7.",
  },
  {
    question: "Is this only for bachelorette parties?",
    answer:
      "No. Girls Night Out covers any group celebration — birthdays, promotions, girls' weekends, or no particular occasion. Bachelorette celebrations are a common reason people book it, and a single evening within a bachelorette weekend fits this service well. If your celebration spans multiple days or needs coordination across more than one night, VIP Experiences is the better fit — it includes a dedicated concierge who manages events of that scale.",
  },
  {
    question: "Where can the entertainment take place?",
    answer:
      "Private residences, hotel suites, and vacation rentals or other rented spaces are the standard settings. What matters more than the venue type is whether that specific venue permits the entertainment you're booking. Hotels, HOAs, and short-term rental hosts all set their own rules, and confirming that is the customer's responsibility under our Terms of Service. Tell your booking specialist the venue type early and they can flag anything worth checking before you commit to a date.",
  },
  {
    question: "How much does a girls' night booking cost?",
    answer:
      "Velvet Girl Entertainment quotes each booking individually rather than publishing fixed rates. Cost depends on your market, group size, the number of entertainers, how long the entertainment runs, the theme and costume you select, and any upgrades you add. Travel fees may apply for locations outside a 30-mile radius of Charleston, South Carolina. Your booking specialist provides a quote before anything is confirmed, and a non-refundable deposit secures the date once you accept it.",
  },
  {
    question: "Can we choose the theme, costume, and number of entertainers?",
    answer:
      "Yes — that's most of what the booking conversation covers. You select a theme and costume, set how many entertainers you'd like, and add upgrades such as extra time, additional dances, or party games. You can build the booking yourself through our Packages page, or describe what you're planning to a specialist and let them put options in front of you.",
  },
  {
    question: "Can we request specific entertainers?",
    answer:
      "Yes. Browse performer profiles for your market and request the entertainers your group wants, subject to their availability on your date. Every photo on the site is real and unedited — no stock images, and the performer you book is the performer who arrives. In the rare case a confirmed entertainer becomes unavailable, our team works quickly to offer a comparable replacement so your event isn't affected.",
  },
  {
    question: "What are the age requirements and conduct rules?",
    answer:
      "Every event is strictly 18+, and no minors may be present at any booking. Velvet Girl Entertainment requires valid, unexpired government-issued photo identification to verify age and identity before a booking is confirmed, and customers are responsible for ensuring all attendees are of legal age. Performances are no-contact: a six-foot buffer is maintained between the entertainer and everyone present, and unsolicited or inappropriate contact is prohibited. Both the entertainer and the company may end a performance over safety concerns. Full details are in our Terms of Service.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "For our active markets, one to two weeks ahead gives you the widest choice of entertainers, particularly for weekend dates. Allow two to four weeks if you're booking a custom theme, a larger group package, or an event outside our active markets, since those involve additional coordination. Short-notice bookings are genuinely part of what we do, so a tight timeline is worth a call rather than an assumption that it's too late.",
  },
  {
    question: "What happens if we need to cancel or reschedule?",
    answer:
      "Cancellations must be submitted in writing. If you cancel at least two days before your event date, nothing further is owed beyond the non-refundable deposit. Within two days of the event, a cancellation fee equal to 50% of the total booking fee applies. Rescheduling also requires at least two days' notice, is subject to entertainer availability, and carries a rescheduling fee. Your booking specialist will confirm the terms that apply to your booking before you pay a deposit.",
  },
  {
    question: "How private is the booking?",
    answer:
      "Discretion runs through the whole process — how our team communicates with you, how your information is handled, and how entertainers arrive at and leave your event. Your personal details are used to coordinate the booking and are not shared or sold beyond what's required to fulfil it. Age and identity verification is a legal requirement rather than an optional step; our Privacy Policy explains exactly what's collected and why.",
  },
  {
    question: "Which markets can we book Girls Night Out in?",
    answer:
      "We currently book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando / Daytona Beach, and Indianapolis, and we onboard new markets regularly. If your event is outside those areas, it's still worth asking — we regularly arrange destination bookings for group celebrations elsewhere. Share your dates, headcount, and location and we'll confirm whether we can cover it. The current list is always on our Areas We Serve page.",
  },
];

export default function GirlsNightOutPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/girls-night-out";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Girls Night Out Entertainment | Velvet Girl Entertainment",
        description:
          "Book verified entertainers for girls' night celebrations at private residences, hotel suites, and rented spaces across the markets Velvet Girl Entertainment serves.",
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
          { "@type": "ListItem", position: 3, name: "Girls Night Out" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Girls Night Out Entertainment",
        serviceType: "Adult entertainment booking",
        url: pageUrl,
        description:
          "A private booking in which a verified professional entertainer performs at a location chosen by the client — a private residence, hotel suite, or rented space — for a girls' night celebration. The client selects the location, entertainer, theme, and costume; Velvet Girl Entertainment confirms availability, coordinates details, and manages the booking. All events are strictly 18+ and no-contact.",
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        audience: {
          "@type": "Audience",
          audienceType: "Adults aged 18 and over",
          suggestedMinAge: 18,
        },
        areaServed: [
          { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Myrtle Beach", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "Place", name: "Orlando / Daytona Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
        ],
        isRelatedTo: [
          { "@type": "Service", name: "Private Events Entertainment", url: "https://velvetgirlentertainment.com/services/private-events" },
          { "@type": "Service", name: "Birthday Parties Entertainment", url: "https://velvetgirlentertainment.com/services/birthday-parties" },
          { "@type": "Service", name: "VIP Experiences", url: "https://velvetgirlentertainment.com/services/vip-experiences" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: girlsNightOutFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
              .replace(/\[VIP Experiences\]\(https:\/\/velvetgirlentertainment\.com\/services\/vip-experiences\)/g, "VIP Experiences")
              .replace(/\[Terms of Service\]\(https:\/\/velvetgirlentertainment\.com\/terms\)/g, "Terms of Service")
              .replace(/\[Packages\]\(https:\/\/velvetgirlentertainment\.com\/packages\)/g, "Packages")
              .replace(/\[Privacy Policy\]\(https:\/\/velvetgirlentertainment\.com\/privacy\)/g, "Privacy Policy")
              .replace(/\[Areas We Serve\]\(https:\/\/velvetgirlentertainment\.com\/cities\)/g, "Areas We Serve"),
          },
        })),
      },
    ],
  };

  const whatsIncludedItems = [
    "Verified professional entertainers",
    "Flexible group sizes",
    "Flexible scheduling",
    "Private residences",
    "Hotel suites",
    "Vacation rentals and rented spaces",
    "Custom celebration themes and costume selection",
    "Booking upgrades, including additional time and additional performers",
  ];

  const bookingSteps = [
    {
      title: "Choose City",
      subtitle: "STEP 01 · LOCATION",
      description: "Select your event city or check availability for destination bookings outside our core service areas.",
    },
    {
      title: "Select Performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description: "Browse real photos of verified entertainers available in your city and choose who you want at your event.",
    },
    {
      title: "Confirm Booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description: "Submit your event details online or call our 24/7 booking line to finalize your date, deposit, and schedule.",
    },
    {
      title: "Enjoy Your Event",
      subtitle: "STEP 04 · SHOWTIME",
      description: "Your confirmed entertainers arrive on time, prepared, and ready to deliver professional entertainment for your group.",
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
        title="Girls Night Out Entertainment"
        subtitle="Book a verified entertainer for your group's celebration — at a private residence, hotel suite, or rented space in the markets we serve."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for girls night out entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Girls Night Out</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Girls Night Out">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Girls Night Out is a private booking. Instead of your group going out to a venue, a professional entertainer comes to the place you&apos;ve already chosen — a friend&apos;s house, a hotel suite, or a vacation rental in one of the markets we book.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Velvet Girl Entertainment arranges the entertainment itself: confirming which performers are available on your date, working through theme and costume with you, and coordinating arrival. You choose the location, the entertainer, and the format. We handle the rest of it.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Group size is flexible, and so is the occasion. Birthdays, promotions, girls&apos; weekends, bachelorette celebrations, or a night that doesn&apos;t need a reason all book the same way. What stays consistent is the format: your space, your group, and a verified entertainer booked for an agreed window of time.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Every booking is strictly 18+.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Girls&apos; nights come together faster than most events we book, and the process is set up for that. You can reach a booking specialist by phone, text, or the online form, and availability is often confirmed within hours rather than over several days of email.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Every performer on our roster is verified before they&apos;re listed, and every photo on the site is real and unedited. You can{" "}
            <Link href="https://velvetgirlentertainment.com/girls" className="text-[#C5A880] underline hover:text-white transition-colors">
              browse performers by market
            </Link>
            , request the ones your group wants, and the person you booked is the person who arrives. If a confirmed entertainer becomes unavailable, our team works to offer a comparable replacement so your plans hold.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Discretion is built into the process rather than added on request — it covers how our team communicates with you, how your details are handled, and how entertainers arrive at and leave your event.
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
            Start with three details: your market, your date, and roughly how many people will be there. A booking specialist confirms which entertainers are available, walks you through theme and costume options, and quotes the booking based on your group size, location, and how long you&apos;d like the entertainment to run.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A deposit confirms the booking and holds your entertainer for that date. Your specialist will also confirm the payment schedule and any remaining balance requirements before you commit — the full terms are set out in our{" "}
            <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
              Terms of Service
            </Link>
            . Between confirmation and the event, your specialist stays reachable if the details shift.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A few conditions apply to every booking, and it&apos;s better to know them at the planning stage than on the night. All attendees must be 18 or over, and valid government-issued photo ID is required to verify age and identity before a booking is confirmed. Performances are no-contact, with a six-foot buffer maintained between the entertainer and guests at all times. And the venue you choose has to permit the entertainment you&apos;re booking — that part is the customer&apos;s responsibility, which is why it&apos;s worth telling your specialist the venue type early.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="We make the entire booking process simple, transparent, and discreet."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Girls Night Out in your city"
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
        items={girlsNightOutFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "Is this only for bachelorette parties?" ? (
                <>
                  No. Girls Night Out covers any group celebration — birthdays, promotions, girls&apos; weekends, or no particular occasion. Bachelorette celebrations are a common reason people book it, and a single evening within a bachelorette weekend fits this service well. If your celebration spans multiple days or needs coordination across more than one night,{" "}
                  <Link href="https://velvetgirlentertainment.com/services/vip-experiences" className="text-[#C5A880] underline hover:text-white transition-colors">
                    VIP Experiences
                  </Link>{" "}
                  is the better fit — it includes a dedicated concierge who manages events of that scale.
                </>
              ) : faq.question === "Where can the entertainment take place?" ? (
                <>
                  Private residences, hotel suites, and vacation rentals or other rented spaces are the standard settings. What matters more than the venue type is whether that specific venue permits the entertainment you&apos;re booking. Hotels, HOAs, and short-term rental hosts all set their own rules, and confirming that is the customer&apos;s responsibility under our{" "}
                  <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  . Tell your booking specialist the venue type early and they can flag anything worth checking before you commit to a date.
                </>
              ) : faq.question === "Can we choose the theme, costume, and number of entertainers?" ? (
                <>
                  Yes — that&apos;s most of what the booking conversation covers. You select a theme and costume, set how many entertainers you&apos;d like, and add upgrades such as extra time, additional dances, or party games. You can build the booking yourself through our{" "}
                  <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Packages
                  </Link>{" "}
                  page, or describe what you&apos;re planning to a specialist and let them put options in front of you.
                </>
              ) : faq.question === "What are the age requirements and conduct rules?" ? (
                <>
                  Every event is strictly 18+, and no minors may be present at any booking. Velvet Girl Entertainment requires valid, unexpired government-issued photo identification to verify age and identity before a booking is confirmed, and customers are responsible for ensuring all attendees are of legal age. Performances are no-contact: a six-foot buffer is maintained between the entertainer and everyone present, and unsolicited or inappropriate contact is prohibited. Both the entertainer and the company may end a performance over safety concerns. Full details are in our{" "}
                  <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  .
                </>
              ) : faq.question === "How private is the booking?" ? (
                <>
                  Discretion runs through the whole process — how our team communicates with you, how your information is handled, and how entertainers arrive at and leave your event. Your personal details are used to coordinate the booking and are not shared or sold beyond what&apos;s required to fulfil it. Age and identity verification is a legal requirement rather than an optional step; our{" "}
                  <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Privacy Policy
                  </Link>{" "}
                  explains exactly what&apos;s collected and why.
                </>
              ) : faq.question === "Which markets can we book Girls Night Out in?" ? (
                <>
                  We currently book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando / Daytona Beach, and Indianapolis, and we onboard new markets regularly. If your event is outside those areas, it&apos;s still worth asking — we regularly arrange destination bookings for group celebrations elsewhere. Share your dates, headcount, and location and we&apos;ll confirm whether we can cover it. The current list is always on our{" "}
                  <Link href="https://velvetgirlentertainment.com/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Areas We Serve
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
        title="Girls Night Out FAQ"
      />
    </>
  );
}
