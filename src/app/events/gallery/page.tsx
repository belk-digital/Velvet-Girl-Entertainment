import type { Metadata } from "next";
import EventPhotoGalleryContent from "@/components/events/EventPhotoGalleryContent";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import EventDualCTA from "@/components/events/EventDualCTA";

export const metadata: Metadata = {
  title: "Event Gallery | Velvet Girl Entertainment",
  description:
    "Explore our exclusive event photo portfolio featuring authentic, unedited moments from Bike Week and other VIP gatherings.",
  alternates: {
    canonical: "/events/gallery",
  },
  openGraph: {
    title: "Event Gallery | Velvet Girl Entertainment",
    description:
      "Explore our exclusive VIP photo portfolio featuring authentic, unedited moments from Bike Week.",
    url: "/events/gallery",
  },
  twitter: {
    card: "summary",
    title: "Event Gallery | Velvet Girl Entertainment",
    description:
      "Authentic, unedited moments from VIP events and Bike Week.",
  },
};

const galleryFaqs = [
  {
    question: "Are the photos in the event gallery real?",
    answer:
      "Yes, always. Every photo is real and unedited — no stock images, no filters, no bait-and-switch. Who you see in the gallery is who shows up to your event.",
  },
  {
    question: "How do I book for Bike Week?",
    answer:
      "Click the 'Book For Your Event' button to access our specialized booking form, or call us directly to secure your VIP entertainment.",
  },
];

export default function EventGalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Complete Editorial Reference Design Photo Gallery Section */}
      <EventPhotoGalleryContent />

      {/* Dual CTA Section for Book vs Apply specific to events */}
      <EventDualCTA />

      {/* Signature Crimson FAQ Section with Seamless Transition */}
      <FaqSection items={galleryFaqs} title="Event FAQ" hideBorder={true} />
      
      {/* Global CTA Section */}
      <CtaSection />
    </main>
  );
}
