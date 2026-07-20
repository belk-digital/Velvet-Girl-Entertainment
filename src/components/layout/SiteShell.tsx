"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import AgeGate from "@/components/AgeGate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      {checkedStorage && !verified && <AgeGate onVerified={handleVerified} />}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
