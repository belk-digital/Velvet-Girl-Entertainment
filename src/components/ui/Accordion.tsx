"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/data/faqs";

interface AccordionProps {
  items: Faq[];
  theme?: "light" | "crimson" | "dark";
  showImage?: boolean;
}

const faqImages = [
  encodeURI("/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"),
  encodeURI("/gallery images/BAD COP.webp"),
  encodeURI("/gallery images/BOAT_ POOL PARTY_.webp"),
  encodeURI("/gallery images/DIOR.webp"),
  encodeURI("/gallery images/GAME DAY GIRLS.webp"),
  encodeURI("/gallery images/Velvet girl.webp"),
];

export default function Accordion({
  items,
  theme = "crimson",
  showImage = true,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isCrimson = theme === "crimson" || theme === "dark";

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
    setTimeout(() => {
      (window as any).lenis?.resize();
    }, 150);
    setTimeout(() => {
      (window as any).lenis?.resize();
    }, 450);
  };

  return (
    <div
      className={`flex flex-col border-t ${
        isCrimson ? "border-white/20" : "border-black/20"
      }`}
    >
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const number = String(index + 1).padStart(2, "0");
        const imageSrc = faqImages[index % faqImages.length];

        return (
          <div
            key={index}
            className={`border-b py-8 cursor-pointer group ${
              isCrimson ? "border-white/20" : "border-black/20"
            }`}
            onClick={() => handleToggle(index)}
          >

            <div className="flex flex-col md:flex-row md:items-start w-full gap-4 md:gap-0">
              {/* Left Column: Number */}
              <div className="md:w-1/2">
                <span
                  className={`font-mono text-xl tracking-wider ${
                    isCrimson ? "text-white/60" : "text-[#740107] font-bold"
                  }`}
                >
                  /{number}
                </span>
              </div>

              {/* Right Column: Question, Content, Icon */}
              <div className="md:w-1/2 flex flex-col w-full">
                {/* Header Row */}
                <div className="flex items-center justify-between w-full">
                  <h3
                    className={`text-lg md:text-xl font-bold uppercase tracking-wide transition-colors ${
                      isOpen
                        ? isCrimson
                          ? "text-white"
                          : "text-[#740107]"
                        : isCrimson
                        ? "text-white/90 group-hover:text-white/60"
                        : "text-black group-hover:text-[#740107]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`ml-4 shrink-0 transition-transform duration-300 ${
                      isCrimson ? "text-white/60" : "text-[#740107]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-6 h-6" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-6 h-6" strokeWidth={1.5} />
                    )}
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-6">
                      {showImage && (
                        <div
                          className={`relative w-full max-w-sm aspect-video overflow-hidden ${
                            isCrimson ? "bg-white/10" : "bg-black/5"
                          }`}
                        >
                          <Image
                            src={imageSrc}
                            alt=""
                            fill
                            sizes="384px"
                            className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      )}

                      <p
                        className={`text-sm leading-relaxed max-w-lg font-medium pr-4 ${
                          isCrimson ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
