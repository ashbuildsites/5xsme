/**
 * Content for the landing experience.
 *
 * Client imagery here is the client's own photography wherever they supplied
 * it (`/images/clients/<slug>-<n>-<shape>.webp`), with commissioned support
 * shots filling the gaps. What each business actually does lives in
 * `clients-data.ts` — don't restate or re-guess it here.
 */
import { services } from "@/lib/services-data";

/* ------------------------------------------------------------------ hero */

export const heroLines = [
  { text: "WE MAKE INDIA'S", accent: false },
  { text: "SMALL BUSINESSES", accent: true },
  { text: "IMPOSSIBLE TO IGNORE.", accent: false },
];

/* --------------------------------------------------------------- marquee */

export const marqueeItems = [
  "SEO & Google Marketing",
  "Performance Marketing",
  "Social Media",
  "Facebook & Instagram",
  "WhatsApp Campaigns",
  "Videography",
  "Website Development",
  "App & Software",
  "Branding & Consulting",
];

/* ------------------------------------------------------------ philosophy */

export const philosophyHtml =
  "Marketing means very little if it does not put more of the right people in front of your business. " +
  "<em>REPORTS ARE NOT RESULTS.</em> " +
  "We build ads, content, search and the technology behind them around one number that actually matters — " +
  "<em>what a real customer costs you.</em>";

/* ---------------------------------------------------------------- stack */

export const stackSlides = [
  {
    img: "/images/clients/anupams-1-cine.webp",
    kicker: "01 ◆ Seafood Restaurant · 3 Outlets",
    name: "Anupam's Coast to Coast",
    alt: "The dining room at Anupam's Coast to Coast",
  },
  {
    img: "/images/clients/estate-2-cine.webp",
    kicker: "02 ◆ Resort & Hospitality",
    name: "Estate Resort",
    alt: "Sunrise over the valley from a balcony at Estate Resort",
  },
  {
    img: "/images/clients/buddha-2-cine.webp",
    kicker: "03 ◆ Countryside Resort",
    name: "Buddha Village Resort",
    alt: "A cottage in the morning mist at Buddha Village Resort",
  },
  {
    img: "/images/clients/iaim-2-cine.webp",
    kicker: "04 ◆ Ayurveda Hospital",
    name: "IAIM Healthcare Hospital",
    alt: "The reception area at IAIM Healthcare Hospital",
  },
];

/* ----------------------------------------------------------------- band */

export const bandRows = [
  { speed: -80, small: "ONE TEAM", big: "MARKETING", variant: "solid" },
  { speed: 100, big: "& Technology", small: "UNDER", variant: "italic" },
  { speed: -60, small: "ONE", big: "ROOF", variant: "outline" },
] as const;

/* ----------------------------------------------------------------- work */

export const workCards = [
  {
    href: "/work/anupams-coast-to-coast",
    img: "/images/clients/anupams-2-wide.webp",
    name: "Anupam's Coast to Coast",
    tags: ["Restaurant", "Meta Ads", "Content"],
    alt: "The poolside dining room at Anupam's Coast to Coast",
  },
  {
    href: "/work/tamarind-restaurant",
    img: "/images/clients/tamarind-1-wide.webp",
    name: "Tamarind Restaurant",
    tags: ["Restaurant & Bar", "Social", "Video"],
    alt: "The open dining hall at Tamarind Restaurant",
  },
  {
    href: "/work/the-watering-hole",
    img: "/images/clients/watering-hole-1-wide.webp",
    name: "The Watering Hole",
    tags: ["Restaurant & Bar", "Social", "WhatsApp"],
    alt: "The terrace at The Watering Hole",
  },
  {
    href: "/work/estate-resort",
    img: "/images/clients/estate-1-wide.webp",
    name: "Estate Resort",
    tags: ["Hospitality", "Google Ads", "Bookings"],
    alt: "Cottages on the hillside at Estate Resort",
  },
  {
    href: "/work/buddha-village-resort",
    img: "/images/clients/buddha-1-wide.webp",
    name: "Buddha Village Resort",
    tags: ["Resort", "Google Ads", "Meta Ads"],
    alt: "The poolside dining area at Buddha Village Resort",
  },
  {
    href: "/work/shrinika-jewellery",
    img: "/images/clients/shrinika-3-wide.webp",
    name: "Shrinika Jewellery",
    tags: ["925 Silver", "Product Video", "Meta Ads"],
    alt: "A model wearing a fine silver chain from Shrinika Jewellery",
  },
];

/* ------------------------------------------------------------- services */

