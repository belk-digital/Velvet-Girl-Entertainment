"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Featured" | "VIP Events" | "Bachelor Party" | "Costumes" | "Backstage";
  aspect?: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "dior-1",
    src: "/gallery images/DIOR.webp",
    title: "Dior Exclusive",
    category: "Featured",
    aspect: "aspect-[3/4]",
  },
  {
    id: "kimmi-k-home",
    src: "/gallery images/KIMMI K. HOMEPAGE.webp",
    title: "Kimmi K Spotlight",
    category: "Featured",
    aspect: "aspect-[4/5]",
  },
  {
    id: "bachelor-party-guys-night",
    src: "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
    title: "Bachelor Party • Guys Night",
    category: "Bachelor Party",
    aspect: "aspect-[4/3]",
  },
  {
    id: "velvet-girl-sig",
    src: "/gallery images/Velvet girl.webp",
    title: "The Velvet Signature",
    category: "Featured",
    aspect: "aspect-[3/4]",
  },
  {
    id: "boat-pool-party",
    src: "/gallery images/BOAT_ POOL PARTY_.webp",
    title: "Boat & Pool Party",
    category: "VIP Events",
    aspect: "aspect-[16/9]",
  },
  {
    id: "breakfast-with-babes",
    src: "/gallery images/BREAKFAST WITH BABES.webp",
    title: "Breakfast With Babes",
    category: "VIP Events",
    aspect: "aspect-[3/4]",
  },
  {
    id: "bad-cop",
    src: "/gallery images/BAD COP.webp",
    title: "Bad Cop Costume Theme",
    category: "Costumes",
    aspect: "aspect-[3/4]",
  },
  {
    id: "dior-series-1",
    src: "/gallery images/DIOR(1).webp",
    title: "Dior VIP Series I",
    category: "Featured",
    aspect: "aspect-[4/5]",
  },
  {
    id: "dior-series-2",
    src: "/gallery images/DIOR(2).webp",
    title: "Dior VIP Series II",
    category: "Featured",
    aspect: "aspect-[1/1]",
  },
  {
    id: "dior-series-3",
    src: "/gallery images/DIOR(3).webp",
    title: "Dior VIP Series III",
    category: "Featured",
    aspect: "aspect-[3/4]",
  },
  {
    id: "dior-glamour",
    src: "/gallery images/DIOR_1.webp",
    title: "Dior Glamour",
    category: "Featured",
    aspect: "aspect-[4/5]",
  },
  {
    id: "dominatrix",
    src: "/gallery images/DOMINATRIX.webp",
    title: "Dominatrix Theme",
    category: "Costumes",
    aspect: "aspect-[3/4]",
  },
  {
    id: "game-day-girls",
    src: "/gallery images/GAME DAY GIRLS.webp",
    title: "Game Day Girls",
    category: "VIP Events",
    aspect: "aspect-[16/9]",
  },
  {
    id: "kimmi-k-1",
    src: "/gallery images/KIMMI K(1).webp",
    title: "Kimmi K Exclusive I",
    category: "Featured",
    aspect: "aspect-[3/4]",
  },
  {
    id: "kimmi-k-2",
    src: "/gallery images/KIMMI K.webp",
    title: "Kimmi K Exclusive II",
    category: "Featured",
    aspect: "aspect-[4/5]",
  },
  {
    id: "kimmi-k-3",
    src: "/gallery images/KIMMI K_.webp",
    title: "Kimmi K Exclusive III",
    category: "Featured",
    aspect: "aspect-[3/4]",
  },
  {
    id: "lotus-1",
    src: "/gallery images/LOTUS.webp",
    title: "Lotus Lounge I",
    category: "VIP Events",
    aspect: "aspect-[4/3]",
  },
  {
    id: "lotus-2",
    src: "/gallery images/LOTUS_1.webp",
    title: "Lotus Lounge II",
    category: "VIP Events",
    aspect: "aspect-[3/4]",
  },
  {
    id: "myrtle-beach-vip",
    src: "/gallery images/MYRTLE BEACH.webp",
    title: "Myrtle Beach VIP",
    category: "VIP Events",
    aspect: "aspect-[16/9]",
  },
  {
    id: "sexy-nurse",
    src: "/gallery images/SEXY NURSE.webp",
    title: "Sexy Nurse Costume Theme",
    category: "Costumes",
    aspect: "aspect-[3/4]",
  },
  {
    id: "beach-day-package",
    src: "/gallery images/BEACH DAY PACKAGE OR BEACH CITY PAGE.webp",
    title: "Beach Day Experience",
    category: "VIP Events",
    aspect: "aspect-[4/3]",
  },
  {
    id: "gallery-1",
    src: "/gallery images/GALLERY(1).webp",
    title: "Velvet VIP Showcase I",
    category: "Backstage",
    aspect: "aspect-[3/4]",
  },
  {
    id: "gallery-2",
    src: "/gallery images/GALLERY(2).webp",
    title: "Velvet VIP Showcase II",
    category: "Backstage",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gallery-3",
    src: "/gallery images/GALLERY.webp",
    title: "Velvet VIP Showcase III",
    category: "Backstage",
    aspect: "aspect-[1/1]",
  },
  {
    id: "gallery-4",
    src: "/gallery images/GALLERY_(1).webp",
    title: "Velvet VIP Showcase IV",
    category: "Backstage",
    aspect: "aspect-[3/4]",
  },
  {
    id: "gallery-5",
    src: "/gallery images/GALLERY_.webp",
    title: "Velvet VIP Showcase V",
    category: "Backstage",
    aspect: "aspect-[4/5]",
  },
  {
    id: "img-1556",
    src: "/gallery images/IMG_1556.webp",
    title: "Editorial Spotlight I",
    category: "Backstage",
    aspect: "aspect-[3/4]",
  },
  {
    id: "img-2202",
    src: "/gallery images/IMG_2202.webp",
    title: "Editorial Spotlight II",
    category: "Backstage",
    aspect: "aspect-[4/5]",
  },
  {
    id: "img-9368",
    src: "/gallery images/IMG_9368.webp",
    title: "Editorial Spotlight III",
    category: "Backstage",
    aspect: "aspect-[16/9]",
  },
  {
    id: "img-9370",
    src: "/gallery images/IMG_9370.webp",
    title: "Editorial Spotlight IV",
    category: "Backstage",
    aspect: "aspect-[3/4]",
  },
  {
    id: "img-9372",
    src: "/gallery images/IMG_9372.webp",
    title: "Editorial Spotlight V",
    category: "Backstage",
    aspect: "aspect-[4/5]",
  },
];

