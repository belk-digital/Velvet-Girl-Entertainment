import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Velvet Girl Entertainment | Bachelor Party & Private Event Entertainment",
  description:
    "Book verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide. Real unedited photos, 24/7 booking concierge, 8+ cities served.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Velvet Girl Entertainment | Bachelor Party & Private Event Entertainment",
    description:
      "Book verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide.",
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
        "Velvet Girl Entertainment books verified, professional entertainers for bachelor parties, birthdays, and private celebrations nationwide.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      {/* <TrustStats /> */}
      <TextMarquee items={[
        "500+ EVENTS BOOKED",
        "8 CITIES SERVED",
        "24/7 BOOKING CONCIERGE",
        "100% REAL PHOTOS, NO FILTERS"
      ]} />
      {/* <AboutSection /> */}
      <WhyChooseUs />
      <PackagesSection />
      {/* <ServicesGrid /> */}
      <VelvetDifference />
      <PerformersCarousel />
      {/* <FeaturedPerformers /> */}
      <CitiesSection />
      <Reviews />
      <ShowcaseGallery />
      <CtaSection />
      <FaqSection />
    </>
  );
}
