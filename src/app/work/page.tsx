import type { Metadata } from "next";
import { workData } from "@/lib/content";
import { WorkGrid } from "@/components/work-grid";
import { WorkScrollShowcase } from "@/components/work-scroll-showcase";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Edigitify campaign systems across paid media, creative automation, CRM, and revenue ops.",
};

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-4">
        <p className="section-heading">Campaign Library</p>
        <h1 className="text-5xl font-semibold text-white">Marketing ops built to maximize every brief.</h1>
        <p className="max-w-2xl text-white/70">
          From healthcare to real estate to D2C, we own media strategy, creative production, automation, and analytics under one roof so your budgets stay purposeful.
        </p>
      </div>
      <WorkScrollShowcase items={workData} />
      <WorkGrid items={workData} />
    </div>
  );
}
