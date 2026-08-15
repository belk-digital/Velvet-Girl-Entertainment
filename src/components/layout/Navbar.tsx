"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  {
    id: "events",
    label: "Events",
    href: "/events",
    dropdown: [
      {
        label: "Myrtle Beach Bike Week 2027",
        href: "/events/myrtle-beach-bike-week-2027",
      },
      {
        label: "Daytona Bike Week 2027",
        href: "/events/daytona-bike-week-2027",
      },
      {
        label: "Event Gallery",
        href: "/events/gallery",
      },
    ],
  },
  { id: "girls", label: "Girls", href: "/girls" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "join-team", label: "Join Our Team", href: "/join-team" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  // Force white background on performer profile pages
  const isPerformerPage = pathname?.startsWith("/girls/") && pathname !== "/girls";
  const isGalleryPage = pathname === "/gallery";
  const isCarMeetPage = pathname === "/packages/car-meet";
  const isHomePage = pathname === "/";
  const effectiveScrolled = scrolled || isPerformerPage;
  const isTransparent = (isGalleryPage || isCarMeetPage || isHomePage) && !effectiveScrolled;
  const useTransparentNavBranding = isTransparent && !isMenuOpen && !isHomePage;
  const useTransparentNavLinks = isTransparent && !isMenuOpen;

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
    <header className={`fixed top-0 w-full z-[110] transition-all duration-300 pointer-events-none ${hidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"} ${isTransparent && !isMenuOpen ? "bg-transparent" : (effectiveScrolled && !isMenuOpen ? "bg-black/95 backdrop-blur-md shadow-sm" : "bg-black")} border-transparent`}>
      <nav className="mx-auto flex max-w-[120rem] items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <Image
            src="/velvet-logo-transparent-navbar.png"
            alt="Velvet Girl Entertainment"
            width={160}
            height={159}
            priority
            className="h-16 w-auto sm:h-20"
          />
          <span className="font-script font-normal text-lg sm:text-xl lg:text-3xl transition-colors duration-300 text-white drop-shadow-md">
            Velvet Girl Entertainment
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Main Navbar Links (not on drawer menu) prior to Text Us */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-2 lg:mr-4">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Girls", href: "/girls" },
              { label: "Gallery", href: "/gallery" },
              { label: "Services", href: "/services" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#540403] ${useTransparentNavLinks ? "text-white/90 drop-shadow-md hover:text-white" : "text-white/85"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-2 sm:ml-4">
            <MultiLevelDrawerMenu primaries={primaries} onOpenChange={setIsMenuOpen} scrolled={!useTransparentNavLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
}
