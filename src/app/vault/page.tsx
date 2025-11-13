import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

const resources = [
  {
    title: "Budget Multiplier Sheet",
    detail: "A Google Sheets model to pace Meta, Google, and Programmatic based on daily conversion signals.",
    link: "mailto:hello@edigitify.com",
  },
  {
    title: "WhatsApp Journeys Playbook",
    detail: "Message templates, routing logic, and KPI definitions for service, sales, and care teams.",
    link: "mailto:hello@edigitify.com",
  },
  {
    title: "Revenue Pulse Dashboard",
    detail: "Looker Studio starter that unifies campaign, CRM, and finance data for weekly leadership reviews.",
    link: "https://github.com/edigitify",
  },
];

export const metadata: Metadata = {
  title: "Vault",
  description: "Tools and templates from Edigitify's integrated marketing programs.",
};

export default function VaultPage() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-4">
        <p className="section-heading">Vault</p>
        <h1 className="text-5xl font-semibold text-slate-900">Playbooks fueling our clients' marketing operations.</h1>
        <p className="text-slate-600">
          Download the frameworks we use to plan spends, automate follow-ups, and align media with revenue.
        </p>
      </header>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <Reveal key={resource.title} delay={index * 0.1}>
            <a
              href={resource.link}
              className="block rounded-[32px] border border-slate-200 bg-white p-6 transition hover:border-slate-400 shadow-sm shadow-slate-200/60"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Resource</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{resource.title}</h2>
              <p className="mt-2 text-slate-600">{resource.detail}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
