import type { Metadata } from "next";
import { insightsData } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Signals from the Edigitify team on media, creative, automation, and analytics.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-4">
        <p className="section-heading">Insights</p>
        <h1 className="text-5xl font-semibold text-white">Field notes from building full-funnel marketing engines.</h1>
        <p className="text-white/70">
          Quick reads, templates, and POVs on how we balance storytelling with performance for brands across industries.
        </p>
      </header>
      <div className="space-y-6">
        {insightsData.map((insight, index) => (
          <Reveal key={insight.slug} delay={index * 0.1}>
            <article id={insight.slug} className="rounded-[32px] border border-white/10 p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {insight.category}
                </span>
                <span className="text-white/40">Updated monthly</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">{insight.title}</h2>
              <p className="mt-2 text-white/70">{insight.dek}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
