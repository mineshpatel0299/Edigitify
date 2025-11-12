import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Edigitify operates as a digital-integrated marketing partner for modern brands.",
};

const principles = [
  {
    title: "We listen, then we launch",
    body: "Every mandate starts with interviews, data pulls, and alignment workshops so our media and creative investments mirror your business priorities.",
  },
  {
    title: "Budgets stay accountable",
    body: "Channels, creatives, and automation are governed by the same pacing and attribution model so stakeholders can see cause and effect in hours, not months.",
  },
  {
    title: "Partnerships over projects",
    body: "We embed with your teams, celebrate micro wins, and surface transparent retros so every sprint compounds value.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-20">
      <Reveal className="space-y-4">
        <p className="section-heading">About</p>
        <h1 className="text-5xl font-semibold text-white">We are Edigitify — a digital integrating marketing partner from Delhi NCR.</h1>
        <p className="text-white/70">
          Our teams plan and execute campaigns that move both hearts and dashboards. We manage budgets across Meta, Google,
          programmatic, and emerging platforms while scripting creative, automating CRM handoffs, and reporting inside the same workspace.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <div key={principle.title} className="rounded-[28px] border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Principle</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{principle.title}</h2>
            <p className="mt-2 text-sm text-white/70">{principle.body}</p>
          </div>
        ))}
      </Reveal>
      <Reveal delay={0.2} className="rounded-[32px] border border-white/10 p-10">
        <h3 className="text-3xl font-semibold text-white">Team snapshots</h3>
        <p className="mt-4 text-white/70">
          40+ media planners, creatives, analysts, and automation leads who believe performance and storytelling must operate together.
          We work hybrid across Delhi NCR with partners spanning healthcare, travel, real estate, retail, and B2B.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["$18M media governed in 2023", "Avg. engagement: 30+ months", "Response time: under 12 hours"].map((stat) => (
            <div key={stat} className="rounded-2xl border border-white/10 p-4 text-sm text-white/70">
              {stat}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
