import type { Metadata } from "next";
import GalleryContent from "@/components/gallery/GalleryContent";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Gallery | Velvet Girl Entertainment",
  description:
    "Explore our full-width luxury gallery featuring verified entertainers, exclusive bachelor parties, private yacht celebrations, and unforgettable VIP experiences across nationwide cities.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Complete Editorial Reference Design Gallery Section (Hero + Filter Bars + Grid + Curtains) */}
      <GalleryContent />

      {/* Signature Crimson FAQ Section with Seamless Transition */}
      <FaqSection hideBorder={true} />

      {/* Call to Action Section */}
      <CtaSection />
    </main>
  );
}

