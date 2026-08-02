"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Phone,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import Reveal from "@/components/ui/Reveal";

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === selectedCategory);

  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredPhotos.length : null
      );
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
          : null
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F2] text-stone-900 overflow-hidden font-body pb-28 sm:pb-36">
      {/* Top Left Red Velvet Curtain Drapery */}
      <VelvetCurtains variant="top-left" />

      {/* HERO SECTION WITH FULL-WIDTH BACKGROUND IMAGE */}
      <section className="relative z-10 w-full overflow-hidden py-20 sm:py-28 md:py-36 border-b border-stone-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src={encodeURI("/gallery images/IMG_9368.webp")}
            alt="Velvet Girl Photo Gallery Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent opacity-95" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left pl-0 sm:pl-12 md:pl-24 lg:pl-32 xl:pl-36">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-[#740107]" />
                <span className="font-body text-xs font-bold uppercase tracking-widest text-[#740107]">
                  EXCLUSIVE VIP PORTFOLIO
                </span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]" />
              </div>

              <h1
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#740107] mb-6 drop-shadow-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GALLERY
              </h1>

              <p className="font-body text-base sm:text-lg text-stone-800 max-w-xl leading-relaxed mb-8 drop-shadow-sm">
                Real moments. No filters. Authentic energy.
                <br />
                <span className="font-bold text-stone-900">
                  Every photo below showcases the elegance and atmosphere of our VIP gatherings.
                </span>
              </p>

              <div className="inline-flex items-center gap-2 bg-white/90 border border-stone-200 px-4 py-2.5 rounded-full text-xs font-semibold text-stone-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#740107]" />
                <span>100% Verified Non-Stock Event Photography</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTER TABS & COUNT */}
      <section className="relative z-20 max-w-[120rem] mx-auto px-5 sm:px-6 lg:px-12 py-8 border-b border-stone-200/80 bg-[#FAF7F2]/95 backdrop-blur-md sticky top-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    active
                      ? "bg-[#740107] text-white shadow-md scale-105"
                      : "bg-white text-stone-700 border border-stone-200 hover:border-[#740107] hover:text-[#740107]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 self-end md:self-center">
            Showing <span className="text-[#740107]">{filteredPhotos.length}</span>{" "}
            {filteredPhotos.length === 1 ? "Photo" : "Photos"}
          </div>
        </div>
      </section>

      {/* MASONRY PHOTO GRID */}
      <section className="relative z-10 max-w-[120rem] mx-auto px-5 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                photo.aspect || "aspect-[3/4]"
              }`}
            >
              <img
                src={encodeURI(photo.src)}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption Tag on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#740107] text-white text-[10px] font-bold uppercase tracking-widest mb-1.5 shadow-sm">
                    {photo.category}
                  </span>
                  <h3 className="font-display text-white text-base sm:text-lg font-bold tracking-tight">
                    {photo.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Top Header Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#740107] text-white text-xs font-bold uppercase tracking-widest">
                {activePhoto.category}
              </span>
              <h3 className="text-white font-display text-lg sm:text-2xl font-bold mt-1">
                {activePhoto.title}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/60 text-xs sm:text-sm font-bold">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-105 z-10"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Main Displayed Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={encodeURI(activePhoto.src)}
              alt={activePhoto.title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-105 z-10"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Bottom CTA Bar */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/book-now"
              onClick={closeLightbox}
              className="px-6 py-3 rounded-full bg-[#740107] hover:bg-[#590105] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              Book For Your Event
            </Link>
            <a
              href="tel:8439387377"
              className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hidden sm:inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(843) 938-7377</span>
            </a>
          </div>
        </div>
      )}

      {/* Bottom Red Velvet Curtain Drapery */}
      <VelvetCurtains variant="bottom" />
    </div>
  );
}
