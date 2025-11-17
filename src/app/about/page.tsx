import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { VisionMissionTabs } from "@/components/vision-mission-tabs";
import { TeamCarousel } from "@/components/team-carousel";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Edigitify operates as a digital-integrated marketing partner for modern brands.",
};

const storyHighlights = [
  {
    label: "Our STORY",
    title: "Crafting beyond brief",
    body: "We design lean pods that keep quality, design, and visualization sharp without the clutter.",
  },
  {
    label: "Careers & Community",
    title: "Grow with our crew",
    body: "Join a calm senior team that moves fast, shares credit, and keeps things human.",
  },
];

const impactSignals = [
  "Strategy, creative, media, and ops inside one pod.",
  "Daily reporting that keeps leadership clear and calm.",
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <Reveal className="grid gap-10 rounded-[40px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.55)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="section-heading">About Us</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">White-glove pods shipping calm, fully managed campaigns.</h1>
          <p className="text-base text-slate-600">
            We plug in like an internal team so every sprint stays focused, light on process, and heavy on craft.
          </p>
          <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            {impactSignals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                {signal}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
            >
              Plan a project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-500"
            >
              Explore services
            </Link>
          </div>
        </div>
        <div className="relative rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-[28px] shadow-lg shadow-slate-200/70">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Team aligning on creative and media strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 text-slate-900 shadow-md shadow-slate-900/10">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Our Team</p>
              <p className="mt-1 text-sm">White-glove pods blending strategy, design, media, and automation.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="grid gap-6 md:grid-cols-2">
        {storyHighlights.map((story) => (
          <div key={story.label} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70 transition duration-500 hover:-translate-y-1 hover:border-slate-300">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{story.label}</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">{story.title}</h2>
            <p className="mt-4 text-slate-600">{story.body}</p>
          </div>
        ))}
      </Reveal>

      

     
      <Reveal delay={0.25}>
        <VisionMissionTabs />
      </Reveal>
       <Reveal delay={0.2}>
        <TeamCarousel />
      </Reveal>


      <Reveal delay={0.3} className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-[0_35px_90px_-70px_rgba(15,23,42,0.65)]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Careers</p>
          <h3 className="text-3xl font-semibold">Build with us.</h3>
          <p className="text-base text-white/80">
            Take your craft to the next tier with pods that stay small, curious, and generous.
          </p>
          <p className="text-sm text-white/60">White-glove campaigns need calm people. If that sounds like you, let&rsquo;s talk.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-100"
          >
            Join the roster
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
