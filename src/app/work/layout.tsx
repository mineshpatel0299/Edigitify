import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Edigitify | Campaign Systems & Case Studies",
  description:
    "Explore Edigitify campaign systems across paid media, creative automation, CRM, and revenue ops. Real results from real partnerships.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
