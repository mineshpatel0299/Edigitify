import type { MetadataRoute } from "next";
import { workData } from "@/lib/content";

const URL = "https://edigitify-agency.com";
const baseRoutes = ["", "/work", "/services", "/insights", "/about", "/vault"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = baseRoutes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const workRoutes = workData.map((work) => ({
    url: `${URL}/work/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...workRoutes];
}
