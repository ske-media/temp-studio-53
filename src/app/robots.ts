import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const host = new URL(base).host;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/success", "/success/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.includes("localhost") ? undefined : host,
  };
}
