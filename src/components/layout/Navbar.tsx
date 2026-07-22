"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { packageThemes } from "@/data/packages";
import MultiLevelDrawerMenu, {
  type DrawerPrimary,
} from "@/components/layout/MultiLevelDrawerMenu";

const primaries: DrawerPrimary[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
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
    id: "performers",
    label: "Performers",
    href: "/performers",
    dropdown: [
      { label: "Blonde Performers", href: "/performers?hair=Blonde" },
      { label: "Brunette Performers", href: "/performers?hair=Brunette" },
      { label: "Redhead Performers", href: "/performers?hair=Redhead" },
      { label: "Featured Performers", href: "/performers?featured=true" },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    dropdown: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
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
  { id: "join-team", label: "Join Our Team", href: "/join-team" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[110] transition-colors duration-300 pointer-events-none ${scrolled && !isMenuOpen ? "bg-black" : "bg-transparent"} border-transparent`}>
      <nav className="mx-auto flex max-w-[120rem] items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="pointer-events-auto flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Velvet Girl Entertainment" className="h-16 w-auto sm:h-20" />
          <span className="font-heading text-lg font-bold uppercase tracking-widest text-white sm:text-2xl">
            Velvet Girls
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <a
            href="sms:+18439387737"
            className="hidden items-center gap-2 font-body text-xs font-medium text-white/70 transition-colors hover:text-white sm:flex"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            Text Us
          </a>

          <div className="ml-2 sm:ml-4">
            <MultiLevelDrawerMenu primaries={primaries} onOpenChange={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
