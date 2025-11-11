import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Edigitify — a distributed digital product agency building brave futures.",
};

const principles = [
  {
    title: "Strategy is a team sport",
    body: "Our strategists, researchers, and technologists sit inside the same war room so every insight ships with an execution path.",
  },
  {
    title: "Motion tells the story",
    body: "Deliberate motion design increases comprehension, trust, and emotional connection. Every surface ships with purposeful movement.",
  },
  {
    title: "AI with accountability",
    body: "We treat AI as a product partner, not a replacement. Human-in-the-loop guardrails come standard in every build.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-20">
      <Reveal className="space-y-4">
        <p className="section-heading">About</p>
        <h1 className="text-5xl font-semibold text-white">Edigitify is a strategic digital product agency for ambitious teams.</h1>
        <p className="text-white/70">
          Headquartered in Nashville with satellite studios in New York, London, Katowice, Bratislava, Plovdiv, and Dubai, we help global organizations imagine, design, and ship products that feel inevitable.
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
          45 strategists, designers, engineers, technologists, and producers operating as one remote-first pod. We prefer long-term embedded partnerships, shoulder-to-shoulder with client leaders.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Avg. partnership: 34 months", "Studios across 4 timezones", "50% of work touches AI"].map((stat) => (
            <div key={stat} className="rounded-2xl border border-white/10 p-4 text-sm text-white/70">
              {stat}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
