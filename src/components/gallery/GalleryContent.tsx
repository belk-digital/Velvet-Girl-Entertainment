"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { CmsPerformer } from "@/lib/cms";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import PerformerGalleryGrid from "@/components/gallery/PerformerGalleryGrid";

const cityOptions = [
  { id: "ALL CITIES", label: "ALL CITIES" },
  { id: "CHARLESTON", label: "CHARLESTON" },
  { id: "MIAMI", label: "MIAMI" },
  { id: "ORLANDO", label: "ORLANDO" },
  { id: "TAMPA", label: "TAMPA" },
  { id: "JACKSONVILLE", label: "JACKSONVILLE" },
  { id: "NAPLES", label: "NAPLES" },
  { id: "BOCA RATON", label: "BOCA RATON" },
  { id: "WEST PALM BEACH", label: "WEST PALM BEACH" },
  { id: "FORT LAUDERDALE", label: "FORT LAUDERDALE" },
  { id: "MYRTLE BEACH", label: "MYRTLE BEACH" },
  { id: "CHARLOTTE", label: "CHARLOTTE" },
  { id: "SAVANNAH", label: "SAVANNAH" },
  { id: "ATLANTA", label: "ATLANTA" },
  { id: "LAS VEGAS", label: "LAS VEGAS" },
  { id: "LOS ANGELES", label: "LOS ANGELES" },
  { id: "CHICAGO", label: "CHICAGO" },
  { id: "NEW YORK", label: "NEW YORK" },
];

const sortOptions = [
  "Featured",
  "Highest Rated",
  "Most Popular",
  "Newest",
  "Name (A-Z)",
];

