"use client";

import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import type { WorkScrollCardItem } from "@/lib/content";

type WorkScrollCardProps = {
  item: WorkScrollCardItem;
  priority?: boolean;
};

export function WorkScrollCard({ item, priority }: WorkScrollCardProps) {
  return (
    <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 text-center text-slate-900">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{item.tags.join(" • ")}</p>
            <h3 className="text-4xl font-semibold leading-tight md:text-5xl">{item.title}</h3>
            <p className="mx-auto max-w-2xl text-base text-slate-600">{item.summary}</p>
          </div>
        }
      >
        <div className="grid h-full gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 md:grid-cols-5">
          <article className="col-span-5 overflow-hidden rounded-2xl border border-slate-200 bg-white md:col-span-3">
            <Link
              href={`/work/${encodeURIComponent(item.slug)}`}
              className="relative block h-[24rem] w-full overflow-hidden rounded-2xl md:h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={priority}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/80">Campaign Snapshot</p>
                <p className="text-sm text-white/80">{item.summary}</p>
              </div>
              <span className="sr-only">View {item.title} case study</span>
            </Link>
          </article>

          <div className="col-span-5 grid gap-4 md:col-span-2 md:grid-rows-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Impact Levers</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {item.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-slate-900">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Live Signals</p>
              <div className="mt-4 grid gap-4 text-sm text-slate-900">
                {item.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/work/${encodeURIComponent(item.slug)}`}
                className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-500"
              >
                View Campaign Notes ↗
              </Link>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
