"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Star,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import type { Performer } from "@/data/performers";

interface PerformerProfileModalProps {
  performer: Performer | null;
  onClose: () => void;
}

export default function PerformerProfileModal({
  performer,
  onClose,
}: PerformerProfileModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (performer) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [performer, onClose]);

  if (!performer) return null;

  const displayRating = performer.rating?.toFixed(1) || "5.0";
  const displayReviewsCount = performer.reviewsCount || 28;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-[#740107] text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo & Badges (5 cols) */}
        <div className="md:col-span-6 relative aspect-[3/4] md:aspect-auto md:h-full bg-stone-900 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={performer.image}
            alt={performer.name}
            className="w-full h-full object-cover"
          />

          {/* Top Left Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
            {performer.availableTonight && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-stone-900 shadow-sm border border-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available Tonight
              </span>
            )}
            {performer.isVerified && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#740107]/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Entertainer
              </span>
            )}
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:hidden">
            <h2 className="font-display text-3xl font-bold text-white">
              {performer.name}
            </h2>
          </div>
        </div>

        {/* Right Side: Details & Action (7 cols) */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
          <div>
            {/* Header info */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#740107]">
                  {performer.name}
                </h2>
              </div>
              <p className="mt-1 font-body text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#740107]" />
                {performer.location || performer.city || "United States"}
              </p>
            </div>

            {/* Rating Bar */}
            <div className="mt-4 flex items-center gap-3 py-2.5 px-4 bg-stone-50 rounded-xl border border-stone-100">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-bold text-stone-900 text-sm">
                  {displayRating}
                </span>
              </div>
              <span className="text-stone-300">|</span>
              <span className="text-xs font-semibold text-stone-600">
                {displayReviewsCount} Verified Client Reviews
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-xs font-semibold text-stone-600">
                {performer.eventsCount || "90+ Events"}
              </span>
            </div>

            {/* Tags / Specializations */}
            {performer.tags && performer.tags.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Attributes
                </p>
                <div className="flex flex-wrap gap-2">
                  {performer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-semibold capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                  {performer.hairColor && (
                    <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-semibold">
                      {performer.hairColor} Hair
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Services */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#740107]" />
                Available Specialties
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(
                  performer.services || [
                    "Bachelor Parties",
                    "Private Yachts",
                    "VIP Hospitality",
                    "Penthouse Events",
                  ]
                ).map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-stone-700 bg-stone-50 p-2 rounded-lg border border-stone-100"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#740107]" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Copy */}
            <div className="mt-6 border-t border-stone-200 pt-5">
              <p className="text-sm leading-relaxed text-stone-600 italic">
                &ldquo;Real women. Real photos. Real experience. Book{" "}
                {performer.name} for an unforgettable VIP gathering in{" "}
                {performer.city || "your city"}.&rdquo;
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/book-now?performer=${performer.slug || performer.id}`}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#740107] hover:bg-[#5c0911] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Book {performer.name} Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
