import Image from "next/image";
import Link from "next/link";
import { Client } from "@/lib/content";

export function LogoMarquee({ clients }: { clients: Client[] }) {
  return (
    <div className="marquee relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 px-8 py-6 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.9)] backdrop-blur-xl">
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-slate-100" />
     
      <div className="relative marquee-track gap-12 py-2">
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
