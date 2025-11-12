import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { AwardsList } from "@/components/awards-list";
import { InsightCard } from "@/components/insight-card";
import { WorldClockStrip } from "@/components/world-clock-strip";
import { clientsData, insightsData, workData, type WorkItem } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const servicePods = [
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
];

const howWeWorkScrollItems: WorkItem[] = servicePods.map((service, index) => ({
  slug: service.slug ?? `service-${index}`,
  title: service.title,
  tags: service.tags ?? ["How We Work"],
  summary: service.description,
  image: service.image,
  problem: service.description,
  solution: service.description,
  outcomes: service.bullets,
  metrics: service.metrics,
  gallery: [service.image],
}));

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <section className="space-y-6">
        <p className="section-heading">Selected Partnerships</p>
        <LogoMarquee clients={clientsData} />
      </section>

      {/* <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading">Recent Work</p>
            <h2 className="text-4xl font-semibold text-white">Building the future with bold teams</h2>
          </div>
          <Link
            href="/work"
            className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
          >
            Explore all work ↗
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {workData.slice(0, 6).map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </section> */}

      <section className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading">How We Work</p>
            <h2 className="text-4xl font-semibold text-white">Pods that own web, social, search, creators, and design.</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Integrated sprint teams layer strategy, production, and optimization so budgets stay focused on outcomes—not
              handovers.
            </p>
          </div>
          <Link
            href="mailto:info@edigitify.in?subject=Share%20a%20brief"
            className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
          >
            Share a brief ↗
          </Link>
        </div>
        <div className="space-y-12">
          {howWeWorkScrollItems.map((item, index) => (
            <WorkScrollCard key={item.slug} item={item} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[40px] border border-white/10 p-10 md:grid-cols-2">
        <Reveal className="space-y-4">
          <p className="section-heading">Who we are</p>
          <h3 className="text-4xl font-semibold text-white">Strategy, design, and technology inside one autonomous squad.</h3>
          <p className="text-base text-white/70">
            We collapse disciplines into high-velocity pods that align research, design systems, AI, and engineering from day one. Every product move ladders up to measurable business outcomes.
          </p>
          <Link href="/about" className="text-sm uppercase tracking-[0.3em] text-white/70 underline-offset-8 hover:text-white">
            Meet the team ↗
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="grid gap-4 md:grid-cols-2">
          {["Product Strategy", "Service Design", "AI Engineering", "Spatial & 3D"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Capability</p>
              <p className="mt-2 text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-heading">Recognition</p>
            <h2 className="text-3xl font-semibold text-white">Awards & Accolades</h2>
          </div>
        </div>
        <AwardsList />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="section-heading">Insights</p>
          <Link href="/insights" className="text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white">
            Browse all ↗
          </Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {insightsData.map((insight, index) => (
            <InsightCard key={insight.slug} insight={insight} index={index} />
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <p className="section-heading">Global CTA</p>
        <WorldClockStrip />
      </section>

      <section className="rounded-[32px] border border-white/10 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-heading">Newsletter</p>
            <h3 className="text-3xl font-semibold text-white">Signals from inside the Edigitify vault.</h3>
            <p className="text-sm text-white/60">Monthly dispatch on AI, experience design, and venture-scale operations.</p>
          </div>
          <form className="flex w-full flex-col gap-4 md:max-w-sm">
            <input
              type="email"
              placeholder="you@company.com"
              className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white focus:border-white"
              required
            />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
              Subscribe
            </button>
            <p className="text-xs text-white/40">By subscribing you agree to our privacy note.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
