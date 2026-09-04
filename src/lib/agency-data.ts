/**
 * How the agency works, and what each discipline actually covers.
 *
 * Transcribed from the team's own portfolio deck rather than written fresh, so
 * the site says the same thing the deck says when a prospect has both open.
 */

/* ------------------------------------------------------------- process -- */

export const process = [
  {
    n: "01",
    title: "Investigate",
    body: "We research your market, audience, and competitors to uncover opportunities.",
  },
  {
    n: "02",
    title: "Understand",
    body: "We analyse insights to understand customer needs and brand goals.",
  },
  {
    n: "03",
    title: "Brainstorm",
    body: "We generate smart ideas and strategy tailored to your brand and audience.",
  },
  {
    n: "04",
    title: "Create",
    body: "We craft compelling content, designs, and campaigns that drive engagement.",
  },
  {
    n: "05",
    title: "Integrate & Implement",
    body: "We execute seamlessly across platforms with precision and speed.",
  },
  {
    n: "06",
    title: "Measure",
    body: "We track performance, measure results, and optimise for growth.",
  },
];

/* ---------------------------------------------------------- why we're it -- */

export const whyUs = [
  {
    title: "Results Driven",
    body: "Focused on measurable business outcomes.",
  },
  {
    title: "Data-Backed Decisions",
    body: "Every strategy is powered by insights.",
  },
  {
    title: "Agile Execution",
    body: "Faster turnaround and quick adaptation.",
  },
  {
    title: "Strategic Partnership",
    body: "We work as an extension of your team.",
  },
  {
    title: "In-House Expertise",
    body: "No outsourcing, quality stays consistent.",
  },
  {
    title: "Transparent Communication",
    body: "Regular updates and direct collaboration.",
  },
];

/* ------------------------------------------------------ website process -- */

export const websiteProcess = [
  { n: "01", title: "Discovery & Strategy", body: "Goals, audience & architecture planning." },
  { n: "02", title: "Wireframe & Design", body: "UX wireframes, visual mocks, approval." },
  { n: "03", title: "Development & Build", body: "Front-end, back-end, CMS integration." },
  { n: "04", title: "Testing & QA", body: "Cross-browser, device & performance testing." },
  { n: "05", title: "Launch & Support", body: "Go live plus ongoing maintenance and updates." },
];

/* --------------------------------------------------- discipline detail -- */

export type Pillar = { title: string; points: string[] };

/**
 * The sub-capabilities inside each service, keyed by the slug in
 * `services-data.ts`. Services with no entry fall back to their `includes`
 * list on the service page.
 */
