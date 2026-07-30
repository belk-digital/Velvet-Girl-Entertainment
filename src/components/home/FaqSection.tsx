"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { homepageFaqs } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default to match image

  return (
    <section className="w-full bg-[#740107] py-20 px-6 lg:px-12 font-sans border-t border-white/10">
      <div className="max-w-[120rem] mx-auto">
        
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-3">
            QUESTIONS & ANSWERS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            Frequently Asked{" "}
            <span className="text-white">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/20">
          {homepageFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            
            // Cycle through the gallery images we added earlier
            const imageSrc = `/images/gallery/img${(index % 5) + 1}.${index === 3 ? 'png' : 'jpg'}`;

            return (
              <div 
                key={index} 
                className="border-b border-white/20 py-8 cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:items-start w-full gap-4 md:gap-0">
                  
                  {/* Left Column: Number */}
                  <div className="md:w-1/2">
                    <span className="text-white/60 font-mono text-xl tracking-wider">
                      /{number}
                    </span>
                  </div>
                  
                  {/* Right Column: Question, Content, Icon */}
                  <div className="md:w-1/2 flex flex-col w-full">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between w-full">
                      <h3 className={`text-lg md:text-xl font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white/60'}`}>
                        {faq.question}
                      </h3>
                      <div className="text-white/60 ml-4 shrink-0 transition-transform duration-300">
                        {isOpen ? <Minus className="w-6 h-6" strokeWidth={1.5} /> : <Plus className="w-6 h-6" strokeWidth={1.5} />}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-6">
                          {/* Image styling matching reference */}
                          <div className="w-full max-w-sm aspect-video bg-white/10 overflow-hidden">
                            <img 
                              src={imageSrc} 
                              alt="FAQ visual" 
                              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
                            />
                          </div>
                          
                          {/* Answer text */}
                          <p className="text-white/80 text-sm leading-relaxed max-w-lg font-medium pr-4">
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
      </div>
    </section>
  );
}
