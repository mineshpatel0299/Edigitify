import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development - Edigitify",
  description: "Browse a curated collection of high-converting websites crafted by the Edigitify team.",
};

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