const categories = [
  "All",
  "Featured",
  "VIP Events",
  "Bachelor Party",
  "Costumes",
  "Backstage",
];

export default function PhotoGalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const filteredPhotos =
    selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === selectedCategory);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

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
    setSelectedIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, filteredPhotos.length]);

  return (
    <>
      <div className="w-full bg-black pb-24 relative z-20">
        {/* FILTER TABS & COUNT */}
      <section className="relative z-30 max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 py-6 bg-black/95 backdrop-blur-md sticky top-0 border-b border-white/10/50 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none hide-scrollbar">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    active
                      ? "bg-[#5C0005] text-white shadow-md scale-105"
                      : "bg-black text-stone-300 border border-white/10 hover:border-[#5C0005] hover:text-[#5C0005]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-stone-400 self-end md:self-center">
            Showing <span className="text-[#5C0005]">{filteredPhotos.length}</span>{" "}
            {filteredPhotos.length === 1 ? "Photo" : "Photos"}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 mt-12">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-stone-400">No photos found in this category.</div>
        ) : (
          <div className="grid grid-flow-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
            {filteredPhotos.map((photo, index) => {
              // Feature a few images throughout the gallery based on the index in the current view
              const isFeatured = index === 0 || index === 7 || index === 14 || index === 21;
              
              return (
                <div 
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className={`relative w-full h-full overflow-hidden bg-stone-200 group cursor-pointer ${
                    isFeatured 
                      ? "col-span-2 row-span-2" 
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <Image
                    src={encodeURI(photo.src)}
                    alt={photo.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle category tag on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-4 sm:p-6">
                     <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest mb-1">{photo.category}</span>
                     <span className="text-white font-display text-base sm:text-lg leading-tight truncate drop-shadow-md">{photo.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredPhotos[selectedIndex] && (
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
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-3 sm:p-4 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
              src={encodeURI(filteredPhotos[selectedIndex].src)}
              alt={filteredPhotos[selectedIndex].title}
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
              {filteredPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-md overflow-hidden transition-all duration-300 snap-center ${
                    i === selectedIndex 
                      ? "ring-2 ring-white opacity-100 scale-110 shadow-lg z-10" 
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image src={encodeURI(photo.src)} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
