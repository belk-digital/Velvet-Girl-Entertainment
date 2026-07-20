import Link from "next/link";
import { Camera, Share2, Shield, Users } from "lucide-react";
import { homepageServiceSlugs, services } from "@/data/services";
import { featuredCitySlugs, cities } from "@/data/cities";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Cities", href: "/cities" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Join Our Team", href: "/join-team" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "18+ Disclaimer", href: "/disclaimer" },
];

const footerServices = services.filter((s) =>
  homepageServiceSlugs.slice(0, 6).includes(s.slug)
);

const footerCities = featuredCitySlugs
  .slice(0, 6)
  .map((slug) => cities.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="font-display text-lg text-white">
            <span className="font-script text-2xl text-velvet-pink">
              Velvet Girl
            </span>{" "}
            Entertainment
          </Link>
          <p className="mt-4 font-body text-xs leading-relaxed text-white/50">
            Elite exotic entertainment for bachelor parties, private events,
            and exclusive gatherings — nationwide, discreet, unforgettable.
          </p>
          <div className="mt-5 flex gap-3">
            {[Camera, Users, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-velvet-pink/50 hover:text-velvet-pink"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="tracking-caps mb-4 font-body text-[11px] font-semibold text-white/40">
            QUICK LINKS
          </p>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-xs text-white/60 transition-colors hover:text-velvet-pink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracking-caps mb-4 font-body text-[11px] font-semibold text-white/40">
            POPULAR SERVICES
          </p>
          <ul className="space-y-2.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-body text-xs text-white/60 transition-colors hover:text-velvet-pink"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracking-caps mb-4 font-body text-[11px] font-semibold text-white/40">
            POPULAR CITIES
          </p>
          <ul className="space-y-2.5">
            {footerCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cities/${c.stateSlug}/${c.slug}`}
                  className="font-body text-xs text-white/60 transition-colors hover:text-velvet-pink"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white/40">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Shield className="h-5 w-5" strokeWidth={1.5} />
            <span className="absolute text-[6px] font-bold">18+</span>
          </span>
          <p className="font-body text-[11px]">
            © {new Date().getFullYear()} Velvet Girl Entertainment. All
            Rights Reserved.
          </p>
        </div>
        <p className="font-body text-[11px] text-white/40">
          This site contains mature content intended only for adults 18+.
        </p>
      </div>
    </footer>
  );
}
