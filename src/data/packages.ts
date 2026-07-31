export interface PackageTheme {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  highlights: string[];
  comingSoon?: boolean;
  image?: string;
}

export const packageThemes: PackageTheme[] = [
  {
    slug: "private-party",
    name: "Private Party",
    shortDescription:
      "The classic in-home or hotel booking for any private celebration.",
    heroDescription:
      "Our most flexible booking — professional entertainment delivered wherever you're celebrating, from a private home to a hotel suite.",
    highlights: [
      "Home, hotel, or vacation rental",
      "Custom music & entrance",
      "Full privacy and discretion",
    ],
    image: "/gallery images/GAME DAY GIRLS.webp",
  },
  {
    slug: "bachelor-party",
    name: "Bachelor Party",
    shortDescription:
      "The ultimate send-off for the groom, built for the whole crew.",
    heroDescription:
      "High-energy entertainment designed for bachelor parties — built to keep the whole group engaged from entrance to finale.",
    highlights: [
      "Multiple dancer options",
      "Themed entrance",
      "Group-friendly games",
    ],
    image: "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
  },
  {
    slug: "boat-pool-party",
    name: "Boat/Pool Party",
    shortDescription:
      "Take the party to the water — poolside or on a boat.",
    heroDescription:
      "Our dancers bring the energy outdoors for daytime or evening poolside and boat celebrations.",
    highlights: [
      "Daytime & evening availability",
      "Swimwear-friendly performances",
      "Great for larger groups",
    ],
    image: "/gallery images/BOAT_ POOL PARTY_.webp",
  },
  {
    slug: "guys-night",
    name: "Guys Night",
    shortDescription: "A relaxed night in with the boys, elevated.",
    heroDescription:
      "A casual, low-key format built for smaller groups who just want a great night in.",
    highlights: [
      "Casual, low-key format",
      "Great for smaller groups",
      "Pairs well with Poker/Game Night",
    ],
    image: "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
  },
  {
    slug: "golf-caddy-girls",
    name: "Golf Caddy Girls",
    shortDescription: "Hit the links with a twist.",
    heroDescription:
      "Our dancers join your round dressed the part — a favorite for golf outings, tournaments, and guys' trips.",
    highlights: [
      "On-course entertainment",
      "Themed caddy outfits",
      "Great for golf outings & tournaments",
    ],
    image: "/gallery images/LOTUS.webp",
  },
  {
    slug: "poker-game-night",
    name: "Poker/Game Night",
    shortDescription: "Raise the stakes on your next game night.",
    heroDescription:
      "Themed entertainment built around your poker or game night — deal the cards, keep the energy up.",
    highlights: [
      "Dealer-girl option",
      "Themed outfits",
      "Pairs well with Guys Night",
    ],
    image: "/gallery images/DIOR.webp",
  },
  {
    slug: "breakfast-with-babes",
    name: "Breakfast With Babes",
    shortDescription: "Start the morning right with a themed experience.",
    heroDescription:
      "A playful daytime booking — a fun, low-key way to kick off a celebration weekend.",
    highlights: [
      "Daytime booking",
      "Casual, playful format",
      "Great pre-party warmup",
    ],
    image: "/gallery images/BREAKFAST WITH BABES.webp",
  },
  {
    slug: "party-bus",
    name: "Party Bus",
    shortDescription: "Take the party on the road.",
    heroDescription:
      "Party bus entertainment is coming soon to select cities. Reach out to be the first to know when it launches in your area.",
    highlights: ["Coming soon", "Select cities only", "Join the waitlist"],
    comingSoon: true,
    image: "/gallery images/GALLERY(2).webp",
  },
];

export function getPackageThemeBySlug(slug: string): PackageTheme | undefined {
  return packageThemes.find((t) => t.slug === slug);
}

export interface Costume {
  slug: string;
  name: string;
}

export const costumes: Costume[] = [
  { slug: "bad-cop", name: "Bad Cop" },
  { slug: "sexy-nurse", name: "Sexy Nurse" },
  { slug: "dominatrix", name: "Dominatrix" },
  { slug: "cheerleader", name: "Cheerleader" },
  { slug: "school-girl", name: "School Girl" },
];

export interface Upgrade {
  slug: string;
  label: string;
  note?: string;
}

export const upgrades: Upgrade[] = [
  { slug: "additional-time", label: "Additional Time" },
  {
    slug: "enhanced-experience",
    label: "Enhanced Experience",
    note: "Details confirmed privately with your booking specialist.",
  },
  { slug: "additional-games", label: "Additional Games" },
  { slug: "additional-dances", label: "Additional Dances" },
  {
    slug: "pop-up-pole",
    label: "Bring a Pop-Up Pole",
    note: "Subject to availability.",
  },
];
