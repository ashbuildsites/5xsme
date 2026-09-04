export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  photo?: string;
};

export const team: TeamMember[] = [
  {
    slug: "surya-someshwara",
    name: "Surya Someshwara",
    role: "Founder — Marketing & Technology",
    bio: [
      "Worked in NetApp, Microsoft & startups",
      "Worked in the hospitality sector for 3 years",
      "Started a dairy farm",
      "Built a 3,000+ member community",
    ],
    photo: "/images/teams/surya-someshwara.avif",
  },
  {
    slug: "puneeth-hegde",
    name: "Puneeth Hegde",
    role: "Sales & Operations",
    bio: [
      "Worked in Toyota & Maserati sales teams",
      "Worked in the hospitality sector for 5 years",
      "₹20 crore+ in sales under his belt",
      "Training & planning expert",
    ],
    photo: "/images/teams/puneeth-hegde.avif",
  },
  {
    slug: "shraddha-umrao",
    name: "Shraddha Umrao",
    role: "Social Media Manager & Brand Specialist",
    bio: [
      "Plans and runs content calendars across Instagram & Facebook",
      "Keeps brand voice consistent across every client account",
      "Handles day-to-day community management and DMs",
      "Turns raw footage from shoots into scroll-stopping posts",
    ],
  },
  {
    slug: "deepti-dhande",
    name: "Deepti Dhande",
    role: "Social Media Manager & Brand Specialist",
    bio: [
      "Leads brand positioning and messaging for new accounts",
      "Writes copy and designs creative for posts, reels & stories",
      "Tracks what's actually driving engagement, not just likes",
      "Coordinates campaigns across Instagram, Facebook & WhatsApp",
    ],
  },
  {
    slug: "aswin-a",
    name: "Aswin A",
    role: "Full-Stack Web Developer",
    bio: [
      "Builds applications, websites, and automations for the team",
      "Final-year student — Computer Science & Design, minoring in Data Science",
      "Shipped 3 products and built countless brand websites",
    ],
    photo: "/images/teams/aswin-a.avif",
  },
  {
    slug: "arjun-g-kanchan",
    name: "Arjun G Kanchan",
    role: "Videographer & Editor",
    bio: [
      "Shoots product, brand, and founder-story videos on location",
      "Edits platform-specific cuts for reels, ads & long-form",
      "Handles lighting, audio, and on-site production setup",
      "Works with the social team to match footage to the content calendar",
    ],
    photo: "/images/teams/arjun-g-kanchan.webp",
  },
];
