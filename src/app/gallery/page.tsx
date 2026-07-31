import type { Metadata } from "next";
import Link from "next/link";
import GalleryContent from "@/components/gallery/GalleryContent";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Gallery | Velvet Girl Entertainment",
  description:
    "Explore our full-width luxury gallery featuring verified entertainers, exclusive bachelor parties, private yacht celebrations, and unforgettable VIP experiences.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero with Full Color Background Image */}
      <section className="relative overflow-hidden py-28 sm:py-36 border-b border-white/10">
        {/* Full Color Background Photo */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/img3.jpg"
            alt="Gallery hero background"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark tint for white text contrast while preserving original colors */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            Gallery
          </h1>
          <nav className="inline-flex items-center gap-2 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/90 drop-shadow-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#740107]">/</span>
            <span className="text-white">Gallery</span>
          </nav>
        </div>
      </section>


      {/* Main Filterable Gallery Grid */}
      <GalleryContent />

      {/* Signature Crimson FAQ Section */}
      <FaqSection />

      {/* Call to Action Section */}
      <CtaSection />
    </>
  );
}
