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
  title: "Special Requests: Custom Entertainment Bookings | Velvet Girl Entertainment",
  description:
    "Have an idea that doesn't fit a standard package? Tell our booking team your theme, venue, and lineup, and they'll build a custom proposal around it.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/special-requests",
  },
  openGraph: {
    title: "Special Requests: Custom Entertainment Bookings | Velvet Girl Entertainment",
    description:
      "Have an idea that doesn't fit a standard package? Tell our booking team your theme, venue, and lineup, and they'll build a custom proposal around it.",
    url: "https://velvetgirlentertainment.com/services/special-requests",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Requests: Custom Entertainment Bookings | Velvet Girl Entertainment",
    description:
      "Have an idea that doesn't fit a standard package? Tell our booking team your theme, venue, and lineup, and they'll build a custom proposal around it.",
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

export const specialRequestFaqs = [
  {
    question: "What counts as a special request?",
    answer:
      "Anything that doesn't fit one of our standard packages: a theme or costume that isn't on our list, a venue we don't have a category for, a specific multi-performer lineup, an unusual schedule, or two services combined into one event. If you're not sure whether something fits, describe it and the booking team will tell you.",
  },
  {
    question: "When should I use Special Requests instead of the package builder?",
    answer:
      "Use the builder when the theme you want is already there. Our packages page covers eight themes with costume, dancer count, and upgrade options built in, and going that route is quicker. Special Requests is for when you get to the form and realise it can't hold what you're actually asking for.",
  },
  {
    question: "How is this different from a Private Event booking?",
    answer:
      "Private Events is for occasions that don't have a tidy label — a divorce party, a promotion, a reunion — where the booking itself is still a fairly standard one. Special Requests is the other way around: the occasion may be ordinary, but the entertainment setup you're asking for isn't. If you want a premium service tier rather than a non-standard setup, that's VIP Experiences.",
  },
  {
    question: "Can I request a specific performer?",
    answer:
      "Yes, subject to availability on your date. Each city page shows the performers booking in that market with real, unedited photos, so you can name who you'd like when you send your request. Availability is confirmed by the booking team before anything is finalised.",
  },
  {
    question: "Can I request a custom theme?",
    answer:
      "Yes — custom themes are one of the more common special requests. Start with the packages page if something on the list is close to what you want. If nothing matches, describe what you're picturing and the booking team will come back on what's workable for your date and market.",
  },
  {
    question: "Can I request a specific costume or other customization?",
    answer:
      "Costume selection is part of the standard booking flow, alongside theme, dancer count, and upgrades such as extra time. For anything beyond those options, include the detail in your request and the team will confirm what can be arranged before you commit.",
  },
  {
    question: "Can I book multiple performers?",
    answer:
      "Yes. Multi-performer bookings are supported, and performer count is one of the things a custom proposal is built around. Share your guest count and the format you have in mind so the team can recommend a lineup that suits the group and the space.",
  },
  {
    question: "Can you accommodate an unusual venue?",
    answer:
      "Often. Beyond private residences and hotel suites, we book vacation rentals, poolside events at homes, rentals, and resort pools, and yacht and boat charters. For anything outside those, the main question is whether the venue can provide a private area — send the venue details and any access rules and the team will confirm before you book.",
  },
  {
    question: "How is pricing determined for a custom request?",
    answer:
      "Pricing is built around your specific request rather than a fixed package rate, because performer count, timing, and venue all affect it. A booking specialist puts together a proposal with pricing once the scope is clear. A deposit secures the booking; the balance is arranged with your specialist ahead of the event.",
  },
  {
    question: "How much information should I provide?",
    answer:
      "Your date, the city or venue, and a short description of what you're planning is enough for a useful first response. Guest count and a rough time window help the team quote accurately on the first pass rather than the third. The follow-up conversation exists to fill in the rest.",
  },
  {
    question: "How far ahead should I make a custom request?",
    answer:
      "One to two weeks is a reasonable target for our listed cities, and more for weekends. For custom themes, larger group lineups, or events outside our listed markets, allow two to four weeks so there's room to confirm availability and any travel involved. The more specific the request, the more it depends on the right people being free, so earlier is better.",
  },
  {
    question: "What if my event is on short notice?",
    answer:
      "Contact the booking team directly by phone or text at (843) 938-7377 rather than booking online — online deposit payment is only available for bookings made 24 or more hours in advance. The team can check what's possible for your date. For general questions about deposits, cancellations, and privacy that aren't specific to custom requests, see our booking FAQ.",
  },
];

export default function SpecialRequestsPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/special-requests";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Special Requests: Custom Entertainment Bookings | Velvet Girl",
        description:
          "Have an idea that doesn't fit a standard package? Tell our booking team your theme, venue, and lineup, and they'll build a custom proposal around it.",
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
          { "@type": "ListItem", position: 3, name: "Special Requests" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Special Requests",
        serviceType: "Custom entertainment booking",
        url: pageUrl,
        description:
          "Custom entertainment bookings for requests that do not fit a standard package, including custom themes, multi-performer lineups, and venues outside our standard service categories.",
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Charleston", address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "US" } },
          { "@type": "City", name: "Myrtle Beach", address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "US" } },
          { "@type": "City", name: "Charlotte", address: { "@type": "PostalAddress", addressRegion: "NC", addressCountry: "US" } },
          { "@type": "City", name: "Savannah", address: { "@type": "PostalAddress", addressRegion: "GA", addressCountry: "US" } },
          { "@type": "City", name: "Atlanta", address: { "@type": "PostalAddress", addressRegion: "GA", addressCountry: "US" } },
          { "@type": "City", name: "Miami", address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" } },
          { "@type": "City", name: "Orlando", address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" } },
          { "@type": "City", name: "Indianapolis", address: { "@type": "PostalAddress", addressRegion: "IN", addressCountry: "US" } },
        ],
        isRelatedTo: [
          { "@type": "Service", name: "Private Events", url: "https://velvetgirlentertainment.com/services/private-events" },
          { "@type": "Service", name: "VIP Experiences", url: "https://velvetgirlentertainment.com/services/vip-experiences" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: specialRequestFaqs.map(({ question, answer }) => ({
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
    "Dedicated booking concierge",
    "Fully custom scheduling",
    "Private locations",
    "Themed experiences",
    "Multi-performer bookings",
    "Custom add-ons",
    "Full privacy protocols",
    "VIP events",
  ];

  const bookingSteps = [
    {
      title: "Tell us your vision",
      subtitle: "STEP 01 · CUSTOM REQUEST",
      description: "Send your date, city or venue, and a description of what you're planning. Rough is fine.",
    },
    {
      title: "Get a custom proposal",
      subtitle: "STEP 02 · PERSONALIZED QUOTE",
      description: "A booking specialist follows up with the details that matter, then sends performer options and pricing built around your request.",
    },
    {
      title: "Confirm booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description: "Submit your inquiry online, by phone, or text. Our booking team will confirm availability and pricing, and a deposit secures the date.",
    },
    {
      title: "Enjoy your event",
      subtitle: "STEP 04 · SHOWTIME",
      description: "Your entertainer arrives verified and professional — so you can relax and focus on celebrating with your group.",
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
        title="Special Requests: Custom Entertainment Bookings"
        subtitle="Custom entertainment built around your specific request — themes, venues, and lineups that don't fit a standard package."
        bgImage="/gallery images/LOTUS.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for special requests custom entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Special Requests</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Special Requests">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Special Requests is for the idea that doesn&apos;t have a button on our site. Most bookings run through our{" "}
            <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
              package builder
            </Link>{" "}
            — pick a theme, a costume, a dancer count, add your upgrades, done. Some requests don&apos;t fit in a form, and those come to us here.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            That usually means one of a few things: a theme or costume that isn&apos;t on our list, a venue we don&apos;t have a category for, a multi-performer lineup with a particular structure in mind, a schedule that runs across a weekend rather than an evening, or two ideas combined into one event. Rather than reshaping it to fit an existing service, a booking specialist works from your description and puts together a proposal around it.
          </p>
          <div className="text-left bg-black/60 border border-white/10 rounded-xl p-6 space-y-3 font-body text-base text-stone-300">
            <p className="font-bold text-white mb-2">A quick way to work out where your booking belongs:</p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-[#C5A880] font-bold">•</span>
                <span>The theme is already on our list → use the <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">package builder</Link>; it&apos;s faster</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#C5A880] font-bold">•</span>
                <span>The occasion has no obvious name, but the booking itself is standard → <Link href="https://velvetgirlentertainment.com/services/private-events" className="text-[#C5A880] underline hover:text-white transition-colors">Private Events</Link></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#C5A880] font-bold">•</span>
                <span>You want a premium service tier on a standard booking → <Link href="https://velvetgirlentertainment.com/services/vip-experiences" className="text-[#C5A880] underline hover:text-white transition-colors">VIP Experiences</Link></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#C5A880] font-bold">•</span>
                <span>The request itself is the part that doesn&apos;t fit → you&apos;re in the right place</span>
              </li>
            </ul>
          </div>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            If you&apos;re not sure which of those describes your event, send the request anyway. Sorting that out is part of the job.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Plenty of agencies handle an off-menu request by steering you back toward a standard package. We start from your description instead and work through what it would actually take — performer count for your group and space, venue requirements, timing, and what all of that costs.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Everything else about the booking works the way it does anywhere else on the site. Every photo on our city pages is real and unedited, so there&apos;s no guesswork about who&apos;s on the roster. Discretion is built into how we communicate rather than added on request. A deposit secures the date, exactly as it would on any other booking. The request is custom; the standards behind it aren&apos;t.
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
            Send three things and the team can move quickly: your event date, the city or venue, and a short description of what you have in mind. Guest count helps too. A couple of sentences is enough to start — nothing needs to be finalised before you reach out.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            From there a booking specialist follows up with the questions your particular request raises: whether the venue can provide a private area, what performer count suits the space and the group, how long you want entertainment running. You&apos;ll get back a proposal built for your request, with performer options and pricing, rather than a package rate.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Once you confirm, a deposit locks in the date, and the same booking team stays involved through the event — with a custom request, the details are the whole point, so the people who worked them out stay with the booking.
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
        title="Book a custom request in your city"
        theme="muted"
      >
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 mb-6">
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm font-medium text-stone-300">
            Planning something outside these markets?{" "}
            <Link href="https://velvetgirlentertainment.com/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
              See where we currently book
            </Link>
            , then send your dates and location — availability outside our listed cities depends on the date and the travel involved, and the booking team can tell you what&apos;s possible.
          </p>
        </Reveal>
      </Section>

      {/* CTA BAND */}
      <CtaSection subtitle="Have an idea that doesn't fit a standard package? Tell our booking team your theme, venue, and lineup, and they'll build a custom proposal around it." />

      {/* FAQ */}
      <FaqSection
        items={specialRequestFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "When should I use Special Requests instead of the package builder?" ? (
                <>
                  Use the builder when the theme you want is already there. Our{" "}
                  <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
                    packages page
                  </Link>{" "}
                  covers eight themes with costume, dancer count, and upgrade options built in, and going that route is quicker. Special Requests is for when you get to the form and realise it can&apos;t hold what you&apos;re actually asking for.
                </>
              ) : faq.question === "How is this different from a Private Event booking?" ? (
                <>
                  <Link href="https://velvetgirlentertainment.com/services/private-events" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Private Events
                  </Link>{" "}
                  is for occasions that don&apos;t have a tidy label — a divorce party, a promotion, a reunion — where the booking itself is still a fairly standard one. Special Requests is the other way around: the occasion may be ordinary, but the entertainment setup you&apos;re asking for isn&apos;t. If you want a premium service tier rather than a non-standard setup, that&apos;s{" "}
                  <Link href="https://velvetgirlentertainment.com/services/vip-experiences" className="text-[#C5A880] underline hover:text-white transition-colors">
                    VIP Experiences
                  </Link>
                  .
                </>
              ) : faq.question === "Can I request a custom theme?" ? (
                <>
                  Yes — custom themes are one of the more common special requests. Start with the{" "}
                  <Link href="https://velvetgirlentertainment.com/packages" className="text-[#C5A880] underline hover:text-white transition-colors">
                    packages page
                  </Link>{" "}
                  if something on the list is close to what you want. If nothing matches, describe what you&apos;re picturing and the booking team will come back on what&apos;s workable for your date and market.
                </>
              ) : faq.question === "Can you accommodate an unusual venue?" ? (
                <>
                  Often. Beyond private residences and hotel suites, we book vacation rentals,{" "}
                  <Link href="https://velvetgirlentertainment.com/services/pool-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    poolside events
                  </Link>{" "}
                  at homes, rentals, and resort pools, and{" "}
                  <Link href="https://velvetgirlentertainment.com/services/yacht-parties" className="text-[#C5A880] underline hover:text-white transition-colors">
                    yacht and boat charters
                  </Link>
                  . For anything outside those, the main question is whether the venue can provide a private area — send the venue details and any access rules and the team will confirm before you book.
                </>
              ) : faq.question === "What if my event is on short notice?" ? (
                <>
                  Contact the booking team directly by phone or text at (843) 938-7377 rather than booking online — online deposit payment is only available for bookings made 24 or more hours in advance. The team can check what&apos;s possible for your date. For general questions about deposits, cancellations, and privacy that aren&apos;t specific to custom requests, see our{" "}
                  <Link href="https://velvetgirlentertainment.com/faq" className="text-[#C5A880] underline hover:text-white transition-colors">
                    booking FAQ
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
        title="Special Requests FAQ"
      />
    </>
  );
}
