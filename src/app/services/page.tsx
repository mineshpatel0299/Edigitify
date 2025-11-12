import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Paid Media Architecture",
    copy:
      "We distribute budgets across Meta, Google, YouTube, programmatic, and affiliates with pacing models that update every few hours.",
    bullets: ["Channel mix + forecasting", "Creative x audience matrices", "Measurement + MMM setup"],
  },
  {
    title: "Performance Creative Studio",
    copy:
      "Scripted story labs produce reels, films, statics, and UGC while maintaining brand codes and testing frameworks.",
    bullets: ["Campaign narrative systems", "UGC + influencer ops", "Landing + commerce experiences"],
  },
  {
    title: "Automation & CRM Ops",
    copy:
      "WhatsApp, email, and CRM journeys stitched into sales workflows so leads get context and teams keep clarity.",
    bullets: ["Lead routing & scoring", "Playbooks for HubSpot/Salesforce", "Service + support automation"],
  },
  {
    title: "Analytics & Advisory",
    copy:
      "We wire dashboards, revenue modeling, and C-suite rituals that align finance, marketing, and customer ops.",
    bullets: ["Attribution + incrementality", "Budget governance", "RevOps office hours"],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description: "Integrated media, creative, automation, and analytics services for ambitious marketing teams.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <p className="section-heading">Offerings</p>
        <h1 className="text-5xl font-semibold text-white">Full-stack marketing teams for every growth push.</h1>
        <p className="max-w-3xl text-white/70">
          Edigitify assembles pods that own strategy, execution, and reporting end to end. You get one squad that can brief talent, deploy media, talk to sales, and answer to the board.
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
