"use client";

import Accordion from "@/components/ui/Accordion";
import { homepageFaqs, type Faq } from "@/data/faqs";

interface FaqSectionProps {
  items?: Faq[];
  eyebrow?: string;
  title?: string;
  theme?: "crimson" | "light";
  hideBorder?: boolean;
}

export default function FaqSection({
  items = homepageFaqs,
  eyebrow = "QUESTIONS & ANSWERS",
  title = "Frequently Asked Questions",
  theme = "crimson",
  hideBorder = false,
}: FaqSectionProps) {
  const isCrimson = theme === "crimson";

  return (
    <section
      className={`w-full py-20 px-6 lg:px-12 font-sans ${
        hideBorder ? "" : "border-t"
      } ${
        isCrimson
          ? `bg-[#740107] ${hideBorder ? "" : "border-white/10"}`
          : `bg-[#FBFAF8] ${hideBorder ? "" : "border-black/10"}`
      }`}
    >
      <div className="max-w-[120rem] mx-auto">
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <p
            className={`text-xs md:text-sm font-bold uppercase tracking-widest mb-3 ${
              isCrimson ? "text-white/70" : "text-[#740107]"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-script tracking-normal leading-tight mb-4 ${
              isCrimson ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h2>
        </div>

        {/* Accordion List */}
        <Accordion items={items} theme={theme} />
      </div>
    </section>
  );
}
