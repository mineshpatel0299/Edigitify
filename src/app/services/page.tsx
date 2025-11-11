import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Strategy & Research",
    copy:
      "North-star definition, customer development, and venture readiness sprints that clarify what to build and why.",
    bullets: ["Opportunity mapping", "Product vision decks", "Pilot roadmaps"],
  },
  {
    title: "Experience & Brand Design",
    copy:
      "Systems-level design that unites motion, spatial, and narrative craft under one modular design language.",
    bullets: ["Design systems", "Prototyping & motion", "Content choreography"],
  },
  {
    title: "Engineering & AI",
    copy:
      "Full-stack delivery teams shipping modern web, mobile, 3D, and machine learning products with rigor.",
    bullets: ["Application engineering", "MLOps & data", "Quality & reliability"],
  },
  {
    title: "Growth Operations",
    copy:
      "Embedded revenue enablement, experimentation, and lifecycle programs tied to business performance.",
    bullets: ["Experiment sprints", "Lifecycle automation", "Analytics enablement"],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description: "Strategy, design, engineering, and growth services tailored to venture-grade teams.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <p className="section-heading">Offerings</p>
        <h1 className="text-5xl font-semibold text-white">Full-stack teams for every journey stage.</h1>
        <p className="max-w-3xl text-white/70">
          Edigitify assembles custom pods that flex between venture creation, product transformation, and long-term platform stewardship. Every engagement blends strategic clarity with hands-on build energy.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08} className="rounded-[30px] border border-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Capability</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-white/70">{service.copy}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
