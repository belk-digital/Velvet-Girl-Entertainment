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
  title: "Corporate Entertainment Booking | Velvet Girl Entertainment",
  description:
    "Adult entertainment booked for private corporate events — retreats, client evenings and company celebrations. Written confirmation, 8 cities, planner-friendly.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/corporate-entertainment",
  },
  openGraph: {
    title: "Corporate Entertainment Booking | Velvet Girl Entertainment",
    description:
      "Professional entertainers booked for private, adults-only corporate events. Retreats, client appreciation and after-hours celebrations across 8 cities.",
    url: "https://velvetgirlentertainment.com/services/corporate-entertainment",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Entertainment Booking | Velvet Girl Entertainment",
    description:
      "Adult entertainment booked for private corporate events — retreats, client evenings and company celebrations. Written confirmation, 8 cities, planner-friendly.",
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

export const corporateFaqs = [
  {
    question: "What does Velvet Girl Entertainment provide for corporate events?",
    answer:
      "Velvet Girl Entertainment books professional exotic dancers for private, adults-only corporate events. We operate as a booking agency: we represent a verified roster of independent entertainers and coordinate scheduling, venue logistics, confirmation and any documentation the booking requires.",
  },
  {
    question: "What kinds of corporate events is this suitable for?",
    answer:
      "Private, adults-only gatherings where every attendee knows in advance what has been arranged. In practice that means corporate retreats and off-sites, incentive trips, client appreciation evenings, executive and VIP gatherings, holiday parties, and after-hours celebrations following a formal event. It is not suitable for a conference session, a trade show floor, a company-wide function with mandatory attendance, or any event where a minor could be present.",
  },
  {
    question: "Is adult entertainment appropriate for a corporate event?",
    answer:
      "It depends on the event, and the decision sits with the organiser. Before booking, it's worth confirming that the event is genuinely suitable for the intended attendees, that those attending know what is planned, that participation is voluntary where applicable, that the setting is private and appropriate, and that the venue permits the entertainment. In practice this tends to work best as a separate after-hours segment rather than part of a main function. If you're unsure whether your event fits, raise it when you enquire.",
  },
  {
    question: "Can an event planner or executive assistant book on behalf of a company?",
    answer:
      "Yes. The booking team works with event planners and executive assistants as well as individual hosts, and you can act as the primary point of contact throughout. Company and event details are handled according to the booking process and our Privacy Policy. If you're working to an internal approval sequence, say so at the enquiry stage so availability can be confirmed in a form you can take back to the approver.",
  },
  {
    question: "Can a corporate booking be arranged under an NDA?",
    answer:
      "NDA availability can be requested when arranging a corporate booking, and the booking team can confirm what documentation is available for your specific event. Raise it at the enquiry stage rather than after a booking is confirmed, so it forms part of the confirmation rather than a separate step.",
  },
  {
    question: "How discreet is the booking process for a company event?",
    answer:
      "Details you provide are used to coordinate the booking and are shared only with those who need them to deliver it — the entertainer assigned to your event, and service providers such as our payment processor. Personal information is never sold and is not used for marketing without express consent. Government-issued ID collected for age verification is treated as sensitive, access-restricted, and destroyed once no longer needed. Full detail is in our Privacy Policy.",
  },
  {
    question: "Can entertainers come to a hotel, resort or private venue?",
    answer:
      "Yes. Hotel suites, resorts, private event spaces and rented properties are all standard, with arrival and venue access coordinated in advance. Two things to settle first: confirm the venue permits adult entertainment, since properties set their own policies; and tell us about anything affecting access, such as a keyed elevator, a security desk or a gated entrance.",
  },
  {
    question: "Do you travel to corporate retreats outside your listed cities?",
    answer:
      "Often, yes. We hold active performer rosters in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach and Indianapolis, and travel for events elsewhere can frequently be arranged — which suits retreats and incentive trips held at resorts and rented properties away from a major metro. Send the dates, location and headcount to have it confirmed. Additional travel costs may apply and are disclosed in your booking confirmation.",
  },
  {
    question: "How far in advance should we book corporate entertainment?",
    answer:
      "One to two weeks covers most bookings in our active cities, and weekend dates go first. Allow two to three weeks where the event involves multiple performers or custom coordination, and two to four weeks for a retreat or a location outside our active markets, since travel is arranged around performer availability. For shorter-notice requests, contact the booking team directly by phone or text to check current availability.",
  },
  {
    question: "How does payment work?",
    answer:
      "A non-refundable deposit confirms the booking, and the remaining balance is due on the entertainer's arrival, before the performance begins. The booking cost is confirmed before you commit. Online deposit payment is available for bookings made at least 24 hours ahead; for anything shorter, submit the form and then call or text directly. Travel costs for locations outside our standard radius are disclosed in the confirmation.",
  },
  {
    question: "What rules apply to performers and guests during a booking?",
    answer:
      "A minimum six-foot distance is maintained between the entertainer and everyone present, and there is no physical contact at any point. All attendees must be 18 or over, and performances must comply with state and local law at the venue, which in some jurisdictions sets minimum attire requirements. The entertainer may end a performance and leave if those conditions are not met. Full detail is in our Terms of Service.",
  },
  {
    question: "What happens if we need to cancel or move the date?",
    answer:
      "Cancellations must be submitted in writing. Cancelled at least two days before the event, nothing further is owed beyond the non-refundable deposit; cancelled inside two days, a fee of 50% of the total booking applies. Rescheduling is subject to performer availability and a rescheduling fee, requested in writing at least two days before the original date. If a confirmed performer becomes unavailable, the booking team works to offer a comparable replacement.",
  },
];

export default function CorporateEntertainmentPage() {
  const pageUrl = "https://velvetgirlentertainment.com/services/corporate-entertainment";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Corporate Entertainment",
        serviceType: "Adult entertainment booking for private corporate events",
        description:
          "Velvet Girl Entertainment books professional exotic dancers for private, adults-only corporate events, including corporate retreats and off-sites, incentive trips, client appreciation evenings, executive and VIP gatherings, holiday parties and after-hours company celebrations. Bookings are coordinated for event planners, executive assistants and company organizers, with performer selection, venue coordination and written confirmation arranged in advance.",
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        audience: {
          "@type": "BusinessAudience",
          name: "Companies, event planners and executive assistants arranging private corporate events",
        },
        areaServed: [
          { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Myrtle Beach", containedInPlace: { "@type": "State", name: "South Carolina" } },
          { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
          { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Orlando", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Daytona Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
        ],
        termsOfService: "https://velvetgirlentertainment.com/terms",
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Corporate Entertainment", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: corporateFaqs.map(({ question, answer }) => ({
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
    {
      title: "Verified entertainers",
      description: "Every performer is verified before joining the roster, and all parties provide government-issued photo ID before a booking is confirmed.",
    },
    {
      title: "Real, unedited photos",
      description: "Performer profiles use genuine, unedited photographs. Specific performers can be requested subject to availability.",
    },
    {
      title: "Flexible scheduling",
      description: "Arrival windows are set around your run of show — after dinner, after the awards, or once the formal portion of the evening has closed.",
    },
    {
      title: "Discreet booking process",
      description: "Company and event details are used to coordinate the booking and are handled in line with our Privacy Policy.",
    },
    {
      title: "Hotel and venue visits",
      description: "Bookings at hotel suites, resorts, private venues and rented properties, subject to the venue permitting the entertainment.",
    },
    {
      title: "Corporate retreat coordination",
      description: "Off-site and multi-day retreats, including locations outside our active cities where travel can be arranged.",
    },
    {
      title: "NDA availability on request",
      description: "Confidentiality documentation can be requested when arranging a corporate booking.",
    },
    {
      title: "Custom event coordination",
      description: "Performer count, theme, costuming and upgrades are selected per booking rather than sold as a fixed package.",
    },
  ];

  const bookingSteps = [
    {
      title: "Choose your city",
      subtitle: "STEP 01 · LOCATION",
      description:
        "Select from our eight active cities, or tell us where your retreat or off-site is being held — travel to other locations is arranged case by case.",
    },
    {
      title: "Select performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description:
        "Browse real, unedited photos of entertainers available in that market and shortlist who you'd like. Specific requests are honoured subject to availability on your date.",
    },
    {
      title: "Confirm the booking",
      subtitle: "STEP 03 · 24/7 CONCIERGE",
      description:
        "Enquire online, by phone or by text — the booking team is reachable around the clock. You'll receive availability, cost and written confirmation, along with any documentation your company requires.",
    },
    {
      title: "Run your event",
      subtitle: "STEP 04 · SHOWTIME",
      description:
        "Your confirmed entertainer arrives for the agreed booking, with event details and timing coordinated in advance, and works to the scope you confirmed.",
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
        title="Corporate Entertainment"
        subtitle="Professional entertainers booked for corporate retreats, client events and private company celebrations, arranged through a booking process built for planners as well as hosts."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for corporate entertainment service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="https://velvetgirlentertainment.com/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Corporate Entertainment</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Corporate Entertainment">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Velvet Girl Entertainment specialises in adult entertainment bookings for private, adults-only corporate events. We are a booking agency: we represent a verified roster of independent professional exotic dancers, and we coordinate the booking from first enquiry through to arrival on the night.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            For corporate clients that covers retreats and off-sites, incentive trips, client appreciation evenings, executive and VIP gatherings, holiday parties, and after-hours celebrations that continue once the formal part of the evening has closed.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            A corporate booking carries expectations a private party doesn&apos;t. Colleagues are in the room, sometimes clients. Timing is tighter, the venue is often someone else&apos;s property, and the person organising it is frequently doing so for a host who won&apos;t be handling any of the details. The booking process is built around that.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Performer selection, arrival window, venue access and the conduct rules that apply on site are all settled in advance and confirmed in writing.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            The booking team works with event planners and executive assistants as well as individual hosts. If you&apos;re coordinating on someone else&apos;s behalf, you can act as the primary point of contact for the booking, with company and event details handled according to the booking process and our Privacy Policy.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Availability is confirmed in writing before a booking becomes firm. Every performer is verified before joining the roster, and the profiles you&apos;re selecting from use real, unedited photographs rather than stock imagery — which matters when you&apos;ll be accounting for the choice to colleagues. Specific performers can be requested subject to availability on your date, and if a confirmed performer becomes unavailable, the booking team works to offer a comparable replacement.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            The booking process also covers venue requirements, conduct rules and payment terms before the event. On a corporate booking those are usually the first questions asked, and it&apos;s better to have the answers in hand than to go looking for them mid-approval.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Where a booking calls for confidentiality documentation, NDA availability can be requested when you arrange the booking, and the booking team can confirm what documentation is available for your specific event.
          </p>
        </Reveal>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section eyebrow="WHAT'S INCLUDED" title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whatsIncludedItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 border border-white/10 rounded-xl bg-black p-6 shadow-sm hover:border-[#380605]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#380605]/10 text-[#380605]">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-display text-base font-bold text-white">
                    {item.title}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed text-stone-300 pl-10 font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section eyebrow="WHAT TO EXPECT" title="What to Expect" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Providing the date, location, guest count and preferred timing helps the booking team check availability and recommend suitable options. A company name isn&apos;t required at the enquiry stage — a name and a callback number is enough to get an answer.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A booking specialist responds with available performers for that date and the booking cost, which is confirmed before you commit. A booking is confirmed once the required non-refundable deposit is received and the Terms are accepted, with availability confirmed in writing. If confidentiality documentation is part of your requirement, raise it at this stage rather than after confirmation.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Arrival timing, venue access and the on-site point of contact are then coordinated in advance — often the planner rather than the host. The remaining balance is due on the entertainer&apos;s arrival, before the performance begins.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            One item is worth settling early, because it is the most common reason a corporate booking runs into difficulty late. Before booking, confirm that the venue permits adult entertainment and that the planned performance is permitted under the applicable local requirements. Hotels, resorts, event spaces and rental properties each set their own policies, and local ordinances vary on what a performance may involve. Under our{" "}
            <Link href="https://velvetgirlentertainment.com/terms" className="text-[#C5A880] underline hover:text-white transition-colors">
              Terms of Service
            </Link>
            , that verification is the customer&apos;s responsibility.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
        subtitle="The same process we run for every booking, with the documentation a company event usually requires."
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Book Corporate Entertainment in Your City"
        subtitle="We hold active, onboarded performer rosters in eight cities. Each city page lists the entertainers currently available in that market with real photographs."
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
            Planning a retreat, incentive trip or off-site somewhere we don&apos;t hold a local roster? Travel for events outside our active markets can often be arranged. Share the dates, headcount and location and the booking team will confirm whether it can be staffed and what the travel arrangements involve. See{" "}
            <Link href="https://velvetgirlentertainment.com/cities" className="text-[#C5A880] underline hover:text-white transition-colors">
              all areas we serve
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* CTA BAND */}
      <CtaSection subtitle="Send your date, city and guest count and a booking specialist will confirm availability and cost, usually with performer options attached." />

      {/* FAQ */}
      <FaqSection
        items={corporateFaqs.map((faq) => ({
          question: faq.question,
          answer: (
            <>
              {faq.question === "Can an event planner or executive assistant book on behalf of a company?" ? (
                <>
                  Yes. The booking team works with event planners and executive assistants as well as individual hosts, and you can act as the primary point of contact throughout. Company and event details are handled according to the booking process and our{" "}
                  <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  . If you&apos;re working to an internal approval sequence, say so at the enquiry stage so availability can be confirmed in a form you can take back to the approver.
                </>
              ) : faq.question === "How discreet is the booking process for a company event?" ? (
                <>
                  Details you provide are used to coordinate the booking and are shared only with those who need them to deliver it — the entertainer assigned to your event, and service providers such as our payment processor. Personal information is never sold and is not used for marketing without express consent. Government-issued ID collected for age verification is treated as sensitive, access-restricted, and destroyed once no longer needed. Full detail is in our{" "}
                  <Link href="https://velvetgirlentertainment.com/privacy" className="text-[#C5A880] underline hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </>
              ) : faq.question === "What rules apply to performers and guests during a booking?" ? (
                <>
                  A minimum six-foot distance is maintained between the entertainer and everyone present, and there is no physical contact at any point. All attendees must be 18 or over, and performances must comply with state and local law at the venue, which in some jurisdictions sets minimum attire requirements. The entertainer may end a performance and leave if those conditions are not met. Full detail is in our{" "}
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
        title="Corporate Entertainment FAQ"
      />
    </>
  );
}
