import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/marquee";
import { WorkCard } from "@/components/work-card";
import { WorkScrollCard } from "@/components/work-scroll-card";
import { CountUpNumber } from "@/components/ui/count-up-number";
import { clientsData, workData } from "@/lib/content";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { servicePodItems } from "@/data/service-pods";
import { TestimonialColumns } from "@/components/testimonial-columns";

const featuredServicePods = servicePodItems.slice(0, 2);

const studioStats = [
  {
    value: 6,
    suffix: "+",
    label: "Years shipping",
    helper: "Independent studio since 2018.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Brands partnered",
    helper: "Retail, lifestyle, SaaS, hospitality.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="pb-32">
      <Hero />

      <div className="mx-auto flex w-full max-w-8xl flex-col gap-32 pt-20 pb-8 px-4 sm:px-6 lg:px-12">
        <section className="rounded-[40px] border border-slate-200/80 bg-white/80 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_50px_120px_-80px_rgba(15,23,42,0.6)]">
          <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Partners</p>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Lean teams we build with</h2>
                <p className="text-sm text-slate-500">A calm roster across India, Dubai & remote hubs.</p>
              </div>
              <span className="text-sm font-medium text-slate-500">Global · Remote</span>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/60 px-4 py-2">
              <LogoMarquee clients={clientsData} />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {studioStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">{stat.label}</p>
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    delay={index * 0.1}
                    className="mt-4 block text-4xl font-semibold text-slate-900"
                  />
                  <p className="mt-2 text-sm text-slate-500">{stat.helper}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        <section className="rounded-[40px] border border-slate-200/80 bg-white/70 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_40px_100px_-80px_rgba(15,23,42,0.6)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Selected work</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Quiet, focused shippables.</h2>
              <p className="text-sm text-slate-500">Two highlights from the year.</p>
            </div>
            <Link href="/work" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 underline-offset-4 hover:text-slate-600">
              All projects ↗
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {workData.slice(0, 2).map((item, index) => (
              <WorkCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-slate-200/80 bg-white/60 px-6 py-10 sm:px-10 sm:py-12 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.5)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Ways of working</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Container scroll pods.</h2>
              <p className="max-w-xl text-sm text-slate-500">
                The scroll container reveals each pod&rsquo;s stack, deliverables, and live signals without leaving the page.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Scroll softly ↓</span>
          </div>
          <div className="mt-12 space-y-12">
            {featuredServicePods.map((item, index) => (
              <WorkScrollCard key={item.slug} item={item} priority={index === 0} />
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-slate-200/80 bg-white/70 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_40px_100px_-70px_rgba(15,23,42,0.55)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Testimonials</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Signals from the teams we support.</h2>
              <p className="max-w-xl text-sm text-slate-500">Opposing scroll columns keep their stories in motion.</p>
            </div>
        
          </div>
          <div className="mt-10">
            <TestimonialColumns />
          </div>
        </section>

        <section className="rounded-[40px] border border-slate-200/80 bg-white/70 px-8 py-12 sm:px-12 sm:py-14 shadow-[0_40px_90px_-70px_rgba(15,23,42,0.55)]">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Studio</p>
              <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Small, senior, on-call.</h3>
              <p className="text-sm text-slate-500">
                Pods stay under eight people so calls stay calm and decisions move fast. No layers, just craft.
              </p>
              <Link
                href="/about"
                className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 underline-offset-6 hover:text-slate-600"
              >
                Meet the team ↗
              </Link>
            </Reveal>
            <Reveal delay={0.1} className="grid gap-4">
              {["Product strategy", "Content systems"].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white/70 p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

       
      </div>
    </div>
  );
}
