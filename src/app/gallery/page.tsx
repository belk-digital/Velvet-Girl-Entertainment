import type { Metadata } from "next";
import PhotoGalleryContent from "@/components/gallery/PhotoGalleryContent";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { performers } from "@/data/performers";

export const metadata: Metadata = {
  title: "Gallery | VIP Photo Portfolio | Velvet Girl Entertainment",
  description:
    "Explore our exclusive VIP photo portfolio featuring authentic, unedited moments from luxury bachelor parties, private events, and costumes.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | VIP Photo Portfolio | Velvet Girl Entertainment",
    description:
      "Explore our exclusive VIP photo portfolio featuring authentic, unedited moments from luxury gatherings.",
    url: "/gallery",
  },
  twitter: {
    card: "summary",
    title: "Gallery | Velvet Girl Entertainment",
    description:
      "Authentic, unedited moments from luxury bachelor parties and private events.",
  },
};

const galleryFaqs = [
  {
    question: "Are the photos in the gallery real?",
    answer:
      "Yes, always. Every photo is real and unedited — no stock images, no filters, no bait-and-switch. Who you see in the gallery is who shows up to your event.",
  },
  {
    question: "How do I book a performer I like from the gallery?",
    answer:
      "Click a performer's card to view their full profile, then use the call, text, or booking form options to request them for your event date and city.",
  },
  {
    question: "Can I filter the gallery by city?",
    answer:
      "Yes. Use the city filter bar at the top of the gallery to see performers active in your area. If your city isn't listed yet, contact us — we're onboarding new markets regularly.",
  },
  {
    question: "Is a performer's availability shown in the gallery accurate?",
    answer:
      "The \"Available Tonight\" badge reflects general short-notice availability, but final confirmation always happens through our booking team, since schedules can change day to day.",
  },
];

const pageUrl = "https://velvetgirlentertainment.com/gallery";
const galleryPerformers = performers.slice(0, 16);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Gallery | Velvet Girl Entertainment",
      description:
        "Browse real, unedited photos of verified performers available for booking, filterable by city.",
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#itemList`,
      name: "Velvet Girl Entertainment Performer Gallery",
      itemListElement: galleryPerformers.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: p.name,
          image: p.image.startsWith("http")
            ? p.image
            : `https://velvetgirlentertainment.com${p.image}`,
          jobTitle: p.title,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: galleryFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://velvetgirlentertainment.com" },
        { "@type": "ListItem", position: 2, name: "Gallery", item: pageUrl },
      ],
    },
  ],
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Complete Editorial Reference Design Photo Gallery Section */}
      <PhotoGalleryContent />

      {/* Call to Action Section */}
      <CtaSection />

      {/* Signature Crimson FAQ Section with Seamless Transition */}
      <FaqSection items={galleryFaqs} title="Gallery FAQ" hideBorder={true} />
    </main>
  );
}
