"use client";

import Link from "next/link";

import { websiteProjects } from "@/lib/website-projects";

const badgeIcons: Record<string, string> = {
  "Web Platform": "🏢",
  "Ecommerce": "🛍️",
  "Healthcare": "⚕️",
  "B2B Services": "💼",
};

export default function WorkWebsitesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Enhanced ambient gradient layers with noise texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/30 via-white/50 to-indigo-100/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.2),_transparent_60%)]" />
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-300/40 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute right-0 top-1/4 h-96 w-[500px] translate-x-1/3 rounded-full bg-indigo-300/40 blur-[140px]" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-sky-300/40 blur-[130px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwwLDApIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-32 text-center">
        <div className="mb-8 w-full flex justify-start">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 shadow-lg shadow-slate-500/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-x-1"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-600">Back to Work</span>
          </Link>
        </div>

        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-200 bg-white/80 px-6 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-xl">
          <span className="text-sm">✦</span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">Website Development</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Every build engineered for
            <span className="mt-2 block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
              performance & polish
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Explore the live platforms we launch across real estate, consumer goods, and healthcare. Each project blends
            editorial storytelling with seamless UX to keep people exploring longer.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {websiteProjects.map((project) => {
            const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            const icon = badgeIcons[project.badge] || "🌐";

            return (
              <Link
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 p-8 text-left shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25),0_0_80px_rgba(99,102,241,0.15)]"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.palette} opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.15]`} />

                {/* Shine effect overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top section with icon and badge */}
                <div className="relative z-10 mb-6 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-indigo-100 text-3xl shadow-lg backdrop-blur-xl ring-1 ring-cyan-200/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-cyan-300/60">
                    {icon}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 shadow-md backdrop-blur-xl transition-all duration-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    {project.badge}
                  </div>
                </div>

                {/* Content section */}
                <div className="relative z-10 mb-6 flex-1 space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 transition-all duration-300 group-hover:text-cyan-700">
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                </div>

                {/* Footer section */}
                <div className="relative z-10 mt-auto">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        Visit Website
                      </span>
                      <span className="text-base font-bold text-slate-900 transition-all duration-300 group-hover:text-cyan-600">
                        {domain}
                      </span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 to-indigo-200 text-xl text-slate-900 backdrop-blur-xl ring-1 ring-cyan-300/40 transition-all duration-300 group-hover:scale-110 group-hover:from-cyan-300 group-hover:to-indigo-300 group-hover:ring-2 group-hover:ring-cyan-500/50">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glowing border effect on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
