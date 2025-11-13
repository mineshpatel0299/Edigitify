import Image from "next/image";
import Link from "next/link";
import { Client } from "@/lib/content";

export function LogoMarquee({ clients }: { clients: Client[] }) {
  return (
    <div className="marquee relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_55%)]"
        aria-hidden
      />
      <div className="relative marquee-track gap-12">
        {[...clients, ...clients].map((client, index) => (
          <Link
            key={`${client.name}-${index}`}
            href={client.url}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-[160px] items-center justify-center opacity-60 transition hover:opacity-100"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={80}
              sizes="160px"
              className="h-12 w-auto object-contain grayscale transition duration-500 hover:grayscale-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
