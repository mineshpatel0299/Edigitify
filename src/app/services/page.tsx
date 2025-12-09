"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const serviceCards = [
  {
    title: "Website Development",
    badge: "Experience",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
    description: "Full-stack web squads shipping ultra-fast, brand-safe experiences with CRO rituals baked into every sprint.",
    details: [
      "Component libraries + CMS handoffs that marketing can edit without dev cycles",
      "Speed + SEO performance budgets enforced before handover",
      "Conversion research loops using heatmaps, GA4 and on-site polling",
      "Launch playbooks covering QA, automation triggers and analytics",
    ],
    outcome: "Sites that feel premium, convert confidently, and load in under two seconds.",
    accent: "from-sky-500 via-blue-500 to-indigo-600",
    overlay: "from-transparent via-slate-900/20 to-slate-950/90",
  },
  {
    title: "Branding Systems",
    badge: "Identity",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    description: "Naming, visual language, and narrative systems that translate beautifully from decks to digital touchpoints.",
    details: [
      "Brand strategy sprints uncovering promise, proof and personality",
      "Modular design languages ready for Figma, Canva, Webflow or code",
      "Tone-of-voice manuals, content pillars, and creator briefs",
      "Asset vaults + governance so teams launch consistently",
    ],
    outcome: "A repeatable brand kit your entire company can execute against.",
    accent: "from-amber-500 via-orange-500 to-rose-500",
    overlay: "from-transparent via-orange-900/20 to-slate-950/90",
  },
  {
    title: "Advertisement Ops",
    badge: "Media",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=900&q=80",
    description: "Campaign desks that run Meta, Search, YouTube, programmatic and affiliates with live pacing guardrails.",
    details: [
      "Scenario planners aligning finance forecasts with media investments",
      "Channel + creative matrices refreshed weekly to prevent fatigue",
      "Automation for pacing, alerts and approvals inside shared dashboards",
      "Executive-ready reporting proving revenue impact, not vanity metrics",
    ],
    outcome: "Media machines that feel both creative and financially responsible.",
    accent: "from-teal-500 via-cyan-500 to-blue-500",
    overlay: "from-transparent via-cyan-900/20 to-slate-950/90",
  },
  {
    title: "Graphic Design",
    badge: "Content",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    description: "Design pods outputting social kits, pitch decks, sales enablement, and merch without sacrificing craft.",
    details: [
      "Creative ops rhythm with request portals and SLAs everyone can see",
      "Story-driven campaigns built in Figma + motion ready formats",
      "Always-on asset QA plus accessibility checks",
      "Version-controlled libraries synced to Notion or DAM tools",
    ],
    outcome: "Brand visuals scale without devolving into generic templates.",
    accent: "from-fuchsia-500 via-purple-500 to-blue-600",
    overlay: "from-transparent via-purple-900/20 to-slate-950/90",
  },
  {
    title: "Paid Media",
    badge: "Acquisition",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description: "Growth strategists, analysts and buyers working from one operating board with 24/7 experimentation.",
    details: [
      "Offer + messaging test ladders prioritized by impact vs effort",
      "Creative feedback loops so editors know which hooks win",
      "Incrementality + MMM-ready measurement frameworks",
      "Resource planning to reallocate spend in hours, not weeks",
    ],
    outcome: "Acquisition that compounds because learning never pauses.",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    overlay: "from-transparent via-emerald-900/20 to-slate-950/90",
  },
  {
    title: "Photoshoot Production",
    badge: "Studio",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Producers, art directors and editors crafting shoots that feed performance creative for months.",
    details: [
      "Shot lists tied to funnel stages and ad specs",
      "On-set automation for metadata, talent releases and asset tagging",
      "Hybrid crews for product, lifestyle and motion capture",
      "Delivery kits optimized for ads, ecommerce and PR drops",
    ],
    outcome: "One production fuels dozens of campaigns with zero guesswork.",
    accent: "from-rose-500 via-orange-400 to-yellow-400",
    overlay: "from-transparent via-rose-900/20 to-slate-950/90",
  },
  {
    title: "Campaign Architecture",
    badge: "Strategy",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    description: "End-to-end launches connecting media, lifecycle, product, and CX teams around one drumbeat.",
    details: [
      "Narrative frameworks with hero, proof and community beats",
      "Channel rollout maps showing who ships what and when",
      "War-room dashboards monitoring health, spend and sentiment",
      "Retro playbooks to capture learnings for the next release",
    ],
    outcome: "Campaigns that feel cinematic yet measurable to the board.",
    accent: "from-indigo-500 via-blue-600 to-slate-700",
    overlay: "from-transparent via-indigo-900/20 to-slate-950/90",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50 to-slate-50 px-6 py-28 text-slate-900">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-400/30 blur-[120px]" />
        <div className="absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-purple-400/20 blur-[160px]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.3) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 text-center">
        <motion.span
          {...fadeUp}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-700"
        >
          Services
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          Digital marketing services built to embed.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl"
        >
          From performance strategy and brand systems to media buying, lifecycle, and production, our pods plug into your team so campaigns ship faster with measurable impact.
        </motion.p>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Book a session →
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 rounded-full border border-slate-300/60 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:-translate-y-0.5"
          >
            View case studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Service cards are now showcased through the timeline section below.

function ServicesTimelineSection() {
  const timelineData = serviceCards.map((service) => ({
    title: service.title,
    content: (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
          <div className="absolute bottom-3 left-3 inline-flex rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
            {service.badge}
          </div>
        </div>
        <p className="text-sm text-slate-200">{service.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-100">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
          {service.outcome}
        </div>
      </div>
    ),
  }));

  return (
    <section className="bg-slate-950 px-6 pb-24">
      <Timeline tone="dark" className="bg-transparent md:px-0" data={timelineData} />
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 text-white">
      <ServicesHero />
      <ServicesTimelineSection />
    </div>
  );
}
