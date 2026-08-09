export type EventData = {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  overview: string;
  bullets: string[];
};

export const events: EventData[] = [
  {
    slug: "myrtle-beach-bike-week-2027",
    title: "Myrtle Beach Bike Week 2027",
    subtitle: "The Ultimate VIP Entertainment Experience",
    seoTitle: "Myrtle Beach Bike Week 2027 | Velvet Girl VIP Entertainment",
    seoDescription: "Book premium Velvet Girl entertainers for Myrtle Beach Bike Week 2027. Exclusive VIP hospitality, private parties, and unforgettable memories. Book girls or apply to work today.",
    heroImage: "/gallery images/MYRTLE BEACH.webp", // Existing image that works well
    overview: "Myrtle Beach Bike Week 2027 is gearing up to be one of the biggest rallies yet. Whether you are hosting a private gathering, throwing an epic pool party, or just want premium VIP hospitality, our Velvet Girl entertainers will make your week legendary.",
    bullets: [
      "Exclusive VIP hospitality tailored to your crew",
      "Stunning and professional Velvet Girl entertainers",
      "Private party and yacht hosting available",
      "Stress-free booking and reliable service"
    ],
  },
  {
    slug: "daytona-bike-week-2027",
    title: "Daytona Bike Week 2027",
    subtitle: "World-Class Entertainment for the World's Largest Rally",
    seoTitle: "Daytona Bike Week 2027 | Hire Girls | Velvet Girl Entertainment",
    seoDescription: "Hire premium VIP Velvet Girl entertainers for Daytona Bike Week 2027. Make your rally experience unforgettable. Book girls or apply to work Daytona Bike Week.",
    heroImage: "/gallery images/GALLERY(1).webp", // Example existing image
    overview: "Daytona Bike Week 2027 brings the world's most passionate riders together. Elevate your Daytona experience with Velvet Girl Entertainment. From high-energy events to exclusive private hosting, our team delivers a world-class VIP experience.",
    bullets: [
      "Premium hospitality for the Daytona rally",
      "Beautiful, engaging Velvet Girl entertainers",
      "Flexible booking for day or night events",
      "Discreet, professional, and VIP-focused"
    ],
  }
];

export function getEventBySlug(slug: string): EventData | undefined {
  return events.find((e) => e.slug === slug);
}
