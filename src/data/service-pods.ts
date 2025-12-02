import { type WorkScrollCardItem } from "@/lib/content";

const servicePodsSource = [
  {
    title: "Website Development",
    slug: "website-development",
    tags: ["Web", "E-commerce"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    description: "Modern, fast, and easy-to-manage websites and e-commerce builds.",
    bullets: [
      "WordPress, Joomla, and custom PHP stacks",
      "CMS admin panels your team can actually use",
      "Secure, scalable storefronts with conversion-friendly UI/UX",
      "Performance, SEO, and analytics baked in",
    ],
    metrics: [
      { label: "Stack", value: "WordPress · Joomla · PHP" },
      { label: "Focus", value: "Speed & SEO" },
    ],
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    tags: ["Social", "Content"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1483103332443-19ed3bb1f2b6?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
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
