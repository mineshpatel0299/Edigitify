import { type WorkScrollCardItem } from "@/lib/content";

const servicePodsSource = [
  {
    title: "Website Development",
    slug: "website-development",
    tags: ["Web", "E-commerce"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
    description: "Modern, fast, and easy-to-manage websites and e-commerce builds.",
    bullets: [
      "Next.js, WordPress, and Node.js development",
      "CMS admin panels your team can actually use",
      "Secure, scalable storefronts with conversion-friendly UI/UX",
      "Performance, SEO, and analytics baked in",
    ],
    metrics: [
      { label: "Stack", value: "Next.js · WordPress · Node.js" },
      { label: "Focus", value: "Speed & SEO" },
    ],
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    tags: ["Social", "Content"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    description: "Grow reach and community with thumb-stopping content and always-on optimization.",
    bullets: [
      "Editorial calendars, creatives, reels, and stories",
      "Community management and response playbooks",
      "Paid + organic synergy for compounding results",
      "Actionable dashboards and learning loops",
    ],
    metrics: [
      { label: "Formats", value: "Reels · Stories · Shorts" },
      { label: "Cadence", value: "Always-on" },
    ],
  },
  {
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    tags: ["Search", "SEO"],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    description: "Own the queries that matter—across geographies and devices.",
    bullets: [
      "National, global, local, and maps SEO",
      "Brand + e-commerce SEO",
      "Video SEO and App Store Optimization",
      "Online Reputation Management",
    ],
    metrics: [
      { label: "Coverage", value: "National + Local" },
      { label: "Specialty", value: "Brand & E-com SEO" },
    ],
  },
  {
    title: "Influencer & Creator Marketing",
    slug: "influencer-creator-marketing",
    tags: ["Creators", "Brand"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    description: "Authentic voices, measurable outcomes.",
    bullets: [
      "Celebrity endorsements & video shout-outs",
      "Blogger/influencer campaigns & meetups",
      "Mass-reach collaborations mapped to your ICP",
      "End-to-end brief, contracting, and tracking",
    ],
    metrics: [
      { label: "Talent Ops", value: "End-to-end" },
      { label: "Formats", value: "Video · Events" },
    ],
  },
  {
    title: "Online Advertising",
    slug: "online-advertising",
    tags: ["Media", "Paid"],
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80",
    description: "Media that works as hard as your budget across Meta, Google, and beyond.",
    bullets: [
      "Smart budget distribution to hit KPIs",
      "Right formats, right channels, right time",
      "Precision targeting by age, geo, interest",
      "Conversion tracking, live optimization, and post-campaign intelligence",
    ],
    metrics: [
      { label: "Platforms", value: "Meta · Google · More" },
      { label: "Optimization", value: "Live & Always-on" },
    ],
  },
  {
    title: "Graphic Design & Branding",
    slug: "graphic-design-branding",
    tags: ["Design", "Brand"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    description: "Your brand, unmistakable everywhere.",
    bullets: [
      "Logos, brand kits, menus, and cards",
      "Packaging, brochures, flyers, banners",
      "Presentation and company profile design",
      "Fast turnarounds, print-ready assets",
    ],
    metrics: [
      { label: "Deliverables", value: "Logos · Kits · Decks" },
      { label: "Turnaround", value: "Fast & Print-ready" },
    ],
  },
] as const;

export const servicePodItems: WorkScrollCardItem[] = servicePodsSource.map((service, index) => ({
  slug: service.slug ?? `service-${index}`,
  title: service.title,
  tags: service.tags ? [...service.tags] : ["How We Work"],
  summary: service.description,
  image: service.image,
  outcomes: [...service.bullets],
  metrics: service.metrics.map((metric) => ({ ...metric })),
}));
