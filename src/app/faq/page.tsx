import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/home/CtaSection";
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
      />
      <div className="px-6 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </Reveal>
      </div>
      <CtaSection />
    </>
  );
}
