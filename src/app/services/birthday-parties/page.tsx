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
  title: "Birthday Party Entertainment for Adults | Velvet Girl Entertainment",
  description:
    "Book entertainers for private adult birthday parties at homes, hotels, and vacation rentals. Real unedited performer photos and direct booking by call or text.",
  alternates: {
    canonical: "https://velvetgirlentertainment.com/services/birthday-parties",
  },
  openGraph: {
    title: "Birthday Party Entertainment for Adults | Velvet Girl Entertainment",
    description:
      "Book entertainers for private adult birthday parties at homes, hotels, and vacation rentals. Real unedited performer photos and direct booking by call or text.",
    url: "https://velvetgirlentertainment.com/services/birthday-parties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Party Entertainment for Adults | Velvet Girl Entertainment",
    description:
      "Book entertainers for private adult birthday parties at homes, hotels, and vacation rentals. Real unedited performer photos and direct booking by call or text.",
  },
};

export default function BirthdayPartiesPage() {
  const service = getServiceBySlug("birthday-parties");
  const pageUrl = "https://velvetgirlentertainment.com/services/birthday-parties";
  const faqs = service?.faqs || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Birthday Party Entertainment for Adults | Velvet Girl Entertainment",
        description:
          "Book entertainers for private adult birthday parties at homes, hotels, and vacation rentals. Real unedited performer photos and direct booking by call or text.",
        isPartOf: { "@id": "https://velvetgirlentertainment.com/#website" },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://velvetgirlentertainment.com/services" },
          { "@type": "ListItem", position: 3, name: "Birthday Parties", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Birthday Parties Entertainment",
        serviceType: "Adult birthday party entertainment",
        description:
          "Female exotic dancers booked for private adult birthday celebrations at private residences, hotel suites, and vacation rentals. All bookings are 18+.",
        url: pageUrl,
        audience: { "@type": "Audience", audienceType: "Adults 18 and over", suggestedMinAge: 18 },
        provider: { "@id": "https://velvetgirlentertainment.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Charleston", address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "US" } },
          { "@type": "City", name: "Myrtle Beach", address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "US" } },
          { "@type": "City", name: "Charlotte", address: { "@type": "PostalAddress", addressRegion: "NC", addressCountry: "US" } },
          { "@type": "City", name: "Savannah", address: { "@type": "PostalAddress", addressRegion: "GA", addressCountry: "US" } },
          { "@type": "City", name: "Atlanta", address: { "@type": "PostalAddress", addressRegion: "GA", addressCountry: "US" } },
          { "@type": "City", name: "Miami", address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" } },
          { "@type": "City", name: "Orlando / Daytona Beach", address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" } },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
      title: "Choose your city",
      subtitle: "STEP 01 · LOCATION",
      description: "Pick the area you're celebrating in.",
    },
    {
      title: "Choose your performers",
      subtitle: "STEP 02 · REAL PHOTOS",
      description: "Browse the roster and name the performers you'd like. Every photo is real and unedited.",
    },
    {
      title: "Confirm your booking",
      subtitle: "STEP 03 · BOOKING CONCIERGE",
      description: "Send your request online, by phone, or by text. A specialist confirms availability, pricing, and arrival timing.",
    },
    {
      title: "Enjoy the night",
      subtitle: "STEP 04 · SHOWTIME",
      description: "Your entertainer arrives for your confirmed time slot and performs according to your agreed booking scope.",
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
        title="Birthday Parties Entertainment"
        subtitle="Entertainers booked for private adult birthdays — at a home, a hotel suite, or a rental, in the areas we cover."
        bgImage="/gallery images/DIOR.webp"
        bgImageAlt="Velvet Girl Entertainment performer photographed for the birthday parties service page"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link href="/services" className="hover:text-[#380605] transition-colors">
            Services
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">Birthday Parties</span>
        </nav>
      </PageHero>

      {/* OVERVIEW */}
      <Section eyebrow="OVERVIEW" title="About Birthday Party Entertainment">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Some birthdays are a bar tab and a group chat. Others are worth building an actual event around. Adult birthday party entertainment means booking one or more entertainers to perform at a private celebration instead of taking everyone out to a venue. The party stays where you are and the entertainment comes to you.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Velvet Girl Entertainment books female exotic dancers for private adult birthdays — 21sts, 30ths, 40ths, surprises put together by a partner or a group of friends, and smaller nights that happen in a living room with eight people and a good speaker. You give us the date, the city, the venue, and roughly what you&apos;re picturing. A booking specialist checks availability and comes back with options.
          </p>
          <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
            Everything on this page is 18+.
          </p>
        </Reveal>
      </Section>

      {/* WHY BOOK WITH US */}
      <Section eyebrow="WHY BOOK WITH US" title="Why Choose Velvet Girl" theme="muted">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            One concern people have when booking adult entertainment is that the woman who turns up isn&apos;t the woman in the photo. Every performer photo on this site is real and unedited — no stock images, no filters.{" "}
            <Link
              href="/blog/real-photos-no-bait-and-switch"
              className="text-[#C5A880] underline hover:text-white transition-colors"
            >
              We&apos;ve written about why that still isn&apos;t the industry norm
            </Link>
            .
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            Birthdays also carry something a standard group booking doesn&apos;t. There&apos;s one person the night is built around, and often a surprise that has to land at a particular moment. Our booking specialists ask about that early — who the birthday is for, what they&apos;d actually enjoy, how much they already know, and when you want the entertainer through the door.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            The rest is operational. Our performers are selected for private bookings based on availability and the details of your event, bookings are confirmed in writing, and arrival and departure are handled with discretion.
          </p>
        </Reveal>
      </Section>

      {/* WHAT'S INCLUDED */}
      <Section title="What's Included">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(service?.whatsIncluded || [
              "Female entertainers",
              "Private residences",
              "Hotel suites and condos",
              "Vacation rentals",
              "Themes and costumes",
              "Custom music and entrance",
              "Flexible performer count",
              "Surprise arrival timing",
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
            Once your details are in, a booking specialist checks availability for your date and area, then comes back with performers who suit the night you&apos;ve described.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            If it&apos;s a surprise, say so in the first message. Surprise birthdays require specific arrival timing, because the arrival is usually planned around a specific moment: after dinner, before the cake, once a particular person has left. Give us that moment and a window either side of it. A contact number for someone other than the birthday person helps too, so timing can be confirmed on the day without giving it away.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            A deposit confirms the date and the specific performers. The balance is settled with your specialist ahead of the event.
          </p>
          <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
            On the night, your entertainer arrives for your confirmed time slot and performs according to your agreed booking scope. If timing shifts during the day, call or text the same number you booked through.
          </p>
        </Reveal>
      </Section>

      {/* HOW TO BOOK */}
      <Section
        eyebrow="HOW TO BOOK"
        title="4 Simple Steps"
      >
        <HowToBookTimeline steps={bookingSteps} />
      </Section>

      {/* ESTABLISHED SERVICE MARKETS */}
      <Section
        eyebrow="ESTABLISHED SERVICE MARKETS"
        title="Where We Book Birthday Parties"
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
      <FaqSection items={faqs} title="Birthday Parties FAQ" />
    </>
  );
}
