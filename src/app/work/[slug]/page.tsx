import type { Metadata } from "next";
import { notFound } from "next/navigation";
import workEntries from "@/data/work";
import type { WorkCaseStudy } from "@/data/work";
import { WorkDetailHero } from "@/components/work-detail-hero";
import { WorkDetailChallenge } from "@/components/work-detail-challenge";
import { WorkDetailTimeline } from "@/components/work-detail-timeline";
import { WorkDetailResults } from "@/components/work-detail-results";
import { WorkDetailGallery } from "@/components/work-detail-gallery";

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
    return { title: "Case Study - Edigitify" };
  }
  return {
    title: `${currentWork.title} - Case Study | Edigitify`,
    description: currentWork.summary,
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = findWork(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Screen Parallax */}
      <WorkDetailHero work={work} />

      {/* Challenge & Solution Section */}
      <WorkDetailChallenge work={work} />

      {/* Timeline/Approach Section - Dark Background */}
      <WorkDetailTimeline work={work} />

      {/* Results & Metrics Section */}
      <WorkDetailResults work={work} />

      {/* Gallery Section */}
      <WorkDetailGallery work={work} />
    </div>
  );
}
