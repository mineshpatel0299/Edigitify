"use client";

import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import type { WorkItem } from "@/lib/content";

type WorkScrollShowcaseProps = {
  items: WorkItem[];
};

export function WorkScrollShowcase({ items }: WorkScrollShowcaseProps) {
  const featuredSlug = "oceans-earth-realty";
  const heroIndex = items.findIndex((item) => item.slug === featuredSlug);
  const hero = heroIndex >= 0 ? items[heroIndex] : items[0];
  const rest = (heroIndex >= 0 ? items.filter((_, index) => index !== heroIndex) : items.slice(1)).slice(0, 2);

  if (!hero) return null;

  return (
    <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 text-pretty text-slate-900">
            <p className="section-heading text-slate-500">Campaign Control Room</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Growth programs built to stretch budgets, not teams.
            </h2>
            <p className="text-base text-slate-600">
              Every engagement pairs creative experimentation with revenue accountability so founders, CMOs, and sales
              leaders see the same source of truth.
            </p>
          </div>
        }
      >
        <div className="grid h-full gap-4 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 md:grid-cols-5">
          <Link
            href={`/work/${encodeURIComponent(hero.slug)}`}
            className="group relative col-span-5 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white md:col-span-3 md:h-full"
            aria-label={`View ${hero.title} case study`}
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">{hero.tags.join(" • ")}</p>
              <h3 className="text-3xl font-semibold">{hero.title}</h3>
              <p className="text-sm text-white/70">{hero.summary}</p>
            </div>
          </Link>

          <div className="col-span-5 grid gap-4 md:col-span-2 md:grid-rows-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Impact Levers</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {hero.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Live Signals</p>
              <div className="mt-4 grid gap-4 text-sm text-slate-900">
                {hero.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {rest.length > 0 && (
            <div className="col-span-5 grid gap-4 md:col-span-2 md:grid-rows-2">
              {rest.map((item) => (
                <article
                  key={item.slug}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 text-slate-900"
                >
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">
                      {item.tags.slice(0, 3).join(" • ")}
                    </p>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{item.summary}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </ContainerScroll>
    </div>
  );
}
