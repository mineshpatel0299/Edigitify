import type { Metadata } from "next";
import Link from "next/link";

import { websiteProjects } from "@/lib/website-projects";

export const metadata: Metadata = {
  title: "Website Development - Edigitify",
  description: "Browse a curated collection of high-converting websites crafted by the Edigitify team.",
};

export default function WorkWebsitesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Ambient gradient layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.25),_transparent_55%)] opacity-70" />
        <div className="absolute -left-10 top-10 h-80 w-80 rounded-full bg-rose-500/30 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-80 w-96 translate-x-1/3 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-amber-400/25 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-12 pt-28 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
          ✦ Website Development
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Every build engineered for
            <span className="block bg-gradient-to-r from-rose-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
              performance & polish
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            Explore the live platforms we launch across real estate, consumer goods, and healthcare. Each project blends
            editorial storytelling with seamless UX to keep people exploring longer.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {websiteProjects.map((project) => {
            const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            return (
              <Link
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 p-6 text-left text-white shadow-[0_25px_90px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-2 hover:border-white/25"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.palette} opacity-80`} aria-hidden />
                <div className="absolute inset-0 bg-white/5 mix-blend-soft-light" aria-hidden />
                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-amber-200" />
                    {project.badge}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                    <p className="mt-3 text-sm text-slate-100/90">{project.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-sm font-medium text-slate-100">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.35em] text-slate-200/70">Live URL</span>
                      <span className="text-lg">{domain}</span>
                    </div>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
