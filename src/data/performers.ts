export interface Performer {
  slug: string;
  name: string;
  citySlug: string;
  city: string;
  stateSlug: string;
  hairColor: "Blonde" | "Brunette" | "Redhead";
  height: string;
  languages: string[];
  availableToday: boolean;
  featured: boolean;
  tagline: string;
  services: string[];
}

// Placeholder roster — no photos or real identities. Swap in real
// performer data and images before launch.
export const performers: Performer[] = [
  {
    slug: "sophia",
    name: "Sophia",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    hairColor: "Blonde",
    height: "5'6\"",
    languages: ["English"],
    availableToday: true,
    featured: true,
    tagline: "Charleston favorite known for high-energy bachelor party sets.",
    services: ["bachelor-parties", "vip-experiences", "private-events"],
  },
  {
    slug: "isabella",
    name: "Isabella",
    city: "Myrtle Beach",
    citySlug: "myrtle-beach",
    stateSlug: "south-carolina",
    hairColor: "Brunette",
    height: "5'5\"",
    languages: ["English", "Spanish"],
    availableToday: true,
    featured: true,
    tagline: "Specializes in pool parties and beachside celebrations.",
    services: ["pool-parties", "bachelor-parties", "birthday-parties"],
  },
  {
    slug: "aria",
    name: "Aria",
    city: "Savannah",
    citySlug: "savannah",
    stateSlug: "georgia",
    hairColor: "Redhead",
    height: "5'7\"",
    languages: ["English"],
    availableToday: false,
    featured: true,
    tagline: "Known for polished VIP experiences and corporate events.",
    services: ["vip-experiences", "corporate-entertainment"],
  },
  {
    slug: "luna",
    name: "Luna",
    city: "Orlando / Daytona Beach",
    citySlug: "orlando-daytona-beach",
    stateSlug: "florida",
    hairColor: "Blonde",
    height: "5'4\"",
    languages: ["English"],
    availableToday: true,
    featured: true,
    tagline: "Girls-night-out specialist with a big personality.",
    services: ["girls-night-out", "birthday-parties"],
  },
  {
    slug: "mia",
    name: "Mia",
    city: "Charlotte",
    citySlug: "charlotte",
    stateSlug: "north-carolina",
    hairColor: "Brunette",
    height: "5'6\"",
    languages: ["English"],
    availableToday: false,
    featured: false,
    tagline: "Couples entertainment and private celebration expert.",
    services: ["couples-entertainment", "private-events"],
  },
  {
    slug: "nova",
    name: "Nova",
    city: "Atlanta",
    citySlug: "atlanta",
    stateSlug: "georgia",
    hairColor: "Redhead",
    height: "5'8\"",
    languages: ["English"],
    availableToday: true,
    featured: false,
    tagline: "Yacht and pool party specialist across the Atlanta area.",
    services: ["yacht-parties", "pool-parties"],
  },
  {
    slug: "gia",
    name: "Gia",
    city: "Miami",
    citySlug: "miami",
    stateSlug: "florida",
    hairColor: "Brunette",
    height: "5'5\"",
    languages: ["English", "Spanish"],
    availableToday: true,
    featured: true,
    tagline: "South Beach favorite for pool parties and VIP nights out.",
    services: ["pool-parties", "vip-experiences", "bachelor-parties"],
  },
  {
    slug: "harper",
    name: "Harper",
    city: "Indianapolis",
    citySlug: "indianapolis",
    stateSlug: "indiana",
    hairColor: "Blonde",
    height: "5'6\"",
    languages: ["English"],
    availableToday: false,
    featured: false,
    tagline: "Indianapolis regular known for bachelor and guys' night bookings.",
    services: ["bachelor-parties", "girls-night-out", "private-events"],
  },
];

export function getPerformerBySlug(slug: string): Performer | undefined {
  return performers.find((p) => p.slug === slug);
}

export const featuredPerformers = performers.filter((p) => p.featured);
