import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/compatibilite",
    "/modeles",
    "/aides",
    "/histoire",
    "/conseiller",
    "/mentions-legales",
    "/confidentialite",
  ];
  return pages.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/compatibilite" ? 0.9 : 0.7,
  }));
}
