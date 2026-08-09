"use client";

import React, { useState, TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

interface PerformerCarouselProps {
  images: string[];
  name: string;
}

export default function PerformerCarousel({ images, name }: PerformerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsSwiping(true);
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isSwiping) {
      setLightboxOpen(true);
    }
  };

  const nextSlide = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent | TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div 
        className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-stone-100 shadow-2xl group cursor-pointer"
        onClick={handleContainerClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={encodeURI(decodeURI(images[currentIndex]))}
          alt={`${name} - Slide ${currentIndex + 1}`}
          fill
          className="object-cover object-top transition-all duration-500 pointer-events-none"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-stone-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-stone-800" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
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

      <Lightbox 
        images={images} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        initialIndex={currentIndex} 
      />
    </>
  );
}
