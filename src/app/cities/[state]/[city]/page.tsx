import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/home/FaqSection";
import PerformerGalleryGrid from "@/components/gallery/PerformerGalleryGrid";

import CtaSection from "@/components/home/CtaSection";
import { cities, getCityBySlug } from "@/data/cities";
import { homepageServiceSlugs, services } from "@/data/services";
import { performers } from "@/data/performers";

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export function generateStaticParams() {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const cityData = getCityBySlug(state, city);
  if (!cityData) return {};
  const title =
    cityData.content.metaTitle ||
    `${cityData.name} Exotic Dancers & Stripper Booking | Velvet Girl Entertainment`;
  const description =
    cityData.content.metaDescription ||
    cityData.content.intro.slice(0, 155).trim() + "…";
  const ogTitle = cityData.content.ogTitle || title;
  const ogDescription = cityData.content.ogDescription || description;
  const twitterTitle = cityData.content.twitterTitle || title;
  const twitterDescription = cityData.content.twitterDescription || description;

  return {
    title,
    description,
    alternates: {
      canonical: `/cities/${cityData.stateSlug}/${cityData.slug}`,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://velvetgirlentertainment.com/cities/${cityData.stateSlug}/${cityData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
    },
  };
}

const cityServices = services.filter((s) =>
  homepageServiceSlugs.slice(0, 6).includes(s.slug)
);

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const cityData = getCityBySlug(state, city);
  if (!cityData) notFound();

  const showPerformers = performers.filter(
    (p) => p.citySlug === cityData.slug
  );

  // If cityData already provides its own custom set of FAQs (like Charleston's 11 or Myrtle Beach's 12 FAQs),
  // use those directly. Otherwise append the generic FAQ.
  const hasCustomFaqs = cityData.faqs.length >= 10;
  const cityFaqs = hasCustomFaqs
    ? cityData.faqs
    : [
        ...cityData.faqs,
        {
          question: `Do you provide strippers in ${cityData.name}?`,
          answer: `Yes — Velvet Girl Entertainment is a professional exotic dancer and stripper booking agency serving ${cityData.name} and the surrounding area. Every performer is verified, and every photo on our site is real and unedited, so you know exactly who's showing up to your event.`,
        },
      ];

  const pageUrl = `https://velvetgirlentertainment.com/cities/${cityData.stateSlug}/${cityData.slug}`;
  const metaTitle =
    cityData.content.metaTitle ||
    `${cityData.name} Exotic Dancers & Stripper Booking | Velvet Girl Entertainment`;
  const metaDescription =
    cityData.content.metaDescription ||
    cityData.content.intro.slice(0, 155).trim() + "…";

  const cleanAnswerForSchema = (text: string) =>
    text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");

  const renderParagraphWithLinks = (text: string) => {
    if (!text || typeof text !== "string") return text;
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const rawUrl = match[2];
      const href = rawUrl.startsWith("https://velvetgirlentertainment.com")
        ? rawUrl.replace("https://velvetgirlentertainment.com", "")
        : rawUrl;
      parts.push(
        <Link
          key={match.index}
          href={href}
          className="text-white underline hover:text-[#380605] transition-colors"
        >
          {match[1]}
        </Link>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  const isMyrtleBeach = cityData.slug === "myrtle-beach";
  const isCharlotte = cityData.slug === "charlotte";
  const isSavannah = cityData.slug === "savannah";
  const isAtlanta = cityData.slug === "atlanta";
  const isMiami = cityData.slug === "miami";
  const isOrlandoDaytona = cityData.slug === "orlando-daytona-beach";
  const isIndianapolis = cityData.slug === "indianapolis";
  const isWashingtonDC = cityData.slug === "washington-dc";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: metaTitle,
        description: metaDescription,
        inLanguage: "en-US",
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        isPartOf: { "@id": "https://velvetgirlentertainment.com/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: isSavannah
          ? [
              {
                "@type": "ListItem",
                position: 1,
                name: "Cities",
                item: "https://velvetgirlentertainment.com/cities",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Georgia",
                item: "https://velvetgirlentertainment.com/cities/georgia",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Savannah",
              },
            ]
          : isCharlotte
          ? [
              {
                "@type": "ListItem",
                position: 1,
                name: "Cities",
                item: "https://velvetgirlentertainment.com/cities",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "North Carolina",
                item: "https://velvetgirlentertainment.com/cities/north-carolina",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Charlotte",
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 1,
                name: "Cities",
                item: "https://velvetgirlentertainment.com/cities",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: cityData.stateName,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: cityData.name,
                item: pageUrl,
              },
            ],
      },
      isWashingtonDC
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer Booking in Washington, DC",
            serviceType: "Exotic dancer and entertainer booking",
            description:
              "Velvet Girl Entertainment is a booking agency that connects customers planning private events in Washington, DC with verified independent entertainers. Bookings are handled based on the requested date, event details and entertainer availability, which is confirmed individually for each request and in writing before a non-refundable deposit secures the booking.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Washington",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "District of Columbia",
              },
            },
            audience: {
              "@type": "Audience",
              name: "Adults aged 18 and over",
              suggestedMinAge: 18,
            },
            availableChannel: {
              "@type": "ServiceChannel",
              name: "Booking request",
              serviceUrl: "https://velvetgirlentertainment.com/book-now",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+1-843-938-7377",
                contactType: "reservations",
                availableLanguage: "English",
              },
            },
            termsOfService: "https://velvetgirlentertainment.com/terms",
          }
        : isIndianapolis
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Indianapolis Exotic Dancer & Stripper Booking",
            serviceType: "Adult entertainment booking",
            description:
              "Velvet Girl Entertainment books professional exotic dancers and strippers for private events across Indianapolis and the surrounding metro, including downtown, Broad Ripple, Fountain Square, and Carmel.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Indianapolis",
              containedInPlace: {
                "@type": "State",
                name: "Indiana",
              },
            },
            audience: {
              "@type": "Audience",
              suggestedMinAge: 18,
            },
            termsOfService: "https://velvetgirlentertainment.com/terms",
          }
        : isOrlandoDaytona
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer & Stripper Booking — Orlando and Daytona Beach",
            serviceType: "Adult entertainment booking",
            description:
              "Velvet Girl Entertainment books professional exotic dancers and strippers for private events in Orlando, Florida and Daytona Beach. Published coverage includes International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk. A booking is confirmed once the required non-refundable deposit is received and the Terms of Service are accepted. All events are strictly 18+ and subject to a six-foot no-touch rule.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Adults aged 18 and over",
              suggestedMinAge: 18,
            },
            areaServed: [
              {
                "@type": "City",
                name: "Orlando",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "Daytona Beach",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "City",
                name: "Winter Park",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "Place",
                name: "International Drive",
                containedInPlace: {
                  "@type": "City",
                  name: "Orlando",
                },
              },
              {
                "@type": "Place",
                name: "Downtown Orlando",
                containedInPlace: {
                  "@type": "City",
                  name: "Orlando",
                },
              },
              {
                "@type": "Place",
                name: "Daytona Beach Boardwalk",
                containedInPlace: {
                  "@type": "City",
                  name: "Daytona Beach",
                },
              },
            ],
          }
        : isMiami
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer and Stripper Booking in Miami, Florida",
            serviceType: "Adult entertainment booking",
            description:
              "Booking of professional exotic dancers and strippers for private events in Miami, Florida. Velvet Girl Entertainment operates as a booking agency connecting customers with independent entertainers. A booking is confirmed once the required non-refundable deposit is received and the Terms are accepted. All customers, attendees and entertainers must be 18 or older.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Miami",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              {
                "@type": "Place",
                name: "South Beach",
              },
              {
                "@type": "Place",
                name: "Brickell",
              },
              {
                "@type": "Place",
                name: "Downtown Miami",
              },
              {
                "@type": "Place",
                name: "Wynwood",
              },
              {
                "@type": "Place",
                name: "Coral Gables",
              },
            ],
            audience: {
              "@type": "Audience",
              audienceType: "Adults 18 and over",
            },
          }
        : isAtlanta
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer & Stripper Booking in Atlanta, GA",
            serviceType: "Adult entertainment booking agency",
            description:
              "Velvet Girl Entertainment books professional exotic dancers and strippers for private events across Midtown, Buckhead, Downtown Atlanta, Decatur and Sandy Springs. Availability is confirmed in writing and a booking is confirmed once the required deposit is received and the Terms are accepted.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Atlanta",
                containedInPlace: {
                  "@type": "State",
                  name: "Georgia",
                },
              },
              {
                "@type": "Place",
                name: "Midtown",
              },
              {
                "@type": "Place",
                name: "Buckhead",
              },
              {
                "@type": "Place",
                name: "Downtown Atlanta",
              },
              {
                "@type": "Place",
                name: "Decatur",
              },
              {
                "@type": "Place",
                name: "Sandy Springs",
              },
            ],
            audience: {
              "@type": "Audience",
              audienceType: "Adults 18 and over",
            },
          }
        : isSavannah
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer and Stripper Booking in Savannah, GA",
            serviceType:
              "Exotic dancer and stripper booking for private events",
            description:
              "Velvet Girl Entertainment books professional exotic dancers and strippers for private events in Savannah, Georgia, including Downtown Savannah and the Historic District, Tybee Island, Southside and Pooler. Availability is confirmed in writing and applicable fees are itemized in the booking confirmation. All customers, attendees and entertainers must be 18 or older, and government-issued photo identification is required before a booking is confirmed.",
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Savannah",
                containedInPlace: {
                  "@type": "State",
                  name: "Georgia",
                },
              },
              {
                "@type": "Place",
                name: "Downtown Savannah",
              },
              {
                "@type": "Place",
                name: "Savannah Historic District",
              },
              {
                "@type": "Place",
                name: "Tybee Island",
              },
              {
                "@type": "Place",
                name: "Southside, Savannah",
              },
              {
                "@type": "Place",
                name: "Pooler, Georgia",
              },
            ],
            audience: {
              "@type": "Audience",
              audienceType: "Adults 18 and over",
            },
            url: pageUrl,
          }
        : isCharlotte
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer and Stripper Booking in Charlotte, NC",
            serviceType: "Adult entertainment booking",
            description:
              "Velvet Girl Entertainment books verified exotic dancers for bachelor parties, birthdays, corporate celebrations and other private events at private residences, hotel suites and rented spaces in Charlotte, North Carolina. Bookings are confirmed in writing following a deposit. All customers, attendees and entertainers must be 18 or older.",
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: {
              "@type": "City",
              name: "Charlotte",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "North Carolina",
              },
            },
            audience: {
              "@type": "Audience",
              audienceType: "Adults 18 and over",
            },
            url: pageUrl,
          }
        : isMyrtleBeach
        ? {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: "Exotic Dancer and Stripper Booking in Myrtle Beach",
            serviceType: "Adult entertainment booking agency",
            description:
              "Velvet Girl Entertainment books verified independent exotic dancers and strippers for bachelor parties, birthdays and private events at vacation rentals, condos and hotel suites across Myrtle Beach and the Grand Strand.",
            url: pageUrl,
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Adults aged 18 and over",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Myrtle Beach",
                addressRegion: "SC",
                addressCountry: "US",
              },
              {
                "@type": "City",
                name: "North Myrtle Beach",
                addressRegion: "SC",
                addressCountry: "US",
              },
              {
                "@type": "City",
                name: "Surfside Beach",
                addressRegion: "SC",
                addressCountry: "US",
              },
              {
                "@type": "City",
                name: "Murrells Inlet",
                addressRegion: "SC",
                addressCountry: "US",
              },
              {
                "@type": "Place",
                name: "Market Common, Myrtle Beach, SC",
              },
              {
                "@type": "Place",
                name: "Broadway at the Beach, Myrtle Beach, SC",
              },
              {
                "@type": "Place",
                name: "Grand Strand, South Carolina",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services available in Myrtle Beach",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bachelor Parties",
                    url: "https://velvetgirlentertainment.com/services/bachelor-parties",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Birthday Parties",
                    url: "https://velvetgirlentertainment.com/services/birthday-parties",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Events",
                    url: "https://velvetgirlentertainment.com/services/private-events",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "VIP Experiences",
                    url: "https://velvetgirlentertainment.com/services/vip-experiences",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Corporate Entertainment",
                    url: "https://velvetgirlentertainment.com/services/corporate-entertainment",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Girls Night Out",
                    url: "https://velvetgirlentertainment.com/services/girls-night-out",
                  },
                },
              ],
            },
            termsOfService: "https://velvetgirlentertainment.com/terms",
          }
        : {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: `Exotic Dancer & Stripper Booking in ${cityData.name}, ${
              cityData.stateSlug === "south-carolina"
                ? "SC"
                : cityData.stateName
            }`,
            serviceType: "Adult entertainment booking",
            provider: {
              "@id": "https://velvetgirlentertainment.com/#organization",
            },
            areaServed: cityData.popularAreas.map((area) => ({
              "@type": "Place",
              name: `${area}${
                area.includes(cityData.name) ? "" : `, ${cityData.name}`
              }, ${
                cityData.stateSlug === "south-carolina"
                  ? "SC"
                  : cityData.stateName
              }`,
            })),
          },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: cityFaqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: cleanAnswerForSchema(answer),
          },
        })),
      },
    ],
  };

  const pageH1 =
    cityData.content.h1Title ||
    `${cityData.name} Exotic Dancer & Stripper Booking`;

  const heroSubtitle =
    cityData.content.heroSubtitle ||
    `Professional exotic dancers and strippers available throughout ${cityData.name} and surrounding areas.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={cityData.stateName}
        title={pageH1}
        subtitle={heroSubtitle}
        bgImage="/gallery images/BEACH DAY PACKAGE OR BEACH CITY PAGE.webp"
      >
        <nav className="flex flex-wrap items-center justify-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-stone-400">
          <Link
            href="/cities"
            className="hover:text-[#380605] transition-colors"
          >
            Cities
          </Link>
          <span className="text-[#380605]">/</span>
          <span className="text-white">{cityData.stateName}</span>
          <span className="text-[#380605]">/</span>
          <span className="text-white">{cityData.name}</span>
        </nav>
      </PageHero>

      {showPerformers.length > 0 && (
        <Section
          eyebrow="REAL PHOTOS, REAL DANCERS"
          title={`Dancers Available in ${cityData.name}`}
        >
          <Reveal className="mx-auto mb-10 flex max-w-3xl flex-col gap-4 border border-[#380605]/30 bg-[#380605]/5 p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#380605] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              {cityData.content.dancersSupportingParagraphs &&
              cityData.content.dancersSupportingParagraphs.length > 0 ? (
                <div className="space-y-3">
                  {cityData.content.dancersSupportingParagraphs.map(
                    (para, idx) => (
                      <p
                        key={idx}
                        className="font-body text-sm sm:text-base leading-relaxed text-stone-300 font-medium"
                      >
                        {para}
                      </p>
                    )
                  )}
                </div>
              ) : (
                <p className="font-body text-sm sm:text-base leading-relaxed text-stone-300 font-medium">
                  Every photo below is real and unedited — no filters, no stock
                  images, no bait-and-switch. Who you see is who shows up.
                </p>
              )}
            </div>
          </Reveal>
          <PerformerGalleryGrid
            performers={showPerformers}
            emptyStateMessage={`We're onboarding new performers in ${cityData.name} — check back soon or contact us for availability.`}
          />
        </Section>
      )}

      <Section
        eyebrow="ABOUT THIS MARKET"
        title={`Entertainment Booking in ${cityData.name}`}
      >
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          {cityData.content.introParagraphs &&
          cityData.content.introParagraphs.length > 0 ? (
            cityData.content.introParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium"
              >
                {renderParagraphWithLinks(para)}
              </p>
            ))
          ) : (
            <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
              {renderParagraphWithLinks(cityData.content.intro)}
            </p>
          )}
        </Reveal>
      </Section>

      <Section
        eyebrow="WHY BOOK WITH US"
        title={`Why Choose Velvet Girl in ${cityData.name}`}
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          {cityData.content.whyChooseUsParagraphs &&
          cityData.content.whyChooseUsParagraphs.length > 0 ? (
            cityData.content.whyChooseUsParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium"
              >
                {renderParagraphWithLinks(para)}
              </p>
            ))
          ) : (
            <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
              {renderParagraphWithLinks(cityData.content.whyChooseUs)}
            </p>
          )}
        </Reveal>
      </Section>

      <Section eyebrow="LOCAL COVERAGE" title={`The ${cityData.name} Scene`}>
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          {cityData.content.localSceneParagraphs &&
          cityData.content.localSceneParagraphs.length > 0 ? (
            cityData.content.localSceneParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium"
              >
                {renderParagraphWithLinks(para)}
              </p>
            ))
          ) : (
            <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
              {renderParagraphWithLinks(cityData.content.localScene)}
            </p>
          )}
        </Reveal>
      </Section>

      <Section
        eyebrow="SERVICES"
        title={`Popular Services in ${cityData.name}`}
      >
        {cityData.content.servicesSubheading && (
          <Reveal className="mx-auto mb-8 max-w-3xl text-center">
            <p className="font-body text-base leading-relaxed text-stone-300 sm:text-lg font-medium">
              {renderParagraphWithLinks(cityData.content.servicesSubheading)}
            </p>
          </Reveal>
        )}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cityServices.map((service, i) => {
            const cardDesc =
              cityData.content.serviceDescriptions?.[service.slug] ||
              service.shortDescription;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full border border-white/10 bg-black p-8 transition-all duration-300 hover:border-[#380605]/60 hover:shadow-xl"
                >
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#380605] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-stone-300 leading-relaxed font-medium">
                    {cardDesc}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        {cityData.content.servicesFooterText && (
          <Reveal className="mt-8 text-center">
            <p className="font-body text-sm sm:text-base text-stone-300 font-medium">
              Theme, costume, entertainer count and upgrades are all chosen
              during booking — the{" "}
              <Link
                href="/packages"
                className="text-white underline hover:text-[#380605] transition-colors"
              >
                package builder
              </Link>{" "}
              covers the options.
            </p>
          </Reveal>
        )}
      </Section>

      <Section
        eyebrow="POPULAR AREAS"
        title={`Areas We Cover Around ${cityData.name}`}
        theme="muted"
      >
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {cityData.popularAreas.map((area) => (
              <span
                key={area}
                className="border border-white/10 bg-black px-6 py-3 font-body text-xs font-bold uppercase tracking-widest text-white shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          {cityData.content.areasSupportingText && (
            <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg font-medium">
              {cityData.content.areasSupportingText}
            </p>
          )}
        </Reveal>
      </Section>

      <CtaSection
        subtitle={
          cityData.content.ctaParagraphs
            ? cityData.content.ctaParagraphs.join("\n\n")
            : undefined
        }
      />
      <FaqSection items={cityFaqs} title={`${cityData.name} FAQ`} />
    </>
  );
}


