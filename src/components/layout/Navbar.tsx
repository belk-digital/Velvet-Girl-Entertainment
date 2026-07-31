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
        <Link href="/" className="pointer-events-auto flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/velvet-logo.png" alt="Velvet Girl Entertainment" className="h-16 w-auto sm:h-20" />
          <span className="font-heading text-lg font-bold uppercase tracking-widest text-black sm:text-2xl">
            Velvet Girls
          </span>
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
              href="/performers"
              className="font-heading text-sm font-bold uppercase tracking-wider text-black/85 hover:text-[#740107] transition-colors"
            >
              Performers
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

          </div>

          <div className="ml-2 sm:ml-4">
            <MultiLevelDrawerMenu primaries={primaries} onOpenChange={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
