"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Check, Crown, Shield } from "lucide-react";

const confirmations: React.ReactNode[] = [
  "You are 18 years of age or older.",
  "You understand this website contains mature content intended only for adults.",
  "Viewing such material is legal in your location.",
  <>
    You agree to our{" "}
    <a href="/terms" className="text-[#5C0005] hover:underline">
      Terms of Service
    </a>{" "}
    &{" "}
    <a href="/privacy" className="text-[#5C0005] hover:underline">
      Privacy Policy
    </a>
    .
  </>,
];

interface AgeGateProps {
  onVerified: () => void;
}

export default function AgeGate({ onVerified }: AgeGateProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        "[data-gate-card]",
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 },
        0
      )
        .fromTo(
          "[data-gate-logo]",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6 },
          0.2
        )
        .fromTo(
          "[data-gate-heading]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.4
        )
        .fromTo(
          "[data-gate-sub]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.55
        )
        .fromTo(
          "[data-gate-divider]",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" },
          0.65
        )
        .fromTo(
          "[data-gate-notice]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.75
        )
        .fromTo(
          "[data-gate-item]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.9
        )
        .fromTo(
          "[data-gate-actions]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.2
        )
        .fromTo(
          "[data-gate-footer]",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          1.4
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    gsap.to(rootRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: onVerified,
    });
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80"
    >

      
      {/* Luxury Red overlay behind the modal */}
      <div className="absolute inset-0 bg-[#5C0005]/10 backdrop-blur-[2px]"></div>

      <div className="relative z-10 mx-4 w-full max-w-3xl sm:max-w-4xl">
        <div
          data-gate-card
          className="rounded-[28px] border border-stone-200 bg-white/95 px-6 py-8 text-center text-stone-800 opacity-0 shadow-[0_8px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-12 sm:py-10"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/velvet-logo.png"
              alt="Velvet Girl Entertainment Logo"
              width={160}
              height={160}
              className="h-auto w-24 sm:w-32 drop-shadow-sm opacity-0"
              data-gate-logo
            />
          </div>
          <h1
            data-gate-heading
            className="font-display text-3xl leading-snug opacity-0 sm:text-4xl md:text-[2.2rem]"
          >
            Welcome to{" "}
            <span className="align-middle font-script text-4xl text-[#5C0005] sm:text-5xl md:text-[3rem]">
              Velvet Girl
            </span>{" "}
            Entertainment
          </h1>

          <p
            data-gate-sub
            className="mt-3 font-body text-sm font-medium text-stone-600 opacity-0 sm:text-base"
          >
            Premium luxury companionship and exclusive entertainment
            experiences.
          </p>

          <div
            data-gate-divider
            className="mx-auto mt-5 flex origin-center items-center justify-center gap-3 opacity-0"
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#5C0005]/40 sm:w-24" />
            <Crown className="h-4 w-4 text-[#5C0005]" strokeWidth={1.75} />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#5C0005]/40 sm:w-24" />
          </div>

          <div data-gate-notice className="opacity-0 mt-5">
            <p className="font-body text-sm font-medium text-stone-800 sm:text-base">
              You must be at least{" "}
              <span className="font-semibold text-[#5C0005]">
                18 years
              </span>{" "}
              of age to enter this website.
            </p>
            <p className="mt-1 font-body text-xs text-stone-500">
              By entering you confirm that:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-4">
            {confirmations.map((text, i) => (
              <div
                key={i}
                data-gate-item
                className="flex items-start gap-2 text-left opacity-0"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5C0005]/10 text-[#5C0005]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <p className="font-body text-xs leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div
            data-gate-actions
            className="mt-8 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          >
            <button
              type="button"
              onClick={handleEnter}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#5C0005] px-8 py-3.5 font-body text-sm font-bold tracking-caps text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#5c0911] hover:shadow-lg sm:w-auto sm:flex-1"
            >
              ENTER SITE
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={handleExit}
              className="w-full rounded-full border border-stone-300 bg-white px-8 py-3.5 font-body text-sm font-bold tracking-caps text-stone-600 transition-all duration-300 hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900 sm:w-auto sm:flex-1"
            >
              EXIT
            </button>
          </div>

          <div
            data-gate-footer
            className="mt-6 flex items-center justify-center gap-2 border-t border-stone-200 pt-4 text-stone-400 opacity-0"
          >
            <span className="relative flex h-5 w-5 items-center justify-center text-stone-400">
              <Shield className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute text-[6px] font-bold">18+</span>
            </span>
            <p className="font-body text-[10px] uppercase tracking-wider">
              © {new Date().getFullYear()} Velvet Girl Entertainment. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
