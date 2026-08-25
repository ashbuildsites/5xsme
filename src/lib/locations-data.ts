export type LocationArea = {
  slug: string;
  name: string;
  city: "Bengaluru";
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
  {
    slug: "malleswaram",
    name: "Malleswaram",
    city: "Bengaluru",
    character:
      "One of Bangalore's most traditional neighbourhoods — established retail, schools, and multi-generational family businesses with a loyal local customer base.",
    goodFor: ["Traditional retail", "Education & coaching", "Family-run businesses"],
  },
  {
    slug: "rajajinagar",
    name: "Rajajinagar",
    city: "Bengaluru",
    character:
      "A well-established West Bangalore residential and commercial belt, with steady footfall and businesses that have served the same neighbourhood for years.",
    goodFor: ["Retail & showrooms", "Healthcare", "Local services"],
  },
  {
    slug: "basavanagudi",
    name: "Basavanagudi",
    city: "Bengaluru",
    character:
      "Old Bangalore character — markets, temples, and family businesses in one of the city's oldest commercial areas, where reputation travels by word of mouth as much as online.",
    goodFor: ["Traditional retail", "Restaurants", "Local services"],
  },
  {
    slug: "btm-layout",
    name: "BTM Layout",
    city: "Bengaluru",
    character:
      "Dense, budget-conscious, and full of students and young professionals — a market where value and visibility both matter.",
    goodFor: ["Cafes & QSR", "Coaching & tutoring", "Service businesses"],
  },
  {
    slug: "banashankari",
    name: "Banashankari",
    city: "Bengaluru",
    character:
      "A steady South Bangalore residential belt with strong local loyalty — the kind of market where consistent local SEO compounds over time.",
    goodFor: ["Clinics & diagnostics", "Local retail", "Residential services"],
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
    city: "Bengaluru",
    character:
      "A fast-growing North Bangalore suburb with new residential developments and an aerospace and defence presence nearby.",
    goodFor: ["New residential services", "Retail & F&B", "Education"],
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    city: "Bengaluru",
    character:
      "A North Bangalore growth corridor anchored by the Manyata tech park — a mix of enterprise offices and the businesses that serve them.",
    goodFor: ["IT & enterprise services", "F&B for office crowds", "B2B firms"],
  },
  {
    slug: "bellandur",
    name: "Bellandur",
    city: "Bengaluru",
    character:
      "Part of the Outer Ring Road tech belt — dense with IT companies, apartments, and a fast-moving, digitally native customer base.",
    goodFor: ["Tech & SaaS companies", "D2C brands", "F&B for tech crowds"],
  },
  {
    slug: "sarjapur-road",
    name: "Sarjapur Road",
    city: "Bengaluru",
    character:
      "One of Bangalore's fastest-growing residential and IT corridors — new developments mean new customers with little brand loyalty yet formed.",
    goodFor: ["New residential businesses", "Tech & IT services", "Retail"],
  },
  {
    slug: "rt-nagar",
    name: "RT Nagar",
    city: "Bengaluru",
    character:
      "An established Central Bangalore residential area where local commerce runs on consistent neighbourhood presence.",
    goodFor: ["Local retail", "Clinics & healthcare", "Residential services"],
  },
  {
    slug: "vijayanagar",
    name: "Vijayanagar",
    city: "Bengaluru",
    character:
      "A well-settled West Bangalore residential and retail hub with a loyal, local customer base.",
    goodFor: ["Local retail", "Education & coaching", "Residential services"],
  },
  {
    slug: "kr-puram",
    name: "K R Puram",
    city: "Bengaluru",
    character:
      "An East Bangalore transit and residential hub with a fast-growing population and a mix of industrial and local commerce.",
    goodFor: ["Local retail & services", "SMEs", "Residential-facing businesses"],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
