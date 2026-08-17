export type Service = {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  forWho: string;
  targetKeyword: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    shortName: "SEO",
    h1: "SEO Services in Bangalore",
    metaDescription:
      "SEO services for small and medium businesses in Bangalore and Karnataka — technical fixes, on-page optimisation, local search (Google Business Profile), and link building focused on calls and enquiries, not just rankings.",
    intro:
      "Most SEO work we see in Bangalore is either a vague monthly report or a pile of blog posts nobody asked for. We do the boring parts first — technical health, on-page structure, Google Business Profile — because that's what actually moves a small business from invisible to found.",
    includes: [
      "Technical SEO audit & fixes (sitemap, indexing, page speed, structured data)",
      "On-page optimisation for the pages that should be converting enquiries",
      "Local SEO & Google Business Profile management",
      "Keyword research grounded in real, local search volume — not vanity terms",
      "Monthly reporting tied to calls and enquiries, not just traffic",
    ],
    forWho:
      "Best for businesses that depend on being found locally — service businesses, clinics, retail, and B2B firms selling into Karnataka.",
    targetKeyword: "seo services bangalore",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    shortName: "Ads",
    h1: "Performance Marketing Agency in Bangalore",
    metaDescription:
      "Google Ads and Meta Ads management for Bangalore SMEs — campaign strategy, creative, and spend management built around cost-per-lead, not just impressions.",
    intro:
      "Ad spend without a plan is just an expensive way to find out what doesn't work. We run Google and Meta campaigns for small and medium businesses with a single question driving every decision: what does this lead actually cost us.",
    includes: [
      "Google Ads & Meta Ads strategy and setup",
      "Landing page recommendations that match ad intent",
      "Budget planning against a realistic cost-per-lead target",
      "Creative direction for ad assets (paired with our videography team when needed)",
      "Weekly optimisation, not quarterly check-ins",
    ],
    forWho:
      "Best for businesses that want predictable lead flow now, alongside the slower organic SEO build.",
    targetKeyword: "performance marketing agency bangalore",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    shortName: "Social",
    h1: "Social Media Marketing Agency in Bangalore",
    metaDescription:
      "Social media management for Bangalore businesses — content planning, posting, and community management across Instagram, LinkedIn, and Meta, built to support sales, not just impressions.",
    intro:
      "A social page that posts consistently but never mentions what you sell is just content for content's sake. We plan and run social accounts as a lead channel first, an audience-building channel second.",
    includes: [
      "Monthly content calendar tied to your actual offers and seasons",
      "Design and copy for every post (paired with our videography team for reels/video)",
      "Community management and DM/comment response",
      "Platform strategy across Instagram, LinkedIn, and Meta",
      "Simple monthly reporting on what drove enquiries",
    ],
    forWho:
      "Best for consumer-facing brands and founders who need a consistent presence without hiring an in-house social team.",
    targetKeyword: "social media marketing agency bangalore",
  },
  {
    slug: "videography",
    name: "Videography & Content Production",
    shortName: "Video",
    h1: "Videography & Content Production for Bangalore Businesses",
    metaDescription:
      "In-house videography and content production for Bangalore SMEs — product shoots, reels, ad creative, and brand films, planned alongside your social and ad strategy rather than handed off separately.",
    intro:
      "Most agencies outsource video to a freelancer with no visibility into what the ads or social team actually need. Ours sits in the same room. Every shoot is planned against where the footage will actually run.",
    includes: [
      "Reels and short-form content shoots for social",
      "Product and service shoots for ads and landing pages",
      "Brand films and founder-story content",
      "Editing, captions, and platform-specific cuts",
      "Shoot planning tied directly to your social and ad calendar",
    ],
    forWho:
      "Best for businesses that know video matters but don't have the in-house capacity to plan, shoot, and edit it consistently.",
    targetKeyword: "videography bangalore",
  },
  {
    slug: "technology",
    name: "Technology & App Development",
    shortName: "Tech",
    h1: "Technology & App Development for Karnataka Businesses",
    metaDescription:
      "Websites, business applications, and internal tools for Bangalore SMEs — built by the same team that runs your marketing, so your site and your campaigns are never working against each other.",
    intro:
      "Your website shouldn't be a separate project from your marketing — it's usually the page every ad and every search result sends people to. We build sites and business applications with that in mind, from the same team running your campaigns.",
    includes: [
      "Marketing websites built for conversion and SEO from day one",
      "Business applications and internal tools",
      "Ongoing maintenance, hosting guidance, and technical SEO upkeep",
      "Integration with your ads, forms, and analytics",
      "Custom SaaS / product builds for businesses ready to productise",
    ],
    forWho:
      "Best for businesses that want their website and their marketing built by people who actually talk to each other.",
    targetKeyword: "app development company bangalore",
  },
  {
    slug: "branding-consulting",
    name: "Branding & Business Consulting",
    shortName: "Branding",
    h1: "Branding Agency & Business Consulting in Bangalore",
    metaDescription:
      "Brand identity, positioning, and business consulting for Karnataka SMEs — helping small and medium businesses figure out what to say before we help them say it everywhere.",
    intro:
      "Before any ad, post, or page gets built, someone has to answer what this business actually stands for and who it's for. That's the work most marketing skips. We don't.",
    includes: [
      "Brand positioning and messaging",
      "Visual identity (logo, colours, guidelines) where needed",
      "Business & growth consulting for MSMEs",
      "Training for founders and in-house teams",
      "Go-to-market planning for new products or locations",
    ],
    forWho:
      "Best for founders starting from scratch, or established businesses whose brand hasn't kept up with the business itself.",
    targetKeyword: "branding agency in bangalore",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
