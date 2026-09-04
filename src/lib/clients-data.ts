/**
 * The real client roster.
 *
 * `industry`, `summary` and `work` are what these businesses actually are and
 * what 5xSME actually runs for them — not inferred from the company name.
 * Several of these names are misleading if you guess (Kothu Labs is a
 * restaurant, not a software company), so treat this file as the source of
 * truth and don't re-derive any of it.
 *
 * `photos` are the client's own photographs, processed into the shapes the
 * layouts need. `extras` are commissioned supporting shots. Anything with no
 * `photos` entry had no supplied photography.
 */
export type Client = {
  slug: string;
  name: string;
  /** Logo supplied by the client — used in the marquee rail. */
  logo: string;
  industry: string;
  city: string;
  summary: string;
  /** What 5xSME actually delivers for them. */
  work: string[];
  /** The client's own photographs, by shape. */
  photos?: { wide?: string; tall?: string; cine?: string }[];
};

const C = "/images/clients";

export const clients: Client[] = [
  {
    slug: "anupams-coast-to-coast",
    name: "Anupam's Coast to Coast",
    logo: `${C}/anupams-coast-to-coast.jpg`,
    industry: "Multi-Cuisine Seafood Restaurant · 3 Outlets",
    city: "Bengaluru",
    summary:
      "A coastal non-vegetarian restaurant group running three outlets across the city, built on the freshest catch and flavours from every coast.",
    work: [
      "Instagram & Facebook page management",
      "WhatsApp marketing campaigns",
      "Google Ads and Meta Ads",
      "In-house content shoots and editing",
    ],
    photos: [
      { wide: `${C}/anupams-1-wide.webp`, tall: `${C}/anupams-1-tall.webp`, cine: `${C}/anupams-1-cine.webp` },
      { wide: `${C}/anupams-2-wide.webp`, tall: `${C}/anupams-2-tall.webp`, cine: `${C}/anupams-2-cine.webp` },
      { wide: `${C}/anupams-3-wide.webp`, tall: `${C}/anupams-3-tall.webp`, cine: `${C}/anupams-3-cine.webp` },
    ],
  },
  {
    slug: "kothu-labs",
    name: "Kothu Labs",
    logo: `${C}/kothu-labs.jpg`,
    industry: "Restaurant",
    city: "Bengaluru",
    summary:
      "A casual dining restaurant built around sharing plates — the kind of place people book a table at for a group, not a quick bite.",
    work: [
      "Instagram & Facebook page management",
      "WhatsApp marketing campaigns",
      "Google Ads and Meta Ads",
      "In-house content shoots and editing",
    ],
    photos: [
      { wide: `${C}/kothu-1-wide.webp`, tall: `${C}/kothu-1-tall.webp`, cine: `${C}/kothu-1-cine.webp` },
    ],
  },
  {
    slug: "tamarind-restaurant",
    name: "Tamarind Restaurant",
    logo: `${C}/tamarind-restaurant.jpg`,
    industry: "Restaurant & Bar",
    city: "Bengaluru",
    summary:
      "A large open-air restaurant and bar — full kitchen plus beer on tap, built for long evenings rather than quick turnover.",
    work: [
      "Instagram & Facebook page management",
      "WhatsApp marketing campaigns",
      "Google Ads and Meta Ads",
      "In-house content shoots and editing",
    ],
    photos: [
      { wide: `${C}/tamarind-1-wide.webp`, tall: `${C}/tamarind-1-tall.webp`, cine: `${C}/tamarind-1-cine.webp` },
    ],
  },
  {
    slug: "the-watering-hole",
    name: "The Watering Hole",
    logo: `${C}/the-watering-hole.png`,
    industry: "Restaurant & Bar",
    city: "Bengaluru",
    summary:
      "A two-level open-air restaurant and bar with a large terrace — a neighbourhood spot that fills up on beer and food together.",
    work: [
      "Instagram & Facebook page management",
      "WhatsApp marketing campaigns",
      "Google Ads and Meta Ads",
      "In-house content shoots and editing",
    ],
    photos: [
      { wide: `${C}/watering-hole-1-wide.webp`, tall: `${C}/watering-hole-1-tall.webp`, cine: `${C}/watering-hole-1-cine.webp` },
    ],
  },
  {
    slug: "asha-yoga-centre",
    name: "Asha Yoga Centre",
    logo: `${C}/asha-yoga-centre.png`,
    industry: "Yoga Studio",
    city: "Bengaluru",
    summary:
      "A yoga studio running regular classes alongside a Yoga Teacher Training programme — the training course is where the revenue is.",
    work: [
      "Meta and Google Ads driving Teacher Training enquiries",
      "Instagram & Facebook page management",
      "Content planning and scheduling",
    ],
    photos: [
      { wide: `${C}/asha-real-wide.webp`, tall: `${C}/asha-real-tall.webp`, cine: `${C}/asha-real-cine.webp` },
    ],
  },
  {
    slug: "buddha-village-resort",
    name: "Buddha Village Resort",
    logo: `${C}/buddha-village-resort.png`,
    industry: "Resort",
    city: "Chikkaballapur, near Bengaluru",
    summary:
      "A countryside resort outside the city — cottages, a pool and open grounds, sold on weekend getaways and group bookings.",
    work: [
      "Instagram & Facebook page management",
      "Google Ads driving direct bookings",
      "Meta Ads for weekend and seasonal campaigns",
    ],
    photos: [
      { wide: `${C}/buddha-1-wide.webp`, tall: `${C}/buddha-1-tall.webp`, cine: `${C}/buddha-1-cine.webp` },
      { wide: `${C}/buddha-2-wide.webp`, tall: `${C}/buddha-2-tall.webp`, cine: `${C}/buddha-2-cine.webp` },
    ],
  },
  {
    slug: "estate-resort",
    name: "Estate Resort",
    logo: `${C}/estate-resort.jpg`,
    industry: "Resort & Hospitality",
    city: "Bengaluru",
    summary:
      "A hillside estate resort with cottage accommodation and long valley views, selling stays and event bookings.",
    work: [
      "Google Ads as the primary booking-enquiry channel",
      "Multi-platform social campaigns",
      "Seasonal and festival campaign creative",
    ],
    photos: [
      { wide: `${C}/estate-1-wide.webp`, tall: `${C}/estate-1-tall.webp`, cine: `${C}/estate-1-cine.webp` },
      { wide: `${C}/estate-2-wide.webp`, tall: `${C}/estate-2-tall.webp`, cine: `${C}/estate-2-cine.webp` },
      { wide: `${C}/estate-3-wide.webp`, tall: `${C}/estate-3-tall.webp`, cine: `${C}/estate-3-cine.webp` },
    ],
  },
  {
    slug: "iaim-healthcare-hospital",
    name: "IAIM Healthcare Hospital",
    logo: `${C}/iaim-healthcare-hospital.png`,
    industry: "Ayurveda Hospital",
    city: "Bengaluru",
    summary:
      "An Ayurveda hospital offering traditional treatment programmes alongside outpatient consultation.",
    work: [
      "Google and Meta Ads generating new patient enquiries",
      "Treatment-specific landing pages and campaign creative",
      "Enquiry tracking and monthly reporting",
    ],
    photos: [
      { wide: `${C}/iaim-1-wide.webp`, tall: `${C}/iaim-1-tall.webp`, cine: `${C}/iaim-1-cine.webp` },
    ],
  },
  {
    slug: "sakya-foundation",
    name: "Sakya Foundation",
    logo: `${C}/sakya-foundation.jpg`,
    industry: "Non-Profit Foundation",
    city: "Bengaluru",
    summary:
      "An NGO that funds its own work by designing and selling products — including Get Set Millet, a healthy millet food brand we launched with them.",
    work: [
      "Instagram & Facebook presence set up from scratch",
      "Campaign ads run around specific initiatives",
      "Website designed and built",
      "Product design, launch and photography for Get Set Millet",
    ],
    photos: [
      { wide: `${C}/sakya-real-wide.webp`, tall: `${C}/sakya-real-tall.webp`, cine: `${C}/sakya-real-cine.webp` },
    ],
  },
  {
    slug: "shrinika-jewellery",
    name: "Shrinika Jewellery",
    logo: `${C}/shrinika-jewellery.png`,
    industry: "925 Sterling Silver Jewellery",
    city: "Lucknow",
    summary:
      "A 925 sterling silver jewellery brand selling direct to customers online, where the product video does the selling.",
    work: [
      "Product video shoots and editing",
      "Instagram & Facebook page management",
      "Meta Ads for collection launches",
    ],
    photos: [
      { wide: `${C}/shrinika-1-wide.webp`, tall: `${C}/shrinika-1-tall.webp`, cine: `${C}/shrinika-1-cine.webp` },
    ],
  },
];

export function getClientBySlug(slug: string) {
  return clients.find((c) => c.slug === slug);
}
