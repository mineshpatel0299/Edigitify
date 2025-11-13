import type { Metadata } from "next";
import { workData } from "@/lib/content";
import { WorkGrid } from "@/components/work-grid";
import { WorkScrollShowcase } from "@/components/work-scroll-showcase";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { servicePodItems } from "@/data/service-pods";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Edigitify campaign systems across paid media, creative automation, CRM, and revenue ops.",
};

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-20">
     
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="section-heading">How We Work</p>
          <h2 className="text-4xl font-semibold text-slate-900">Lorem ipsum, dolor sit amet consectetur adipisicing..</h2>
          <p className="max-w-3xl text-slate-600">
            Every pod is a cross-functional unit—strategy, creative, automation, and analytics—so briefs move from insight to execution without handoffs.
          </p>
        </div>
        <div className="space-y-10">
          {servicePodItems.map((item, index) => (
            <WorkScrollCard key={item.slug} item={item} priority={index === 0} />
          ))}
        </div>
      </section>
      <WorkScrollShowcase items={workData} />
      <WorkGrid items={workData} />
    </div>
  );
}
