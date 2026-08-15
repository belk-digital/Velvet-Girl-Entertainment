"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import Reveal from "@/components/ui/Reveal";
import { eventGalleryImages } from "@/data/eventGallery";

export default function EventPhotoGalleryContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activePhoto =
    lightboxIndex !== null ? eventGalleryImages[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % eventGalleryImages.length : null
      );
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + eventGalleryImages.length) % eventGalleryImages.length
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
  }, [lightboxIndex]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden font-body pb-28 sm:pb-36">
      {/* Top Left Red Velvet Curtain Drapery */}
      <VelvetCurtains variant="top-left" />

      {/* HERO SECTION WITH FULL-WIDTH BACKGROUND IMAGE */}
      <section className="relative z-10 w-full overflow-hidden py-20 sm:py-28 md:py-36 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={encodeURI(eventGalleryImages[0] || "/gallery images/IMG_9368.webp")}
            alt="Velvet Girl Event Gallery Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent opacity-95" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left pl-0 sm:pl-12 md:pl-24 lg:pl-32 xl:pl-36">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-[#5C0005]" />
                <span className="font-body text-xs font-bold uppercase tracking-widest text-[#5C0005]">
                  EXCLUSIVE EVENT PORTFOLIO
                </span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]" />
              </div>

              <h1
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#5C0005] mb-6 drop-shadow-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                EVENT GALLERY
              </h1>

              <p className="font-body text-base sm:text-lg text-white max-w-xl leading-relaxed mb-8 drop-shadow-sm">
                Unedited moments from our premium event experiences.
                <br />
                <span className="font-bold text-white">
                  Take a look at the energy our Velvet Girls bring to Bike Week and other major events.
                </span>
              </p>

              <div className="inline-flex items-center gap-2 bg-white/90 border border-white/10 px-4 py-2.5 rounded-full text-xs font-semibold text-stone-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#5C0005]" />
                <span>100% Verified Event Photography</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTER TABS & COUNT */}
      <section className="relative z-20 max-w-[120rem] mx-auto px-5 sm:px-6 lg:px-12 py-8 border-b border-white/10 bg-black/95 backdrop-blur-md sticky top-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 bg-[#5C0005] text-white shadow-md scale-105">
              Event Photos
            </button>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-stone-400 self-end md:self-center">
            Showing <span className="text-[#5C0005]">{eventGalleryImages.length}</span>{" "}
            {eventGalleryImages.length === 1 ? "Photo" : "Photos"}
          </div>
        </div>
      </section>

      {/* MASONRY PHOTO GRID */}
      <section className="relative z-10 max-w-[120rem] mx-auto px-5 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventGalleryImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[3/4]"
            >
              <Image
                src={encodeURI(src)}
                alt={`Event photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption Tag on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#5C0005] text-white text-[10px] font-bold uppercase tracking-widest mb-1.5 shadow-sm">
                    Events
                  </span>
                  <h3 className="font-display text-white text-base sm:text-lg font-bold tracking-tight">
                    Event Photo {index + 1}
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
              <span className="inline-block px-3 py-1 rounded-full bg-[#5C0005] text-white text-xs font-bold uppercase tracking-widest">
                Events
              </span>
              <h3 className="text-white font-display text-lg sm:text-2xl font-bold mt-1">
                Event Photo {lightboxIndex! + 1}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/60 text-xs sm:text-sm font-bold">
                {lightboxIndex! + 1} / {eventGalleryImages.length}
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
            <Image
              src={encodeURI(activePhoto)}
              alt={`Event Photo ${lightboxIndex! + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
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
              className="px-6 py-3 rounded-full bg-[#5C0005] hover:bg-[#590105] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
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
    </div>
  );
}
