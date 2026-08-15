"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

interface GalleryPerformer {
  id: string;
  slug?: string;
  name: string;
  image: string;
  city?: string;
  location?: string;
  rating: number;
  reviewsCount?: number;
  availableTonight?: boolean;
}

interface PerformerGalleryGridProps {
  performers: GalleryPerformer[];
  emptyStateMessage?: string;
}

export default function PerformerGalleryGrid({
  performers,
  emptyStateMessage = "We couldn't find any entertainers matching your selected criteria. Try a different city or check back soon.",
}: PerformerGalleryGridProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (performers.length === 0) {
    return (
      <div className="bg-black rounded-3xl p-12 text-center border border-white/10 shadow-sm max-w-xl mx-auto my-12">
        <Sparkles className="w-12 h-12 text-[#5C0005] mx-auto mb-4 opacity-75" />
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          No Entertainers Found
        </h3>
        <p className="text-stone-300 text-sm">{emptyStateMessage}</p>
      </div>
    );
  }

  return (
    <>
      <Reveal>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            performers.length <= 3
              ? "lg:grid-cols-3 max-w-5xl mx-auto"
              : "lg:grid-cols-4"
          } gap-6 sm:gap-7`}
        >
          {performers.map((performer) => {
            const isFav = !!favorites[performer.id];
            const displayRating = performer.rating?.toFixed(1) || "5.0";
            const displayReviewsCount = performer.reviewsCount || 28;

            return (
              <Link
                key={performer.id}
                href={`/girls/${performer.slug || performer.id}`}
                className="group relative flex flex-col justify-between bg-black rounded-[22px] border border-white/10/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Top Image Area */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111]">
                  <Image
                    src={encodeURI(decodeURI(performer.image))}
                    alt={performer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top Left Badge: Available Tonight */}
                  {performer.availableTonight && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold text-white shadow-sm border border-white/50">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available Tonight
                      </span>
                    </div>
                  )}

                  {/* Top Right Heart Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(e, performer.id)}
                    className={`absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm border border-white/50 backdrop-blur-md ${
                      isFav
                        ? "bg-black text-red-500 scale-110"
                        : "bg-white/70 hover:bg-black text-stone-300 hover:text-red-500"
                    }`}
                    aria-label="Save to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>

                  {/* Subtle hover gradient at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom Card Footer Section */}
                <div className="p-5 flex flex-col items-center justify-between flex-1 bg-black text-center">
                  <div>
                    {/* Name in Crimson Serif */}
                    <h3
                      className="font-display text-xl font-bold tracking-wide text-[#5C0005] group-hover:text-[#4a0105] transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {performer.name}
                    </h3>

                    {/* Location Pin + City */}
                    <p className="mt-1 font-body text-xs text-stone-400 font-semibold flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#5C0005]" />
                      <span>{performer.city || performer.location}</span>
                    </p>

                    {/* Star Rating & Review Count */}
                    <div className="mt-2.5 flex items-center justify-center gap-1 text-xs">
                      <span className="font-bold text-white text-sm">
                        {displayRating}
                      </span>
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mx-0.5" />
                      <span className="text-stone-400 font-medium">
                        ({displayReviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Crimson VIEW PROFILE Pill Button & Quick Contact */}
                  <div className="w-full mt-4 flex flex-col gap-2">
                    <span className="w-full inline-flex items-center justify-center gap-2 bg-[#5C0005] group-hover:bg-[#5c0911] text-white rounded-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300">
                      <span>VIEW PROFILE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div
                      className="flex items-center gap-2 pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href="tel:8439387377"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111] hover:bg-[#5C0005] text-white hover:text-white rounded-full py-2 px-3 text-[11px] font-bold uppercase tracking-wider transition-colors border border-white/10 shadow-xs"
                        title="Call (843) 938-7377 to book"
                      >
                        <span>📞 Call</span>
                      </a>
                      <a
                        href={`sms:8439387377?body=Hi! I would like to book ${performer.name} in ${performer.city || performer.location}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111] hover:bg-stone-900 text-white hover:text-white rounded-full py-2 px-3 text-[11px] font-bold uppercase tracking-wider transition-colors border border-white/10 shadow-xs"
                        title="Text to book"
                      >
                        <span>💬 Text</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </>
  );
}
