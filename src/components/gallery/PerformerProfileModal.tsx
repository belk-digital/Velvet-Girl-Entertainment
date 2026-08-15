"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Star,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!performer || !mounted) return null;

  const displayRating = performer.rating?.toFixed(1) || "5.0";
  const displayReviewsCount = performer.reviewsCount || 28;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-black rounded-3xl shadow-2xl overflow-hidden border border-white/10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-[#5C0005] text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo & Badges (5 cols) */}
        <div className="md:col-span-6 relative aspect-[3/4] md:aspect-auto md:h-full bg-stone-900 overflow-hidden">
          <Image
            src={performer.image}
            alt={performer.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Top Left Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
            {performer.availableTonight && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white shadow-sm border border-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available Tonight
              </span>
            )}
            {performer.isVerified && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5C0005]/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
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
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#5C0005]">
                  {performer.name}
                </h2>
              </div>
              <p className="mt-1 font-body text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#5C0005]" />
                {performer.location || performer.city || "United States"}
              </p>
            </div>

            {/* Mobile Header info */}
            <div className="md:hidden mb-4">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#5C0005]" />
                {performer.location || performer.city || "United States"}
              </p>
            </div>

            {/* Ratings & Reviews Pill */}
            <div className="mt-4 inline-flex items-center gap-2 bg-black px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-white">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-white font-black">
                  {displayRating}
                </span>
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-300">
                {displayReviewsCount} Verified Client Reviews
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-stone-300 uppercase">
                {performer.eventsCount || "100+ EVENTS"}
              </span>
            </div>

            {/* Tags / Attributes */}
            {performer.tags && performer.tags.length > 0 && (
              <div className="mt-6">
                <h4 className="font-body text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Attributes
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {performer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#111] text-stone-300 capitalize border border-white/10/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {performer.hairColor && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#111] text-stone-300 border border-white/10/60">
                      {performer.hairColor} Hair
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Specialties / Services */}
            <div className="mt-6">
              <h4 className="font-body text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5C0005]" />
                Available Specialties
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {(
                  performer.services || [
                    "Bachelor Party",
                    "Private Event",
                    "VIP Hospitality",
                    "Afterparty",
                  ]
                ).map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-stone-300 bg-black px-3 py-2 rounded-lg border border-stone-150"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5C0005] flex-shrink-0" />
                    <span className="truncate">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline or quote */}
            <div className="mt-6 p-4 rounded-2xl bg-black border border-white/10/60 text-stone-300 text-xs leading-relaxed italic">
              &ldquo;
              {performer.tagline ||
                `Real women. Real photos. Real experience. Book ${performer.name} for an unforgettable VIP gathering in ${
                  performer.city || "Charleston"
                }.`}
              &rdquo;
            </div>
          </div>

          {/* Action Footer - Stacked full-width buttons to prevent text wrapping and squished ovals */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2.5 w-full">
            <a
              href="tel:8439387377"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#5C0005] hover:bg-[#5c0911] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>CALL: (843) 938-7377</span>
            </a>
            <a
              href={`sms:8439387377?body=Hi, I would like to book ${performer.name} in ${performer.city || performer.location}`}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-black text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>TEXT VIP TO BOOK</span>
            </a>
            <Link
              href={`/book-now?performer=${performer.slug || performer.id}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2.5 border border-white/10 bg-black hover:bg-black text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01] whitespace-nowrap"
            >
              <span>BOOK ONLINE FORM</span>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
