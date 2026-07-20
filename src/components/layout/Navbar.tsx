"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { services } from "@/data/services";
import { cities, featuredCitySlugs } from "@/data/cities";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const featuredCities = featuredCitySlugs
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Velvet Girl", href: "/about" },
      { label: "Why Choose Us", href: "/about#why-choose-us" },
      { label: "Our Process", href: "/about#our-process" },
      { label: "Safety & Privacy", href: "/about#safety-privacy" },
    ],
  },
  {
    label: "Performers",
    href: "/performers",
    dropdown: [
      { label: "All Performers", href: "/performers" },
      { label: "Blonde Performers", href: "/performers?hair=Blonde" },
      { label: "Brunette Performers", href: "/performers?hair=Brunette" },
      { label: "Redhead Performers", href: "/performers?hair=Redhead" },
      { label: "Featured Performers", href: "/performers?featured=true" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    ],
  },
  { label: "Packages", href: "/packages" },
  {
    label: "Cities",
    href: "/cities",
    dropdown: [
      ...featuredCities.map((c) => ({
        label: c.name,
        href: `/cities/${c.stateSlug}/${c.slug}`,
      })),
      { label: "View All Cities", href: "/cities" },
    ],
  },
  { label: "Join Our Team", href: "/join-team" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current || !backdropRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(panelRef.current, { display: "flex" });
      gsap.set(backdropRef.current, { display: "block" });
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(panelRef.current, {
        x: "-100%",
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(panelRef.current, { display: "none" });
          gsap.set(backdropRef.current, { display: "none" });
        },
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-3">
        <div className="flex items-center justify-self-start">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-white/85 transition-colors hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
            <span className="tracking-caps hidden font-body text-xs font-semibold sm:inline">
              MENU
            </span>
          </button>
        </div>

        <Link href="/" className="justify-self-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Velvet Girl Entertainment" className="h-16 w-auto sm:h-20" />
        </Link>

        <div className="flex items-center justify-self-end gap-3 sm:gap-5">
          <a
            href="sms:+18439387737"
            className="hidden items-center gap-2 font-body text-xs font-medium text-white/70 transition-colors hover:text-white sm:flex"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            Text Us
          </a>
          <Link
            href="/contact"
            className="tracking-caps rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-5 py-2.5 font-body text-xs font-semibold text-white transition-transform duration-200 hover:scale-105 sm:px-6"
          >
            CONTACT
          </Link>
        </div>
      </nav>
      </header>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-40 hidden bg-black/70 backdrop-blur-sm"
      />

      {/* Slide-in menu panel */}
      <div
        ref={panelRef}
        className="fixed inset-y-0 left-0 z-50 hidden w-full max-w-sm flex-col overflow-y-auto border-r border-white/10 bg-black px-6 py-6"
      >
        <div className="flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Velvet Girl Entertainment" className="h-14 w-auto" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="mt-8 flex-1 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.label}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-body text-sm text-white [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <ChevronDown className="h-4 w-4 text-velvet-pink transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="ml-3 max-h-72 overflow-y-auto border-l border-white/10 pl-4">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 font-body text-xs text-white/60 hover:text-velvet-pink"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-body text-sm text-white"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="space-y-3 border-t border-white/10 pt-6">
          <a
            href="tel:+18439387737"
            className="flex items-center gap-2 font-body text-xs font-medium text-white/70"
          >
            <Phone className="h-4 w-4 text-velvet-pink" />
            Call: (843) 938-7737
          </a>
          <a
            href="sms:+18439387737"
            className="flex items-center gap-2 font-body text-xs font-medium text-white/70"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            Text: (843) 938-7737
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="tracking-caps block rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-6 py-3 text-center font-body text-xs font-semibold text-white"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