const serviceArt: Record<string, string> = {
  seo: "/images/landing/svc-seo.webp",
  "performance-marketing": "/images/landing/svc-ads.webp",
  "social-media-marketing": "/images/landing/svc-social.webp",
  "facebook-instagram-marketing": "/images/landing/svc-meta.webp",
  "whatsapp-marketing": "/images/landing/svc-whatsapp.webp",
  videography: "/images/landing/svc-video.webp",
  "website-development": "/images/landing/svc-website.webp",
  technology: "/images/landing/svc-apps.webp",
  "branding-consulting": "/images/landing/svc-branding.webp",
};

export const serviceRows = services.map((s, i) => ({
  n: String(i + 1),
  slug: s.slug,
  name: s.name,
  href: `/services/${s.slug}`,
  img: serviceArt[s.slug] ?? "/images/landing/svc-branding.webp",
}));

export function serviceImage(slug: string) {
  return serviceArt[slug] ?? "/images/landing/svc-branding.webp";
}

/* ---------------------------------------------------------------- about */

export const aboutCopy = {
  lead: "5xSME is a Bengaluru marketing and technology team built for businesses that need results, not a monthly report.",
  body: [
    "Ads, social, video, SEO, WhatsApp and the website behind them are run by the same people, in the same room — instead of five freelancers who have never spoken to each other.",
    "The team has worked inside NetApp, Microsoft and Toyota, run a hospitality venture and a dairy farm, and shipped real products of its own. We know what a small business actually needs, because we have run them.",
  ],
  tags: ["GST Registered", "MSME Registered", "Bengaluru Based", "Pan-India", "No Lock-In"],
  badge: { big: "9", small: "Services, One Team" },
};

/* --------------------------------------------------------- collaborators */

export const collaborators = [
  {
    name: "Anupam's Coast to Coast",
    role: "Seafood Restaurant",
    img: "/images/clients/anupams-food-tall.webp",
  },
  {
    name: "Kothu Labs",
    role: "Restaurant",
    img: "/images/clients/kothu-food-tall.webp",
  },
  {
    name: "Asha Yoga Centre",
    role: "Yoga Studio",
    img: "/images/clients/asha-real-tall.webp",
  },
  {
    name: "IAIM Healthcare Hospital",
    role: "Ayurveda Hospital",
    img: "/images/clients/iaim-2-tall.webp",
  },
  {
    name: "Sakya Foundation",
    role: "Non-Profit",
    img: "/images/clients/sakya-real-tall.webp",
  },
];

/* ---------------------------------------------------------------- stats */

export const stats = [
  { target: 50, suffix: "+", label: "Brands Served" },
  { target: 500, suffix: "+", label: "Videos Produced" },
  { target: 365, suffix: "K+", label: "Campaign Reach" },
  { target: 9, suffix: "", label: "Services In-House" },
];

/* ------------------------------------------------------------------ faq */

export const faqs = [
  {
    q: "Do you handle everything in-house, or outsource it?",
    a: "Ads, social, video, SEO, and technology are all run by our core team, with a network of vetted advisors and freelancers we bring in for specialist or overflow work. You always have one point of contact, even when others are involved behind the scenes.",
  },
  {
    q: "Do we need to sign a long contract?",
    a: "No. We work month to month. If it's not working, you're not locked into a year of it.",
  },
  {
    q: "We only need one or two services, not all nine — is that fine?",
    a: "Yes. Most clients start with one or two channels — usually SEO or ads plus social — and add others once those are working. The plan on your quote call reflects exactly what you need, nothing bundled in that you didn't ask for.",
  },
  {
    q: "Do you only work with businesses in Bengaluru?",
    a: "No — we're based there, but most of what we do is entirely remote-friendly, and we work with SMEs across India. Local shoots and in-person work are easiest to schedule in Bangalore, but they're not a requirement.",
  },
  {
    q: "How is pricing worked out?",
    a: "It depends on which services and how much ad or content volume you need, so we quote after the discovery call rather than publishing a one-size price. You'll always see the itemised breakdown before agreeing to anything.",
  },
  {
    q: "How fast can we start?",
    a: "Usually within a week of the discovery call, once the plan and quote are signed off.",
  },
];

/* ------------------------------------------------------- quote marquee */

export const quoteWords = [
  { text: "MORE ENQUIRIES", outline: false },
  { text: "NOT MORE REPORTS", outline: true },
  { text: "ONE TEAM", outline: false },
  { text: "EVERY CHANNEL", outline: true },
];

/* -------------------------------------------------------------- budgets */

export const budgetPills = [
  "Under ₹25k / mo",
  "₹25k – ₹50k / mo",
  "₹50k – ₹1L / mo",
  "₹1L+ / mo",
];
