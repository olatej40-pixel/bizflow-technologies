import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/products",
    "/about",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${siteConfig.url}${page}`,

    lastModified: new Date(),

    changeFrequency:
      page === ""
        ? "weekly"
        : "monthly",

    priority:
      page === ""
        ? 1
        : page === "/services" ||
            page === "/products"
          ? 0.9
          : 0.8,
  }));
}