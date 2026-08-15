"use client";

import React from "react";
import {
  PartyPopper,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Shirt,
  UserCheck,
  Star,
  FileText,
} from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import { services } from "@/data/services";
import { packageThemes, costumes, upgrades } from "@/data/packages";
import { cities } from "@/data/cities";
import { performers } from "@/data/performers";

export default function ReviewCard() {
  const { state, goToStep } = useBookingForm();

  const selectedPerformerNames = (state.selectedPerformers || [])
    .map((id) => performers.find((p) => p.id === id)?.name)
    .filter(Boolean);

  const eventTypeName =
    services.find((s) => s.slug === state.eventType)?.title ||
    state.eventType ||
    "Private Party";

  const cityName =
    cities.find((c) => c.slug === state.city)?.name ||
    state.city ||
    "Charleston, SC";

  const themeName =
    packageThemes.find((t) => t.slug === state.theme)?.name ||
    state.theme ||
    "No Preference";

  const costumeName =
    costumes.find((c) => c.slug === state.costume)?.name ||
    state.costume ||
    "No Preference";

  const upgradeNames = state.upgrades
    .map((slug) => upgrades.find((u) => u.slug === slug)?.label)
    .filter(Boolean);

  const sections = [
    {
      icon: <PartyPopper className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Event Type",
      value: eventTypeName,
      step: 2,
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Event City",
      value: cityName,
      step: 3,
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Date & Time",
      value: `${state.eventDate || "TBD"} at ${state.eventTime || "07:00 PM"}`,
      step: 4,
    },
    {
      icon: <Users className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Guests",
      value: `${state.guestCount} Guests`,
      step: 5,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Theme",
      value: themeName,
      step: 6,
    },
    {
      icon: <Shirt className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Costume",
      value: costumeName,
      step: 7,
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Dancers",
      value: `${state.dancers} Performers`,
      step: 8,
    },
    {
      icon: <Star className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Selected Entertainers",
      value:
        selectedPerformerNames.length > 0
          ? selectedPerformerNames.join(", ")
          : "Agency Director Choice (Top Rated)",
      step: 3,
    },
    {
      icon: <Star className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Upgrades",
      value:
        upgradeNames.length > 0 ? upgradeNames.join(", ") : "No extra upgrades",
      step: 9,
    },
    {
      icon: <FileText className="w-5 h-5 text-[#4C0C0A]" />,
      label: "Notes",
      value: state.notes || "No additional notes",
      step: 10,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {sections.map((sec) => (
          <div
            key={sec.label}
            onClick={() => goToStep(sec.step)}
            className="group relative flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/90 hover:border-[#4C0C0A]/40 hover:bg-[#4C0C0A]/[0.02] transition-all cursor-pointer shadow-sm"
          >
            <div className="p-2 rounded-lg bg-[#4C0C0A]/5 mt-0.5 shrink-0">
              {sec.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-body text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-0.5">
                {sec.label}
              </span>
              <span className="block font-body text-sm font-semibold text-white break-words">
                {sec.value}
              </span>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity font-body text-[10px] text-[#4C0C0A] font-bold uppercase absolute top-2 right-2">
              Edit
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
