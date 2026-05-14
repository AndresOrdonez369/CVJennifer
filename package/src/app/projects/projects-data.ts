export type ProjectDetail = {
  slug: string;
  year: string;
  category: string;
  school: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  description: string[];
  highlights?: { label: string; value: string }[];
  externalLink?: { label: string; href: string };
  hasVideoSlot?: boolean;
};

export const projects: ProjectDetail[] = [
  {
    slug: "marketing-strategy",
    year: "2025",
    category: "Marketing Strategy",
    school: "McMaster",
    title: "\"With Us Always\" — 4 | 4 | 4 Strategy",
    subtitle: "Run With Us Always",
    tagline: "Under Armour Case Study | Group Project",
    image: "/images/work/projectMarketingStrategy.png",
    description: [
      "For Under Armour's case study, I proposed the central campaign concept \"Run With Us Always\" and developed the supporting 4 | 4 | 4 Strategy — a structured rollout focused on 4 Essentials, 4 Cities and 4 Weeks.",
      "The framework was designed to translate Under Armour's brand promise into a tangible, measurable activation: connect with runners through curated essentials, build local momentum in priority markets and create a four-week cadence of community-driven moments that reinforce the brand's positioning."
    ],
    highlights: [
      { label: "4 Essentials", value: "Curated running gear that anchors each city activation." },
      { label: "4 Cities", value: "Priority urban markets selected to maximize cultural reach." },
      { label: "4 Weeks", value: "Tight rollout window to build momentum and brand presence." }
    ]
  },
  {
    slug: "digital-transformation",
    year: "2025",
    category: "Digital Transformation",
    school: "McMaster",
    title: "Loss Prevention Web Platform",
    subtitle: "Loss Prevention Web Platform",
    tagline: "New Business Concept | Digital Transformation Project",
    image: "/images/work/projectDigitalTransformation.png",
    description: [
      "As part of a business innovation project, I developed the concept for a customizable web platform designed to support loss prevention teams in analyzing historical data and identifying theft or shrinkage trends.",
      "I used UX design tools to visually present how the platform would look and function, focusing on usability and clarity so companies can make data-driven decisions and reduce losses."
    ],
    hasVideoSlot: true
  },
  {
    slug: "nuclear-energy-transit",
    year: "2024",
    category: "GRIT Week",
    school: "McMaster",
    title: "Nuclear Energy for Community Transit",
    subtitle: "Nuclear Energy for Community Transit",
    tagline: "GRIT Week | Experiential Learning Project",
    image: "/images/work/projectNuclearEnergyForCommunityTransit.png",
    description: [
      "During GRIT Week at DeGroote, I contributed to a team project focused on exploring innovative uses of nuclear energy in Hamilton.",
      "Building on the initial idea, I helped visualize the concept by creating a physical model of an electric bus powered by energy from McMaster's nuclear reactor. I also developed a corporate-style video to communicate the vision: using nuclear power to supply university energy needs, support new electric bus routes and integrate with existing power infrastructure like hydro poles."
    ],
    externalLink: {
      label: "Read the McMaster article",
      href: "https://degroote.mcmaster.ca/articles/grit-week-mba-students-get-hands-on-experience-in-real-time/"
    }
  }
];
