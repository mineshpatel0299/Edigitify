export type WebsiteProject = {
  title: string;
  url: string;
  description: string;
  badge: string;
  palette: string;
};

export const websiteProjects: WebsiteProject[] = [
  {
    title: "Oceans & Earth Realty",
    url: "https://www.oceansandearthrealty.com",
    description: "Luxury real-estate experience with immersive listings and curated neighborhood tours.",
    badge: "Web Platform",
    palette: "from-slate-900/90 via-slate-900/60 to-teal-900/60",
  },
  {
    title: "Amber Glass India",
    url: "https://www.amberglassindia.com/",
    description: "Product-first storefront highlighting premium borosilicate collections and stories.",
    badge: "Ecommerce",
    palette: "from-amber-900/80 via-stone-900/60 to-rose-900/50",
  },
  {
    title: "Prime Vital Healthcare Lab",
    url: "https://www.primevitalhealthcarelab.com/",
    description: "Diagnostics booking hub crafted for trust, clarity, and responsive care flows.",
    badge: "Healthcare",
    palette: "from-emerald-900/80 via-teal-900/70 to-blue-900/60",
  },
  {
    title: "Kaizen IT Solutions",
    url: "https://www.kaizenitsolutionsllc.com/",
    description: "Consulting-forward IT presence balancing enterprise rigor with a human touch.",
    badge: "B2B Services",
    palette: "from-indigo-900/80 via-blue-900/70 to-cyan-900/60",
  },
];
