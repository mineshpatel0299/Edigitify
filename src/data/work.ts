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
    tags: ["Real Estate", "Branding", "Social Media", "Sustainability"],
    summary:
      "Oceans & Earth Realty is a purpose-led real estate advisory firm inspired by conscious living, sustainability, and mindful choices. At EDigitify, we crafted a cohesive digital identity for them—from website design and social media management to creatives, videos, advertising, and WhatsApp communication. Our role was to transform their philosophy into a brand experience that feels authentic, consistent, and deeply meaningful.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Oceans & Earth came to us with a vision rooted in conservation, responsible lifestyles, and sustainable decision-making. But their digital presence didn't reflect that vision. Their visuals felt inconsistent, their messaging didn't express their philosophy, their website lacked narrative, clarity, and emotion, and their brand story felt scattered. They didn't just need digital marketing—they needed a brand experience that made people feel the beauty, depth, and responsibility of sustainable living.",
    solution:
      "We stepped in as their full-scale digital partner, shaping every touchpoint of their brand ecosystem. We built a clean, modern, nature-inspired website that communicates sustainability through color, design, and tone while highlighting their real estate expertise. We crafted a social media content strategy rooted in environmental consciousness, real estate education, community engagement, and brand storytelling. We created structured WhatsApp communication flows to share project details, deliver updates, and nurture leads. We produced nature-inspired visuals including reels, short videos, brand stories, project explainers, and minimal aesthetic templates. We ran high-intent Meta & Google Ads campaigns focused on lead generation, audience segmentation, and sustainable real estate positioning with messaging aligned to their eco-conscious tone.",
    outcomes: [
      "Established a strong, meaningful brand identity that reflects purpose and responsibility",
      "Built trust with a value-driven audience through consistent, nature-inspired communication",
      "Delivered cohesive messaging across website, social media, WhatsApp, and advertising platforms",
      "Positioned Oceans & Earth as a sustainable real estate advisory that stands out in a crowded market",
      "Created a brand experience that truly reflects their philosophy: purposeful, responsible, and deeply connected to nature",
    ],
    metrics: [
      { label: "Brand recognition", value: "Strong market presence" },
      { label: "Audience engagement", value: "Value-driven growth" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-50",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Oceans & Earth Realty",
    industry: "Sustainable Real Estate",
    location: "NCR, India",
    services: ["Website Design", "Social Media Management", "WhatsApp Marketing", "Creative & Video Production", "Meta & Google Ads Management"],
    timeline: [
      {
        phase: "Brand foundation & website",
        detail: "Built a clean, modern, nature-inspired website that communicates sustainability through color, design, and tone. Balanced aesthetics with functionality while bringing their purpose-driven story to life with clarity and emotion.",
      },
      {
        phase: "Content & community ecosystem",
        detail: "Crafted a social media strategy rooted in environmental consciousness, real estate education, and community engagement. Produced nature-inspired visuals, reels, brand stories, and project explainers. Created structured WhatsApp communication flows for project details, updates, and lead nurturing.",
      },
      {
        phase: "Strategic advertising",
        detail: "Launched high-intent Meta & Google Ads campaigns focused on lead generation, audience segmentation, and brand visibility. Created ad creatives and messaging aligned with their eco-conscious tone—subtle, trustworthy, and premium.",
      },
    ],
    accent: { from: "#e0f7fa", via: "#fff7ed", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify helped us build a digital identity that truly reflects our philosophy of sustainability and purposeful living. Our brand now feels authentic and deeply meaningful.",
      author: "Oceans & Earth Team",
      role: "Sustainable Real Estate Advisory",
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
    slug: "gymtex-flooring",
    title: "Gymtex Flooring",
    tags: ["Fitness", "Social Media", "Product Marketing", "Paid Ads"],
    summary:
      "Gymtex is a premium gym flooring brand known for durability, anti-slip technology, and heavy-duty performance. EDigitify manages their social media presence, Meta ads, creative design, photoshoots, and video shoots—crafting a bold, energetic, and product-centric digital identity that reflects the strength of the brand.",
    image: "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Gymtex is a trusted gym flooring solutions brand offering products built for safety, stability, and high-intensity performance. Despite having a solid product, their digital identity didn't fully capture the quality and toughness of their flooring. They needed a brand presence that speaks the language of fitness—bold, confident, modern, and powerful.",
    solution:
      "EDigitify stepped in to build a digital presence as tough and energetic as the flooring itself. We built a social media content strategy focusing on product features (anti-slip, durability, density, scratch-proof), gym installation showcases, humorous and relatable fitness content, strong visual identity aligned with gym aesthetics, and engaging reels with trend-driven creative ideas. We ran targeted Meta ad campaigns aimed at gym owners, fitness studios, commercial spaces, sports facilities, builders, and contractors—highlighting product durability and safety to drive high-quality inquiries and conversions. We designed bold, high-contrast visuals representing strength, durability, fitness culture, product quality, and technical specifications. We conducted professional photoshoots and video shoots to showcase real flooring installations, material texture and finish, gym layouts, on-ground usage, feature highlights, and before-after transformations.",
    outcomes: [
      "Built a strong digital presence with higher brand recall in the fitness industry",
      "Generated consistent lead flow through targeted Meta ads campaigns",
      "Created premium product visuals that help customers instantly trust the brand",
      "Developed a modern identity aligned with the fitness industry",
      "Positioned Gymtex as selling confidence, safety, and performance for every fitness space",
    ],
    metrics: [
      { label: "Brand recall", value: "Significantly higher" },
      { label: "Lead quality", value: "Consistent high-quality flow" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Gymtex Flooring",
    industry: "Fitness & Gym Flooring",
    location: "India",
    services: ["Social Media Management", "Meta Ad Management", "Creative Design", "Photoshoot & Video Production", "Product Marketing"],
    timeline: [
      {
        phase: "Social media & content strategy",
        detail:
          "Built a content strategy focusing on product features, gym installation showcases, humorous fitness content, and strong visual identity aligned with gym aesthetics. Created engaging reels and trend-driven creative ideas to make the brand presence as tough and energetic as the flooring itself.",
      },
      {
        phase: "Visual storytelling & production",
        detail:
          "Designed bold, high-contrast visuals representing strength, durability, fitness culture, and product quality. Conducted professional photoshoots and video shoots showcasing real flooring installations, material texture, gym layouts, on-ground usage, feature highlights, and before-after transformations to give Gymtex a premium product showcase.",
      },
      {
        phase: "Performance advertising",
        detail:
          "Ran targeted Meta ad campaigns aimed at gym owners, fitness studios, commercial spaces, sports facilities, builders, and contractors. Ads highlight product durability and safety, driving high-quality inquiries and conversions from the right audience segments.",
      },
    ],
    accent: { from: "#e0f2fe", via: "#f0f9ff", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify elevated our digital presence with performance-driven marketing and premium visuals. Gymtex now stands as the most trusted gym flooring brand through impactful content and consistent brand visibility.",
      author: "Gymtex Team",
      role: "Gym Flooring Solutions",
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
    tags: ["Real Estate", "Social Media", "Branding", "Paid Ads"],
    summary:
      "Acre Folio is one of Delhi's fast-growing real estate consultancy firms, and EDigitify manages their complete digital presence—from social media management, brand creatives, logo design, photoshoots/videoshoots to Meta & Google Ads. Our holistic strategy has helped Acre Folio build a strong brand identity, generate qualified leads, and position themselves as a trusted property advisory name in Delhi-NCR.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Acre Folio was trusted by clients on ground, but online, they barely existed. In a market crowded with aggressive ads and loud sales pitches, their quiet credibility was getting overshadowed. They needed a brand that looked premium, sounded premium, and felt like the go-to real estate advisor for serious buyers. But their existing brand identity, visuals, communication style, and platforms didn't reflect that vision yet.",
    solution:
      "We built everything from the ground up: created a clean, premium logo with a sharp minimal design and professional colour palette; managed monthly content calendars with high-quality property content including reels, posts, carousels, and testimonials; produced all creative assets (property showcases, project highlights, USP graphics, festive content) and video content (short-form reels, walkthrough videos, project explainers); conducted on-site photoshoots and videoshoots for properties and team profiling; and managed high-performance Google Ads & Meta Ads campaigns with strong targeting, qualified lead generation, and conversion-optimized ad creatives.",
    outcomes: [
      "Built a premium, trustworthy brand identity that reflects professionalism and trust",
      "Created consistent digital presence with a mix of value-driven, aspirational, and lead-focused content",
      "Produced comprehensive creative assets and video content aligned with brand tone",
      "Generated consistent, high-quality real estate leads through targeted ad campaigns",
      "Strengthened digital footprint across social media, search, and performance ads",
    ],
    metrics: [
      { label: "Digital engagement & reach", value: "Significantly increased" },
      { label: "Qualified leads", value: "Consistent pipeline" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431936424001-447bddcccff0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Acre Folio",
    industry: "Real Estate Consultancy",
    location: "Delhi-NCR, India",
    services: ["Logo Design & Brand Identity", "Social Media Management", "Creative Design & Video Production", "Google Ads & Meta Ads Management", "On-site Photoshoots & Videoshoots"],
    timeline: [
      {
        phase: "Brand foundation",
        detail: "Created a clean, premium logo with minimal design for strong visual recall. Established a colour palette communicating confidence & reliability. Built consistent brand identity across all platforms.",
      },
      {
        phase: "Content & creative ecosystem",
        detail: "Set up monthly content calendars with high-quality property content. Produced all creative assets: property showcases, project highlights, USP graphics, festive content, and premium layouts. Created short-form reels, walkthrough videos, and project explainers. Conducted on-site shoots for properties, office spaces, and team profiling.",
      },
      {
        phase: "Performance marketing",
        detail: "Launched high-performance Google PPC and Meta Lead Ads campaigns with strong targeting for active property buyers. Created conversion-optimized ad creatives and landing pages aligned with buyer intent. Implemented continuous monitoring and strategy optimization to generate qualified leads across Delhi-NCR.",
      },
    ],
    accent: { from: "#f1f5f9", via: "#ecfccb", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify transformed us from an offline brokerage to a premium digital real-estate identity. Their end-to-end approach helped us build the brand we always envisioned.",
      author: "Acre Folio Team",
      role: "Real Estate Consultancy",
    },
  },
  {
    slug: "primevital",
    title: "PrimeVital",
    tags: ["Healthcare", "Diagnostics", "Branding", "Social Media"],
    summary:
      "PrimeVital is a diagnostics brand built on accuracy, advanced infrastructure, and medical expertise. EDigitify manages their social media presence, website, creative communication, videos, and offline branding. Our work focuses on building trust, credibility, and a patient-first digital identity that reflects the true standard of their healthcare services.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    problem:
      "PrimeVital had everything a diagnostics brand should stand on—expertise, infrastructure, scientific accuracy, and modern facilities. But their digital reflection wasn't doing justice to their real-world excellence. In healthcare, trust isn't claimed—it's earned through clarity, consistency, and the promise of safety. Yet PrimeVital's online presence lacked structure in communication, visual and brand consistency, reliability cues, professional depth, and a sense of patient-focused reassurance. They didn't want marketing—they wanted people to feel assured the moment they saw the name PrimeVital.",
    solution:
      "EDigitify stepped in to shape a digital identity that conveys care, confidence, and clinical trust. We built a clean, trustworthy, medically accurate social media presence focusing on diagnostic education, patient care communication, service highlights, trust-building content, and health awareness posts with a professional, calming, credibility-driven tone. We created a website that communicates transparency and clinical accuracy, makes services easy to understand, reflects modern healthcare standards, builds patient confidence through clean UI/UX, and aligns visuals with medical quality cues. We designed visual communication combining medical accuracy with soft, reassuring tones, modern minimal layouts, informative explainer videos, and service highlights showcasing lab processes. For offline branding, we created lab banners, standees, informational posters, print advertising templates, and branding materials for clinic environments to maintain consistency across touchpoints.",
    outcomes: [
      "Built a credible digital footprint that reflects clinical excellence",
      "Strengthened patient trust through professional, reassuring communication",
      "Communicated professionalism clearly across all digital platforms",
      "Maintained consistency across online and offline brand touchpoints",
      "Positioned PrimeVital as a reliable diagnostics partner with a patient-first approach",
    ],
    metrics: [
      { label: "Patient trust & engagement", value: "Significantly improved" },
      { label: "Brand credibility", value: "Strong recognition" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "PrimeVital",
    industry: "Healthcare & Diagnostics",
    location: "India",
    services: ["Social Media Management", "Website Development", "Creative Design & Video Production", "Offline Branding", "Healthcare Content Strategy"],
    timeline: [
      {
        phase: "Brand foundation & website",
        detail: "Created a website that communicates transparency and clinical accuracy with clean UI/UX. Built visual identity reflecting modern healthcare standards with medical quality cues. Established digital foundation that builds patient confidence.",
      },
      {
        phase: "Social media & content ecosystem",
        detail: "Built clean, trustworthy social media presence with medically accurate content. Focused on diagnostic education, patient care communication, service highlights, and health awareness. Maintained professional, calming, credibility-driven tone throughout.",
      },
      {
        phase: "Creative assets & offline branding",
        detail: "Designed visual communication combining medical accuracy with soft, reassuring tones and modern minimal layouts. Produced informative explainer videos and service highlights. Created offline branding materials including lab banners, standees, informational posters, and clinic environment branding to maintain unified identity across digital and physical spaces.",
      },
    ],
    accent: { from: "#dbeafe", via: "#e0f2fe", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify helped us build a digital identity that patients can trust. Our brand now reflects what we truly are—precise, trustworthy, and patient-first.",
      author: "PrimeVital Team",
      role: "Healthcare & Diagnostics",
    },
  },
  {
    slug: "amber-glass-india",
    title: "Amber Glass India",
    tags: ["Manufacturing", "B2B", "Branding", "Web Design"],
    summary:
      "Amber Glass India is a leading industrial and architectural glass manufacturer supplying premium glass solutions across real estate, commercial, and engineering environments. At EDigitify, we redesigned their website, built a modern logo identity, and executed a high-quality ad shoot to bring their craftsmanship and engineering precision to the forefront.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    problem:
      "Amber Glass India had an impressive portfolio—toughened glass, architectural solutions, industrial-grade products, and large-scale project capabilities. They were respected in their industry, known for quality and reliability. Yet, their digital presence did not show it. Their website felt outdated, their story wasn't clear, visuals didn't match the scale of their work, and as a B2B brand, their expertise remained hidden. They looked like a strong manufacturing company offline but online, they were nearly invisible.",
    solution:
      "We saw a brand capable of looking global—modern, engineered, precise. We built a clean, industrial, premium website that showcases their product range with clarity, highlights engineering capabilities, uses bold architectural layouts, balances visuals with technical information, and positions them as a modern manufacturing brand. The new design feels global, professional, structured, and trustworthy. We designed a refined, modern logo representing strength, precision, industrial engineering, and architectural aesthetics—minimal yet powerful, fitting for a brand that works with glass, metal, and construction. To truly reflect their capability, we executed a full-scale visual shoot covering factory environment, manufacturing processes, glass finishing and cutting, installation shots, product textures and clarity, and architectural glass applications. These visuals became the backbone of their website and marketing material, showcasing their craftsmanship in a premium, international way.",
    outcomes: [
      "Built a premium industrial brand identity that reflects engineering excellence",
      "Strengthened credibility with architects, builders, and B2B clients",
      "Presented their expertise with clarity and modern design",
      "Improved online visibility and digital presence significantly",
      "Positioned Amber Glass India to stand out in the competitive B2B glass manufacturing space",
    ],
    metrics: [
      { label: "Brand perception", value: "Global & modern" },
      { label: "Digital credibility", value: "Significantly enhanced" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "Amber Glass India",
    industry: "Industrial & Architectural Glass Manufacturing",
    location: "India",
    services: ["Website Design", "Logo Design & Brand Identity", "Product Photography & AD Shoot", "B2B Brand Positioning"],
    timeline: [
      {
        phase: "Website design & development",
        detail:
          "Built a clean, industrial, premium website showcasing their product range with clarity. Highlighted engineering capabilities using bold, architectural layouts. Balanced visuals with technical information to position them as a modern manufacturing brand. The design feels global, professional, structured, and trustworthy.",
      },
      {
        phase: "Logo design & brand identity",
        detail:
          "Designed a refined, modern logo representing strength, precision, industrial engineering, and architectural aesthetics. Created a minimal yet powerful identity fitting for a brand that works with glass, metal, and construction—building a cohesive visual language across all touchpoints.",
      },
      {
        phase: "AD shoot & visual storytelling",
        detail:
          "Executed a full-scale visual shoot covering factory environment, manufacturing processes, glass finishing and cutting, installation shots, product textures and clarity, and architectural glass applications. These visuals became the backbone of their website and marketing material, showcasing their craftsmanship in a premium, international way.",
      },
    ],
    accent: { from: "#f0f9ff", via: "#e0e7ff", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify transformed our digital presence to match our engineering precision and architectural excellence. We now look like the global brand we always were.",
      author: "Amber Glass India Team",
      role: "Industrial & Architectural Glass Manufacturing",
    },
  },
  {
    slug: "birdbrick-properties",
    title: "BirdBrick Properties",
    tags: ["Real Estate", "Branding", "Social Media", "Web Design"],
    summary:
      "BirdBrick Properties entered Gurgaon's dynamic real estate market with strong fundamentals—deep market understanding, investor-first advisory, and a modern approach to property consulting. But the brand's digital presence did not reflect its expertise or ambition. Their identity was scattered, visuals lacked consistency, and the brand story wasn't aligned with the expectations of NCR's discerning homebuyers and investors. They needed more than marketing—they needed a brand transformation that communicated trust, clarity, and long-term value from the very first interaction.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    problem:
      "BirdBrick Properties approached EDigitify at a crucial stage of their growth. They were serving a strong client base offline, but their digital presence was limited—fragmented visuals, outdated layouts, and no compelling story to reflect their industry expertise. In a space crowded with aggressive marketing, BirdBrick needed a digital presence that spoke a different language: trust, clarity, and professionalism. They didn't just want marketing—they wanted a brand identity that matched their reputation.",
    solution:
      "We built BirdBrick Properties' digital foundation with a focus on long-term brand credibility. We created a clean, modern, investor-friendly website that reflects reliability and simplifies property browsing. We designed a fresh, professional logo identity that communicates sophistication and trust at first glance. We managed consistent, value-driven social media content that positions BirdBrick as a knowledgeable and dependable real estate partner. We ran performance-focused Meta ad campaigns to generate high-intent leads across Gurgaon's real estate market. We conducted high-quality photoshoots and video production to showcase properties, team culture, and brand essence. We crafted engaging visual content including creatives, reels, and brand videos to improve recall, build authority, and keep the brand active across all platforms.",
    outcomes: [
      "Created a unified visual identity across all digital platforms",
      "Built a professional website that establishes instant trust with potential clients",
      "Developed a strong social media footprint with consistent brand storytelling",
      "Launched performance-driven ads delivering qualified real estate leads",
      "Produced high-quality media assets for long-term marketing use",
    ],
    metrics: [
      { label: "Brand visibility", value: "Significantly increased" },
      { label: "Qualified leads", value: "Consistent high-intent pipeline" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    client: "BirdBrick Properties",
    industry: "Real Estate Consultancy",
    location: "Gurgaon, India",
    services: ["Website Design", "Logo Design", "Social Media Management", "Meta Ad Management", "Photoshoot & Video Production", "Creative Design & Brand Videos"],
    timeline: [
      {
        phase: "Brand foundation & digital identity",
        detail:
          "Created a clean, modern, investor-friendly website that reflects reliability and simplifies property browsing. Designed a fresh, professional logo identity that communicates sophistication and trust at first glance. Built a unified visual identity that matches BirdBrick's offline reputation.",
      },
      {
        phase: "Content ecosystem & social presence",
        detail:
          "Managed consistent, value-driven social media content that positions BirdBrick as a knowledgeable and dependable real estate partner. Crafted engaging visual content including creatives, reels, and brand videos to improve brand recall, build authority, and keep the brand active across all platforms.",
      },
      {
        phase: "Performance marketing & visual storytelling",
        detail:
          "Ran performance-focused Meta ad campaigns to generate high-intent leads across Gurgaon's real estate market. Conducted high-quality photoshoots and video production to showcase properties, team culture, and brand essence—creating premium media assets for long-term use.",
      },
    ],
    accent: { from: "#fef3c7", via: "#fef9e7", to: "#ffffff" },
    testimonial: {
      quote: "EDigitify transformed our scattered digital presence into a unified brand identity that truly reflects our values and expertise. We now stand out in Gurgaon's competitive real estate market.",
      author: "BirdBrick Properties Team",
      role: "Real Estate Consultancy",
    },
  },
];

export default work;
