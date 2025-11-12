"use client";

import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import type { WorkItem } from "@/lib/content";

type WorkScrollCardProps = {
  item: WorkItem;
  priority?: boolean;
};

export function WorkScrollCard({ item, priority }: WorkScrollCardProps) {
  return (
    <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02]">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 text-center text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{item.tags.join(" • ")}</p>
            <h3 className="text-4xl font-semibold leading-tight md:text-5xl">{item.title}</h3>
            <p className="mx-auto max-w-2xl text-base text-white/70">{item.summary}</p>
          </div>
        }
      >
        <div className="grid h-full gap-4 rounded-2xl bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#1c1c1c] p-4 md:grid-cols-5">
          <article className="col-span-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3">
            <Link
              href={`/work/${item.slug}`}
              className="relative block h-[24rem] w-full overflow-hidden md:h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={priority}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Campaign Snapshot</p>
                <p className="text-sm text-white/70">{item.summary}</p>
              </div>
              <span className="sr-only">View {item.title} case study</span>
            </Link>
          </article>

          <div className="col-span-5 grid gap-4 md:col-span-2 md:grid-rows-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Impact Levers</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {item.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Live Signals</p>
              <div className="mt-4 grid gap-4 text-sm text-white">
                {item.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/work/${item.slug}`}
                className="mt-auto inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
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
