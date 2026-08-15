"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, ShieldCheck } from "lucide-react";
import "./MultiLevelDrawerMenu.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const HOVER_DUR = 0.4;
const HOVER_EASE = "back.out";
const DOT_GAP_PRIMARY = 12;
const DOT_GAP_SUB = 10;
const PANEL_RADIUS = 0;
const CLOSE_PANEL2_DELAY = 200;
const CLIP_HIDDEN = `inset(0% 0% 0% 100%)`;
const CLIP_VISIBLE = `inset(0% 0% 0% 0%)`;

export interface DrawerLink {
  label: string;
  href: string;
}

export interface DrawerPrimary extends DrawerLink {
  id: string;
  dropdown?: DrawerLink[];
}

const secondaryLinks: DrawerLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "18+ Disclaimer", href: "/disclaimer" },
];

export interface MultiLevelDrawerMenuProps {
  primaries: DrawerPrimary[];
  onOpenChange?: (isOpen: boolean) => void;
  scrolled?: boolean;
}

export default function MultiLevelDrawerMenu({ primaries, onOpenChange, scrolled }: MultiLevelDrawerMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLButtonElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const primaryNavRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const labelTrackRef = useRef<HTMLSpanElement>(null);
  const labelOpenRef = useRef<HTMLSpanElement>(null);
  const iconTopRef = useRef<HTMLSpanElement>(null);
  const iconBottomRef = useRef<HTMLSpanElement>(null);

  const primaryBtnRefs = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>([]);
  const primaryDotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const primaryLblRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const sublistRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sublistLabelRefs = useRef<Record<string, Array<HTMLSpanElement | null>>>({});
  const sublinkDotRefs = useRef<Record<string, Array<HTMLSpanElement | null>>>({});

  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const footerLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const mmRef = useRef<ReturnType<typeof gsap.matchMedia> | null>(null);

  const isOpenRef = useRef(false);
  const panel2OpenRef = useRef(false);
  const activeSubIdRef = useRef<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMobile = useCallback(() => {
    return window.matchMedia("(max-width: 767px)").matches;
  }, []);

  const setPanel2InitialState = useCallback(() => {
    const panel2 = panel2Ref.current;
    if (!panel2) return;
    if (isMobile()) {
      gsap.set(panel2, { clipPath: CLIP_VISIBLE, xPercent: 0, x: "100vw" });
    } else {
      gsap.set(panel2, { clipPath: CLIP_HIDDEN, xPercent: 0, x: 0 });
    }
  }, [isMobile]);

  const setActiveSublist = useCallback(
    (id: string | null) => {
      primaries.forEach((p) => {
        const sl = sublistRefs.current[p.id];
        if (!sl) return;
        const isMatch = p.id === id;
        sl.classList.toggle("mldm_sublist_active", isMatch);
        sl.setAttribute("aria-hidden", String(!isMatch));
        sl.style.visibility = isMatch ? "visible" : "hidden";
        sl.style.pointerEvents = isMatch ? "auto" : "none";
      });
      activeSubIdRef.current = id;
      primaryBtnRefs.current.forEach((btn, i) => {
        if (!btn) return;
        btn.setAttribute("aria-expanded", String(primaries[i]?.id === id));
      });
    },
    [primaries]
  );

  const resetSubLinkVisuals = useCallback((id: string) => {
    const lbls = sublistLabelRefs.current[id] || [];
    const dots = sublinkDotRefs.current[id] || [];
    lbls.forEach((lbl) => {
      if (lbl) gsap.set(lbl, { x: 0, opacity: 0 });
    });
    dots.forEach((dot) => {
      if (dot) gsap.set(dot, { scale: 0 });
    });
  }, []);

  const cancelPanel2CloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      const panel1 = panel1Ref.current;
      const panel2 = panel2Ref.current;
      const overlay = overlayRef.current;
      const scrim = scrimRef.current;
      const toggle = toggleRef.current;
      const labelTrack = labelTrackRef.current;
      const iconTop = iconTopRef.current;
      const iconBottom = iconBottomRef.current;

      if (!panel1 || !overlay || !toggle) return;

      overlay.setAttribute("inert", "");
      overlay.setAttribute("aria-hidden", "true");
      gsap.set(panel1, { clipPath: CLIP_HIDDEN });
      setPanel2InitialState();
      gsap.set(scrim, { opacity: 0 });
      if (labelTrack) gsap.set(labelTrack, { y: 0 });
      if (iconTop) gsap.set(iconTop, { y: -3, rotation: 0 });
      if (iconBottom) gsap.set(iconBottom, { y: 3, rotation: 0 });

      primaries.forEach((p) => {
        const sl = sublistRefs.current[p.id];
        if (!sl) return;
        sl.classList.remove("mldm_sublist_active");
        sl.setAttribute("aria-hidden", "true");
        sl.style.visibility = "hidden";
        sl.style.pointerEvents = "none";
      });

      mmRef.current = gsap.matchMedia();
      mmRef.current.add("(prefers-reduced-motion: reduce)", () => {
        gsap.globalTimeline.timeScale(20);
      });

      return () => {
        if (openTlRef.current) openTlRef.current.kill();
        if (closeTlRef.current) closeTlRef.current.kill();
        if (mmRef.current) mmRef.current.revert();
        cancelPanel2CloseTimer();
      };
    },
    { scope: containerRef }
  );

  const buildTimelines = contextSafe(() => {
    const panel1 = panel1Ref.current;
    const overlay = overlayRef.current;
    const scrim = scrimRef.current;
    const toggle = toggleRef.current;
    const labelTrack = labelTrackRef.current;
    const labelOpen = labelOpenRef.current;
    const iconTop = iconTopRef.current;
    const iconBottom = iconBottomRef.current;

    if (!panel1 || !overlay || !toggle) return;

    if (openTlRef.current) openTlRef.current.kill();
    if (closeTlRef.current) closeTlRef.current.kill();

    const primaryLabels = primaryLblRefs.current.filter(Boolean) as HTMLSpanElement[];

    const p1Extras: HTMLElement[] = [];
    cardRefs.current.forEach((c) => {
      if (c) p1Extras.push(c);
    });
    footerLinkRefs.current.forEach((f) => {
      if (f) p1Extras.push(f);
    });

    const navAll = [...primaryLabels, ...p1Extras];

    const labelHeight = labelOpen ? labelOpen.offsetHeight : 12;
    const trackOpenY = -(labelHeight + 2);

    const duration = 0.9;
    const ease = "expo.out";
    const stagger = 0.05;

    openTlRef.current = gsap.timeline({
      paused: true,
      defaults: { ease, force3D: true },
      onStart: () => {
        overlay.removeAttribute("inert");
        overlay.setAttribute("aria-hidden", "false");
      },
    });

    const tl = openTlRef.current;

    tl.set(panel1, { clipPath: CLIP_HIDDEN });
    tl.set(scrim, { opacity: 0 });
    if (labelTrack) tl.set(labelTrack, { y: 0 });
    if (iconTop) tl.set(iconTop, { y: -3, rotation: 0 });
    if (iconBottom) tl.set(iconBottom, { y: 3, rotation: 0 });
    primaryDotRefs.current.forEach((dot) => {
      if (dot) tl.set(dot, { scale: 0 });
    });
    tl.set(navAll, { opacity: 0, x: -16 });

    tl.to(scrim, { opacity: 1, duration: duration * 0.75 }, 0);
    tl.to(panel1, { clipPath: CLIP_VISIBLE, duration }, 0.05);
    if (labelTrack) tl.to(labelTrack, { y: trackOpenY, duration: duration * 0.55 }, duration * 0.2);
    if (iconTop) tl.to(iconTop, { y: 0, rotation: 45, duration: duration * 0.6 }, duration * 0.2);
    if (iconBottom) tl.to(iconBottom, { y: 0, rotation: -45, duration: duration * 0.6 }, duration * 0.2);
    tl.to(primaryLabels, { opacity: 1, x: 0, duration: 0.55, stagger }, duration * 0.35);
    if (p1Extras.length) {
      tl.to(p1Extras, { opacity: 1, x: 0, duration: 0.55, stagger: stagger * 0.7 }, duration * 0.45);
    }

    const closeDur = duration * 0.55;
    closeTlRef.current = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out", force3D: true },
      onComplete: () => {
        overlay.setAttribute("inert", "");
        overlay.setAttribute("aria-hidden", "true");
      },
    });

    const cl = closeTlRef.current;

    cl.to(navAll, { opacity: 0, duration: 0.15, stagger: stagger * 0.3 }, 0);
    cl.to(panel1, { clipPath: CLIP_HIDDEN, duration: closeDur }, 0.05);
    cl.to(scrim, { opacity: 0, duration: closeDur * 0.8 }, 0.1);
    if (labelTrack) cl.to(labelTrack, { y: 0, duration: closeDur * 0.55 }, 0.05);
    if (iconTop) cl.to(iconTop, { y: -3, rotation: 0, duration: closeDur * 0.6 }, 0.05);
    if (iconBottom) cl.to(iconBottom, { y: 3, rotation: 0, duration: closeDur * 0.6 }, 0.05);
  });

  const closePanel2 = contextSafe(() => {
    cancelPanel2CloseTimer();
    if (!panel2OpenRef.current) return;
    panel2OpenRef.current = false;
    const panel2 = panel2Ref.current;
    if (!panel2) return;
    if (isMobile()) {
      gsap.to(panel2, { x: "100vw", duration: 0.4, ease: "expo.out", force3D: true, overwrite: "auto" });
    } else {
      gsap.to(panel2, { clipPath: CLIP_HIDDEN, duration: 0.45, ease: "expo.out", force3D: true, overwrite: "auto" });
    }
  });

  const swapSublistContent = contextSafe((newId: string) => {
    const oldId = activeSubIdRef.current;
    const oldLbls = oldId ? sublistLabelRefs.current[oldId] || [] : [];
    const newLbls = sublistLabelRefs.current[newId] || [];

    function showNew() {
      setActiveSublist(newId);
      resetSubLinkVisuals(newId);
      if (newLbls.length) {
        gsap.fromTo(
          newLbls,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.45, ease: "expo.out", stagger: 0.05, force3D: true, overwrite: "auto" }
        );
      }
    }

    if (oldLbls.length) {
      gsap.to(oldLbls, {
        opacity: 0,
        x: -8,
        duration: 0.18,
        ease: "expo.out",
        stagger: 0.015,
        overwrite: "auto",
        onComplete: showNew,
      });
    } else {
      showNew();
    }
  });

  const openPanel2 = contextSafe((targetId: string) => {
    cancelPanel2CloseTimer();
    const primary = primaries.find((p) => p.id === targetId);
    const hasSublist = !!(primary?.dropdown && primary.dropdown.length);
    if (!hasSublist) {
      closePanel2();
      return;
    }

    if (panel2OpenRef.current && activeSubIdRef.current === targetId) return;

    if (panel2OpenRef.current && activeSubIdRef.current !== targetId) {
      swapSublistContent(targetId);
      return;
    }

    panel2OpenRef.current = true;
    setActiveSublist(targetId);
    resetSubLinkVisuals(targetId);

    const panel2 = panel2Ref.current;
    if (!panel2) return;

    if (isMobile()) {
      gsap.to(panel2, { x: 0, duration: 0.5, ease: "expo.out", force3D: true, overwrite: "auto" });
    } else {
      gsap.to(panel2, { clipPath: CLIP_VISIBLE, duration: 0.6, ease: "expo.out", force3D: true, overwrite: "auto" });
    }

    const lbls = sublistLabelRefs.current[targetId] || [];
    if (lbls.length) {
      gsap.fromTo(
        lbls,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "expo.out", force3D: true, overwrite: "auto", delay: 0.1 }
      );
    }
  });

  const schedulePanel2Close = useCallback(() => {
    cancelPanel2CloseTimer();
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      closePanel2();
    }, CLOSE_PANEL2_DELAY);
  }, [cancelPanel2CloseTimer, closePanel2]);

  const openMenu = contextSafe(() => {
    if (isOpenRef.current) return;
    isOpenRef.current = true;
    setIsOpen(true);
    (window as any).lenis?.stop();
    document.body.style.overflow = "hidden";
    toggleRef.current?.setAttribute("aria-expanded", "true");
    toggleRef.current?.setAttribute("aria-label", "Close navigation menu");
    panel2OpenRef.current = false;
    activeSubIdRef.current = null;
    setPanel2InitialState();
    buildTimelines();
    if (closeTlRef.current) closeTlRef.current.pause(0);
    openTlRef.current?.restart();
  });

  const closeMenu = contextSafe(() => {
    if (!isOpenRef.current) return;
    isOpenRef.current = false;
    setIsOpen(false);
    (window as any).lenis?.start();
    document.body.style.overflow = "";
    closePanel2();
    toggleRef.current?.setAttribute("aria-expanded", "false");
    toggleRef.current?.setAttribute("aria-label", "Open navigation menu");
    if (openTlRef.current) openTlRef.current.pause();
    if (closeTlRef.current) closeTlRef.current.restart();
  });

  const handleToggle = useCallback(() => {
    isOpenRef.current ? closeMenu() : openMenu();
  }, [openMenu, closeMenu]);

  const handlePrimaryMouseEnter = contextSafe((index: number) => {
    if (!isOpenRef.current || isMobile()) return;
    cancelPanel2CloseTimer();
    const targetId = primaries[index]?.id;
    const hasSublist = targetId && primaries.find((p) => p.id === targetId)?.dropdown?.length;
    if (hasSublist) {
      openPanel2(targetId!);
    } else {
      schedulePanel2Close();
    }

    const dot = primaryDotRefs.current[index];
    const lbl = primaryLblRefs.current[index];
    if (!dot || !lbl) return;
    const offset = dot.offsetWidth + DOT_GAP_PRIMARY;
    gsap.to(dot, { scale: 1, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
    gsap.to(lbl, { x: offset, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
  });

  const handlePrimaryMouseLeave = contextSafe((index: number) => {
    const dot = primaryDotRefs.current[index];
    const lbl = primaryLblRefs.current[index];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
    gsap.to(lbl, { x: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
  });

  const handlePrimaryClick = contextSafe((index: number) => {
    if (!isOpenRef.current) return;
    cancelPanel2CloseTimer();
    const targetId = primaries[index]?.id;
    const primary = primaries.find((p) => p.id === targetId);
    if (primary?.dropdown?.length) {
      openPanel2(targetId!);
    } else {
      closePanel2();
    }
  });

  const handlePrimaryNavMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      if (!isOpenRef.current || isMobile()) return;
      const panel2 = panel2Ref.current;
      if (panel2 && panel2.contains(e.relatedTarget as Node)) return;
      schedulePanel2Close();
    },
    [isMobile, schedulePanel2Close]
  );

  const handlePanel2MouseEnter = useCallback(() => {
    if (isMobile()) return;
    cancelPanel2CloseTimer();
  }, [isMobile, cancelPanel2CloseTimer]);

  const handlePanel2MouseLeave = useCallback(
    (e: React.MouseEvent) => {
      if (!isOpenRef.current || isMobile()) return;
      const primaryNav = primaryNavRef.current;
      if (primaryNav && primaryNav.contains(e.relatedTarget as Node)) return;
      schedulePanel2Close();
    },
    [isMobile, schedulePanel2Close]
  );

  const handleSubLinkEnter = contextSafe((primaryId: string, itemIndex: number) => {
    const dot = (sublinkDotRefs.current[primaryId] || [])[itemIndex];
    const lbl = (sublistLabelRefs.current[primaryId] || [])[itemIndex];
    if (!dot || !lbl) return;
    const offset = dot.offsetWidth + DOT_GAP_SUB;
    gsap.to(dot, { scale: 1, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
    gsap.to(lbl, { x: offset, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
  });

  const handleSubLinkLeave = contextSafe((primaryId: string, itemIndex: number) => {
    const dot = (sublinkDotRefs.current[primaryId] || [])[itemIndex];
    const lbl = (sublistLabelRefs.current[primaryId] || [])[itemIndex];
    if (!dot || !lbl) return;
    gsap.to(dot, { scale: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
    gsap.to(lbl, { x: 0, duration: HOVER_DUR, ease: HOVER_EASE, overwrite: "auto", force3D: true });
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenRef.current) closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [closeMenu]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setPanel2InitialState(), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [setPanel2InitialState]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const overlay = (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className="mldm_overlay"
        id="mldm_overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden="true"
      >
        <button ref={scrimRef} className="mldm_scrim" aria-label="Close menu" tabIndex={-1} onClick={closeMenu} />

        <aside ref={panel1Ref} className="mldm_panel mldm_panel_primary">
          <button className="mldm_close" aria-label="Close navigation menu" onClick={closeMenu}>
            <span className="mldm_close_line" aria-hidden="true" />
            <span className="mldm_close_line" aria-hidden="true" />
          </button>
          <div className="mldm_panel_inner">
            <nav
              ref={primaryNavRef}
              className="mldm_primary_nav"
              aria-label="Primary navigation"
              onMouseLeave={handlePrimaryNavMouseLeave}
            >
              <ul className="mldm_list">
                {primaries.map((primary, i) => {
                  const hasDropdown = !!primary.dropdown?.length;
                  const dotEl = (
                    <span
                      ref={(el) => {
                        primaryDotRefs.current[i] = el;
                      }}
                      className="mldm_primary_dot"
                      aria-hidden="true"
                    />
                  );
                  const lblEl = (
                    <span
                      ref={(el) => {
                        primaryLblRefs.current[i] = el;
                      }}
                      className="mldm_primary_label"
                    >
                      {primary.label}
                    </span>
                  );
                  return (
                    <li key={primary.id} className="mldm_item">
                      {hasDropdown ? (
                        <button
                          ref={(el) => {
                            primaryBtnRefs.current[i] = el;
                          }}
                          className="mldm_primary"
                          aria-expanded="false"
                          onMouseEnter={() => handlePrimaryMouseEnter(i)}
                          onMouseLeave={() => handlePrimaryMouseLeave(i)}
                          onClick={() => handlePrimaryClick(i)}
                        >
                          {dotEl}
                          {lblEl}
                        </button>
                      ) : (
                        <Link
                          ref={(el) => {
                            primaryBtnRefs.current[i] = el;
                          }}
                          href={primary.href}
                          className="mldm_primary"
                          onMouseEnter={() => handlePrimaryMouseEnter(i)}
                          onMouseLeave={() => handlePrimaryMouseLeave(i)}
                          onClick={closeMenu}
                        >
                          {dotEl}
                          {lblEl}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Book Now CTA */}
            <div className="mt-auto pt-8">
              <Link
                href="/book-now"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-6 py-4 bg-[#5C0005] hover:bg-[#5c0911] text-white font-body text-sm font-bold uppercase tracking-widest transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>

            <nav className="mldm_footer_nav" aria-label="Legal">
              {secondaryLinks.map((link, i) => (
                <Link
                  key={link.label}
                  ref={(el) => {
                    footerLinkRefs.current[i] = el;
                  }}
                  className="mldm_footer_link"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <aside
          ref={panel2Ref}
          className="mldm_panel mldm_panel_secondary"
          onMouseEnter={handlePanel2MouseEnter}
          onMouseLeave={handlePanel2MouseLeave}
        >
          <button className="mldm_back" aria-label="Back to primary categories" onClick={closePanel2}>
            <span className="mldm_back_icon" aria-hidden="true" />
            <span className="mldm_back_label">Back</span>
          </button>

          <div className="mldm_panel_inner">
            <div className="mldm_sublist_stack">
              {primaries.map((primary) => {
                const items = primary.dropdown || [];
                if (!sublistLabelRefs.current[primary.id]) sublistLabelRefs.current[primary.id] = [];
                if (!sublinkDotRefs.current[primary.id]) sublinkDotRefs.current[primary.id] = [];

                return (
                  <div
                    key={primary.id}
                    ref={(el) => {
                      sublistRefs.current[primary.id] = el;
                    }}
                    className={`mldm_sublist${primary.id === primaries[0]?.id ? " mldm_sublist_active" : ""}`}
                    aria-hidden={primary.id !== primaries[0]?.id}
                  >
                    <ul className="mldm_list">
                      {items.map((item, j) => (
                        <li key={item.href} className="mldm_item">
                          <Link
                            href={item.href}
                            className="mldm_sublink"
                            onMouseEnter={() => handleSubLinkEnter(primary.id, j)}
                            onMouseLeave={() => handleSubLinkLeave(primary.id, j)}
                            onClick={closeMenu}
                          >
                            <span
                              ref={(el) => {
                                sublinkDotRefs.current[primary.id][j] = el;
                              }}
                              className="mldm_sublink_dot"
                              aria-hidden="true"
                            />
                            <span
                              ref={(el) => {
                                sublistLabelRefs.current[primary.id][j] = el;
                              }}
                              className="mldm_sublink_label"
                            >
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={primary.href} className="mldm_sub_explore" onClick={closeMenu}>
                      Explore all
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={toggleRef}
        className="mldm_toggle text-white"
        style={{ color: "#ffffff" }}
        aria-expanded={isOpen}
        aria-controls="mldm_overlay"
        aria-label="Open navigation menu"
        onClick={handleToggle}
      >
        <span className="mldm_toggle_label_wrap">
          <span ref={labelTrackRef} className="mldm_toggle_label_track">
            <span ref={labelOpenRef} className="mldm_toggle_label">
              Menu
            </span>
            <span className="mldm_toggle_label">Close</span>
          </span>
        </span>
        <span className="mldm_toggle_icon" aria-hidden="true">
          <span ref={iconTopRef} className="mldm_toggle_line" />
          <span ref={iconBottomRef} className="mldm_toggle_line" />
        </span>
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
