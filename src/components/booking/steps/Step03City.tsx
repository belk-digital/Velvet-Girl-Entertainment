"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin, Star, Sparkles, Check, Eye } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import { performers, type Performer } from "@/data/performers";

export default function Step03City() {
  const { state, setField, togglePerformer } = useBookingForm();

  // Filter performers location-wise based on selected event city.
  // No fallback to other cities' rosters — showing performers from a
  // different city as if they were local is misleading to the client.
  const filteredPerformers = useMemo(() => {
    if (!state.city || state.city === "Other / Not listed") {
      return [];
    }
    const cityName = state.city.split(",")[0].trim().toUpperCase();
    return performers.filter((p) => {
      const pCity = p.city?.toUpperCase() || "";
      const pLoc = p.location?.toUpperCase() || "";
      return (
        pCity === cityName ||
        pLoc.includes(cityName) ||
        cityName.includes(pCity)
      );
    });
  }, [state.city]);

  const selectedList = state.selectedPerformers || [];

  return (
    <StepLayout stepKey={3} title="Where is the event?">
      <div className="max-w-md my-8">
        <label
          htmlFor="city-select"
          className="mb-3 block font-body text-xs font-bold uppercase tracking-widest text-stone-500"
        >
          Event City
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#380605]">
            <MapPin className="h-5 w-5" />
          </div>
          <select
            id="city-select"
            value={state.city}
            onChange={(e) => setField("city", e.target.value)}
            className="w-full appearance-none rounded-2xl border border-black/20 bg-white pl-12 pr-10 py-4 font-body text-base font-semibold text-stone-800 outline-none transition-all duration-300 focus:border-[#380605] focus:ring-2 focus:ring-[#380605]/20 shadow-sm cursor-pointer"
          >
            <option value="" disabled>
              Select city
            </option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other / Not listed">Other / Not Listed Yet</option>
          </select>
        </div>
      </div>

      {/* Performer Cards Selection Section (location-wise from Gallery) */}
      <div className="mt-12 mb-10 border-t border-stone-200/80 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#380605]/10 text-[#380605] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Location Dispatch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Entertainers in{" "}
              {state.city ? state.city.split(",")[0] : "Your Area"}
            </h2>
            <p className="font-body text-sm text-stone-600 mt-1 max-w-2xl">
              Select your preferred entertainer(s) for your event. You can
              choose specific favorites or leave unselected for our agency
              directors to assign the top-rated available performers.
            </p>
          </div>

          {selectedList.length > 0 && (
            <div className="flex items-center gap-2 bg-[#380605] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-md">
              <Check className="w-4 h-4" />
              <span>{selectedList.length} Selected</span>
            </div>
          )}
        </div>

        {/* Performers Grid */}
        {!state.city ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center">
            <p className="font-body text-sm text-stone-600">
              Select an event city above to see local entertainers.
            </p>
          </div>
        ) : filteredPerformers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#380605]/30 bg-[#380605]/5 px-6 py-10 text-center">
            <p className="font-body text-sm font-semibold text-stone-800">
              We don&apos;t have a local roster listed for{" "}
              {state.city.split(",")[0]} yet.
            </p>
            <p className="font-body text-sm text-stone-600 mt-1 max-w-md mx-auto">
              No problem — leave this step unselected and our booking team
              will confirm available entertainers for your event, including
              travel to your area.
            </p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPerformers.map((performer) => {
            const isSelected = selectedList.includes(performer.id);
            const displayRating = performer.rating?.toFixed(1) || "5.0";
            const displayReviewsCount = performer.reviewsCount || 28;

            return (
              <div
                key={performer.id}
                className={`group relative flex flex-col justify-between bg-white rounded-[22px] border transition-all duration-300 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 ${
                  isSelected
                    ? "border-[#380605] ring-2 ring-[#380605]/30 bg-red-50/20"
                    : "border-stone-200/90"
                }`}
              >
                <Link
                  href={`/girls/${performer.slug || performer.id}`}
                  target="_blank"
                  className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 cursor-pointer block"
                >
                  <Image
                    src={performer.image}
                    alt={performer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Available Tonight Badge */}
                  {performer.availableTonight && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold text-stone-800 shadow-sm border border-white/50">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available Tonight
                      </span>
                    </div>
                  )}

                  {/* Selected Check Overlay Badge */}
                  {isSelected && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#380605] text-white shadow-lg">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </span>
                    </div>
                  )}

                  {/* View Photos Hover Indicator */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-stone-900 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#380605]" />
                      View Photos & Bio
                    </span>
                  </div>

                  {/* Bottom Gradient Overlay for Text Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white z-10 pointer-events-none">
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight drop-shadow-md">
                        {performer.name}
                      </h3>
                      <p className="text-[11px] font-medium text-stone-200 uppercase tracking-wider drop-shadow">
                        {performer.title || "VIP Entertainer"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-amber-400 border border-white/10">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{displayRating}</span>
                      <span className="text-[10px] text-stone-300 font-normal">
                        ({displayReviewsCount})
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Bottom Content Area */}
                <div className="p-4 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex items-center justify-between text-xs text-stone-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#380605]" />
                      <span className="font-semibold uppercase tracking-wider">
                        {performer.location}
                      </span>
                    </div>
                    {performer.hairColor && (
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 font-medium text-[11px]">
                        {performer.hairColor}
                      </span>
                    )}
                  </div>

                  {/* Selection Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePerformer(performer.id);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                      isSelected
                        ? "bg-[#380605] text-white shadow-md hover:bg-[#8B0000]"
                        : "bg-stone-900 text-white hover:bg-[#380605]"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Selected</span>
                      </>
                    ) : (
                      <>
                        <span>+ Select Entertainer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
