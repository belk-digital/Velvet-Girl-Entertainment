"use client";

import React from "react";
import { Clock, Sparkles, Dices, Flame, Wand2 } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import UpgradeCard from "@/components/booking/UpgradeCard";

const UPGRADE_ITEMS = [
  {
    slug: "additional-time",
    title: "Additional Time",
    description: "+1 Hour",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    slug: "enhanced-experience",
    title: "Enhanced Experience",
    description: "Tailored VIP touches",
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    slug: "additional-games",
    title: "Additional Games",
    description: "Interactive party games",
    icon: <Dices className="w-7 h-7" />,
  },
  {
    slug: "additional-dances",
    title: "Additional Dances",
    description: "Extra solo sets",
    icon: <Flame className="w-7 h-7" />,
  },
  {
    slug: "pop-up-pole",
    title: "Bring a Pop-Up Pole",
    description: "Subject to availability.",
    icon: <Wand2 className="w-7 h-7" />,
  },
];

export default function Step09Upgrades() {
  const { state, toggleUpgrade } = useBookingForm();

  return (
    <StepLayout stepKey={8} title="Enhance your experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {UPGRADE_ITEMS.map((up) => (
          <UpgradeCard
            key={up.slug}
            icon={up.icon}
            title={up.title}
            description={up.description}
            selected={state.upgrades.includes(up.slug)}
            onToggle={() => toggleUpgrade(up.slug)}
          />
        ))}
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
