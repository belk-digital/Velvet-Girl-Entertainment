"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  "/images/event gallery/Car & bike meet models.jpg",
  "/images/event gallery/Car & bike meet models_(1).jpg",
  "/images/event gallery/Car & bike meet models_(2).jpg",
  "/images/event gallery/Car & bike meet models_(3).jpg",
  "/images/event gallery/Car & bike meet models_(4).jpg",
  "/images/event gallery/Car & bike meet models_(5).jpg",
  "/images/event gallery/Car & bike meet models_(6).jpg",
  "/images/event gallery/Car & bike meet models_.jpg",
  "/images/event gallery/Car meet models package_.jpg",
  "/images/event gallery/Claire Charleston profile pics_(1).webp",
  "/images/event gallery/Claire Charleston profile pics_.webp",
  "/images/event gallery/IMG_4350.webp",
  "/images/event gallery/IMG_4352.webp",
  "/images/event gallery/IMG_4353.webp",
  "/images/event gallery/IMG_4354.webp",
  "/images/event gallery/IMG_4356.webp",
  "/images/event gallery/IMG_4357.webp",
  "/images/event gallery/IMG_4359.webp",
  "/images/event gallery/IMG_4360.webp",
  "/images/event gallery/IMG_4361.webp",
  "/images/event gallery/IMG_4362.webp",
  "/images/event gallery/IMG_4363.webp",
  "/images/event gallery/IMG_4364.webp",
  "/images/event gallery/KIMMI K(1).webp",
];

export default function CarMeetGallery() {
  const container = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchEndX.current < touchStartX.current - swipeThreshold) {
      nextImage();
    }
    if (touchEndX.current > touchStartX.current + swipeThreshold) {
      prevImage();
    }
  };

  useEffect(() => {
    if (lightboxOpen && thumbnailsContainerRef.current) {
      const activeThumbnail = thumbnailsContainerRef.current.children[selectedIndex] as HTMLElement;
      if (activeThumbnail) {
        const containerWidth = thumbnailsContainerRef.current.clientWidth;
        const thumbnailOffset = activeThumbnail.offsetLeft;
        const thumbnailWidth = activeThumbnail.clientWidth;
        
        thumbnailsContainerRef.current.scrollTo({
          left: thumbnailOffset - (containerWidth / 2) + (thumbnailWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedIndex, lightboxOpen]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setLightboxOpen(false);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      lightboxRef.current?.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });

    gsap.from(gridRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 75%",
      },
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#FAF7F2] py-16 lg:py-24">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-3.5 h-3.5 rounded-full border border-[#740107]/50"></div>
              <p className="text-[#740107] text-xs font-bold tracking-widest uppercase">
                GALLERY
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 uppercase tracking-wide">
              MOMENTS CAPTURED
            </h2>
          </div>
          <div className="max-w-xs md:text-right hidden sm:block">
            <p className="text-stone-500 text-[10px] md:text-xs font-bold tracking-wider uppercase leading-relaxed">
              Explore the highlights and best moments from our car & bike meet events.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div 
          ref={gridRef}
          className="grid grid-flow-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]"
        >
          {images.map((src, index) => {
            // Feature a few images throughout the gallery
            const isFeatured = index === 1 || index === 8 || index === 13 || index === 20;
            
            return (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                className={`relative w-full h-full overflow-hidden bg-stone-200 group cursor-pointer ${
                  isFeatured 
                    ? "col-span-2 row-span-2" 
                    : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={src}
                  alt={`Car Meet Gallery Image ${index + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div ref={lightboxRef} className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300">
          
          {/* Top Right Controls */}
          <div className="absolute top-6 right-6 flex items-center gap-3 z-50">
            <button 
              onClick={toggleFullscreen}
              className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
            <button 
              onClick={closeLightbox}
              className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2.5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-3 sm:p-4 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-3 sm:p-4 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image */}
          <div 
            className="relative w-full h-[60vh] sm:h-[70vh] max-w-7xl px-4 sm:px-16 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[selectedIndex]}
              alt={`Gallery View ${selectedIndex + 1}`}
              fill
              className="object-contain pointer-events-none sm:pointer-events-auto"
              priority
            />
          </div>

          {/* Thumbnails Strip */}
          <div className="absolute bottom-6 sm:bottom-8 left-0 w-full px-4 sm:px-16 flex justify-center">
            <div 
              ref={thumbnailsContainerRef}
              className="flex gap-2 sm:gap-3 overflow-x-auto snap-x py-4 no-scrollbar hide-scrollbar w-full max-w-3xl"
            >
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-md overflow-hidden transition-all duration-300 snap-center ${
                    i === selectedIndex 
                      ? "ring-2 ring-white opacity-100 scale-110 shadow-lg z-10" 
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
