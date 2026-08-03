"use client";

import React from "react";
import {
  Lock,
  Martini,
  Anchor,
  UsersRound,
  FlagTriangleRight,
  Spade,
  Utensils,
} from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import OptionCard from "@/components/booking/OptionCard";

const EVENT_TYPES = [
  {
    slug: "private-party",
    title: "Private Party",
    icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "bachelor-party",
    title: "Bachelor Party",
    icon: <Martini className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "boat-pool-party",
    title: "Boat / Pool Party",
    icon: <Anchor className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "guys-night",
    title: "Guys Night",
    icon: <UsersRound className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "golf-caddy-girls",
    title: "Golf Caddy Girls",
    icon: <FlagTriangleRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "poker-game-night",
    title: "Poker / Game Night",
    icon: <Spade className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
  {
    slug: "breakfast-with-babes",
    title: "Breakfast With Babes",
    icon: <Utensils className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.25} />,
  },
];

export default function Step02EventType() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={2} title="What type of event is this?">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
        {EVENT_TYPES.map((ev) => (
          <OptionCard
            key={ev.slug}
            icon={ev.icon}
            title={ev.title}
            selected={state.eventType === ev.slug}
            onClick={() => setField("eventType", ev.slug)}
          />
        ))}
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
