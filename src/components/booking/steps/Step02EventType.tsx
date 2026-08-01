"use client";

import React from "react";
import {
  PartyPopper,
  Wine,
  Ship,
  Users,
  Flag,
  Gamepad2,
  Coffee,
} from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import OptionCard from "@/components/booking/OptionCard";

const EVENT_TYPES = [
  {
    slug: "private-party",
    title: "Private Party",
    icon: <PartyPopper className="w-8 h-8" />,
  },
  {
    slug: "bachelor-party",
    title: "Bachelor Party",
    icon: <Wine className="w-8 h-8" />,
  },
  {
    slug: "boat-pool-party",
    title: "Boat / Pool Party",
    icon: <Ship className="w-8 h-8" />,
  },
  {
    slug: "guys-night",
    title: "Guys Night",
    icon: <Users className="w-8 h-8" />,
  },
  {
    slug: "golf-caddy-girls",
    title: "Golf Caddy Girls",
    icon: <Flag className="w-8 h-8" />,
  },
  {
    slug: "poker-game-night",
    title: "Poker / Game Night",
    icon: <Gamepad2 className="w-8 h-8" />,
  },
  {
    slug: "breakfast-with-babes",
    title: "Breakfast With Babes",
    icon: <Coffee className="w-8 h-8" />,
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