export default function GalleryContent({ performers }: { performers: CmsPerformer[] }) {
  const [selectedCity, setSelectedCity] = useState<string>("CHARLESTON");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Featured");
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const cityScrollRef = useRef<HTMLDivElement>(null);

  const handleCityScroll = (direction: "left" | "right") => {
    if (cityScrollRef.current) {
      const scrollAmount = 300;
      cityScrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filter Logic - Primarily filtered by Locations (Cities)
  const filteredPerformers = performers.filter((performer) => {
    // City / Location Filter
    if (selectedCity !== "ALL CITIES") {
      const cityMatch =
        performer.city?.toUpperCase() === selectedCity ||
        performer.location?.toUpperCase().includes(selectedCity);
      if (!cityMatch) return false;
    }

    // Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const matchName = performer.name.toLowerCase().includes(q);
      const matchCity = performer.city?.toLowerCase().includes(q) || false;
      const matchLoc = performer.location?.toLowerCase().includes(q) || false;
      const matchTags =
        performer.tags?.some((t) => t.toLowerCase().includes(q)) || false;
      if (!matchName && !matchCity && !matchLoc && !matchTags) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedPerformers = [...filteredPerformers].sort((a, b) => {
    if (sortBy === "Highest Rated") {
      return b.rating - a.rating;
    }
    if (sortBy === "Most Popular") {
      return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    }
    if (sortBy === "Newest") {
      const aNew = a.tags?.includes("new") ? 1 : 0;
      const bNew = b.tags?.includes("new") ? 1 : 0;
      return bNew - aNew;
    }
    if (sortBy === "Name (A-Z)") {
      return a.name.localeCompare(b.name);
    }
    // Default Featured
    const aFeatured = a.featured ? 1 : 0;
    const bFeatured = b.featured ? 1 : 0;
    return bFeatured - aFeatured;
  });

  const visiblePerformers = sortedPerformers.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPerformers.length;

  const displayCityHeader =
    selectedCity === "ALL CITIES" ? "ALL CITIES" : selectedCity;

  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F2] text-stone-900 overflow-hidden font-body pb-36 sm:pb-48">
      {/* Top Left Red Velvet Curtain Drapery */}
      <VelvetCurtains variant="top-left" />

      {/* HERO SECTION WITH FULL-WIDTH BACKGROUND IMAGE */}
      <section className="relative z-10 w-full overflow-hidden py-20 sm:py-28 md:py-36 border-b border-stone-200/80">
        {/* Full Background Image IMG_9368.webp */}
        <div className="absolute inset-0 z-0">
          <Image
            src={encodeURI("/gallery images/IMG_9368.webp")}
            alt="Velvet Girl Gallery Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Editorial overlay gradient to ensure high text contrast and luxury ivory/cream theme consistency */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent opacity-95" />
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left pl-0 sm:pl-12 md:pl-24 lg:pl-32 xl:pl-36">
            {/* Elegant Over-title */}
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]" />
              <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9A7B56]">
                MEET OUR
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-[#C5A880]" />
            </div>

            {/* Crimson Serif Main Title */}
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#740107] mb-6 drop-shadow-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GIRLS
            </h1>

            {/* Subtitle */}
            <p className="font-body text-base sm:text-lg text-stone-800 max-w-xl leading-relaxed mb-8 drop-shadow-sm">
              Real women. Real photos. Real experience.
              <br />
              <span className="font-bold text-stone-900">
                Browse entertainers available in your city.
              </span>
            </p>

            {/* Search Input Pill */}
            <div className="relative w-full max-w-md">
              <div className="relative flex items-center w-full rounded-full bg-white/95 backdrop-blur-md border border-stone-300 shadow-lg focus-within:border-[#740107] focus-within:ring-2 focus-within:ring-[#740107]/20 transition-all duration-300">
                <div className="pl-5 pr-2 py-3.5 text-stone-400">
                  <Search className="w-5 h-5 text-[#740107]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(12);
                  }}
                  placeholder="Search performers by location or name..."
                  className="w-full bg-transparent pr-6 py-3.5 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="pr-5 text-xs font-bold text-[#740107] hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* VIP Direct Call & Text CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 w-full max-w-md">
              <a
                href="tel:8439387377"
                className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 bg-[#740107] hover:bg-[#5c0911] text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Call: (843) 938-7377</span>
              </a>
              <a
                href="sms:8439387377"
                className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Text VIP Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION FILTER BAR & SORTING HEADER SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-4 sm:mt-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4 border-t border-b border-stone-200/80">
          {/* Left scroll button on desktop/tablet */}
          <button
            onClick={() => handleCityScroll("left")}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-stone-200 shadow-sm text-stone-600 hover:text-stone-900 mr-1 flex-shrink-0 z-10"
            aria-label="Scroll locations left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Location / City Pill Buttons Row (Primary Filter) */}
          <div
            ref={cityScrollRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 w-full px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cityOptions.map((city) => {
              const isActive = selectedCity === city.id;
              return (
                <button
                  key={city.id}
                  onClick={() => {
                    setSelectedCity(city.id);
                    setVisibleCount(12);
                  }}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                    isActive
                      ? "bg-[#740107] text-white shadow-md scale-[1.02]"
                      : "bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 border border-stone-200/90"
                  }`}
                >
                  {city.label}
                </button>
              );
            })}
          </div>

          {/* Right arrow button to scroll locations */}
          <button
            onClick={() => handleCityScroll("right")}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-stone-100 border border-stone-200 shadow-sm text-stone-700 hover:text-black ml-1 flex-shrink-0 transition-colors"
            aria-label="Scroll locations right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Sort By Dropdown */}
          <div className="relative flex-shrink-0 self-end md:self-auto pl-2">
            <button
              onClick={() => setIsSortOpen((prev) => !prev)}
              className="flex items-center gap-2 bg-white/90 hover:bg-white border border-stone-200 rounded-full px-5 py-2.5 text-xs font-semibold text-stone-700 shadow-sm transition-all"
            >
              <span className="text-stone-500">Sort by:</span>
              <span className="font-bold text-stone-900">{sortBy}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-stone-600 transition-transform ${
                  isSortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors ${
                      sortBy === option
                        ? "bg-[#740107]/10 text-[#740107] font-bold"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION HEADER: SHOWING PERFORMERS IN ... */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-10 mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-2">
          <span className="h-[1px] w-8 sm:w-16 bg-[#C5A880]" />
          <span className="font-display text-xs font-bold uppercase tracking-widest text-[#9A7B56]">
            SHOWING PERFORMERS IN
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-[#C5A880]" />
        </div>

        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#740107] flex items-center justify-center gap-1.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>{displayCityHeader}</span>
          <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#740107] inline-block" />
        </h2>
      </section>

      {/* PERFORMERS GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {sortedPerformers.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm max-w-xl mx-auto my-12">
            <Sparkles className="w-12 h-12 text-[#740107] mx-auto mb-4 opacity-75" />
            <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
              No Entertainers Found
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              We couldn&apos;t find any entertainers matching your selected
              location criteria. Try choosing a different city or location.
            </p>
            <button
              onClick={() => {
                setSelectedCity("ALL CITIES");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-[#740107] hover:bg-[#5c0911] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Reset Location Filter
            </button>
          </div>
        ) : (
          <PerformerGalleryGrid performers={visiblePerformers} />
        )}

        {/* LOAD MORE BUTTON */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-stone-800 border border-stone-300 hover:border-stone-400 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>LOAD MORE</span>
              <ChevronDown className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        )}
      </section>

      {/* Bottom Red Velvet Curtains */}
      <VelvetCurtains variant="bottom" />
    </div>
  );
}
