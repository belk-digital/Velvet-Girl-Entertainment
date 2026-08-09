import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import TextMarquee from "@/components/ui/TextMarquee";
import VelvetDifference from "@/components/home/VelvetDifference";
import ShowcaseGallery from "@/components/home/ShowcaseGallery";
import PerformersCarousel from "@/components/home/PerformersCarousel";
// import OurPerformersGallery from "@/components/home/OurPerformersGallery";
// import FeaturedPerformers from "@/components/home/FeaturedPerformers";
import PackagesSection from "@/components/home/PackagesSection";
import CitiesSection from "@/components/home/CitiesSection";
import Reviews from "@/components/home/Reviews";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { cities } from "@/data/cities";
import { getPageSections, sectionProps } from "@/lib/cms";
import { verifyEditToken } from "@/lib/editToken";

const EditBridge = dynamic(() => import("@/components/cms/EditBridge"));

export const metadata: Metadata = {
  title: "Velvet Girl Entertainment | Exotic Dancer & Stripper Booking Agency",
  description:
    "America's premier exotic dancer and stripper booking agency for bachelor parties, birthdays, and private celebrations nationwide. Real unedited photos, 24/7 booking concierge, 8+ cities served.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Velvet Girl Entertainment | Exotic Dancer & Stripper Booking Agency",
    description:
      "Book verified, professional exotic dancers and strippers for bachelor parties, birthdays, and private celebrations nationwide.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velvet Girl Entertainment",
    description:
      "Book verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide.",
  },
};

const siteUrl = "https://velvetgirlentertainment.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Velvet Girl Entertainment",
      description:
        "Book verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Velvet Girl Entertainment",
      url: siteUrl,
      logo: `${siteUrl}/velvet-logo.png`,
      description:
        "Velvet Girl Entertainment is a verified, professional exotic dancer and stripper booking agency for bachelor parties, birthdays, and private celebrations nationwide.",
      sameAs: ["https://www.instagram.com/velvetgirlentertainment"],
      areaServed: cities.map((c) => ({
        "@type": "City",
        name: c.name,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-843-938-7377",
        contactType: "Customer Service",
        availableLanguage: ["English"],
      },
    },
  ],
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ cms_edit_token?: string }>;
}) {
  const { cms_edit_token } = await searchParams;
  const editMode = verifyEditToken(cms_edit_token);
  const sections = await getPageSections("home");
  const hero = sectionProps(sections, "hero", {
    title: "Luxury Entertainment. Professional Performers. Nationwide.",
    subtitle:
      "Elite entertainers for bachelor parties, private celebrations, VIP events, and unforgettable nights.",
  });
  const cta = sectionProps(sections, "cta", {
    subtitle:
      "Contact our booking team today to discuss availability and receive a personalized quote.",
  });
  const whyChooseUs = sectionProps(sections, "whyChooseUs", {
    eyebrow: "WHY US",
    title: "Why Choose Velvet Girl",
  });
  const packages = sectionProps(sections, "packages", {
    eyebrow: "PACKAGES",
    title: "Choose Your Experience",
    description:
      "From private gatherings to unforgettable nights out, our packages are designed to deliver the ultimate experience—tailored to your vibe.",
  });
  const performersSection = sectionProps(sections, "performers", { title: "Our Performers" });
  const citiesSection = sectionProps(sections, "cities", {
    eyebrow: "MARKETS WE SERVE",
    description: "We're onboarding new markets regularly — more cities coming soon.",
  });
  const reviews = sectionProps(sections, "reviews", {
    eyebrow: "REVIEWS",
    title: "What Our Clients Say",
    description:
      "Explore reviews and stories from those who trusted us. Their satisfaction drives our dedication to creating unforgettable experiences.",
  });
  const gallery = sectionProps(sections, "gallery", {
    eyebrow: "GALLERY",
    title: "Real Moments, No Filters",
  });
  const velvetDifference = sectionProps(sections, "velvetDifference", {
    eyebrow: "THE VELVET DIFFERENCE",
    title: "Proven Results, Better Outcomes",
  });
  const faq = sectionProps(sections, "faq", {
    eyebrow: "QUESTIONS & ANSWERS",
    title: "Frequently Asked Questions",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero title={hero.title} subtitle={hero.subtitle} sectionId={hero.sectionId} />
      {/* <TrustStats /> */}
      <TextMarquee items={[
        "500+ EVENTS BOOKED",
        "8 CITIES SERVED",
        "24/7 BOOKING CONCIERGE",
        "100% REAL PHOTOS, NO FILTERS"
      ]} />
      {/* <AboutSection /> */}
      <WhyChooseUs
        eyebrow={whyChooseUs.eyebrow}
        title={whyChooseUs.title}
        sectionId={whyChooseUs.sectionId}
      />
      <PackagesSection
        eyebrow={packages.eyebrow}
        title={packages.title}
        description={packages.description}
        sectionId={packages.sectionId}
      />
      {/* <ServicesGrid /> */}
      <VelvetDifference
        eyebrow={velvetDifference.eyebrow}
        title={velvetDifference.title}
        sectionId={velvetDifference.sectionId}
      />
      <PerformersCarousel title={performersSection.title} sectionId={performersSection.sectionId} />
      {/* <FeaturedPerformers /> */}
      <CitiesSection
        eyebrow={citiesSection.eyebrow}
        description={citiesSection.description}
        sectionId={citiesSection.sectionId}
      />
      <Reviews
        eyebrow={reviews.eyebrow}
        title={reviews.title}
        description={reviews.description}
        sectionId={reviews.sectionId}
      />
      <ShowcaseGallery eyebrow={gallery.eyebrow} title={gallery.title} sectionId={gallery.sectionId} />
      <CtaSection subtitle={cta.subtitle} sectionId={cta.sectionId} />
      <FaqSection eyebrow={faq.eyebrow} title={faq.title} sectionId={faq.sectionId} />
      {editMode && <EditBridge />}
    </>
  );
}
