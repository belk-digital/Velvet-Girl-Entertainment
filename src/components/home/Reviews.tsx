"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger);

// Duplicate testimonials to have enough for a slider experience
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Reviews() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [step, setStep] = useState(0);

  // Measure slider dimensions for responsive sliding
  useEffect(() => {
    const measure = () => {
      if (!sliderRef.current || !containerRef.current) return;
      const children = sliderRef.current.children;
      if (children.length < 2) return;
      
      const s = (children[1] as HTMLElement).offsetLeft - (children[0] as HTMLElement).offsetLeft;
      setStep(s);
      
      // Calculate how many cards fit in the container to stop sliding at the end
      const containerW = containerRef.current.getBoundingClientRect().width;
      const paddingX = window.innerWidth >= 1024 ? 96 : 48; // px-6 lg:px-12 approx
      const availableW = containerW - paddingX;
      
      const visible = Math.max(1, Math.floor(availableW / s));
      setMaxIndex(Math.max(0, extendedTestimonials.length - visible));
    };
    
    measure();
    // Slight delay to ensure DOM is fully rendered before measuring
    setTimeout(measure, 100); 
    
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useGSAP(() => {
    // Entrance animations for header
    gsap.from(".review-header-element", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Entrance animations for cards
    gsap.from(".review-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      gsap.to(sliderRef.current, { x: -nextIdx * step, duration: 0.8, ease: "power3.inOut" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      gsap.to(sliderRef.current, { x: -prevIdx * step, duration: 0.8, ease: "power3.inOut" });
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-white py-24 md:py-32 overflow-hidden border-t border-black/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="review-header-element">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#740107] mb-3">
              REVIEWS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-4 sm:whitespace-nowrap">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-[#900609] via-[#740107] to-[#4a0004] bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-black/65 text-base md:text-lg max-w-xl font-body">
              Explore reviews and stories from those who trusted us. Their satisfaction drives our dedication to creating unforgettable experiences.
            </p>
          </div>
          
          <div className="review-header-element flex items-center gap-4 shrink-0">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-14 h-14 bg-[#740107] flex items-center justify-center text-white hover:bg-[#5a0105] transition-colors disabled:opacity-30 disabled:hover:bg-[#740107] cursor-pointer disabled:cursor-not-allowed group"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-14 h-14 bg-[#740107] flex items-center justify-center text-white hover:bg-[#5a0105] transition-colors disabled:opacity-30 disabled:hover:bg-[#740107] cursor-pointer disabled:cursor-not-allowed group"
            >
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative w-full">
          <div ref={sliderRef} className="flex gap-6 md:gap-10 w-max">
            {extendedTestimonials.map((t, i) => (
              <div 
                key={i} 
                className="review-card w-[320px] sm:w-[380px] md:w-[450px] shrink-0 border border-black/10 bg-white shadow-lg p-8 md:p-12 flex flex-col justify-between min-h-[350px] hover:border-black/30 transition-colors duration-500"
              >
                <div className="mb-12">
                  <div className="inline-flex items-center gap-3 border border-black/20 rounded-full px-5 py-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-[#740107]"></div>
                    <span className="text-xs font-bold text-black/80 uppercase tracking-widest">{t.name}</span>
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-black/95 leading-relaxed tracking-tight">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs font-bold text-black/40 uppercase tracking-widest mt-auto">
                  <span>Client</span>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
