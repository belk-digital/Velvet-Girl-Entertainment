"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cities } from "@/data/cities";
import { packageThemes } from "@/data/packages";
import MultiLevelDrawerMenu, {
  type DrawerPrimary,
} from "@/components/layout/MultiLevelDrawerMenu";

const primaries: DrawerPrimary[] = [
  {
    id: "packages",
    label: "Packages",
    href: "/packages",
    dropdown: packageThemes.map((t) => ({
      label: t.name,
      href: `/packages/${t.slug}`,
    })),
  },
  {
    id: "cities",
    label: "Cities",
    href: "/cities",
    dropdown: cities.map((c) => ({
      label: c.name,
      href: `/cities/${c.stateSlug}/${c.slug}`,
    })),
  },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "join-team", label: "Join Our Team", href: "/join-team" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[110] transition-all duration-300 pointer-events-none ${hidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"} ${scrolled && !isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"} border-transparent`}>
      <nav className="mx-auto flex max-w-[120rem] items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="pointer-events-auto flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/velvet-logo.png" alt="Velvet Girl Entertainment" className="h-16 w-auto sm:h-20" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Main Navbar Links (not on drawer menu) prior to Text Us */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-2 lg:mr-4">
            <Link
              href="/"
              className="font-heading text-sm font-bold uppercase tracking-wider text-black/85 hover:text-[#740107] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-heading text-sm font-bold uppercase tracking-wider text-black/85 hover:text-[#740107] transition-colors"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="font-heading text-sm font-bold uppercase tracking-wider text-black/85 hover:text-[#740107] transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className="font-heading text-sm font-bold uppercase tracking-wider text-black/85 hover:text-[#740107] transition-colors"
            >
              Services
            </Link>

            {/* VIP Direct Call & Text Pills in Navbar */}
            <a
              href="tel:8439387377"
              className="hidden lg:inline-flex items-center gap-1.5 bg-[#740107] hover:bg-[#5c0911] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300"
            >
              <span>Call: (843) 938-7377</span>
            </a>
            <a
              href="sms:8439387377"
              className="hidden lg:inline-flex items-center gap-1.5 bg-stone-900 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300"
            >
              <span>Text Us</span>
            </a>
          </div>

          <div className="ml-2 sm:ml-4">
            <MultiLevelDrawerMenu primaries={primaries} onOpenChange={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
