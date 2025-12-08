import type { Metadata } from "next";
import Link from "next/link";

import { websiteProjects } from "@/lib/website-projects";

export const metadata: Metadata = {
  title: "Website Development - Edigitify",
  description: "Browse a curated collection of high-converting websites crafted by the Edigitify team.",
};

export default function WorkWebsitesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 opacity-40">
          <div className="pointer-events-none absolute -top-10 left-1/3 h-64 w-64 rounded-full bg-teal-200 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-200 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            ✦ Website Development
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Every build engineered for performance and polish
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Explore the live platforms we have launched across real estate, consumer goods, and healthcare. Each project blends storytelling with seamless UX.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {websiteProjects.map((project) => {
            const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            return (
              <Link
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.palette}`} aria-hidden />
                <div className="relative z-10 flex h-full flex-col gap-5 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-teal-300" />
                    {project.badge}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                    <p className="mt-3 text-sm text-slate-200">{project.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-sm font-medium">
                    <div className="flex flex-col text-slate-200">
                      <span className="text-[11px] uppercase tracking-widest text-slate-300">Live URL</span>
                      <span className="text-base text-white">{domain}</span>
                    </div>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
