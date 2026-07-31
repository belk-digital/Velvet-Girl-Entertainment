"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
// import AgeGate from "@/components/AgeGate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroller from "@/components/layout/SmoothScroller";

const AGE_VERIFIED_KEY = "vge_age_verified";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [verified, setVerified] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem(AGE_VERIFIED_KEY) === "true";
    setVerified(isVerified);
    setCheckedStorage(true);
  }, []);

  const handleVerified = () => {
    sessionStorage.setItem(AGE_VERIFIED_KEY, "true");
    setVerified(true);
  };

  return (
    <div className="flex min-h-full flex-col bg-black">
      <SmoothScroller />
      {/* checkedStorage && !verified && <AgeGate onVerified={handleVerified} /> */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating 24/7 VIP Call & Text Now Dock */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-row items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-stone-200">
        <a
          href="tel:8439387377"
          className="flex items-center gap-2 rounded-full bg-[#740107] hover:bg-[#5c0911] text-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105"
          aria-label="Call (843) 938-7377"
          title="Call Now: (843) 938-7377"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Call: (843) 938-7377</span>
        </a>
        <a
          href="sms:8439387377"
          className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-stone-900 hover:bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105"
          aria-label="Text Us Now"
          title="Text VIP Dispatch: (843) 938-7377"
        >
          <MessageCircle className="h-4 w-4 text-[#C5A880]" />
          <span>Text Us</span>
        </a>
      </div>
    </div>
  );
}
