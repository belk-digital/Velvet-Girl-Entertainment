export interface City {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  popularAreas: string[];
}

export interface StateGroup {
  slug: string;
  name: string;
  cities: City[];
}

// Only markets with an active, onboarded performer roster are published.
// More cities are being onboarded — add a new entry here once dancers are
// confirmed in that market, and the city/state pages generate automatically.
const raw: { state: string; stateSlug: string; cities: { name: string; slug: string; areas: string[] }[] }[] = [
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
      },
      {
        name: "Atlanta",
        slug: "atlanta",
        areas: ["Midtown", "Buckhead", "Downtown", "Decatur", "Sandy Springs"],
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
      },
    ],
  },
];

export const stateGroups: StateGroup[] = raw.map(({ state, stateSlug, cities }) => ({
  slug: stateSlug,
  name: state,
  cities: cities.map(({ name, slug, areas }) => ({
    slug,
    name,
    stateSlug,
    stateName: state,
    popularAreas: areas,
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
