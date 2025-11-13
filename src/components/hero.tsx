"use client";

import { AnimatedText } from "./animated-text";
import { SplineScene } from "./ui/splite";

export function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-[104vh] flex-col justify-center overflow-hidden px-4 pt-32 md:-mt-32 md:px-8 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
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
      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1400px] gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="space-y-6 text-slate-900">
          <AnimatedText
            lines={["Driven By Results.", "Built For Brands."]}
            className="text-5xl font-normal uppercase tracking-wide leading-tight text-slate-900 md:text-7xl lg:text-[5.5rem]"
          />
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            We concept, design, and deploy digital experiences that spark attention and keep it—without the clutter. This year
            we're weaving 3D motion, AI copilots, and growth sprints into every engagement.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative aspect-[4/3] w-full overflow-visible sm:aspect-[3/2]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full origin-center scale-150 lg:scale-[1.65]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
