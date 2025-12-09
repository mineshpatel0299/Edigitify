"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const serviceCards = [
  {
    title: "Website Development",
    badge: "Experience",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    description: "Product-grade engineering pods delivering high-performing marketing, commerce, and portal experiences.",
    details: [
      "Next.js + headless CMS builds so marketing teams can publish in minutes",
      "Reusable component libraries that sync design systems with production code",
      "API & automation layer tying together CRM, analytics, chat, and forms",
      "Pre-launch QA covering devices, accessibility, SEO, and localization",
    ],
    outcome: "A premium website that ships fast, scales globally, and stays editable without extra sprints.",
    accent: "from-sky-500 via-blue-500 to-indigo-600",
    overlay: "from-transparent via-slate-900/20 to-slate-950/90",
  },
  {
    title: "Branding Systems",
    badge: "Identity",
    image: "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?auto=format&fit=crop&w=1200&q=80",
    description: "Strategists and art directors crafting identities that move seamlessly from decks to live product screens.",
    details: [
      "Naming workshops, messaging ladders, and story pillars for every funnel stage",
      "Design languages with tokens, icon systems, and imagery direction",
      "Voice, tone, and content guidelines tailored for UX, marketing, and support teams",
      "Governance playbooks so distributed teams ship on-brand assets every time",
    ],
    outcome: "An identity toolkit that keeps every page, ad, and deck unmistakably yours.",
    accent: "from-amber-500 via-orange-500 to-rose-500",
    overlay: "from-transparent via-orange-900/20 to-slate-950/90",
  },
  {
    title: "Advertisement",
    badge: "Media",
    image: "https://images.unsplash.com/photo-1663124178667-28b3776d7c15?auto=format&fit=crop&w=1200&q=80",
    description: "Integrated ad desks connecting web pages, landing flows, and media buys under one experimentation plan.",
    details: [
      "Performance blueprints aligning budgets across Meta, Google, and programmatic channels",
      "Dynamic landing pages + funnels synced with ad audiences and creative hooks",
      "Real-time pacing, QA, and approval automations inside shared dashboards",
      "Executive-ready reporting tying spend to pipeline, ARR, and payback",
    ],
    outcome: "Media operations that stay creative while proving revenue impact every week.",
    accent: "from-teal-500 via-cyan-500 to-blue-500",
    overlay: "from-transparent via-cyan-900/20 to-slate-950/90",
  },
  {
    title: "Graphic Design",
    badge: "Content",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    description: "Design pods focused on the full website surface—UX flows, interactive modules, iconography, and motion-ready assets.",
    details: [
      "UX + UI explorations that translate research into page flows and states",
      "Component-level specs covering cards, pricing tables, and data visuals",
      "Icon, illustration, and photo direction designed for responsive breakpoints",
      "Lottie/micro-interaction briefs so developers know how modules should move",
    ],
    outcome: "A cohesive visual system that keeps every screen sharp, flexible, and ready for dev.",
    accent: "from-fuchsia-500 via-purple-500 to-blue-600",
    overlay: "from-transparent via-purple-900/20 to-slate-950/90",
  },
  {
    title: "Paid Media",
    badge: "Acquisition",
    image: "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?auto=format&fit=crop&w=1200&q=80",
    description: "Acquisition strategists coordinate media, creative, and CRO so every ad click lands on a high-performing web experience.",
    details: [
      "Testing ladders pairing offers, hooks, and templates to specific audiences",
      "Landing page and funnel optimizations fed by ads, heatmaps, and form analytics",
      "Cohort, incrementality, and MMM dashboards built for finance + leadership",
      "Always-on creative refresh process with briefs, feedback, and asset QA",
    ],
    outcome: "Media spends smarter because ads, landing experiences, and insights stay in lockstep.",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    overlay: "from-transparent via-emerald-900/20 to-slate-950/90",
  },
  {
    title: "Photoshoot",
    badge: "Studio",
    image: "https://images.unsplash.com/photo-1542992804-34f8f4cb193b?auto=format&fit=crop&w=1200&q=80",
    description: "Producers run shoots that generate modular photo and video libraries built for web templates and campaign automation.",
    details: [
      "Shot lists mapped to hero, proof, and utility placements across the site",
      "On-set metadata, DAM tagging, and release management for instant reuse",
      "Hybrid product + lifestyle crews capturing stills, loops, and UGC formats",
      "Delivery kits sized for responsive modules, PDPs, ads, and PR drops",
    ],
    outcome: "One production sprint fuels months of refreshed website visuals and omni-channel assets.",
    accent: "from-rose-500 via-orange-400 to-yellow-400",
    overlay: "from-transparent via-rose-900/20 to-slate-950/90",
  },
  {
    title: "Campaigns",
    badge: "Strategy",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    description: "Campaign architects choreograph launches so web, lifecycle, sales, and media teams publish in sync.",
    details: [
      "Narrative frameworks sequencing product stories, proof, and community moments",
      "Rollout maps covering page builds, content drops, email/SMS, and ad flights",
      "Launch command centers that watch web vitals, spend, and support queues",
      "Retro rituals capturing learnings, wins, and backlog updates for the next drop",
    ],
    outcome: "Launches feel cinematic to customers while revenue, ops, and leadership see clear impact.",
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
