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
      <WorkScrollShowcase items={workData} />
      <WorkGrid items={workData} />
    </div>
  );
}
