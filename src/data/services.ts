import type { Faq } from "@/data/faqs";

export interface ServiceContent {
  intro: string;
  whyChooseUs: string;
  whatToExpect: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  whatsIncluded: string[];
  bookingSteps: string[];
  content: ServiceContent;
  faqs: Faq[];
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
    content: {
      intro:
        "A bachelor party only happens once, and it deserves more planning than a group text and a wing spot. Velvet Girl Entertainment books professional, verified entertainers for bachelor parties in hotel suites, vacation rentals, party buses, and yachts across every city we serve. Whether it's a low-key group of six or a full weekend takeover with twenty groomsmen, our booking team works with whoever's organizing — best man, maid of honor, or the groom himself — to lock in a night that actually matches what the group wants.",
      whyChooseUs:
        "Bachelor party bookings are the backbone of what we do, and it shows in how the process runs: real, unedited photos of every performer so there's no surprise at the door, a deposit-based system that protects the date once it's confirmed, and a booking team that's used to coordinating around late check-ins, group logistics, and last-minute headcount changes. We're also one of the only agencies in most of our markets that guarantees the performer who shows up matches the profile you booked.",
      whatToExpect:
        "You pick your city, browse real photos of available performers, and submit your event details — date, location, guest count, and any theme preferences. A booking specialist follows up to confirm availability and walk through pricing, then a deposit locks in your date and entertainer. On the night itself, your performer arrives on time, ready to go, and focused on making sure the groom's last night as a single man is one the whole group remembers for the right reasons.",
    },
    faqs: [
      {
        question: "How many performers should we book for a bachelor party?",
        answer:
          "It depends on group size and what you're going for — most bachelor parties of 6-10 guys book 1-2 performers, while larger groups or full weekend takeovers often book 2-3 or more. Your booking specialist can recommend based on your headcount and venue.",
      },
      {
        question: "Can we book a bachelor party at a rented house or Airbnb?",
        answer:
          "Yes, vacation rentals and short-term rental homes are some of our most common bachelor party bookings. Just make sure the property allows guests and have the address ready when you book.",
      },
      {
        question: "What if the bachelor party plans change last minute?",
        answer:
          "Let your booking specialist know as soon as possible — we can often adjust timing, location, or headcount, especially with more than 24 hours' notice. For same-day changes, call or text us directly.",
      },
      {
        question: "Do you offer party bus or multi-stop bachelor party entertainment?",
        answer:
          "Yes, we book entertainers for party bus routes and multi-stop bachelor party itineraries. Share your route and timing with us so we can plan performer arrival around your stops.",
      },
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
    content: {
      intro:
        "Not every birthday needs a bar reservation and a round of shots — some deserve a real event. Velvet Girl Entertainment books professional entertainers for milestone birthdays, surprise parties, and intimate celebrations at private residences, hotel suites, and rented venues nationwide. Whether it's a 21st, a 30th, or a milestone the birthday person has been looking forward to all year, we help you build a night around them instead of the other way around.",
      whyChooseUs:
        "Birthday bookings tend to be more personal than a standard group night out, and our team treats them that way — asking about the birthday person's preferences, the vibe you're going for, and any surprise-element logistics before the day arrives. Every performer's photo on our site is real and unedited, and our booking specialists are available to walk through options one-on-one rather than leaving you to guess from a generic package list.",
      whatToExpect:
        "After you submit your event details, we'll match you with performers who fit the celebration style you're picturing, from high-energy to more low-key and intimate. If you're planning a surprise, tell your booking specialist — we're used to coordinating discreet arrivals and timing reveals around cake, gifts, or a specific moment in the night. A deposit secures the date, and your performer arrives ready to make the birthday person the center of attention.",
    },
    faqs: [
      {
        question: "Can you help plan a surprise birthday party?",
        answer:
          "Yes — just let your booking specialist know it's a surprise when you book. We can coordinate discreet arrival timing so the entertainer's arrival lines up with when you want the reveal to happen.",
      },
      {
        question: "Do you do themed birthday celebrations?",
        answer:
          "Yes, custom celebration themes are available on most birthday bookings — let us know the theme when you book and we'll match performers and styling where possible.",
      },
      {
        question: "Is there a minimum group size for a birthday booking?",
        answer:
          "No — birthday bookings range from small, intimate gatherings to large group parties. We'll recommend a performer count based on your guest list and venue.",
      },
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
    content: {
      intro:
        "Some celebrations don't fit neatly into a category — a divorce party, a promotion, a group of friends who just want a night that feels different. Our Private Events service exists for exactly that: flexible, professionally managed entertainment for any private celebration, without needing to force your event into a box labeled 'bachelor party' or 'birthday.' Velvet Girl Entertainment books entertainers for private residences, hotel suites, and rented venues nationwide.",
      whyChooseUs:
        "Because private events cover such a wide range of occasions, our booking team spends more time up front understanding what you actually want — group size, setting, the vibe you're after — rather than pushing a fixed package. Privacy is treated as a default, not an add-on: how we communicate, how performers arrive and depart, and how bookings are confirmed are all built around discretion from the first message.",
      whatToExpect:
        "Tell us the occasion, your city, and your event details, and a booking specialist will help you figure out the right fit — performer count, timing, and any specific requests. A deposit secures your entertainer for the date, and because every private event is different, your booking specialist stays available to adjust details as your plans firm up.",
    },
    faqs: [
      {
        question: "What kinds of events count as a 'private event' booking?",
        answer:
          "Anything that doesn't fit a standard category — divorce parties, promotions, reunions, or just a group wanting a different kind of night. If you're not sure which service fits, submit a Private Events inquiry and we'll help sort out the details.",
      },
      {
        question: "How private is the booking process?",
        answer:
          "Very. We handle communication discreetly from the first message, and your contact information is used only to coordinate the booking — never shared or sold.",
      },
      {
        question: "Can a private event include multiple performers?",
        answer:
          "Yes — group size and performer count are flexible for private events. Let your booking specialist know your guest count and we'll recommend accordingly.",
      },
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
    content: {
      intro:
        "VIP Experiences is our top tier — built for clients who want white-glove coordination from the first phone call to the night of the event, not just a booking confirmation. This service pairs our most requested performers with a dedicated booking concierge who manages every detail, whether you're hosting at a luxury hotel suite, a private estate, or on a chartered yacht.",
      whyChooseUs:
        "Where a standard booking is handled by our general booking team, VIP Experiences comes with a single point of contact who stays with your event from planning through the night itself, coordinating custom add-ons, multi-performer lineups, and any special logistics your venue requires. It's the same verified-photo guarantee as every other booking, paired with a noticeably higher level of hands-on planning.",
      whatToExpect:
        "Once you request a VIP Experience, a dedicated concierge reaches out to walk through your event in detail — venue, guest list, timing, and any custom requests — and builds a proposal around it rather than a fixed package. From there, they manage confirmations, performer coordination, and day-of logistics, so your only job is showing up.",
    },
    faqs: [
      {
        question: "What makes VIP Experiences different from a standard booking?",
        answer:
          "You get a dedicated booking concierge who manages your event from first inquiry through the night itself, plus access to our most requested performers and custom add-on options that aren't part of standard bookings.",
      },
      {
        question: "Is VIP Experiences available for multi-day events?",
        answer:
          "Yes — VIP Experiences is well suited to multi-day bachelor or bachelorette weekends, destination celebrations, and events that need coordination across more than one night.",
      },
      {
        question: "How far in advance should I book a VIP Experience?",
        answer:
          "Because VIP bookings often involve custom coordination and our most in-demand performers, we recommend booking 2-3 weeks ahead where possible, though your concierge will always tell you what's realistic for your date.",
      },
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
    content: {
      intro:
        "Corporate entertainment comes with a different set of expectations than a bachelor party — professionalism, punctuality, and discretion matter even more when clients, executives, or coworkers are in the room. Velvet Girl Entertainment books professional entertainers for corporate retreats, incentive trips, client appreciation events, and after-hours celebrations, with booking handled the same way a corporate event planner would expect.",
      whyChooseUs:
        "We treat corporate bookings with the same operational seriousness as any other vendor relationship — clear confirmations, punctual arrivals, and NDA availability on request for events where confidentiality matters. Our booking team is used to working with event planners and executive assistants, not just individual hosts, and can accommodate the paperwork and scheduling structure that comes with a company booking.",
      whatToExpect:
        "Submit your event details — company name (kept confidential if needed), venue, date, and guest count — and a booking specialist will confirm availability and pricing, including NDA paperwork if your event requires it. From there, arrival logistics, venue check-in, and timing are coordinated in advance so the event runs the same way any other professionally staffed corporate event would.",
    },
    faqs: [
      {
        question: "Can we book under an NDA for a corporate event?",
        answer:
          "Yes, NDA availability is offered on request for corporate bookings. Let your booking specialist know when you inquire and we'll include the paperwork as part of the confirmation process.",
      },
      {
        question: "Do you book corporate retreats outside city limits?",
        answer:
          "Yes, we book corporate retreats at hotels, resorts, and off-site venues throughout each metro area we serve. Share your venue location when you book so we can confirm travel logistics.",
      },
      {
        question: "How discreet is the booking process for a company event?",
        answer:
          "Very — company and attendee details are used only to coordinate the booking and are never shared. We're comfortable working directly with event planners or executive assistants rather than requiring the host's name on every communication.",
      },
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
    content: {
      intro:
        "Couples Entertainment is built for partners who want to celebrate something together — an anniversary, a milestone, or just a night that breaks from routine — rather than a traditional solo or group night out. Velvet Girl Entertainment books professional entertainers for couples at private residences, hotel suites, and vacation rentals nationwide, with the entire experience shaped around what the two of you want.",
      whyChooseUs:
        "Couples bookings require a different kind of discretion and communication than a large group party, and our booking team handles them accordingly — smaller-scale coordination, private conversation about preferences, and full privacy protocols throughout. As with every booking, every performer's photo is real and unedited, so there's no mismatch between expectations and who arrives.",
      whatToExpect:
        "Reach out with your occasion, city, and preferences, and a booking specialist will walk through the details privately with you. A deposit secures your date, and your entertainer arrives prepared for an evening built around the two of you rather than a large group setting.",
    },
    faqs: [
      {
        question: "Is couples entertainment private, just for the two of us?",
        answer:
          "Yes — this service is specifically designed for couples rather than larger group settings, and is handled with a level of discretion appropriate to that.",
      },
      {
        question: "Can we request a specific theme for a couples booking?",
        answer:
          "Yes, custom celebration themes are available. Let your booking specialist know what you have in mind when you book.",
      },
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
    content: {
      intro:
        "Girls Night Out is for exactly what it sounds like — a group of friends who want a high-energy night without the hassle of planning a big production. Velvet Girl Entertainment books professional entertainers for girls' night celebrations at private residences, hotel suites, and rented spaces nationwide, whether it's a regular friend group tradition or a one-off celebration.",
      whyChooseUs:
        "Girls' nights tend to be more spontaneous than bachelor party planning, and our booking process reflects that — quick confirmations, flexible group sizes, and a booking team that's easy to reach by call, text, or online form when you're planning on shorter notice. Every performer's photo is real and unedited, so the group knows exactly who's showing up.",
      whatToExpect:
        "Pick your city, tell us your group size and event details, and a booking specialist will confirm availability, often within hours. A deposit secures the booking, and your entertainer arrives ready to bring the energy the group is looking for, from a low-key hangout to a full party atmosphere.",
    },
    faqs: [
      {
        question: "Can we book a girls' night with short notice?",
        answer:
          "Often, yes — girls' night bookings tend to move faster than larger events. For same-day requests, call or text us directly rather than booking online.",
      },
      {
        question: "Is this only for bachelorette parties?",
        answer:
          "No — Girls Night Out covers any group celebration, bachelorette or otherwise. If it's specifically a bachelorette weekend, our team can also help coordinate around a fuller itinerary.",
      },
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
    content: {
      intro:
        "Pool parties bring their own logistics — daytime sun, resort pool schedules, and a different energy than an evening indoor event — and Velvet Girl Entertainment books entertainers who are used to working in that setting. Whether it's a private residence pool, a vacation rental, or a resort pool day, we coordinate around daytime and evening availability depending on when your group is celebrating.",
      whyChooseUs:
        "Resort and hotel pools often come with their own access rules, cabana reservations, and time windows, and our booking team factors that in when confirming arrival timing. We keep performers available across both daytime and evening slots specifically because pool party scheduling doesn't always follow a standard nighttime booking pattern.",
      whatToExpect:
        "Let us know your venue type — private residence, vacation rental, or resort pool — along with your date and time window, and a booking specialist will confirm availability that fits. A deposit locks in your booking, and your entertainer arrives ready for a daytime or evening poolside celebration depending on your schedule.",
    },
    faqs: [
      {
        question: "Do you book pool parties at resorts, or only private residences?",
        answer:
          "Both. We book pool party entertainment at private residences, vacation rentals, and resort or hotel pools — just note any access or cabana details when you book.",
      },
      {
        question: "Are pool party bookings available during the day?",
        answer:
          "Yes, daytime and evening slots are both available for pool parties. Let us know your preferred time window when you book.",
      },
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
    content: {
      intro:
        "Yacht and boat parties bring a different kind of logistics than a hotel suite or rental home — marina check-in, charter length, and a fixed departure time that everything else has to work around. Velvet Girl Entertainment books professional entertainers for yacht celebrations, sunset cruises, and multi-hour charters across our coastal and waterfront markets, coordinated directly with your charter schedule.",
      whyChooseUs:
        "We ask for your marina, departure time, and charter length up front specifically because yacht bookings leave no room for a late arrival — the boat leaves on schedule either way. Our booking team is experienced in coordinating marina drop-off timing so your entertainer is aboard and ready before departure, not scrambling to catch up once you're already on the water.",
      whatToExpect:
        "Share your marina location, departure and return time, and charter details when you book. A booking specialist confirms availability and coordinates arrival timing with your captain or charter company as needed, and your entertainer arrives at the dock ahead of departure, ready for a sunset cruise or full multi-hour celebration on the water.",
    },
    faqs: [
      {
        question: "Do I need to provide the marina and departure time when booking?",
        answer:
          "Yes — because yacht charters run on a fixed schedule, we need your marina location, departure time, and charter length to make sure your entertainer arrives dockside with time to spare.",
      },
      {
        question: "Can you coordinate directly with our charter company or captain?",
        answer:
          "In many cases, yes. Share your charter company's contact details if arrival coordination needs to go through them rather than directly with your group.",
      },
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
    content: {
      intro:
        "Not every event fits a standard category, and Special Requests exists for exactly that gap — custom entertainment experiences built around whatever you actually have in mind, rather than a fixed package. Whether it's a specific theme, an unusual venue, a multi-performer lineup, or an event format we haven't listed elsewhere, our concierge team works directly with you to build a proposal from scratch.",
      whyChooseUs:
        "Instead of trying to fit your idea into an existing service, our booking team starts from your vision and works backward — figuring out performer count, logistics, and pricing around what you're actually trying to create. It's the same privacy standards and verified-photo guarantee as every other booking, applied to a request that doesn't have a template.",
      whatToExpect:
        "Tell us your vision — as much or as little detail as you have — and a booking specialist follows up to ask the right questions and put together a custom proposal with performer options and pricing. Once you confirm, a deposit locks in the date, and the same booking team stays involved through the event to make sure the custom details actually come together.",
    },
    faqs: [
      {
        question: "What kind of requests can you accommodate?",
        answer:
          "A wide range — custom themes, multi-performer bookings, unusual venues, or event formats that don't fit our standard service categories. If you're not sure whether we can accommodate something, ask — most requests are more workable than people expect.",
      },
      {
        question: "How does pricing work for a custom request?",
        answer:
          "Pricing is built around your specific request rather than a fixed package rate. A booking specialist will put together a proposal with transparent pricing once they understand the full scope of what you're planning.",
      },
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
