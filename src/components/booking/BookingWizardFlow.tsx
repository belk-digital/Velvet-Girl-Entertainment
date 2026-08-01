"use client";

import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import ProgressBar from "@/components/booking/ProgressBar";
import Step01Welcome from "@/components/booking/steps/Step01Welcome";
import Step02EventType from "@/components/booking/steps/Step02EventType";
import Step03City from "@/components/booking/steps/Step03City";
import Step04Date from "@/components/booking/steps/Step04Date";
import Step05Guests from "@/components/booking/steps/Step05Guests";
import Step06Theme from "@/components/booking/steps/Step06Theme";
import Step07Costume from "@/components/booking/steps/Step07Costume";
import Step08Dancers from "@/components/booking/steps/Step08Dancers";
import Step09Upgrades from "@/components/booking/steps/Step09Upgrades";
import Step10Notes from "@/components/booking/steps/Step10Notes";
import Step11Review from "@/components/booking/steps/Step11Review";
import Step12Success from "@/components/booking/steps/Step12Success";

export default function BookingWizardFlow() {
  const { state } = useBookingForm();

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
        return <Step06Theme />;
      case 7:
        return <Step07Costume />;
      case 8:
        return <Step08Dancers />;
      case 9:
        return <Step09Upgrades />;
      case 10:
        return <Step10Notes />;
      case 11:
        return <Step11Review />;
      case 12:
        return <Step12Success />;
      default:
        return <Step01Welcome />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-[#740107] selection:text-white">
      <ProgressBar />
      <main className="flex-1 flex flex-col">{renderStep()}</main>
    </div>
  );
}
