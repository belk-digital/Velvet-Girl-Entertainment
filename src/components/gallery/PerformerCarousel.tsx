"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PerformerCarouselProps {
  images: string[];
  name: string;
}

export default function PerformerCarousel({ images, name }: PerformerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-100 shadow-2xl group">
      <Image
        src={images[currentIndex]}
        alt={`${name} - Slide ${currentIndex + 1}`}
        fill
        className="object-cover object-top transition-all duration-500"
        priority={currentIndex === 0}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-stone-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-stone-800" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.slice(0, Math.min(images.length, 5)).map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === (currentIndex % 5) ? "bg-white scale-110" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
