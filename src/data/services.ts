export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  whatsIncluded: string[];
  bookingSteps: string[];
}

export const services: Service[] = [
  {
    slug: "bachelor-parties",
    title: "Bachelor Parties",
    shortDescription:
      "Create a memorable send-off with professional entertainers for the groom's last night out.",
    heroDescription:
      "Create a memorable bachelor party with professional entertainers available for private bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Party buses",
      "Yachts",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties",
    shortDescription:
      "Turn a birthday celebration into an unforgettable night with entertainment tailored to the occasion.",
    heroDescription:
      "Celebrate another year with professional entertainers available for private birthday bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Party buses",
      "Custom celebration themes",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "private-events",
    title: "Private Events",
    shortDescription:
      "Discreet, professionally managed entertainment for any private celebration.",
    heroDescription:
      "Professional entertainers available for discreet private event bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Full privacy protocols",
      "Custom event coordination",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "vip-experiences",
    title: "VIP Experiences",
    shortDescription:
      "Our premium tier of entertainment, staffing, and white-glove event coordination.",
    heroDescription:
      "Premium VIP entertainment experiences with dedicated booking concierge, available across the United States.",
    whatsIncluded: [
      "Top-tier performers",
      "Dedicated booking concierge",
      "Private locations",
      "Luxury hotel visits",
      "Vacation rentals",
      "Party buses",
      "Yachts",
      "Custom VIP add-ons",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "corporate-entertainment",
    title: "Corporate Entertainment",
    shortDescription:
      "Professionally managed entertainment for corporate celebrations and client events.",
    heroDescription:
      "Professional entertainers for corporate celebrations, retreats, and client events across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Discreet booking process",
      "Hotel and venue visits",
      "Corporate retreat packages",
      "NDA availability on request",
      "Custom event coordination",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "couples-entertainment",
    title: "Couples Entertainment",
    shortDescription:
      "Entertainment experiences designed for couples looking to celebrate together.",
    heroDescription:
      "Professional entertainers for couples' celebrations and private bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Custom celebration themes",
      "Full privacy protocols",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "girls-night-out",
    title: "Girls Night Out",
    shortDescription:
      "Fun, high-energy entertainment for a night out with the girls.",
    heroDescription:
      "Professional entertainers for girls' night celebrations available for private bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Party buses",
      "Custom celebration themes",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "pool-parties",
    title: "Pool Parties",
    shortDescription:
      "Poolside entertainment for daytime and evening celebrations.",
    heroDescription:
      "Professional entertainers for poolside celebrations available for private bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private residences",
      "Vacation rentals",
      "Resort and hotel pools",
      "Daytime and evening availability",
      "Custom celebration themes",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "yacht-parties",
    title: "Yacht Parties",
    shortDescription:
      "Elevated entertainment for celebrations out on the water.",
    heroDescription:
      "Professional entertainers for yacht and boat celebrations available for private bookings across the United States.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Marina and dock coordination",
      "Multi-hour charters",
      "Sunset and evening availability",
      "Custom celebration themes",
      "Full privacy protocols",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
  {
    slug: "special-requests",
    title: "Special Requests",
    shortDescription:
      "Have something specific in mind? Our booking team builds custom experiences on request.",
    heroDescription:
      "Custom entertainment experiences built around your specific request, available across the United States.",
    whatsIncluded: [
      "Dedicated booking concierge",
      "Fully custom scheduling",
      "Private locations",
      "Themed experiences",
      "Multi-performer bookings",
      "Custom add-ons",
      "Full privacy protocols",
      "VIP events",
    ],
    bookingSteps: [
      "Tell us your vision",
      "Get a custom proposal",
      "Confirm booking",
      "Enjoy your event",
    ],
  },
];

export const homepageServiceSlugs = [
  "bachelor-parties",
  "birthday-parties",
  "private-events",
  "vip-experiences",
  "corporate-entertainment",
  "girls-night-out",
  "couples-entertainment",
  "pool-parties",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
