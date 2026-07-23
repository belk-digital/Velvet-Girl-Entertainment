export type Performer = {
  id: string;
  name: string;
  rating: number;
  eventsCount: string;
  location: string;
  title: string;
  availableTonight: boolean;
  isVerified: boolean;
  image: string;
  slug?: string;
  city?: string;
  hairColor?: string;
  featured?: boolean;
  availableToday?: boolean;
  citySlug?: string;
  stateSlug?: string;
  tagline?: string;
  services?: string[];
  height?: string;
  languages?: string[];
};

export const performers: Performer[] = [
  {
    id: "jessica-jay",
    name: "JESSICA JAY",
    rating: 4.6,
    eventsCount: "90+ EVENTS",
    location: "CHICAGO, IL",
    title: "PREMIUM ENTERTAINER",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/lotus.webp",
  },
  {
    id: "candy-cole",
    name: "CANDY COLE",
    rating: 4.6,
    eventsCount: "90+ EVENTS",
    location: "LOS ANGELES, CA",
    title: "PREMIUM ENTERTAINER",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/bad-cop.webp",
  },
  {
    id: "lena-love",
    name: "LENA LOVE",
    rating: 4.7,
    eventsCount: "90+ EVENTS",
    location: "LAS VEGAS, NV",
    title: "EVENT SPECIALIST",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/sexy-nurse.webp",
  },
  {
    id: "kimmi-k",
    name: "KIMMI K",
    rating: 4.8,
    eventsCount: "120+ EVENTS",
    location: "MIAMI, FL",
    title: "PARTY STARTER",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/kimmi-k.webp",
  },
  {
    id: "nina-rose",
    name: "NINA ROSE",
    rating: 4.9,
    eventsCount: "150+ EVENTS",
    location: "NEW YORK, NY",
    title: "BACHELOR PARTY EXPERT",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/dior.webp",
  },
  {
    id: "scarlett-sky",
    name: "SCARLETT SKY",
    rating: 4.6,
    eventsCount: "95+ EVENTS",
    location: "ATLANTA, GA",
    title: "EXOTIC ENTERTAINER",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/sexy-nurse.webp", 
  },
  {
    id: "asia-boss",
    name: "ASIA BOSS",
    rating: 4.6,
    eventsCount: "110+ EVENTS",
    location: "HOUSTON, TX",
    title: "VIP ENTERTAINER",
    availableTonight: true,
    isVerified: true,
    image: "/images/performers-gallery/bad-cop.webp", 
  },
];

export const featuredPerformers: Performer[] = performers.slice(0, 4);
export const getPerformerBySlug = (slug: string) => performers.find(p => (p.slug || p.id) === slug);
