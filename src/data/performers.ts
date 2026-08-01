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
  reviewsCount?: number;
  tags?: ("blonde" | "brunette" | "latina" | "petite" | "curvy" | "new" | "popular")[];
};

export const performers: Performer[] = [
  {
    id: "dior",
    slug: "dior",
    name: "DIOR",
    rating: 5.0,
    reviewsCount: 48,
    eventsCount: "160+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "PREMIUM ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Brunette",
    image: encodeURI("/gallery images/DIOR(3).webp"),
    tags: ["brunette", "popular", "latina", "curvy"],
    featured: true,
    services: ["Bachelor Party", "Private Yacht", "VIP Hospitality", "Afterparty"],
  },
  {
    id: "lotus",
    slug: "lotus",
    name: "LOTUS",
    rating: 5.0,
    reviewsCount: 52,
    eventsCount: "170+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "LUXURY ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Brunette",
    image: encodeURI("/gallery images/LOTUS.webp"),
    tags: ["brunette", "popular", "curvy", "new"],
    featured: true,
    services: ["Bachelor Party", "Private Gathering", "VIP Hospitality", "Yacht Celebration"],
  },
  {
    id: "kimmi",
    slug: "kimmi",
    name: "KIMMI",
    rating: 5.0,
    reviewsCount: 56,
    eventsCount: "190+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "PARTY STARTER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Blonde",
    image: encodeURI("/gallery images/KIMMI K.webp"),
    tags: ["blonde", "popular", "curvy"],
    featured: true,
    services: ["Bachelor Party", "Yacht Celebration", "VIP Club", "Afterparty"],
  },
];

export const featuredPerformers: Performer[] = performers;
export const getPerformerBySlug = (slug: string) => performers.find(p => (p.slug || p.id) === slug);
