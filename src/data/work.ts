export type WorkMetric = {
  label: string;
  value: string;
  context?: string;
};

export type WorkTimelineItem = {
  phase: string;
  detail: string;
};

export type WorkCaseStudy = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  image: string;
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: WorkMetric[];
  gallery: string[];
  client: string;
  industry: string;
  location: string;
  services: string[];
  timeline: WorkTimelineItem[];
  accent: {
    from: string;
    via?: string;
    to: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

const work: WorkCaseStudy[] = [
  {
    slug: "oceans-earth-realty",
    title: "Oceans & Earth Realty",
    tags: ["Real Estate", "Paid Media", "Automation"],
    summary:
      "Rolled out a demand engine for Oceans & Earth so NRIs, investors, and luxury buyers can discover curated islands, estates, and eco-villas without friction.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Inventory dropped every quarter because enquiries scattered across brokers, DMs, and fairs. No one knew which prospects were real or ready.",
    solution:
      "We mapped personas, built cinematic landing journeys, synced WhatsApp and HubSpot, and layered smart nurturing so each investor gets pricing, VR tours, and concierge slots instantly.",
    outcomes: [
      "Single source of truth for every lead from paid, partner, and organic channels",
      "Dynamic VR walkthroughs stitched into emails, WhatsApp, and microsites",
      "Lead scoring tied to funding proof, geography, and desired property type",
    ],
    metrics: [
      { label: "Ready-to-buy pipeline", value: "+62%" },
      { label: "Site visit conversions", value: "+35%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-50",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Oceans & Earth Realty",
    industry: "Luxury Real Estate",
    location: "Dubai & Maldives",
    services: ["Luxury demand gen", "Immersive content", "Marketing automation"],
    timeline: [
      {
        phase: "Signal lab",
        detail: "Unified CRM, broker sheets, and social DMs to identify qualified overseas buyers by behavior.",
      },
      {
        phase: "Experience stack",
        detail: "Shot cinematic walkthroughs, built VR-ready journeys, and plugged them into a modular CMS.",
      },
      {
        phase: "Concierge ops",
        detail: "Automated verification, paperwork prep, and site visit calendars directly inside HubSpot.",
      },
    ],
    accent: { from: "#e0f7fa", via: "#fff7ed", to: "#ffffff" },
    testimonial: {
      quote: "The concierge feels handcrafted even though it’s automated. Investors feel looked after from the first click.",
      author: "Shayan Riaz",
      role: "Founder, Oceans & Earth",
    },
  },
  {
    slug: "lakkshay-demand-map",
    title: "Lakkshay Demand Map",
    tags: ["Travel", "Content", "Performance"],
    summary:
      "Turned Lakkshay Travels into a data-backed concierge for tier-II explorers by pairing story-driven films with dynamic offer orchestration.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    problem:
      "The team relied on seasonal fairs while younger travelers planned journeys through reels and micro-influencers.",
    solution:
      "We scripted destination series, deployed shoppable reels, and stitched WhatsApp commerce so quotes, upgrades, and visas live in one flow.",
    outcomes: [
      "Always-on UGC pipeline with 42 creators across India",
      "WhatsApp automation built with contextual CTAs per itinerary type",
      "Search, social, and affiliate budgets governed by a single pacing model",
    ],
    metrics: [
      { label: "Trip bookings", value: "+63%" },
      { label: "Response time", value: "3m avg" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Lakkshay Travels",
    industry: "Travel & Hospitality",
    location: "Indore, India",
    services: ["Destination storytelling", "Influencer commerce", "Lifecycle orchestration"],
    timeline: [
      {
        phase: "Audience immersion",
        detail:
          "Identified traveler archetypes by analyzing reel interactions, WhatsApp chat logs, and itinerary backlogs.",
      },
      {
        phase: "Content lab",
        detail:
          "Shot snackable films, piped them into shoppable reels, and automated quote creation right inside WhatsApp.",
      },
      {
        phase: "Growth ops",
        detail:
          "Linked paid, organic, and affiliate pacing to one scorecard so budgets react daily to demand shifts.",
      },
    ],
    accent: { from: "#d1fae5", via: "#fef3c7", to: "#ffffff" },
  },
  {
    slug: "gymtex-commerce-grid",
    title: "Gymtex Commerce Grid",
    tags: ["D2C", "Search", "CRO"],
    summary:
      "Built a performance stack for Gymtex Flooring so architects and facility owners can spec, sample, and buy without leaving the experience.",
    image: "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Offline distributors controlled the narrative and digital orders stalled at the quote form.",
    solution:
      "We launched a configurator, piped first-party data into Google Ads, and layered LinkedIn ABM plays aimed at procurement teams.",
    outcomes: [
      "Demand capture for 18 SKUs with automated region-based pricing",
      "Sales got a prioritized lead board scored by project readiness",
      "Quarterly creative refresh driven by installer testimonials",
    ],
    metrics: [
      { label: "Spec sheet downloads", value: "4.2x" },
      { label: "Lead-to-close time", value: "-22 days" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Gymtex Flooring",
    industry: "Industrial Manufacturing",
    location: "Bengaluru, India",
    services: ["B2B commerce", "Search & paid", "Revenue operations"],
    timeline: [
      {
        phase: "Product intelligence",
        detail:
          "Digitized spec sheets, pricing tiers, and distributor availability into one modular catalogue.",
      },
      {
        phase: "Acquisition grid",
        detail:
          "Synced first-party data with Google Ads & LinkedIn to prioritize high-intent geography-account pairs.",
      },
      {
        phase: "Sales handoff",
        detail:
          "Scored opportunities by readiness so account managers knew which architect to call and when.",
      },
    ],
    accent: { from: "#e0f2fe", via: "#f0f9ff", to: "#ffffff" },
    testimonial: {
      quote: "The configurator plus revenue cockpit helped our sales floor feel like a digital HQ.",
      author: "Nitin Pujari",
      role: "Commercial Director, Gymtex",
    },
  },
  {
    slug: "earthz-launchpad",
    title: "Earthz Launchpad",
    tags: ["Real Estate", "Brand", "Automation"],
    summary:
      "Positioned Earthz Urban Spaces as a climate-forward developer with immersive pre-launch journeys for each micro-community.",
    image: "https://images.unsplash.com/photo-1431578500526-4d9613015464?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Offline events drove awareness but couldn't nurture families relocating from other metros.",
    solution:
      "We built a content hub with AR-ready masterplans, orchestrated geo-fenced media, and synced CRM scoring to walk potential buyers through financing steps.",
    outcomes: [
      "Investor decks, microsites, and site visit calendars fed by one CMS",
      "Media budgets shift automatically between awareness and lead goals",
      "Community teams receive sentiment pulses after every interaction",
    ],
    metrics: [
      { label: "Site visits", value: "+48%" },
      { label: "Booking velocity", value: "+31%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Earthz Urban Spaces",
    industry: "Real Estate",
    location: "Gurugram, India",
    services: ["Experience strategy", "Immersive web", "CRM automation"],
    timeline: [
      {
        phase: "Community blueprint",
        detail:
          "Interviewed residents-to-be and mapped rituals to inform the launch storyline per tower.",
      },
      {
        phase: "Immersive stack",
        detail:
          "Built AR-ready masterplans, financing walkthroughs, and hyperlocal content pods.",
      },
      {
        phase: "Nurture ops",
        detail:
          "Lead scoring synced with sales lounges so relationship managers knew which families to host next.",
      },
    ],
    accent: { from: "#e0f7fa", via: "#e8f5e9", to: "#ffffff" },
  },
  {
    slug: "whiteace-experience-lab",
    title: "White Ace Experience Lab",
    tags: ["Interiors", "Content", "CX"],
    summary:
      "Digitized White Ace Interiors' studio walk-through so prospects can co-create mood boards, budgets, and installation plans remotely.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Inquiries arrived from Instagram but stalled because pricing and inspiration lived on separate channels.",
    solution:
      "We combined interactive lookbooks, AR previews, and CRM automations that notify designers the moment a client saves a room concept.",
    outcomes: [
      "Every creative review documented alongside costs and materials",
      "Inbound traffic segmented by homeowner, architect, and builder",
      "Email and WhatsApp nurtures triggered off saved palettes",
    ],
    metrics: [
      { label: "Design consultations", value: "+58%" },
      { label: "Average project value", value: "+24%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "White Ace Interiors",
    industry: "Interior Design",
    location: "New Delhi, India",
    services: ["Interactive content", "Experience design", "Marketing automation"],
    timeline: [
      {
        phase: "Studio virtualization",
        detail:
          "Captured hero installations in volumetric 3D to feed lookbooks and AR previews.",
      },
      {
        phase: "Palette OS",
        detail:
          "Unified inspiration, pricing calculators, and vendor lead times into saved projects.",
      },
      {
        phase: "Designer alerting",
        detail:
          "CRM playbooks notify designers the moment a client saves a room or requests pricing support.",
      },
    ],
    accent: { from: "#ede9fe", via: "#fef3f2", to: "#ffffff" },
    testimonial: {
      quote: "Clients feel like they're in the studio even before we meet. The handover to designers is instant.",
      author: "Manvi Kohli",
      role: "Founder, White Ace",
    },
  },
  {
    slug: "oaklines-b2b-lab",
    title: "Oaklines B2B Lab",
    tags: ["B2B", "ABM", "Automation"],
    summary:
      "Helped Oaklines win enterprise interior mandates with an account-based playbook tethered to procurement realities.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Pitch teams spent weeks preparing decks without insight into who was visiting the website or engaging with samples.",
    solution:
      "We mapped buying committees, synced Clearbit intent into HubSpot, and built personalized microsites for every shortlisted client.",
    outcomes: [
      "Creative, sales, and delivery review the same pursuit board daily",
      "Ad formats change automatically depending on buyer stage",
      "Post-signature onboarding triggered the moment PO is raised",
    ],
    metrics: [
      { label: "RFP shortlists", value: "+40%" },
      { label: "Pitch prep time", value: "-30%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Oaklines Studio",
    industry: "Commercial Interiors",
    location: "Pune, India",
    services: ["Account-based media", "Revenue enablement", "ABM microsites"],
    timeline: [
      {
        phase: "Intent fusion",
        detail:
          "Fused website heatmaps, email intent, and firmographic scores to spot active buying committees.",
      },
      {
        phase: "Personalized pursuits",
        detail:
          "Launched microsites with procurement-specific value props, sample tracking, and benchmark calculators.",
      },
      {
        phase: "Delivery handshake",
        detail:
          "Ops workflows trigger onboarding the moment a PO hits HubSpot so delivery teams stay ahead.",
      },
    ],
    accent: { from: "#fef3c7", via: "#e0f2f1", to: "#ffffff" },
  },
  {
    slug: "birdbrick-commerce-loop",
    title: "Birdbrick Commerce Loop",
    tags: ["Ecommerce", "Lifecycle", "Analytics"],
    summary:
      "Replatformed Birdbrick's D2C store with a lifecycle marketing loop that blends paid, organic, and retail moments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Flash sales spiked revenue but eroded margins because discounts were the only lever.",
    solution:
      "We rolled out first-party data capture, predictive segments inside Klaviyo, and creative testing frameworks for TikTok Shop.",
    outcomes: [
      "Inventory and campaigns talk to each other daily for pacing",
      "Customer journeys re-score after every purchase or return",
      "Weekly growth reviews tie finance and marketing decisions together",
    ],
    metrics: [
      { label: "Repeat revenue", value: "+52%" },
      { label: "Discount dependency", value: "-37%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Birdbrick",
    industry: "Ecommerce",
    location: "Singapore",
    services: ["Lifecycle CRM", "Retention media", "Experimentation"],
    timeline: [
      {
        phase: "Data foundation",
        detail:
          "Captured first-party signals across store, retail partners, and support conversations to enrich profiles.",
      },
      {
        phase: "Lifecycle loops",
        detail:
          "Built predictive segments, replenishment cadences, and surprise moments tied to actual usage.",
      },
      {
        phase: "Growth governance",
        detail:
          "Finops + marketing reviews every Friday to reallocate spend based on margin health.",
      },
    ],
    accent: { from: "#f0fdfa", via: "#ecfeff", to: "#ffffff" },
    testimonial: {
      quote:
        "For the first time our retail and D2C data play nice. Promotions feel intentional instead of frantic.",
      author: "Lena Phan",
      role: "COO, Birdbrick",
    },
  },
  {
    slug: "mintsteer-demand-engine",
    title: "MintSteer Demand Engine",
    tags: ["Paid Media", "Automation", "Analytics"],
    summary:
      "Scaled MintSteer's investor pipeline with an always-on acquisition system that aligned capital-raising goals with real-time behavior data.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Leads from roadshows were stalling because paid channels ran on generic messaging and static landing pages.",
    solution:
      "We rebuilt audience architecture, automated budget reallocation across Meta, Google, and programmatic, and tied every touch to a deal health dashboard in Looker Studio.",
    outcomes: [
      "Unified view of investor intent signals from ads, webinars, and CRM",
      "Creative and copy sprints every 10 days tied to market shifts",
      "Finance, marketing, and leadership reviewing the same live scorecard",
    ],
    metrics: [
      { label: "Qualified leads", value: "+71%" },
      { label: "Cost per meeting", value: "-36%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "MintSteer Capital",
    industry: "Financial Services",
    location: "Mumbai, India",
    services: ["Paid media architecture", "Investor enablement automation", "Dealroom analytics"],
    timeline: [
      {
        phase: "Signal mapping",
        detail:
          "Paired CRM health, webinar behavior, and historical raise targets to build lookalike intent stacks.",
      },
      {
        phase: "Creative engine",
        detail:
          "Shipped 10-day creative sprints with dynamic landing states tuned to each stage of the raise.",
      },
      {
        phase: "Revenue cockpit",
        detail:
          "Hooked ad spend, SDR routing, and board reporting into a shared Looker Studio workspace.",
      },
    ],
    accent: { from: "#dfe7ff", via: "#f5e8ff", to: "#ffffff" },
    testimonial: {
      quote:
        "Edigitify turned our investor funnel into a single pane of glass. Everyone—from partners to SDRs—moves faster now.",
      author: "Radhika Venkatesh",
      role: "VP Growth, MintSteer",
    },
  },
  {
    slug: "acre-folio",
    title: "Acre Folio",
    tags: ["Proptech", "Product", "Growth"],
    summary:
      "Designed Acre Folio’s digital showroom so family offices can subscribe to farmland and estate syndicates with complete financial clarity.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    problem:
      "High-intent buyers loved the thesis but stalled because diligence documents, yield models, and booking workflows lived in different tools.",
    solution:
      "We rebuilt the product story, layered interactive models, and connected DocuSign, Razorpay, and CRM scoring so investors can reserve parcels in minutes.",
    outcomes: [
      "Self-serve data rooms auto-provisioned for each investment vehicle",
      "Real-time yield calculators embedded into landing journeys and webinars",
      "Deal teams alerted the second a capital commitment or LOI is signed",
    ],
    metrics: [
      { label: "Average commitment size", value: "+44%" },
      { label: "Time to reserve", value: "-9 days" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431936424001-447bddcccff0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Acre Folio",
    industry: "Proptech",
    location: "Bengaluru, India",
    services: ["Product strategy", "Investor enablement", "Automation"],
    timeline: [
      {
        phase: "Investor discovery",
        detail: "Interviewed LPs and mapped blockers inside diligence, payment, and legal review.",
      },
      {
        phase: "Experience design",
        detail: "Built interactive story flows, calculators, and doc rooms that flex by asset type.",
      },
      {
        phase: "Subscription ops",
        detail: "Connected e-sign, payments, and CRM workflows so the team sees commitment health in real time.",
      },
    ],
    accent: { from: "#f1f5f9", via: "#ecfccb", to: "#ffffff" },
    testimonial: {
      quote: "Investors rarely email the team now—they have everything, and our pipeline stays crystal clear.",
      author: "Sonal Dugar",
      role: "COO, Acre Folio",
    },
  },
];

export default work;
