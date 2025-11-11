import Image from "next/image";
import Link from "next/link";
import { Client } from "@/lib/content";

export function LogoMarquee({ clients }: { clients: Client[] }) {
  return (
    <div className="marquee rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="marquee-track gap-10">
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
              className="h-12 w-auto object-contain grayscale hover:grayscale-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
