import type { Metadata } from "next";
import { workData } from "@/lib/content";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Edigitify case studies across AI, strategy, UX, UI, and immersive product engagements.",
};

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-4">
        <p className="section-heading">Our Work</p>
        <h1 className="text-5xl font-semibold text-white">Programs built for impact.</h1>
        <p className="max-w-2xl text-white/70">
          A sampling of the platforms, brands, and ventures we co-built with our partners. Filter by capability to see how we choreograph teams around measurable outcomes.
        </p>
      </div>
      <WorkGrid items={workData} />
    </div>
  );
}
