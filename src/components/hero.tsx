"use client";

import { AnimatedText } from "./animated-text";

export function Hero() {
  return (
    <section className="relative -mt-12 flex min-h-screen flex-col justify-center pt-32 md:-mt-16 md:pt-40">
      <div className="mx-auto w-full max-w-4xl space-y-6 text-slate-900">
        <AnimatedText
          lines={["Driven By Results.", "Built For Brands."]}
          className="text-5xl font-normal uppercase tracking-wide md:text-7xl lg:text-[5.5rem]"
        />
        <p className="max-w-2xl text-base text-slate-600 md:text-lg">
          We concept, design, and deploy digital experiences that spark attention and keep it—without the clutter.
        </p>
      </div>
    </section>
  );
}
