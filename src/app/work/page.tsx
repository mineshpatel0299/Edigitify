import type { Metadata } from "next";
import { workData } from "@/lib/content";
import { WorkHeroBanner } from "@/components/work-hero-banner";
import { WorkFeaturedShowcase } from "@/components/work-featured-showcase";
import { WorkGridEnhanced } from "@/components/work-grid-enhanced";
import { WorkImpactSection } from "@/components/work-impact-section";

export const metadata: Metadata = {
  title: "Work - Edigitify | Campaign Systems & Case Studies",
  description:
    "Explore Edigitify campaign systems across paid media, creative automation, CRM, and revenue ops. Real results from real partnerships.",
};

export default function WorkPage() {
  // Get featured work item (first one or specific slug)
  const featuredWork = workData.find((item) => item.slug === "oceans-earth-realty") || workData[0];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner with Filters */}
      <WorkHeroBanner />

      {/* Featured Case Study Showcase */}
      {featuredWork && <WorkFeaturedShowcase item={featuredWork} />}

      {/* Impact & Stats Section */}
      <WorkImpactSection />

      {/* Work Grid with All Projects */}
      <WorkGridEnhanced items={workData} />
    </div>
  );
}
