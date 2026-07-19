"use client";

import { useEffect, useState } from "react";
import AgeGate from "@/components/AgeGate";

const AGE_VERIFIED_KEY = "vge_age_verified";

export default function Home() {
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
    <div className="flex flex-1 flex-col bg-black">
      {checkedStorage && !verified && <AgeGate onVerified={handleVerified} />}

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center text-white">
        <p className="tracking-caps font-body text-xs text-velvet-pink/90">
          NATIONWIDE &middot; DISCREET &middot; UNFORGETTABLE
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          Elite exotic entertainment for bachelor parties, private events, and
          exclusive gatherings.
        </h1>
      </main>
    </div>
  );
}
