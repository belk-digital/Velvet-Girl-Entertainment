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
};

export default function FaqPage() {
  return (
    <>
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


