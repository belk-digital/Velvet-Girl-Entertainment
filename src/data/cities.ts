import type { Faq } from "@/data/faqs";

export interface CityContent {
  intro: string;
  whyChooseUs: string;
  localScene: string;
}

export interface City {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  popularAreas: string[];
  content: CityContent;
  faqs: Faq[];
}

export interface StateGroup {
  slug: string;
  name: string;
  cities: City[];
}

interface RawCity {
  name: string;
  slug: string;
  areas: string[];
  content: CityContent;
  faqs: Faq[];
}

// Only markets with an active, onboarded performer roster are published.
// More cities are being onboarded — add a new entry here once dancers are
// confirmed in that market, and the city/state pages generate automatically.
const raw: { state: string; stateSlug: string; cities: RawCity[] }[] = [
  {
    state: "South Carolina",
    stateSlug: "south-carolina",
    cities: [
      {
        name: "Charleston",
        slug: "charleston",
        areas: [
          "Downtown",
          "Mount Pleasant",
          "North Charleston",
          "Isle of Palms",
          "West Ashley",
          "Folly Beach",
        ],
        content: {
          intro:
            "Charleston has become one of the most requested bachelor party destinations in the Southeast, and it's easy to see why — cobblestone streets, waterfront bars, and a historic downtown that turns any weekend into an event. Velvet Girl Entertainment is Charleston's go-to exotic dancer and stripper booking agency, sending professional entertainers throughout the Charleston area for bachelor parties, birthdays, and private celebrations, whether you're staying in a downtown rental, a Mount Pleasant vacation home, or a beach house out on Isle of Palms or Folly Beach. Our Charleston roster is made up of verified, professional performers who know how to read a room and keep the night moving, and every booking is handled with the same discretion and reliability we bring to every market we serve.",
          whyChooseUs:
            "Charleston is a compact city with a lot of moving parts on a busy weekend — historic district parking, tight rental schedules, and a nightlife scene that peaks fast. Our Charleston booking specialists know the local logistics and build that into every booking, so your entertainer arrives on time and ready to go regardless of where in the city you're staying. We're also one of the only agencies that posts real, unedited photos of every performer on the roster, so there's no guesswork about who's showing up to your event.",
          localScene:
            "We regularly book across Downtown Charleston, Mount Pleasant, North Charleston, West Ashley, and the barrier islands including Isle of Palms and Folly Beach. Downtown bookings tend to center around historic rental homes and hotel suites near the peninsula's bar and restaurant scene, while Mount Pleasant and West Ashley bookings are more often larger group houses. Isle of Palms and Folly Beach see a lot of weekend beach-house bachelor parties, especially in the warmer months — our team is used to coordinating around beach traffic and rental check-in windows on both islands.",
        },
        faqs: [
          {
            question: "Do you book bachelor parties in downtown Charleston hotels and rentals?",
            answer:
              "Yes. We regularly book downtown Charleston hotel suites, historic rental homes, and private residences. Just let us know your address and building access details when you book so we can plan arrival accordingly.",
          },
          {
            question: "Can you send an entertainer to Isle of Palms or Folly Beach?",
            answer:
              "Absolutely — beach house bookings on Isle of Palms and Folly Beach are common for us, especially for weekend bachelor parties. Because these are a bit further from downtown, we recommend booking with a little extra notice during peak summer weekends.",
          },
          {
            question: "How far in advance should I book in Charleston?",
            answer:
              "We recommend 1-2 weeks out for the best selection, especially for spring and summer weekends when Charleston bachelor party traffic is highest. Last-minute requests are still welcome — call or text us directly for same-day availability.",
          },
          {
            question: "Do you cover Mount Pleasant and North Charleston too?",
            answer:
              "Yes, our Charleston roster covers the full metro area including Mount Pleasant, North Charleston, and West Ashley, not just the downtown peninsula.",
          },
        ],
      },
      {
        name: "Myrtle Beach",
        slug: "myrtle-beach",
        areas: [
          "North Myrtle Beach",
          "Surfside Beach",
          "Murrells Inlet",
          "Market Common",
          "Broadway at the Beach",
        ],
        content: {
          intro:
            "Myrtle Beach is a year-round party town, and its combination of oceanfront rentals, golf resorts, and a wide-open nightlife scene makes it a natural fit for bachelor parties, birthday weekends, and group celebrations. Velvet Girl Entertainment is Myrtle Beach's trusted exotic dancer and stripper booking agency, sending professional entertainers up and down the Grand Strand, from North Myrtle Beach down through Surfside Beach and Murrells Inlet, for private parties in vacation rentals, condos, and resort suites. Whether you're planning a golf weekend with a group of ten or a smaller beachfront birthday celebration, our Myrtle Beach performers are available to travel to your rental and keep the party going.",
          whyChooseUs:
            "Myrtle Beach hosts an enormous volume of bachelor and bachelorette parties every weekend, especially from spring through early fall, which means availability moves fast. We keep a dedicated roster of performers active in this market so we can accommodate both planned bookings and last-minute requests. Every performer's photos on our Myrtle Beach page are real and unedited, so you know exactly who's arriving — no stock photos, no bait-and-switch.",
          localScene:
            "We book regularly across North Myrtle Beach, Surfside Beach, Murrells Inlet, Market Common, and the Broadway at the Beach entertainment district. Oceanfront condo and high-rise bookings are common in North Myrtle Beach and the main strip, while Surfside Beach and Murrells Inlet tend to see more house-rental bachelor parties. Market Common and Broadway at the Beach bring a different crowd — often birthday groups staying closer to the shopping and nightlife district rather than directly on the water.",
        },
        faqs: [
          {
            question: "Can you book a bachelor party at an oceanfront condo or resort?",
            answer:
              "Yes — oceanfront condos and resort suites are some of our most common Myrtle Beach bookings. Just have your unit number and building entry details ready for your booking specialist.",
          },
          {
            question: "Is Myrtle Beach available on short notice?",
            answer:
              "Often, yes, though weekends from late spring through early fall book up quickly given how much bachelor party traffic Myrtle Beach sees. For same-day requests, call or text us directly rather than booking online.",
          },
          {
            question: "Do you cover Murrells Inlet and Surfside Beach, or just the main strip?",
            answer:
              "We cover the full Grand Strand, including Murrells Inlet and Surfside Beach south of the main strip, not just North Myrtle Beach and the boardwalk area.",
          },
        ],
      },
    ],
  },
  {
    state: "North Carolina",
    stateSlug: "north-carolina",
    cities: [
      {
        name: "Charlotte",
        slug: "charlotte",
        areas: ["Uptown", "South End", "NoDa", "Ballantyne", "University City"],
        content: {
          intro:
            "Charlotte's mix of a booming Uptown skyline, a dense South End nightlife corridor, and neighborhoods like NoDa and Ballantyne makes it one of the most active entertainment booking markets we serve in the Carolinas. Velvet Girl Entertainment is Charlotte's premier exotic dancer and stripper booking agency, booking professional performers for bachelor parties, birthdays, corporate celebrations, and private events throughout the greater Charlotte area, with performers available to travel to high-rise apartments, hotel suites, and private residences across the city.",
          whyChooseUs:
            "Charlotte is a working city with a young, fast-moving nightlife scene, and our booking team is used to coordinating around building security, rideshare drop-off restrictions, and tight downtown parking that comes with Uptown and South End high-rises. We keep a dedicated roster active in Charlotte so most requests can be confirmed same-week, and every performer's profile photo is real and unedited so there's never a surprise at the door.",
          localScene:
            "Our Charlotte bookings are concentrated in Uptown and South End, where most hotel and high-rise apartment bookings happen, along with a steady stream of requests from NoDa, Ballantyne, and University City. South End in particular sees a lot of birthday and bachelor party traffic thanks to its density of bars and short-term rentals, while Ballantyne and University City bookings tend to be quieter private-residence events further from the downtown core.",
        },
        faqs: [
          {
            question: "Do you book entertainers for Uptown Charlotte high-rise apartments?",
            answer:
              "Yes, Uptown and South End high-rise bookings are extremely common for us. Have your building's guest check-in process ready so your booking specialist can plan the arrival smoothly.",
          },
          {
            question: "Can you accommodate a corporate event in Charlotte?",
            answer:
              "Yes — we book professional entertainers for corporate celebrations and client events throughout Charlotte, with discreet booking available on request. See our Corporate Entertainment page for details.",
          },
          {
            question: "How far outside Uptown do you travel in Charlotte?",
            answer:
              "We cover the full metro area, including Ballantyne, University City, and NoDa, not just the Uptown/South End core.",
          },
        ],
      },
    ],
  },
  {
    state: "Georgia",
    stateSlug: "georgia",
    cities: [
      {
        name: "Savannah",
        slug: "savannah",
        areas: ["Historic District", "Tybee Island", "Southside", "Pooler"],
        content: {
          intro:
            "Savannah's Historic District is one of the most requested bachelorette and bachelor party settings in the South, thanks to its walkable squares, converted-mansion rentals, and a nightlife scene packed into a few dense blocks. Velvet Girl Entertainment is Savannah's leading exotic dancer and stripper booking agency, sending professional entertainers throughout Savannah, from historic downtown carriage houses to beachfront rentals out on Tybee Island, for bachelor parties, birthdays, and private celebrations.",
          whyChooseUs:
            "Historic District rentals in Savannah often come with narrow streets, limited parking, and strict noise or guest policies, and our booking team plans around all of it so your entertainer arrives smoothly. We also field a steady volume of Tybee Island beach-house requests during the warmer months. As with every market we serve, every performer's photo on our Savannah page is real and unedited.",
          localScene:
            "Most of our Savannah bookings happen in the Historic District, where converted mansion rentals and boutique hotels host a huge share of the city's bachelor and bachelorette party traffic, followed closely by Tybee Island beach houses. Southside and Pooler bookings are more often private residences, further from the downtown core but still well within our regular coverage area.",
        },
        faqs: [
          {
            question: "Can you book a bachelorette party in Savannah's Historic District?",
            answer:
              "Yes — Historic District rentals are some of our most frequent Savannah bookings. Because streets and parking can be tight downtown, let your booking specialist know your exact address and any building access notes ahead of time.",
          },
          {
            question: "Do you travel out to Tybee Island?",
            answer:
              "Yes, Tybee Island beach house bookings are common for us, particularly in spring and summer. We recommend booking a bit further ahead for peak beach weekends.",
          },
        ],
      },
      {
        name: "Atlanta",
        slug: "atlanta",
        areas: ["Midtown", "Buckhead", "Downtown", "Decatur", "Sandy Springs"],
        content: {
          intro:
            "Atlanta is one of the largest and most active markets we serve, with a nightlife scene spread across Midtown, Buckhead, and downtown that supports everything from birthday parties to large corporate events. Velvet Girl Entertainment is Atlanta's trusted exotic dancer and stripper booking agency, booking verified, professional entertainers throughout the greater Atlanta area for bachelor parties, VIP hospitality, corporate celebrations, and private events, with performers available to travel to high-rise condos, hotel suites, and private residences across the metro.",
          whyChooseUs:
            "Atlanta's size and traffic mean timing matters, and our booking team builds realistic arrival windows around whichever part of the metro you're in — whether that's a Buckhead high-rise, a Midtown hotel, or a private home out in Sandy Springs or Decatur. We keep a large, dedicated roster active in Atlanta specifically because demand here is consistently high, and every performer's photo is real and unedited, with no bait-and-switch.",
          localScene:
            "We book most frequently in Midtown and Buckhead, both dense with hotels, high-rise apartments, and nightlife, along with a steady volume of downtown Atlanta bookings tied to conventions and corporate events. Decatur and Sandy Springs requests tend to be private residences and are a bit further from the downtown core, which we factor into scheduling.",
        },
        faqs: [
          {
            question: "Do you book VIP or corporate events in Atlanta?",
            answer:
              "Yes — Atlanta is one of our busiest markets for corporate entertainment and VIP hospitality bookings alongside bachelor parties and birthdays. Discreet booking is available on request.",
          },
          {
            question: "How far in advance should I book in Atlanta?",
            answer:
              "Given how large and active this market is, we recommend booking 1-2 weeks ahead for weekend requests, especially in Midtown and Buckhead. Same-day requests are still worth a call or text.",
          },
          {
            question: "Do you cover Sandy Springs and Decatur, or just downtown Atlanta?",
            answer:
              "We cover the full metro area, including Sandy Springs and Decatur, not just Midtown, Buckhead, and downtown.",
          },
        ],
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    cities: [
      {
        name: "Miami",
        slug: "miami",
        areas: ["South Beach", "Brickell", "Wynwood", "Coral Gables", "Downtown Miami"],
        content: {
          intro:
            "Miami is the highest-demand market we serve, and for good reason — South Beach nightlife, Brickell high-rises, and a year-round party calendar make it a default choice for bachelor parties, yacht celebrations, and VIP events. Velvet Girl Entertainment is Miami's top-rated exotic dancer and stripper booking agency, sending professional entertainers throughout Miami for private parties, boat and pool celebrations, and VIP hospitality, with performers available to travel to South Beach hotels, Brickell condos, and private residences across the city.",
          whyChooseUs:
            "Miami moves fast, and our booking team is built for it — same-week and often same-day availability across South Beach, Brickell, and downtown, with performers experienced in everything from hotel suite bookings to yacht and boat charters. We're one of the only agencies in this market that posts real, unedited photos of every performer, which matters even more in a city where bait-and-switch booking practices are unfortunately common.",
          localScene:
            "South Beach and Brickell account for the majority of our Miami bookings — South Beach for hotel and short-term rental parties tied to the nightlife strip, Brickell for high-rise condo bookings near the financial district's growing nightlife scene. Wynwood bookings are often tied to art-district events and warehouse parties, while Coral Gables and downtown Miami requests tend to be a mix of private residences and corporate bookings.",
        },
        faqs: [
          {
            question: "Do you book yacht or boat parties in Miami?",
            answer:
              "Yes — yacht and boat celebrations are one of our most requested Miami bookings. Let us know your marina, departure time, and charter length so we can coordinate performer arrival with the boat's schedule.",
          },
          {
            question: "Can you get someone to South Beach on short notice?",
            answer:
              "Often, yes — Miami is one of our most heavily staffed markets specifically because demand is so consistent. For same-day South Beach requests, call or text us directly.",
          },
          {
            question: "Do you cover Brickell high-rise buildings?",
            answer:
              "Yes, Brickell condo and high-rise bookings are extremely common. Have your building's guest access process ready when you book so we can plan arrival accordingly.",
          },
        ],
      },
      {
        name: "Orlando / Daytona Beach",
        slug: "orlando-daytona-beach",
        areas: [
          "International Drive",
          "Downtown Orlando",
          "Daytona Beach Boardwalk",
          "Winter Park",
        ],
        content: {
          intro:
            "Orlando and Daytona Beach cover two very different kinds of celebrations — resort pool parties and vacation rentals near International Drive, and beachfront bachelor weekends along the Daytona Beach Boardwalk. Velvet Girl Entertainment is the Orlando/Daytona Beach area's go-to exotic dancer and stripper booking agency, sending professional entertainers across both areas for pool parties, bachelor celebrations, and private events, with performers available to travel to resort suites, vacation homes, and beachfront condos.",
          whyChooseUs:
            "Because this market spans two distinct destinations roughly an hour apart, our booking team confirms your exact location early so we send a performer familiar with that side of the market — resort and vacation-home logistics around Orlando, or beachfront boardwalk bookings in Daytona. Every performer's photo on our Orlando/Daytona Beach page is real and unedited, so you know exactly who's arriving either way.",
          localScene:
            "International Drive and the surrounding resort corridor account for most of our Orlando-area bookings, largely pool parties and vacation-rental bachelor celebrations, with a smaller volume of downtown Orlando and Winter Park private-residence requests. On the Daytona side, most bookings are concentrated along the Boardwalk and nearby beachfront rentals, especially during spring and early summer.",
        },
        faqs: [
          {
            question: "Do you book pool parties at Orlando resorts and vacation homes?",
            answer:
              "Yes — pool parties near International Drive and the resort corridor are some of our most common bookings in this market, whether you're in a resort suite or a private vacation home.",
          },
          {
            question: "Can you book a bachelor party on the Daytona Beach Boardwalk?",
            answer:
              "Yes, Daytona Beach Boardwalk and nearby beachfront rentals are a regular part of our coverage in this market, particularly during spring and early summer weekends.",
          },
        ],
      },
    ],
  },
  {
    state: "Indiana",
    stateSlug: "indiana",
    cities: [
      {
        name: "Indianapolis",
        slug: "indianapolis",
        areas: ["Downtown / Mass Ave", "Broad Ripple", "Fountain Square", "Carmel"],
        content: {
          intro:
            "Indianapolis has a growing bachelor party and private-event scene anchored by the Mass Ave entertainment district downtown and the bar-heavy strip in Broad Ripple. Velvet Girl Entertainment is Indianapolis's dedicated exotic dancer and stripper booking agency, sending professional entertainers throughout the Indianapolis metro for bachelor parties, birthdays, and private celebrations, especially around major sporting events and race weekends when the city sees a significant spike in group travel.",
          whyChooseUs:
            "Race weekends and major sporting events bring a surge of demand to Indianapolis on a predictable schedule, and our booking team plans ahead for it, keeping extra availability active around those dates. Outside of event weekends, we maintain steady coverage across downtown, Broad Ripple, and the northern suburbs, and every performer's photo on our Indianapolis page is real and unedited.",
          localScene:
            "Most of our Indianapolis bookings are downtown around Mass Ave and in Broad Ripple, both dense with bars and short-term rentals that see heavy bachelor party traffic. Fountain Square bookings tend to be a bit more low-key, tied to its arts-and-nightlife district, while Carmel requests are typically private residences in the northern suburbs, further from the downtown core.",
        },
        faqs: [
          {
            question: "Do you book around Indianapolis race weekends?",
            answer:
              "Yes — race weekends bring a significant increase in demand, so we recommend booking as early as possible if your event falls on or near one. Our team keeps extra availability active during these dates.",
          },
          {
            question: "Can you send a performer to Carmel or the northern suburbs?",
            answer:
              "Yes, we cover the greater Indianapolis metro including Carmel, not just downtown and Broad Ripple.",
          },
        ],
      },
    ],
  },
];

export const stateGroups: StateGroup[] = raw.map(({ state, stateSlug, cities }) => ({
  slug: stateSlug,
  name: state,
  cities: cities.map(({ name, slug, areas, content, faqs }) => ({
    slug,
    name,
    stateSlug,
    stateName: state,
    popularAreas: areas,
    content,
    faqs,
  })),
}));

export const cities: City[] = stateGroups.flatMap((g) => g.cities);

// All 8 currently live cities are "featured" — there aren't enough yet to
// need a curated subset like there will be once more markets go live.
export const featuredCitySlugs = cities.map((c) => c.slug);

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): City | undefined {
  return cities.find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}
