import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { CountUpNumber } from "@/components/ui/count-up-number";
import { clientsData, workData } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { servicePodItems } from "@/data/service-pods";

const featuredServicePods = servicePodItems.slice(0, 2);

const studioStats = [
  {
    value: 20,
    suffix: "+",
    label: "Project Completed",
    helper: "From social media campaigns to full-brand makeovers, our expert team helps brands connect and convert across platforms.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    helper: "Trusted by 10+ Growing Brands Our clients love our responsiveness, creativity, and commitment to ROI-focused results.",
  },
  {
    value: 180,
    suffix: "+",
    label: "Creators on speed dial",
    helper: "Influencers, editors, engineers, and producers",
  },
] as const;

const capabilityHighlights = [
  {
    kicker: "Media · Growth",
    title: "Performance Lab",
    copy: "Always-on paid media, CRO, and analytics pods that keep CAC low and make every impression accountable.",
    items: ["Meta + Google ads", "Automation + dashboards", "Landing page CRO"],
  },
  {
    kicker: "Content · Community",
    title: "Social Studio",
    copy: "Editorial, production, and community ops under one squad so social calendars never miss a beat.",
    items: ["Reels + short-form", "Community playbooks", "Paid + organic sync"],
  },
  {
    kicker: "Brand · Product",
    title: "Experience Lab",
    copy: "Full-stack design and web development sprints that convert briefs into shipped experiences fast.",
    items: ["Web + e-commerce builds", "Design systems", "Growth-ready CMS"],
  },
] as const;

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 pt-16 px-4 sm:px-6 lg:px-8 xl:px-10">
        <section className="relative overflow-hidden rounded-[48px] border border-white/60 bg-gradient-to-br from-white/90 via-white/70 to-slate-100/80 p-10 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.7)]">
          <div
            className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(13,148,136,0.16),transparent_55%)]"
            aria-hidden
          />
          <div className="relative space-y-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-heading text-slate-500">Selected Partnerships</p>
                <p className="mt-2 text-sm text-slate-600/90">
                  Long-term retainers with ambitious teams across retail, hospitality, fintech, and lifestyle.
                </p>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">
                India · Dubai · Remote
              </span>
            </div>
            <LogoMarquee clients={clientsData} />
            <div className="grid gap-4 md:grid-cols-3">
              {studioStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 backdrop-blur-2xl transition hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-50px_rgba(15,23,42,0.9)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-sky-50/80" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{stat.label}</p>
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    delay={index * 0.15}
                    className="mt-4 block text-4xl font-semibold text-slate-900"
                  />
                  <p className="mt-2 text-sm text-slate-600">{stat.helper}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        <section className="relative overflow-hidden rounded-[48px] border border-white/60 bg-gradient-to-br from-white/80 via-white/65 to-slate-100/70 p-10 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.18),transparent_50%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.12),transparent_45%)]" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-heading">Recent Work</p>
              <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                Building the future with bold teams.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/30 px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-900 backdrop-blur-2xl transition hover:border-slate-500/70 hover:bg-white/60"
            >
              Explore all work
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="relative mt-10 grid gap-8 md:grid-cols-2">
            {workData.slice(0, 4).map((item, index) => (
              <WorkCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[48px] border border-white/60 bg-gradient-to-br from-white/85 via-white/60 to-slate-100/70 p-10 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.12),transparent_50%),radial-gradient(circle_at_85%_10%,rgba(125,211,252,0.18),transparent_55%)]" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-heading">How we work</p>
              <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                Pods that own web, social, search, creators, and design.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Integrated sprint teams layer strategy, production, and optimization so budgets stay focused on outcomes—not handovers.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/30 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-900 backdrop-blur-2xl transition hover:border-slate-500/70 hover:bg-white/60"
            >
              View more
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="relative mt-12 space-y-12">
            {featuredServicePods.map((item, index) => (
              <WorkScrollCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[48px] border border-white/60 bg-gradient-to-br from-white/85 via-white/60 to-slate-100/70 p-10 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_0%_25%,rgba(244,114,182,0.15),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.18),transparent_50%)]" />
          <div className="relative grid gap-8 md:grid-cols-2">
            <Reveal className="space-y-4">
              <p className="section-heading">Who we are</p>
              <h3 className="text-4xl font-semibold text-slate-900">Strategy, design, and technology inside one autonomous squad.</h3>
              <p className="text-base text-slate-600">
                We collapse disciplines into high-velocity pods that align research, design systems, AI, and engineering from day one. Every product move ladders up to measurable business outcomes.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-900 underline-offset-8 hover:text-slate-700"
              >
                Meet the team
                <span aria-hidden>↗</span>
              </Link>
            </Reveal>
            <Reveal delay={0.15} className="grid gap-4 md:grid-cols-2">
              {["Product Strategy", "Service Design", "AI Engineering", "Spatial & 3D"].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-slate-200/80 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-sky-100/70" />
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Capability</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

       
      </div>
    </div>
  );
}
