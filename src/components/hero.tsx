"use client";

import { AnimatedText } from "./animated-text";
import { ImageCarouselOrbit } from "./ui/ai-image-generator-hero";

const heroImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&fit=crop&q=60&w=900",
    alt: "Mountain landscape",
    rotation: -15,
  },
  {
    id: "2",
    src: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?auto=format&fit=crop&q=60&w=900",
    alt: "Abstract art",
    rotation: -8,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1524673360092-e07b7ae58845?auto=format&fit=crop&q=60&w=900",
    alt: "City skyline",
    rotation: 5,
  },
  {
    id: "4",
    src: "https://plus.unsplash.com/premium_photo-1680610653084-6e4886519caf?auto=format&fit=crop&q=60&w=900",
    alt: "Nature photography",
    rotation: 12,
  },
  {
    id: "5",
    src: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?auto=format&fit=crop&q=60&w=900",
    alt: "Digital art",
    rotation: -12,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1562575214-da9fcf59b907?auto=format&fit=crop&q=60&w=900",
    alt: "Tropical leaves",
    rotation: 8,
  },
  {
    id: "7",
    src: "https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?auto=format&fit=crop&q=60&w=900",
    alt: "Tropical leaves 2",
    rotation: 8,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1664448003794-2d446c53dcae?auto=format&fit=crop&q=60&w=900",
    alt: "Futuristic scene",
    rotation: 8,
  },
];

export function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-[95vh] w-full flex-col justify-center overflow-hidden pt-28 pb-12 md:-mt-32 md:pt-36 md:pb-16">
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.25),transparent_50%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.2),transparent_50%)] opacity-80" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.4) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent sm:hidden" aria-hidden />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div className="space-y-6 text-slate-900 max-sm:px-1">
            <AnimatedText
              lines={["Driven By Results.", "Built For Brands."]}
              className="text-4xl font-semibold uppercase leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[5rem]"
            />
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              We concept, design, and deploy digital experiences that spark attention and keep it—without the clutter. This year
              we&rsquo;re weaving 3D motion, AI copilots, and growth sprints into every engagement.
            </p>
          </div>
          <div className="flex justify-center max-sm:-mx-4">
            <div className="relative aspect-[5/4] w-full overflow-visible rounded-[40px] border border-white/15 bg-white/10 p-4 backdrop-blur max-sm:aspect-[4/3] max-sm:border-none max-sm:bg-transparent max-sm:p-0 sm:aspect-[3/2]">
              <ImageCarouselOrbit images={heroImages} className="h-full min-h-[320px] sm:min-h-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
