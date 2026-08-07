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
  galleryImages?: string[];
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
    image: "/images/performers%20profile%20images/dior/DIOR.webp",
    galleryImages: [
      "/images/performers%20profile%20images/dior/DIOR.webp",
      "/images/performers%20profile%20images/dior/DIOR(2).webp",
      "/images/performers%20profile%20images/dior/DIOR(3).webp",
      "/images/performers%20profile%20images/dior/DIOR(4).webp",
      "/images/performers%20profile%20images/dior/DIOR(5).webp",
      "/images/performers%20profile%20images/dior/DIOR(6).webp",
      "/images/performers%20profile%20images/dior/DIOR(7).webp",
    ],
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
    image: "/images/performers%20profile%20images/Lotus/LOTUS.webp",
    galleryImages: [
      "/images/performers%20profile%20images/Lotus/LOTUS.webp",
    ],
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
    image: "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K%20PROFILE%20PICS.webp",
    galleryImages: [
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K%20PROFILE%20PICS.webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(1).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(2).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(3).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(4).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(5).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(6).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(7).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(8).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K(9).webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K.%20HOMEPAGE.webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K.webp",
      "/images/performers%20profile%20images/KIMMI%20K/KIMMI%20K_.webp",
    ],
    tags: ["blonde", "popular", "curvy"],
    featured: true,
    services: ["Bachelor Party", "Yacht Celebration", "VIP Club", "Afterparty"],
  },
  {
    id: "syn",
    slug: "syn",
    name: "SYN",
    rating: 5.0,
    reviewsCount: 44,
    eventsCount: "140+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "ELITE ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Brunette",
    image: "/images/performers-gallery/SYN.webp",
    galleryImages: [
      "/images/performers-gallery/SYN.webp",
    ],
    tags: ["brunette", "new", "popular"],
    featured: true,
    services: ["Bachelor Party", "Private Gathering", "VIP Hospitality", "Afterparty"],
  },
  {
    id: "claire",
    slug: "claire",
    name: "CLAIRE",
    rating: 5.0,
    reviewsCount: 24,
    eventsCount: "80+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "SIGNATURE ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Blonde",
    image: "/images/performers%20profile%20images/claire/Claire%20Charleston%20profile%20pic.webp",
    galleryImages: [
      "/images/performers%20profile%20images/claire/Claire%20Charleston%20profile%20pic.webp",
      "/images/performers%20profile%20images/claire/Claire%20Charleston%20profile%20pics_(1).webp",
      "/images/performers%20profile%20images/claire/Claire%20Charleston%20profile%20pics_.webp",
    ],
    tags: ["blonde", "new", "curvy"],
    featured: true,
    services: ["Bachelor Party", "Private Gathering", "VIP Hospitality", "Afterparty"],
  },
  {
    id: "frankie",
    slug: "frankie",
    name: "FRANKIE",
    rating: 5.0,
    reviewsCount: 21,
    eventsCount: "70+ EVENTS",
    location: "ORLANDO / DAYTONA BEACH, FL",
    city: "Orlando / Daytona Beach",
    citySlug: "orlando-daytona-beach",
    stateSlug: "florida",
    title: "VIP ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Brunette",
    image: "/images/performers%20profile%20images/Frankie/Frankie.webp",
    galleryImages: [
      "/images/performers%20profile%20images/Frankie/Frankie.webp",
      "/images/performers%20profile%20images/Frankie/Frankie%20(2).webp",
    ],
    tags: ["brunette", "new"],
    featured: true,
    services: ["Bachelor Party", "Private Gathering", "VIP Hospitality", "Pool Party"],
  },
  {
    id: "harley",
    slug: "harley",
    name: "HARLEY",
    rating: 5.0,
    reviewsCount: 38,
    eventsCount: "120+ EVENTS",
    location: "CHARLESTON, SC",
    city: "Charleston",
    citySlug: "charleston",
    stateSlug: "south-carolina",
    title: "VIP ENTERTAINER",
    availableTonight: true,
    availableToday: true,
    isVerified: true,
    hairColor: "Blonde",
    image: "/images/performers%20profile%20images/Harley/HARLEY(1).webp",
    galleryImages: [
      "/images/performers%20profile%20images/Harley/HARLEY(1).webp",
      "/images/performers%20profile%20images/Harley/IMG_4235.webp",
      "/images/performers%20profile%20images/Harley/IMG_4236.webp",
      "/images/performers%20profile%20images/Harley/IMG_4345.webp",
      "/images/performers%20profile%20images/Harley/IMG_4351.webp",
      "/images/performers%20profile%20images/Harley/IMG_4356.webp",
      "/images/performers%20profile%20images/Harley/IMG_4359.webp",
      "/images/performers%20profile%20images/Harley/IMG_4360.webp",
    ],
    tags: ["blonde", "new", "curvy"],
    featured: true,
    services: ["Bachelor Party", "Private Yacht", "VIP Club", "Afterparty"],
  },
];

export const featuredPerformers: Performer[] = performers;
export const getPerformerBySlug = (slug: string) => performers.find(p => (p.slug || p.id) === slug);
