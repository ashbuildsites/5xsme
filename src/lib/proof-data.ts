/**
 * Real proof: client testimonials and campaign results.
 *
 * Every figure and quote in this file is transcribed from the team's own
 * portfolio deck (The Brandpress Portfolio, authored by 5xSME). Nothing here
 * is illustrative or rounded for effect — if a number changes, change it here
 * and nowhere else.
 *
 * Some named accounts below (Halfway House, Purple State, Author's Point,
 * Highlighter Stationer, Toing, Candlelight Concerts) come from that deck
 * rather than the client roster in `clients-data.ts`.
 */

export type Testimonial = {
  quote: string;
  person: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They understood our vision and helped us build a strong digital presence. Highly professional and result-oriented team.",
    person: "Raj Verms",
    company: "Author's Point",
    rating: 5,
  },
  {
    quote:
      "The team is knowledgeable, supportive, and always available. Our online sessions and reach have grown remarkably.",
    person: "Asha Ravikumar",
    company: "Asha Yoga Centre",
    rating: 5,
  },
  {
    quote:
      "Their strategies significantly improved our reach and engagement. We've seen a great boost in leads and conversions.",
    person: "Amruth HM",
    company: "Highlighter Stationer",
    rating: 5,
  },
  {
    quote:
      "From branding to digital marketing, everything was handled with precision. We're extremely satisfied with their work.",
    person: "Gobi Nada",
    company: "Kothu Labs",
    rating: 5,
  },
];

/* ------------------------------------------------- social media results -- */

export type Metric = { value: string; label: string; delta?: string };

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  metrics: Metric[];
  result: string;
  image?: string;
};

export const socialCases: CaseStudy[] = [
  {
    slug: "halfway-house",
    name: "Halfway House Restobar",
    industry: "Restaurant",
    metrics: [
      { value: "8,150", label: "People Reached", delta: "146%" },
      { value: "72,280", label: "Impressions", delta: "132%" },
      { value: "900+", label: "Engagements", delta: "168%" },
      { value: "2.8X", label: "Profile Visits", delta: "115%" },
    ],
    result:
      "Increased local awareness and footfall through engaging offers and social campaigns.",
  },
  {
    slug: "purple-state",
    name: "Purple State",
    industry: "Clothing",
    metrics: [
      { value: "25,420", label: "People Reached", delta: "178%" },
      { value: "128,600", label: "Impressions", delta: "154%" },
      { value: "3,200+", label: "Engagements", delta: "189%" },
      { value: "4.1X", label: "Store Traffic", delta: "162%" },
    ],
    result:
      "Influencer collaborations and carousel ads helped boost followers and sales.",
  },
  {
    slug: "estate-resort",
    name: "Estate Resort",
    industry: "Hospitality",
    metrics: [
      { value: "31,870", label: "People Reached", delta: "165%" },
      { value: "165,300", label: "Impressions", delta: "147%" },
      { value: "4,100+", label: "Engagements", delta: "173%" },
      { value: "5.2X", label: "Booking Enquiries", delta: "186%" },
    ],
    result:
      "Multi-platform campaigns generated higher bookings and stronger brand awareness.",
    image: "/images/clients/estate-2-wide.webp",
  },
];

/* ------------------------------------------------------ website results -- */

export const websiteCases: CaseStudy[] = [
  {
    slug: "get-set-millet",
    name: "Get Set Millet",
    industry: "E-Commerce · Sakya Foundation",
    metrics: [
      { value: "38.6K+", label: "Total Visitors" },
      { value: "120K+", label: "Page Views" },
      { value: "2.4K+", label: "Orders Generated" },
      { value: "3.8%", label: "Conversion Rate" },
    ],
    result:
      "Redesigned the e-commerce store that drove more traffic, boosted orders and improved conversions.",
    image: "/images/landing/millet-1.webp",
  },
  {
    slug: "skin-aesthetic-care",
    name: "Skin & Aesthetic Care",
    industry: "Healthcare",
    metrics: [
      { value: "28.4K+", label: "Total Visitors" },
      { value: "85K+", label: "Page Views" },
      { value: "1.8K+", label: "Appointments" },
      { value: "4.6%", label: "Conversion Rate" },
    ],
    result:
      "Improved user experience and content strategy increased appointments and brand trust.",
  },
  {
    slug: "real-estate-partner",
    name: "Trusted Partner in Real Estate",
    industry: "Real Estate",
    metrics: [
      { value: "45.2K+", label: "Total Visitors" },
      { value: "150K+", label: "Page Views" },
      { value: "2.1K+", label: "Leads Generated" },
      { value: "5.1%", label: "Conversion Rate" },
    ],
    result:
      "Strategic design and clear information flow generated high-quality real estate leads.",
  },
];

/** Traffic growth reported against each website rebuild. */
export const websiteGrowth: Record<string, string> = {
  "get-set-millet": "+162%",
  "skin-aesthetic-care": "+138%",
  "real-estate-partner": "+176%",
};

/* ---------------------------------------------------------- ad campaigns -- */

export const adCases: CaseStudy[] = [
  {
    slug: "restaurant-campaigns",
    name: "Restaurant Campaigns",
    industry: "Meta & Instagram Ads",
    metrics: [
      { value: "72K+", label: "Reach" },
      { value: "3.8%", label: "CTR" },
      { value: "2,100+", label: "Engagement" },
    ],
    result:
      "Outlet-level campaigns built around signature dishes and offers, run across Meta and Instagram.",
  },
  {
    slug: "food-delivery",
    name: "Food Delivery Campaigns",
    industry: "Performance Ads",
    metrics: [
      { value: "55K+", label: "Reach" },
      { value: "1,800+", label: "Clicks" },
      { value: "4.2%", label: "Conversion Rate" },
    ],
    result:
      "Price-led creative driving first orders, optimised continuously against cost per order.",
  },
  {
    slug: "event-promotion",
    name: "Event Promotion Campaigns",
    industry: "Ticketing",
    metrics: [
      { value: "88K+", label: "Reach" },
      { value: "950+", label: "Ticket Leads" },
      { value: "5.1%", label: "CTR" },
    ],
    result:
      "Countdown and offer-code campaigns timed to the booking window for each event.",
  },
  {
    slug: "hospitality-transformation",
    name: "Hospitality & Transformation",
    industry: "Multi-Platform",
    metrics: [
      { value: "125K+", label: "Reach" },
      { value: "4.6%", label: "CTR" },
      { value: "2.3K+", label: "Conversions" },
    ],
    result:
      "WhatsApp-led enquiry campaigns for stays and programmes, with click-to-chat as the primary action.",
  },
];

/* ------------------------------------------------------------ aggregate -- */

export const aggregateStats = [
  { value: "365K+", label: "Total Reach Across All Campaigns" },
  { value: "8,200+", label: "Meaningful Interactions" },
  { value: "150%+", label: "Average Growth Across Key Metrics" },
  { value: "50+", label: "Brands Served" },
];

export const videoStats = [
  { value: "500+", label: "Videos Produced" },
  { value: "5M+", label: "Views Generated" },
  { value: "300%", label: "Avg. Engagement Growth" },
  { value: "50+", label: "Brands Served" },
];
