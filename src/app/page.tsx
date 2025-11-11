import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { AwardsList } from "@/components/awards-list";
import { InsightCard } from "@/components/insight-card";
import { WorldClockStrip } from "@/components/world-clock-strip";
import { clientsData, insightsData, workData } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <section className="space-y-6">
        <p className="section-heading">Selected Partnerships</p>
        <LogoMarquee clients={clientsData} />
      </section>

      <section className="space-y-8">
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