export const servicePillars: Record<string, Pillar[]> = {
  seo: [
    {
      title: "Technical SEO",
      points: [
        "Website crawlability & indexability audit",
        "Site speed optimisation",
        "Structured data / schema markup",
        "HTTPS & security implementation",
        "Fixing broken links and redirect chains",
      ],
    },
    {
      title: "On-Page SEO",
      points: [
        "Keyword research & mapping",
        "Title tags & meta description optimisation",
        "Header tags (H1–H6) structuring",
        "Content optimisation for target keywords",
        "URL structure optimisation",
      ],
    },
    {
      title: "Content SEO",
      points: [
        "Blog posts & long-form articles",
        "Landing page copy",
        "Content gap analysis",
        "Content refresh & updating old pages",
        "FAQs & featured snippet optimisation",
      ],
    },
    {
      title: "Off-Page SEO",
      points: [
        "Link building & backlink acquisition",
        "Guest posting outreach",
        "Brand mentions & citations",
        "Competitor backlink analysis",
        "Digital PR for authority building",
      ],
    },
    {
      title: "Local SEO",
      points: [
        "Google Business Profile optimisation",
        "NAP (Name, Address, Phone) consistency",
        "Local citations & directory listings",
        "Local keyword targeting",
        "Location-based landing pages",
      ],
    },
    {
      title: "E-Commerce SEO",
      points: [
        "Product page optimisation",
        "Category page SEO",
        "Duplicate content handling",
        "Faceted navigation management",
        "Product schema markup",
      ],
    },
  ],

  "social-media-marketing": [
    {
      title: "Strategy & Planning",
      points: [
        "Social media audit of existing presence",
        "Competitor analysis & benchmarking",
        "Target audience & buyer persona development",
        "Content calendar creation & scheduling",
        "Goal setting & KPI definition",
      ],
    },
    {
      title: "Content Creation",
      points: [
        "Static posts, infographics, data visuals",
        "User-generated content (UGC) curation",
        "Short-form, long-form video content",
        "Stories & ephemeral content",
        "Meme & trending format content",
      ],
    },
    {
      title: "Social Commerce",
      points: [
        "Instagram & Facebook Shop setup",
        "Product tagging in posts & stories",
        "Pinterest shopping integration",
        "Shoppable video content",
        "Checkout optimisation via social platforms",
      ],
    },
    {
      title: "Brand Reputation & Listening",
      points: [
        "Social listening tools setup",
        "Sentiment analysis",
        "Competitor activity monitoring",
        "Crisis management planning",
        "Online reputation management (ORM)",
      ],
    },
    {
      title: "Influencer Marketing",
      points: [
        "Influencer identification & vetting",
        "Micro vs. macro influencer strategy",
        "Outreach & collaboration management",
        "Campaign briefing & content guidelines",
        "Performance tracking of influencer campaigns",
      ],
    },
    {
      title: "Analytics & Reporting",
      points: [
        "Follower growth tracking",
        "Reach, impressions & engagement metrics",
        "Audience demographics & insights",
        "Monthly & weekly social media reports",
        "ROI measurement & attribution",
      ],
    },
  ],

  "performance-marketing": [
    {
      title: "Campaign Strategy",
      points: [
        "Competitor analysis & benchmarking",
        "Target audience & buyer persona development",
        "Channel selection strategy",
        "Campaign goal setting & KPI definition",
        "Budget planning & allocation across channels",
      ],
    },
    {
      title: "Landing Page & Conversion",
      points: [
        "Landing page design & development",
        "CTA (Call-to-Action) optimisation",
        "Form design & lead capture optimisation",
        "Heatmap & user behaviour analysis",
        "Conversion funnel analysis",
      ],
    },
    {
      title: "Remarketing & Retargeting",
      points: [
        "Google Ads remarketing campaigns",
        "Meta pixel-based retargeting",
        "Dynamic product retargeting (e-commerce)",
        "Cart abandonment campaigns",
        "Cross-platform retargeting strategy",
      ],
    },
    {
      title: "E-Commerce Performance",
      points: [
        "Google Shopping & Smart Shopping campaigns",
        "Meta Dynamic Product Ads (DPA)",
        "ROAS-focused campaign management",
        "Lifetime value (LTV) based bidding strategy",
        "Cross-sell & upsell campaign setup",
      ],
    },
    {
      title: "Tracking & Analytics",
      points: [
        "Google Tag Manager (GTM) setup",
        "Google Analytics 4 (GA4) configuration",
        "Conversion tracking setup",
        "Meta Pixel & Conversions API setup",
        "UTM parameter strategy & management",
      ],
    },
    {
      title: "Reporting & Analysis",
      points: [
        "Weekly & monthly performance reports",
        "Channel-wise spend & ROI analysis",
        "CPC, CPL, CPA, ROAS tracking",
        "Audience & creative performance insights",
        "Campaign health audits & recommendations",
      ],
    },
  ],

  "branding-consulting": [
    {
      title: "Logo & Visual Identity",
      points: [
        "Primary logo and variation design",
        "Monogram & lettermark design",
        "Favicon & app icon design",
        "Logo usage guidelines",
        "Logo animation & motion identity",
      ],
    },
    {
      title: "Branding Strategy",
      points: [
        "Brand discovery & research",
        "Brand positioning & differentiation",
        "Brand mission, vision & values",
        "Target audience & persona",
        "Competitor & market analysis",
      ],
    },
    {
      title: "Visual Assets",
      points: [
        "Brand & product photography direction",
        "Lifestyle shoot concept & direction",
        "Photo editing & retouching",
        "Stock image curation & guidelines",
        "Visual content mood board creation",
      ],
    },
  ],

  "website-development": [
    {
      title: "Lightning-Fast Performance",
      points: ["Sub-3-second load times optimised for Core Web Vitals"],
    },
    {
      title: "Mobile-First Responsive",
      points: ["Perfect across every screen size and device type"],
    },
    {
      title: "SEO-Ready Architecture",
      points: ["Built from the ground up for search engine visibility"],
    },
    {
      title: "Secure & Reliable",
      points: ["SSL, security hardening, and reliable hosting setup"],
    },
    {
      title: "E-Commerce Ready",
      points: ["Full online store capabilities when your business needs them"],
    },
  ],
};
