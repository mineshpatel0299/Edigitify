import type { Metadata } from "next";
import { AboutHeroBanner } from "@/components/about-hero-banner";
import { AboutStorySection } from "@/components/about-story-section";
import { AboutVisionMission } from "@/components/about-vision-mission";
import { AboutWhyChoose } from "@/components/about-why-choose";
import { AboutMetricsSection } from "@/components/about-metrics-section";
import { AboutTeamParallax } from "@/components/about-team-parallax";
import { AboutTestimonialsScroll } from "@/components/about-testimonials-scroll";

export const metadata: Metadata = {
  title: "About - Edigitify | Digital Marketing Excellence",
  description: "Discover how Edigitify operates as a white-glove digital marketing partner, delivering calm, fully managed campaigns through integrated pods of strategists, designers, and developers.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner - Full Screen with Parallax */}
      <AboutHeroBanner />

      {/* Story Section - Scroll Triggered Animations */}
      <AboutStorySection />

      {/* Why Choose Us - 3D Tilt Cards */}
      <AboutWhyChoose />

      {/* Metrics Section - Dark Background with Count-Up Animations */}
      <AboutMetricsSection />

      {/* Vision, Mission & Values - Interactive Tabs */}
      <AboutVisionMission />

      {/* Team Section - Parallax Cards with Hover Effects */}
      <AboutTeamParallax />

      {/* Client Testimonials - Infinite Scroll */}
      <AboutTestimonialsScroll />
    </div>
  );
}
