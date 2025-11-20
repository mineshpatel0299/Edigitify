"use client";

import Link from "next/link";
import { ArrowUpRight, Orbit, Sparkles, Waves } from "lucide-react";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

const heroHighlights = [
  {
    title: "Immersive Launch Films",
    description: "Cinematic scroll choreography paired with realtime direction sessions for your flagship drops.",
    icon: Sparkles,
  },
  {
    title: "Adaptive Campaign Systems",
    description: "CMS friendly blocks that inherit campaign art direction and stay editable by your team.",
    icon: Orbit,
  },
  {
    title: "Always-On Optimization",
    description: "Growth squads rotate in weekly to tune conversion, polish motion, and keep content fresh.",
    icon: Waves,
  },
] as const;

const heroStats = [
  { value: "4 - 6", label: "Week launch sprints" },
  { value: "12", label: "Markets activated" },
  { value: "24/7", label: "Studio pulse" },
] as const;

const heroMedia = {
  mediaSrc: "/hero.mp4",
  poster: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  background: "/dgbg.jpg",
  title: "Driven BY Results, Building For Brands",
  date: "EDIGITIFY 2024",
  scrollToExpand: "Scroll to enter the hero experience",
};

export function Hero() {
  return (
    <section className="relative left-1/2 -mt-24 w-screen max-w-none -translate-x-1/2 overflow-hidden md:-mt-32">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={heroMedia.mediaSrc}
        posterSrc={heroMedia.poster}
        bgImageSrc={heroMedia.background}
        title={heroMedia.title}
        date={heroMedia.date}
        scrollToExpand={heroMedia.scrollToExpand}
        textBlend
      >
        
      </ScrollExpandMedia>
    </section>
  );
}
