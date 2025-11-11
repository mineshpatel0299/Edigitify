import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

const resources = [
  {
    title: "AI Product Readiness Canvas",
    detail: "A one-page guide to evaluate where AI can responsibly augment your experience.",
    link: "mailto:hello@edigitify.com",
  },
  {
    title: "Motion Design Handbook",
    detail: "Principles, easing curves, and component recipes we use to choreograph every interaction.",
    link: "mailto:hello@edigitify.com",
  },
  {
    title: "Lenis + Framer Motion Starter",
    detail: "Code patterns for buttery scroll, route transitions, and reduced motion fallbacks.",
    link: "https://github.com/edigitify",
  },
];

export const metadata: Metadata = {
  title: "Vault",
  description: "Curated resources from Edigitify's R&D vault.",
};

export default function VaultPage() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-4">
        <p className="section-heading">Vault</p>
        <h1 className="text-5xl font-semibold text-white">Tools and templates we share with partners.</h1>
        <p className="text-white/70">
          These artifacts keep our teams aligned and moving quickly. Borrow them, remix them, or ping us for a walkthrough.
        </p>
      </header>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <Reveal key={resource.title} delay={index * 0.1}>
            <a
              href={resource.link}
              className="block rounded-[32px] border border-white/10 p-6 transition hover:border-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Resource</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{resource.title}</h2>
              <p className="mt-2 text-white/70">{resource.detail}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
