"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";

const TIME_SLOTS = [
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
];

export default function Step04Date() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={4} title="When is your event?">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl my-8">
        {/* Event Date Picker */}
        <div>
          <label
            htmlFor="event-date"
            className="mb-2 block font-body text-xs font-bold uppercase tracking-widest text-stone-400"
          >
            Event Date
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-stone-400">
              <Calendar className="h-5 w-5 text-[#540403]" />
            </div>
            <input
              id="event-date"
              type="date"
              value={state.eventDate}
              onChange={(e) => setField("eventDate", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-black pl-12 pr-4 py-4 font-body text-base font-semibold text-white outline-none transition-all duration-300 focus:border-[#540403] focus:ring-2 focus:ring-[#540403]/20 shadow-sm cursor-pointer"
            />
          </div>
        </div>

        {/* Start Time Picker */}
        <div>
          <label
            htmlFor="event-time"
            className="mb-2 block font-body text-xs font-bold uppercase tracking-widest text-stone-400"
          >
            Start Time
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-stone-400">
              <Clock className="h-5 w-5 text-[#540403]" />
            </div>
            <select
              id="event-time"
              value={state.eventTime}
              onChange={(e) => setField("eventTime", e.target.value)}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-black pl-12 pr-10 py-4 font-body text-base font-semibold text-white outline-none transition-all duration-300 focus:border-[#540403] focus:ring-2 focus:ring-[#540403]/20 shadow-sm cursor-pointer"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
