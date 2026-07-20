export interface BlogSection {
  heading?: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-charleston-bachelor-party-guide",
    title: "The Ultimate Charleston Bachelor Party Guide",
    excerpt:
      "Everything you need to plan an unforgettable bachelor party in Charleston — from where to stay to how to book entertainment.",
    publishedAt: "2026-06-02",
    readTime: "6 min read",
    sections: [
      {
        body: [
          "Charleston has become one of the most popular bachelor party destinations on the East Coast — and it's easy to see why. Cobblestone streets, a legendary food scene, rooftop bars, and easy access to the beach make it a perfect backdrop for a groom's last weekend as a single man.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "Downtown Charleston puts you walking distance from most of the action — bars, restaurants, and nightlife are all packed into a compact, historic footprint. If your group wants a quieter home base with more space, a vacation rental in Mount Pleasant or West Ashley is worth considering, especially for larger groups planning an in-house party.",
        ],
      },
      {
        heading: "Book Your Entertainment Early",
        body: [
          "Charleston weekends fill up fast, especially spring through fall. If a private dancer or party entertainment is part of your plans, book at least 1–2 weeks ahead to get your first choice of performers and time slot. Same-day requests are still possible — just call or text our booking team directly instead of booking online.",
          "Our Charleston roster posts real, unedited photos, so your group knows exactly who's showing up. Browse available Charleston performers before you book.",
        ],
      },
      {
        heading: "Popular Bachelor Party Add-Ons",
        body: [
          "Beyond entertainment, a lot of Charleston bachelor parties build their weekend around a few staples: a boat or pool party on the water, a round of golf, and a poker or game night to close things out. All of these pair naturally with our Boat/Pool Party, Golf Caddy Girls, and Poker/Game Night packages.",
        ],
      },
      {
        heading: "Ready to Book",
        body: [
          "Whether you're planning a low-key private party or a full weekend of events, our Charleston booking specialists can help you build the right package. Request a booking or text us directly to get started.",
        ],
      },
    ],
  },
  {
    slug: "ultimate-myrtle-beach-bachelor-party-guide",
    title: "The Ultimate Myrtle Beach Bachelor Party Guide",
    excerpt:
      "Beaches, boardwalks, and nightlife — here's how to plan a Myrtle Beach bachelor party your crew won't forget.",
    publishedAt: "2026-06-16",
    readTime: "5 min read",
    sections: [
      {
        body: [
          "Myrtle Beach is built for groups. Miles of beach, a boardwalk full of nightlife, and no shortage of house rentals right on the sand make it one of the easiest bachelor party destinations to plan — even with a big guest list.",
        ],
      },
      {
        heading: "Pick the Right House",
        body: [
          "For bachelor parties, an oceanfront or near-the-beach house rental usually beats a hotel block — more space, more privacy, and a natural home base for a pool or in-house party. Market Common and areas near Broadway at the Beach put you close to restaurants and nightlife if your group wants to head out later.",
        ],
      },
      {
        heading: "Daytime and Nighttime Entertainment",
        body: [
          "Myrtle Beach bachelor parties often split the day: pool or beach time during the day, entertainment and nightlife after dark. Our Boat/Pool Party package is a favorite here for groups renting a house with a pool, while a Private Party booking works well for an evening at your rental.",
        ],
      },
      {
        heading: "Book Ahead for Summer Weekends",
        body: [
          "Summer weekends in Myrtle Beach book up quickly. Reach out at least a week or two in advance if you can, though we do accommodate same-day requests by phone or text when availability allows.",
        ],
      },
    ],
  },
  {
    slug: "how-to-plan-the-perfect-bachelor-party",
    title: "How to Plan the Perfect Bachelor Party: A Step-by-Step Checklist",
    excerpt:
      "A simple, no-stress checklist for planning a bachelor party — from picking a date to booking entertainment.",
    publishedAt: "2026-06-24",
    readTime: "7 min read",
    sections: [
      {
        body: [
          "Planning a bachelor party doesn't have to be stressful. Whether you're the best man handling logistics or the groom taking the reins yourself, here's a simple checklist to keep everything on track.",
        ],
      },
      {
        heading: "1. Lock In a Date and Destination",
        body: [
          "Send a few date options to the group early — the earlier you settle on a date, the easier everything else becomes. If you're deciding between destinations, factor in flight/drive time for your group and what kind of weekend you want: beach, city nightlife, or something more low-key.",
        ],
      },
      {
        heading: "2. Book Lodging Before Anything Else",
        body: [
          "Good vacation rentals and hotel blocks in popular bachelor party cities go fast. Lock in lodging before you finalize other plans — everything else (parties, entertainment, activities) gets built around where you're staying.",
        ],
      },
      {
        heading: "3. Decide on a Theme",
        body: [
          "A theme makes planning easier, not harder. Whether it's a Bachelor Party package, a Golf Caddy Girls outing, or a Poker/Game Night, picking a format upfront helps you build the rest of the weekend around it instead of trying to plan everything from scratch.",
        ],
      },
      {
        heading: "4. Book Entertainment With Enough Lead Time",
        body: [
          "If private entertainment is part of your plans, book at least a week or two ahead for the best availability — though last-minute requests can often still be accommodated by calling or texting our booking team directly. Look for an agency that posts real photos of their performers, not stock images, so there are no surprises on the night of.",
        ],
      },
      {
        heading: "5. Confirm Everything 48 Hours Out",
        body: [
          "A few days before the party, confirm your lodging, any reservations, and your entertainment booking. This is also a good time to collect payment or deposits from the group so money isn't a last-minute scramble.",
        ],
      },
    ],
  },
  {
    slug: "real-photos-no-bait-and-switch",
    title: "Real Photos, No Bait-and-Switch: Why It Matters When Booking Entertainment",
    excerpt:
      "Why we post real, unedited photos of every dancer on our roster — and why that's not the industry standard.",
    publishedAt: "2026-07-01",
    readTime: "4 min read",
    sections: [
      {
        body: [
          "If you've ever booked entertainment for a party before, you may have run into this: the photos on the website don't match who actually shows up. It's common enough in this industry to have a name — bait-and-switch — and it's one of the biggest reasons people hesitate to book at all.",
        ],
      },
      {
        heading: "Our Policy: Real Photos, Every Time",
        body: [
          "We post real, unedited photos of every dancer on our roster, tied to the city they perform in. What you see on a performer's profile is who arrives at your event. No stock photography, no filtered images, no swapped performers.",
        ],
      },
      {
        heading: "Why This Matters for Your Event",
        body: [
          "A bachelor party, birthday, or private celebration only happens once. Knowing exactly who you're booking — not a filtered photo or a stand-in — means you can plan with confidence instead of crossing your fingers.",
        ],
      },
      {
        heading: "See for Yourself",
        body: [
          "Browse real performer photos on any of our city pages, or reach out to our booking team with questions before you book.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
