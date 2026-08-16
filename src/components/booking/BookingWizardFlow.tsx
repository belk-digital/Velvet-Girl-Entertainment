"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useBookingForm } from "@/hooks/useBookingForm";
import { packageThemes, costumes, upgrades } from "@/data/packages";
import ProgressBar from "@/components/booking/ProgressBar";
import Step01Welcome from "@/components/booking/steps/Step01Welcome";
import Step02EventType from "@/components/booking/steps/Step02EventType";
import Step03City from "@/components/booking/steps/Step03City";
import Step04Date from "@/components/booking/steps/Step04Date";
import Step05Guests from "@/components/booking/steps/Step05Guests";
import Step07Costume from "@/components/booking/steps/Step07Costume";
import Step08Dancers from "@/components/booking/steps/Step08Dancers";
import Step09Upgrades from "@/components/booking/steps/Step09Upgrades";
import Step10Notes from "@/components/booking/steps/Step10Notes";
import Step11Review from "@/components/booking/steps/Step11Review";
import Step12Success from "@/components/booking/steps/Step12Success";

export default function BookingWizardFlow() {
  const { state, setField } = useBookingForm();
  const searchParams = useSearchParams();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!searchParams || initializedRef.current) return;
    initializedRef.current = true;

    const themeParam = searchParams.get("theme") || searchParams.get("package");
    const costumeParam = searchParams.get("costume");
    const dancersParam = searchParams.get("dancers");
    const upgradesParam = searchParams.get("upgrades");

    if (themeParam) {
      const matchedTheme = packageThemes.find(
        (t) =>
          t.slug.toLowerCase() === themeParam.toLowerCase() ||
          t.name.toLowerCase() === themeParam.toLowerCase()
      );
      if (matchedTheme) {
        setField("theme", matchedTheme.name);
        setField("eventType", matchedTheme.name);
      } else {
        setField("theme", themeParam);
      }
    }

    if (costumeParam) {
      const matchedCostume = costumes.find(
        (c) =>
          c.slug.toLowerCase() === costumeParam.toLowerCase() ||
          c.name.toLowerCase() === costumeParam.toLowerCase()
      );
      if (matchedCostume) {
        setField("costume", matchedCostume.name);
      } else {
        setField("costume", costumeParam);
      }
    }

    if (dancersParam) {
      const num = parseInt(dancersParam, 10);
      if (!isNaN(num) && num >= 2) {
        setField("dancers", num);
      }
    }

    if (upgradesParam) {
      const slugs = upgradesParam.split(",").map((s) => s.trim());
      const upgradeSlugs: string[] = [];
      slugs.forEach((slug) => {
        const found = upgrades.find(
          (u) =>
            u.slug.toLowerCase() === slug.toLowerCase() ||
            u.label.toLowerCase() === slug.toLowerCase()
        );
        if (found && !upgradeSlugs.includes(found.slug)) {
          upgradeSlugs.push(found.slug);
        }
      });
      if (upgradeSlugs.length > 0) {
        setField("upgrades", upgradeSlugs);
      }
    }
  }, [searchParams, setField]);

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <Step01Welcome />;
      case 2:
        return <Step02EventType />;
      case 3:
        return <Step03City />;
      case 4:
        return <Step04Date />;
      case 5:
        return <Step05Guests />;
      case 6:
        return <Step07Costume />;
      case 7:
        return <Step08Dancers />;
      case 8:
        return <Step09Upgrades />;
      case 9:
        return <Step10Notes />;
      case 10:
        return <Step11Review />;
      case 11:
        return <Step12Success />;
      default:
        return <Step01Welcome />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-[#380605] selection:text-white">
      <ProgressBar />
      <main className="flex-1 flex flex-col">{renderStep()}</main>
    </div>
  );
}
