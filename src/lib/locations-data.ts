export type LocationArea = {
  slug: string;
  name: string;
  city: "Bengaluru" | "Mangaluru";
  character: string;
  goodFor: string[];
  volumeNote?: string;
};

export const locations: LocationArea[] = [
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    city: "Bengaluru",
    character:
      "HSR Layout runs on startups, D2C brands, and founders who move fast and expect the same from anyone they hire.",
    goodFor: ["Startups & D2C brands", "Cafes and F&B outlets", "Fitness & wellness studios"],
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    city: "Bengaluru",
    character:
      "Bangalore's startup and F&B density is highest here — cafes, restaurants, and young consumer brands competing hard for attention.",
    goodFor: ["Restaurants & cafes", "D2C and consumer brands", "Startups"],
  },
  {
    slug: "indiranagar",
    name: "Indiranagar",
    city: "Bengaluru",
    character:
      "A hospitality and retail-heavy neighbourhood — bars, restaurants, and boutique stores that live and die on footfall and reputation.",
    goodFor: ["Hospitality & F&B", "Boutique retail", "Salons & wellness"],
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    city: "Bengaluru",
    character:
      "One of Bangalore's older, more established commercial belts — retail, services, and family-run businesses with loyal, local customers.",
    goodFor: ["Established retail", "Clinics & healthcare", "Local services"],
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    city: "Bengaluru",
    character:
      "A largely residential area where local visibility matters more than brand buzz — clinics, coaching centres, and neighbourhood services.",
    goodFor: ["Clinics & diagnostics", "Coaching & education", "Residential services"],
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    city: "Bengaluru",
    character:
      "Bangalore's IT corridor — tech parks, enterprise offices, and the businesses that serve the people working inside them.",
    goodFor: ["IT & enterprise services", "B2B firms", "F&B serving office crowds"],
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    city: "Bengaluru",
    character:
      "Dense with tech parks and enterprise campuses — a market that rewards clear positioning over noise.",
    goodFor: ["Tech & SaaS companies", "B2B services", "Corporate-facing brands"],
  },
  {
    slug: "marathahalli",
    name: "Marathahalli",
    city: "Bengaluru",
    character:
      "A high-traffic residential and commercial mix — SMEs and local retail competing for a fast-growing customer base.",
    goodFor: ["Local retail & services", "SMEs", "Residential-facing businesses"],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
