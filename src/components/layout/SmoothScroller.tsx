"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Automatically recalculate scroll height limits when DOM or images load/change
    const observer = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    if (typeof document !== "undefined") {
      observer.observe(document.body);
      observer.observe(document.documentElement);
    }

    return () => {
      observer.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  // Recalculate scroll limits on any route change
  useEffect(() => {
    if ((window as any).lenis) {
      setTimeout(() => {
        (window as any).lenis?.resize();
        ScrollTrigger.refresh();
      }, 100);
      setTimeout(() => {
        (window as any).lenis?.resize();
        ScrollTrigger.refresh();
      }, 500);
      setTimeout(() => {
        (window as any).lenis?.resize();
        ScrollTrigger.refresh();
      }, 1000);
    }
  }, [pathname]);

  return null;
}
