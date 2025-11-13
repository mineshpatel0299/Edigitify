"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[500px] w-full overflow-hidden  backdrop-blur-2xl">
      <Spotlight className="-top-40 left-0 opacity-80 md:-top-20 md:left-60" fill="#fff" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-emerald-400/10" aria-hidden />
      <div className="relative flex h-full flex-col gap-8 md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Interactive 3D</p>
          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Bring ideas to life
          </h1>
          <p className="mt-4 max-w-lg text-white/80">
            Drop immersive Spline scenes straight into your hero without the render tax. Perfect for showing product features in motion.
          </p>
        </div>
        <div className="relative flex flex-1">
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/20" aria-hidden />
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>
    </Card>
  );
}
