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
        <Sparkles className="w-12 h-12 text-[#540403] mx-auto mb-4 opacity-75" />
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
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black transition-all duration-300 hover:border-[#540403]/60 hover:shadow-[0_0_30px_rgba(84,4,3,0.15)]"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111]">
                  <Image
                    src={encodeURI(decodeURI(performer.image))}
                    alt={performer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Left: Available Pill */}
                  {performer.availableTonight && (
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/90 px-3 py-1.5 backdrop-blur-md border border-white/10 z-10">
                      <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                      <span className="font-body text-[10px] font-bold text-white">Available Tonight</span>
                    </div>
                  )}

                  {/* Top Right: Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(e, performer.id)}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 z-10"
                    aria-label="Save to favorites"
                  >
                    <Heart className={`h-4 w-4 transition-colors ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-normal tracking-[0.2em] uppercase text-white transition-colors group-hover:text-[#540403]">
                      {performer.name}
                    </h3>
                    
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-white/70">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="font-body text-xs font-semibold tracking-wide">
                        {performer.city || performer.location}
                      </span>
                    </div>
                    
                    <div className="mt-2.5 flex items-center justify-center gap-1.5">
                      <span className="font-body text-sm font-bold text-white">{displayRating}</span>
                      <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="font-body text-xs font-medium text-white/50">({displayReviewsCount})</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex w-full items-center justify-center gap-2 rounded-full bg-[#540403] py-3.5 font-body text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#5c0911]">
                      <span>View Profile</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3" onClick={(e) => e.preventDefault()}>
                      <a
                        href="tel:8439387377"
                        className="flex items-center justify-center gap-2 rounded-full border border-white/5 bg-[#111] py-3 font-body text-[10px] font-bold uppercase tracking-widest text-white/90 transition-colors hover:bg-[#222]"
                        title="Call to book"
                      >
                        <span className="text-sm">📞</span>
                        <span>Call</span>
                      </a>
                      <a
                        href={`sms:8439387377?body=Hi! I would like to book ${performer.name} in ${performer.city || performer.location}`}
                        className="flex items-center justify-center gap-2 rounded-full border border-white/5 bg-[#111] py-3 font-body text-[10px] font-bold uppercase tracking-widest text-white/90 transition-colors hover:bg-[#222]"
                        title="Text to book"
                      >
                        <span className="text-sm">💬</span>
                        <span>Text</span>
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
