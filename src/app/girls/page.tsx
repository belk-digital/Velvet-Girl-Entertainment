import type { Metadata } from "next";
import GalleryContent from "@/components/gallery/GalleryContent";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Girls | Real Performer Profiles | Velvet Girl Entertainment",
  description:
    "Browse real, unedited photos of verified performers available for booking. Filter by city, see ratings and specialties, and book with confidence — no bait-and-switch.",
  alternates: {
    canonical: "/girls",
  },
  openGraph: {
    title: "Girls | Real Performer Profiles | Velvet Girl Entertainment",
    description:
      "Browse real, unedited photos of verified performers available for booking, filterable by city.",
    url: "/girls",
  },
  twitter: {
    card: "summary",
    title: "Girls | Velvet Girl Entertainment",
    description:
      "Real, unedited photos of verified performers available for booking, filterable by city.",
  },
};

const girlsFaqs = [
  {
    question: "Are the photos of the performers real?",
    answer:
      "Yes, always. Every photo is real and unedited — no stock images, no filters, no bait-and-switch. Who you see on our site is who shows up to your event.",
  },
  {
    question: "How do I book a performer I like?",
    answer:
      "Click a performer's card to view their full profile, then use the call, text, or booking form options to request them for your event date and city.",
  },
  {
    question: "Can I filter the performers by city?",
    answer:
      "Yes. Use the city filter bar at the top of the page to see performers active in your area. If your city isn't listed yet, contact us — we're onboarding new markets regularly.",
  },
  {
    question: "Is a performer's availability shown accurate?",
    answer:
      "The \"Available Tonight\" badge reflects general short-notice availability, but final confirmation always happens through our booking team, since schedules can change day to day.",
  },
];

export default function GirlsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Complete Editorial Reference Design Performers Section (Hero + Filter Bars + Grid + Curtains) */}
      <GalleryContent />

      {/* Call to Action Section */}
      <CtaSection />

      {/* Signature Crimson FAQ Section with Seamless Transition */}
      <FaqSection items={girlsFaqs} title="Girls FAQ" hideBorder={true} />
    </main>
  );
}
