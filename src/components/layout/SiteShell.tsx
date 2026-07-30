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

      {/* Floating Bottom-Right Text Us SMS Chat Button in #900609 */}
      <a
        href="sms:+18439387737"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#900609] text-white shadow-[0_4px_25px_rgba(144,6,9,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_35px_rgba(144,6,9,0.7)]"
        aria-label="Text Us"
        title="Text Us"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.2} />
      </a>
    </div>
  );
}
