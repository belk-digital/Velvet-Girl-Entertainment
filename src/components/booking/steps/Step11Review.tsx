"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  Lock,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import ReviewCard from "@/components/booking/ReviewCard";
import { performers } from "@/data/performers";

export default function Step11Review() {
  const { state, setField, goToStep } = useBookingForm();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!state.name.trim() || !state.phone.trim() || !state.email.trim()) {
      setError(
        "Please fill in your Name, Phone, and Email to complete your booking."
      );
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      const selectedPerformersNames = (state.selectedPerformers || [])
        .map((id) => performers.find((p) => p.id === id))
        .filter(Boolean)
        .map((p) => p!.name);

      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          phone: state.phone,
          email: state.email,
          eventType: state.eventType,
          selectedCity: state.city,
          eventDate: state.eventDate,
          eventTime: state.eventTime,
          guestCount: state.guestCount,
          theme: state.theme,
          costume: state.costume,
          dancers: state.dancers,
          selectedPerformers: selectedPerformersNames,
          upgrades: state.upgrades,
          notes: state.notes,
          contactMethod: "phone",
          preferredTime: "anytime",
        }),
      });
    } catch (err) {
      console.error("Failed to submit booking notification:", err);
    } finally {
      setIsSubmitting(false);
      setField("isSubmitted", true);
      goToStep(12);
    }
  };

  const selectedPerformersList = (state.selectedPerformers || [])
    .map((id) => performers.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <StepLayout stepKey={10} title="Let's review your booking details">
      <div className="max-w-4xl my-6">
        {/* Selected Performers Visual Display on Review Page */}
        <div className="mb-8 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5C0005]" />
              <span>Selected VIP Entertainers</span>
            </h3>
            <button
              type="button"
              onClick={() => goToStep(3)}
              className="text-xs font-bold uppercase tracking-wider text-[#5C0005] hover:underline"
            >
              Edit Selection
            </button>
          </div>

          {selectedPerformersList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {selectedPerformersList.map((p) => (
                <div
                  key={p!.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50 shadow-sm"
                >
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-200 shrink-0 border-2 border-[#5C0005]/20">
                    <Image
                      src={p!.image}
                      alt={p!.name}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-display text-sm font-bold text-stone-900 truncate">
                      {p!.name}
                    </span>
                    <span className="block text-[11px] font-semibold text-[#5C0005] uppercase truncate">
                      {p!.location}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{p!.rating?.toFixed(1) || "5.0"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C0005]" />
                  <span>Agency Director Choice (Top Rated Available)</span>
                </p>
                <p className="text-xs text-stone-600 mt-0.5">
                  Our dispatch directors will assign the highest-rated verified
                  performers in{" "}
                  {state.city ? state.city.split(",")[0] : "your area"}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToStep(3)}
                className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5C0005] transition-all"
              >
                Choose Specific Performers
              </button>
            </div>
          )}
        </div>

        {/* All review sections */}
        <ReviewCard />

        {/* Contact Info Capture Container */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
          <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#5C0005]" />
            <span>Contact Information for Specialist Confirmation</span>
          </h3>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="booking-name"
                className="mb-1.5 block font-body text-xs font-bold uppercase tracking-widest text-stone-500"
              >
                Full Name *
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <User className="h-4 w-4 text-[#5C0005]" />
                </div>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={state.name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-black/20 bg-white pl-10 pr-4 py-3 font-body text-sm font-semibold text-stone-800 placeholder-stone-400 outline-none transition-all focus:border-[#5C0005] focus:ring-2 focus:ring-[#5C0005]/20"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="booking-phone"
                className="mb-1.5 block font-body text-xs font-bold uppercase tracking-widest text-stone-500"
              >
                Phone Number *
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Phone className="h-4 w-4 text-[#5C0005]" />
                </div>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  value={state.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full rounded-xl border border-black/20 bg-white pl-10 pr-4 py-3 font-body text-sm font-semibold text-stone-800 placeholder-stone-400 outline-none transition-all focus:border-[#5C0005] focus:ring-2 focus:ring-[#5C0005]/20"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="booking-email"
                className="mb-1.5 block font-body text-xs font-bold uppercase tracking-widest text-stone-500"
              >
                Email Address *
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Mail className="h-4 w-4 text-[#5C0005]" />
                </div>
                <input
                  id="booking-email"
                  type="email"
                  required
                  value={state.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-black/20 bg-white pl-10 pr-4 py-3 font-body text-sm font-semibold text-stone-800 placeholder-stone-400 outline-none transition-all focus:border-[#5C0005] focus:ring-2 focus:ring-[#5C0005]/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StepNavigation
        nextLabel={isSubmitting ? "Sending Confirmation..." : "Looks Good"}
        disabled={isSubmitting}
        onNext={handleSubmit}
      />
    </StepLayout>
  );
}
