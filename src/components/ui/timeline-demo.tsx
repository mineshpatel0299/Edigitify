import Image from "next/image";
import { MonitorSmartphone, Palette, Rocket } from "lucide-react";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: "Launch & Build",
      content: (
        <div className="space-y-6">
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Rapid prototyping sprints, responsive UI systems, and component libraries delivered to engineering.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["photo-1498050108023-c5249f4df085", "photo-1529107386315-e1a2ed48a620"].map((id) => (
              <Image
                key={id}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
                alt="product launch"
                width={500}
                height={500}
                className="h-24 w-full rounded-lg object-cover shadow-[0_16px_68px_rgba(47,48,55,0.15)] md:h-48"
              />
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200/60 bg-white/50 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <MonitorSmartphone className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-700 dark:text-neutral-300">Web systems</p>
          </div>
        </div>
      ),
    },
    {
      title: "Brand Layer",
      content: (
        <div className="space-y-6">
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Elevated visual language, campaign art direction, and packaging refresh rolled out across regions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["photo-1487412720507-e7ab37603c6f", "photo-1471341971476-ae15ff5dd4ea"].map((id) => (
              <Image
                key={id}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
                alt="branding"
                width={500}
                height={500}
                className="h-24 w-full rounded-lg object-cover shadow-[0_16px_68px_rgba(47,48,55,0.15)] md:h-48"
              />
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200/60 bg-white/50 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <Palette className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-700 dark:text-neutral-300">Identity</p>
          </div>
        </div>
      ),
    },
    {
      title: "Scale Ops",
      content: (
        <div className="space-y-6">
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Multi-market paid media, lifecycle orchestration and partner enablement ready for handoff.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["photo-1556740749-887f6717d7e4", "photo-1454165205744-3b78555e5572"].map((id) => (
              <Image
                key={id}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
                alt="growth"
                width={500}
                height={500}
                className="h-24 w-full rounded-lg object-cover shadow-[0_16px_68px_rgba(47,48,55,0.15)] md:h-48"
              />
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200/60 bg-white/50 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <Rocket className="h-4 w-4 text-neutral-800 dark:text-neutral-200" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-700 dark:text-neutral-300">Scale</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline title="Lifecycle at a glance" description="Follow the arc of a launch from design systems to growth enablement." data={data} />
    </div>
  );
}
