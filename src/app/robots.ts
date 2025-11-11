import type { MetadataRoute } from "next";

const URL = "https://edigitify-agency.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
