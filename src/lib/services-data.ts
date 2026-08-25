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
    name: "SEO & Google Marketing",
    shortName: "SEO",
    h1: "SEO & Google Marketing in Bangalore",
    metaDescription:
      "SEO and Google marketing for small and medium businesses in Bangalore and Karnataka — technical fixes, on-page optimisation, Google Business Profile, and Google Ads focused on calls and enquiries, not just rankings.",
    intro:
      "Most SEO work we see in Bangalore is either a vague monthly report or a pile of blog posts nobody asked for. We do the boring parts first — technical health, on-page structure, Google Business Profile — because that's what actually moves a small business from invisible to found on Google.",
    includes: [
      "Technical SEO audit & fixes (sitemap, indexing, page speed, structured data)",
      "On-page optimisation for the pages that should be converting enquiries",
      "Google Business Profile setup and ongoing management",
      "Google Ads alongside organic, where it makes sense",
      "Keyword research grounded in real, local search volume — not vanity terms",
      "Monthly reporting tied to calls and enquiries, not just traffic",
    ],
    forWho:
      "Best for businesses that depend on being found on Google — service businesses, clinics, retail, and B2B firms selling anywhere in India.",
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
      "Social media strategy and content management for Bangalore businesses — planning, posting, and community management across Instagram, LinkedIn, and beyond.",
    intro:
      "A social page that posts consistently but never mentions what you sell is just content for content's sake. We plan and run social accounts as a lead channel first, an audience-building channel second.",
    includes: [
      "Monthly content calendar tied to your actual offers and seasons",
      "Design and copy for every post (paired with our videography team for reels/video)",
      "Community management and DM/comment response",
      "Platform strategy across Instagram, LinkedIn, and beyond",
      "Simple monthly reporting on what drove enquiries",
    ],
    forWho:
      "Best for consumer-facing brands and founders who need a consistent presence without hiring an in-house social team.",
    targetKeyword: "social media marketing agency bangalore",
  },
  {
    slug: "facebook-instagram-marketing",
    name: "Facebook & Instagram Marketing",
    shortName: "FB & IG",
    h1: "Facebook & Instagram Marketing Agency in Bangalore",
    metaDescription:
      "Facebook and Instagram page management and ad campaigns for Bangalore businesses — page setup, Meta Ads, and platform-specific content run as its own focused channel.",
    intro:
      "Facebook and Instagram run on different rules than the rest of your marketing — algorithm shifts, ad auction dynamics, and platform-native content. We run them as their own focused channel instead of an afterthought bolted onto general social media work.",
    includes: [
      "Facebook & Instagram page setup and optimisation",
      "Meta Ads campaign management",
      "Platform-native content (Reels, Stories, carousels)",
      "Audience targeting and retargeting setup",
      "Monthly reporting on reach, engagement, and enquiries",
    ],
    forWho:
      "Best for businesses that sell directly to consumers and need Facebook & Instagram to actually convert, not just look active.",
    targetKeyword: "facebook and instagram marketing agency bangalore",
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    shortName: "WhatsApp",
    h1: "WhatsApp Marketing Company in Bangalore",
    metaDescription:
      "WhatsApp Business setup, broadcast campaigns, and automated replies for Bangalore SMEs — a channel most competitors still aren't using well.",
    intro:
      "Almost every customer you have is already on WhatsApp, and almost none of your competitors are using it properly. We set up WhatsApp Business the right way and run broadcast campaigns that read like messages, not spam.",
    includes: [
      "WhatsApp Business API / app setup",
      "Broadcast campaign planning and copywriting",
      "Automated replies and catalogue setup",
      "Segmented lists so messages stay relevant, not spammy",
      "Monthly reporting on opens, replies, and enquiries",
    ],
    forWho:
      "Best for businesses with an existing customer list who want a direct, high-open-rate channel that isn't fighting an algorithm.",
    targetKeyword: "whatsapp marketing company in bangalore",
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
    slug: "website-development",
    name: "Website Development",
    shortName: "Website",
    h1: "Website Development Company in Bangalore",
    metaDescription:
      "Marketing websites for Bangalore SMEs, built for conversion and SEO from day one by the same team running your campaigns — not a freelancer working from a template.",
    intro:
      "Your website usually isn't a separate project from your marketing — it's the page every ad and every search result sends people to. We build it with that in mind, from the same team running your campaigns, not a freelancer who's never seen your ad strategy.",
    includes: [
      "Custom-built marketing and business websites",
      "Built for conversion and SEO from day one — not bolted on after",
      "Mobile-first, fast-loading pages",
      "Ongoing maintenance and hosting guidance",
      "Integration with your ads, forms, and analytics",
    ],
    forWho:
      "Best for businesses whose current site was never built with marketing in mind, or don't have one yet.",
    targetKeyword: "website development company bangalore",
  },
  {
    slug: "technology",
    name: "App & Software Development",
    shortName: "Apps",
    h1: "App & Software Development for Indian SMEs",
    metaDescription:
      "Business applications, internal tools, and custom software for SMEs across India — built by the same team that understands how your marketing and operations actually work. Based in Bengaluru, remote-friendly everywhere.",
    intro:
      "Beyond the website, most growing businesses eventually need software built around how they actually operate — a booking system, an internal tool, a product they want to sell. We build that too, without handing you off to a separate vendor who has to relearn your business from scratch.",
    includes: [
      "Business applications and internal tools",
      "Custom SaaS / product builds for businesses ready to productise",
      "Integrations with the marketing and sales tools you already use",
      "Ongoing maintenance and technical support",
      "Technical scoping to figure out what's actually worth building",
    ],
    forWho:
      "Best for businesses ready to build real software, not just a website — from internal tools to a product they intend to sell.",
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
