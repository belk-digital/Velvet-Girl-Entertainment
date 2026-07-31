"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface GalleryItem {
  id: number;
  title: string;
  category: "all" | "bachelor" | "private-event" | "vip" | "boat-pool";
  src: string;
  spanClass: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Guys Night Bachelor Party",
    category: "bachelor",
    src: encodeURI("/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Las Vegas, NV",
  },
  {
    id: 2,
    title: "Bad Cop Theme Experience",
    category: "vip",
    src: encodeURI("/gallery images/BAD COP.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 3,
    title: "Beach Day VIP Package",
    category: "boat-pool",
    src: encodeURI("/gallery images/BEACH DAY PACKAGE OR BEACH CITY PAGE.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Myrtle Beach, SC",
  },
  {
    id: 4,
    title: "Boat & Pool Celebration",
    category: "boat-pool",
    src: encodeURI("/gallery images/BOAT_ POOL PARTY_.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Charleston, SC",
  },
  {
    id: 5,
    title: "Breakfast With Babes Experience",
    category: "bachelor",
    src: encodeURI("/gallery images/BREAKFAST WITH BABES.webp"),
    spanClass: "col-span-1 row-span-2",
    location: "Scottsdale, AZ",
  },
  {
    id: 6,
    title: "Dior VIP Showcase I",
    category: "vip",
    src: encodeURI("/gallery images/DIOR(1).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 7,
    title: "Dior VIP Showcase II",
    category: "vip",
    src: encodeURI("/gallery images/DIOR(2).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 8,
    title: "Dior Exclusive Lounge",
    category: "vip",
    src: encodeURI("/gallery images/DIOR(3).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Las Vegas, NV",
  },
  {
    id: 9,
    title: "Dior Performance Feature",
    category: "vip",
    src: encodeURI("/gallery images/DIOR.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Charlotte, NC",
  },
  {
    id: 10,
    title: "Dior Private Gathering",
    category: "private-event",
    src: encodeURI("/gallery images/DIOR_1.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Tampa, FL",
  },
  {
    id: 11,
    title: "Dominatrix Theme Party",
    category: "vip",
    src: encodeURI("/gallery images/DOMINATRIX.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 12,
    title: "Velvet Gallery Highlights I",
    category: "private-event",
    src: encodeURI("/gallery images/GALLERY(1).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Savannah, GA",
  },
  {
    id: 13,
    title: "Velvet Gallery Highlights II",
    category: "bachelor",
    src: encodeURI("/gallery images/GALLERY(2).webp"),
    spanClass: "col-span-1 row-span-2",
    location: "Charleston, SC",
  },
  {
    id: 14,
    title: "Velvet Girl Signature Moment",
    category: "vip",
    src: encodeURI("/gallery images/GALLERY.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Myrtle Beach, SC",
  },
  {
    id: 15,
    title: "Exclusive Event Showcase I",
    category: "private-event",
    src: encodeURI("/gallery images/GALLERY_(1).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Nashville, TN",
  },
  {
    id: 16,
    title: "Exclusive Event Showcase II",
    category: "bachelor",
    src: encodeURI("/gallery images/GALLERY_.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Scottsdale, AZ",
  },
  {
    id: 17,
    title: "Game Day Girls Celebration",
    category: "private-event",
    src: encodeURI("/gallery images/GAME DAY GIRLS.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Charlotte, NC",
  },
  {
    id: 18,
    title: "VIP Hospitality Evening",
    category: "vip",
    src: encodeURI("/gallery images/IMG_1556.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Las Vegas, NV",
  },
  {
    id: 19,
    title: "Poolside VIP Gathering",
    category: "boat-pool",
    src: encodeURI("/gallery images/IMG_2202.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 20,
    title: "Bachelor Weekend Feature",
    category: "bachelor",
    src: encodeURI("/gallery images/IMG_9368.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Charleston, SC",
  },
  {
    id: 21,
    title: "Private Villa Party",
    category: "private-event",
    src: encodeURI("/gallery images/IMG_9370.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Scottsdale, AZ",
  },
  {
    id: 22,
    title: "Exclusive Afterparty Experience",
    category: "vip",
    src: encodeURI("/gallery images/IMG_9372.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Myrtle Beach, SC",
  },
  {
    id: 23,
    title: "Kimmi K Exclusive Show I",
    category: "vip",
    src: encodeURI("/gallery images/KIMMI K(1).webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Tampa, FL",
  },
  {
    id: 24,
    title: "Kimmi K Featured Performer",
    category: "vip",
    src: encodeURI("/gallery images/KIMMI K. HOMEPAGE.webp"),
    spanClass: "col-span-1 row-span-2",
    location: "Miami, FL",
  },
  {
    id: 25,
    title: "Kimmi K Private Feature",
    category: "bachelor",
    src: encodeURI("/gallery images/KIMMI K.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Las Vegas, NV",
  },
  {
    id: 26,
    title: "Kimmi K Event Spotlight",
    category: "private-event",
    src: encodeURI("/gallery images/KIMMI K_.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Charleston, SC",
  },
  {
    id: 27,
    title: "Lotus Theme Celebration",
    category: "vip",
    src: encodeURI("/gallery images/LOTUS.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Scottsdale, AZ",
  },
  {
    id: 28,
    title: "Lotus Private Show",
    category: "bachelor",
    src: encodeURI("/gallery images/LOTUS_1.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Miami, FL",
  },
  {
    id: 29,
    title: "Myrtle Beach Beachside Bash",
    category: "boat-pool",
    src: encodeURI("/gallery images/MYRTLE BEACH.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Myrtle Beach, SC",
  },
  {
    id: 30,
    title: "Sexy Nurse Theme Event",
    category: "vip",
    src: encodeURI("/gallery images/SEXY NURSE.webp"),
    spanClass: "col-span-1 row-span-1",
    location: "Charlotte, NC",
  },
  {
    id: 31,
    title: "Signature Velvet Girl Feature",
    category: "bachelor",
    src: encodeURI("/gallery images/Velvet girl.webp"),
    spanClass: "col-span-1 sm:col-span-2 row-span-1",
    location: "Nationwide",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "bachelor", label: "Bachelor Parties" },
  { id: "private-event", label: "Private Events" },
  { id: "vip", label: "VIP Hospitality" },
  { id: "boat-pool", label: "Boat & Pool Parties" },
] as const;

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 lg:px-12">
      <div className="max-w-[120rem] mx-auto">
        {/* Header Row Matching Reference Image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-black/10 pb-8">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#740107] mb-2 font-body">
              All Our Good Vibes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              From Our Gallery
            </h2>
          </div>

          {/* Filter Bar with Horizontal Separators and Active Indicator */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.id;
              return (
                <div key={cat.id} className="flex items-center">
                  <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-4 py-2 font-body text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "text-black"
                        : "text-black/50 hover:text-black/85"
                    }`}
                  >
                    {cat.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#740107]" />
                    )}
                  </button>
                  {idx < categories.length - 1 && (
                    <span className="text-black/20 text-xs px-1 select-none">
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid Matching Editorial Masonry Layout */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 auto-rows-[260px] sm:auto-rows-[300px]">
            {filteredItems.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`${item.spanClass} group relative flex flex-col bg-white border border-black/10 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500`}
                >
                  {/* Image Container */}
                  <div className="relative w-full flex-1 overflow-hidden bg-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <p className="text-xs uppercase tracking-widest font-mono text-[#740107] bg-white/90 px-2.5 py-0.5 inline-block font-bold shadow-sm">
                            {item.location || "Velvet Girl"}
                          </p>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-[#740107] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#740107] text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#740107] text-white flex items-center justify-center transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#740107] text-white flex items-center justify-center transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Image and Info */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-white/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption Bar in Lightbox */}
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest font-mono text-[#740107] bg-white px-3 py-1 font-bold inline-block shadow-md">
                  {filteredItems[lightboxIndex].location || "Velvet Girl"}
                </span>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
