import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import workEntries from "@/data/work";
import type { WorkCaseStudy } from "@/data/work";

interface WorkDetailPageProps {
  params: { slug: string };
}

const workItems = workEntries as WorkCaseStudy[];

function findWork(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: WorkDetailPageProps): Metadata {
  const currentWork = findWork(params.slug);
  if (!currentWork) {
    return { title: "Case Study" };
  }
  return {
    title: `${currentWork.title} Case Study`,
    description: currentWork.summary,
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = findWork(params.slug);

  if (!project) {
    notFound();
  }

  const work = project;

  const infoGrid = [
    { label: "Client", value: work.client },
    { label: "Industry", value: work.industry },
    { label: "Location", value: work.location },
  ];

  const heroGradient: CSSProperties = {
    backgroundImage: `radial-gradient(circle at top left, ${work.accent.from}, transparent 55%), radial-gradient(circle at top right, ${work.accent.via ?? work.accent.to}, transparent 60%), linear-gradient(135deg, ${work.accent.from}, ${work.accent.to})`,
  };

  return (
    <div className="space-y-14 pb-24">
      <section
        id="overview"
        className="relative overflow-hidden rounded-[48px] border border-white/40 p-[1px] shadow-[0_60px_120px_-60px_rgba(15,23,42,0.5)]"
        style={heroGradient}
      >
        <div className="relative rounded-[46px] bg-white/80 p-10 text-slate-900 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Case Study</p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">{work.title}</h1>
                <p className="text-lg text-slate-700">{work.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <dl className="grid gap-4 sm:grid-cols-3">
                {infoGrid.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/60 bg-white/80 p-4 text-sm shadow-sm">
                    <dt className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">{item.label}</dt>
                    <dd className="mt-1 text-base font-semibold text-slate-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="space-y-2">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Services</p>
                <div className="flex flex-wrap gap-3">
                  {work.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-slate-200 bg-white/90 px-4 py-1 text-sm text-slate-700 shadow-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="ring-card relative overflow-hidden rounded-[36px] border border-white/40 bg-white/40 shadow-2xl">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {work.metrics.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {work.metrics.slice(0, 2).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-3xl border border-white/50 bg-white/80 p-4 text-slate-900 shadow-sm shadow-white/60"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
                      {metric.context && <p className="text-sm text-slate-500">{metric.context}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-white/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        </div>
      </section>

      <section id="challenge" className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[36px] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100/40 p-8 shadow-inner">
          <p className="section-heading">Problem</p>
          <p className="mt-3 text-lg leading-relaxed text-slate-700">{work.problem}</p>
        </div>
        <div className="rounded-[36px] border border-slate-100 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-8 shadow-inner">
          <p className="section-heading">Solution</p>
          <p className="mt-3 text-lg leading-relaxed text-slate-700">{work.solution}</p>
        </div>
      </section>

      <section id="approach" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-900/10" />
          <div>
            <p className="section-heading">Approach</p>
            <p className="text-sm text-slate-500">How we sequenced the engagement end-to-end.</p>
          </div>
        </div>
        <div className="rounded-[40px] border border-slate-100 bg-white/90 p-8 shadow-lg shadow-slate-200/60">
          <div className="grid gap-6 md:grid-cols-3">
            {work.timeline.map((item, index) => (
              <div key={item.phase} className="rounded-[32px] border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-200/50">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">Phase {index + 1}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{item.phase}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="space-y-6">
        <p className="section-heading">Results</p>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {work.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[32px] border border-slate-100 bg-white p-6 text-slate-900 shadow-lg shadow-slate-200/60">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-4xl font-semibold">{metric.value}</p>
                  {metric.context && <p className="mt-2 text-sm text-slate-500">{metric.context}</p>}
                </div>
              ))}
            </div>
            <div className="rounded-[36px] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100/30 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Outcome highlights</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                {work.outcomes.map((outcome) => (
                  <li key={outcome} className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[36px] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-8 text-white shadow-2xl">
            {work.testimonial ? (
              <>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Client voice</p>
                <blockquote className="mt-4 text-2xl font-semibold leading-snug">“{work.testimonial.quote}”</blockquote>
                <div className="mt-6 text-sm text-white/80">
                  <p className="font-semibold">{work.testimonial.author}</p>
                  <p>{work.testimonial.role}</p>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Snapshot</p>
                <p className="text-lg text-white/80">
                  We designed the operating system so growth, creative, and revenue teams can observe the same signal in real time.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="gallery" className="space-y-4">
        <p className="section-heading">Gallery</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {work.gallery?.map((image) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm">
              <Image
                src={image}
                alt={`${work.title} frame`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
