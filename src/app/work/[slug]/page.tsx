import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkBySlug, workData } from "@/lib/content";

interface WorkDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return workData.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }: WorkDetailPageProps): Metadata {
  const work = getWorkBySlug(params.slug);
  if (!work) {
    return { title: "Case Study" };
  }
  return {
    title: `${work.title} Case Study`,
    description: work.summary,
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "outcomes", label: "Outcomes" },
  { id: "gallery", label: "Gallery" },
];

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getWorkBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const work = project;

  return (
    <div className="space-y-12 pb-20">
      <div className="grid gap-8 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-3">
          <p className="section-heading">Case Study</p>
          <h1 className="text-5xl font-semibold text-slate-900">{work.title}</h1>
          <p className="text-slate-600">{work.summary}</p>
          <div className="flex flex-wrap gap-3">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <nav className="sticky top-32 space-y-3 self-start rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-500 shadow-sm shadow-slate-200/60">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="block rounded-full px-4 py-2 hover:bg-slate-100">
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
        <div className="relative aspect-[5/2] w-full">
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section id="overview" className="grid gap-6 md:grid-cols-2">
        {work.metrics?.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{metric.label}</p>
            <p className="text-4xl font-semibold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </section>

      <section id="problem" className="space-y-4">
        <p className="section-heading">Problem</p>
        <p className="text-xl text-slate-700">{work.problem}</p>
      </section>

      <section id="solution" className="space-y-4">
        <p className="section-heading">Solution</p>
        <p className="text-xl text-slate-700">{work.solution}</p>
      </section>

      <section id="outcomes" className="space-y-4">
        <p className="section-heading">Outcomes</p>
        <ul className="space-y-2 text-slate-700">
          {work.outcomes.map((outcome) => (
            <li key={outcome} className="rounded-2xl border border-slate-200 bg-white p-4">
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <section id="gallery" className="space-y-4">
        <p className="section-heading">Gallery</p>
        <div className="grid gap-4 md:grid-cols-2">
          {work.gallery?.map((image) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src={image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
