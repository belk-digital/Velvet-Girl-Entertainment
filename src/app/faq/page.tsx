import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ | Velvet Girl Entertainment",
  description:
    "Answers to common questions about booking, availability, privacy, and how Velvet Girl Entertainment works.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Velvet Girl Entertainment",
    description:
      "Answers to common questions about booking, availability, privacy, and how Velvet Girl Entertainment works.",
    url: "/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Velvet Girl Entertainment",
    description:
      "Answers to common questions about booking, availability, privacy, and how Velvet Girl Entertainment works.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://velvetgirlentertainment.com/faq/#webpage",
      url: "https://velvetgirlentertainment.com/faq",
      name: "Frequently Asked Questions | Velvet Girl Entertainment",
      description:
        "Answers to common questions about booking, availability, privacy, and how Velvet Girl Entertainment works.",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
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

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking with Velvet Girl Entertainment."
        bgImage="/gallery images/GALLERY(2).webp"
      />
      <VelvetCurtains variant="bottom" />
      <CtaSection />
      <FaqSection items={faqs} theme="crimson" />
    </>
  );
}


