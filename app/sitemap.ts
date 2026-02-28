import type { MetadataRoute } from "next";
import poussettesData from "@/data/poussettes.json";

const BASE_URL = "https://meilleure-poussette.fr";

const categoryPages = [
  "/meilleure-poussette-compacte",
  "/meilleure-poussette-canne",
  "/meilleure-poussette-double",
  "/meilleure-poussette-tout-terrain",
  "/meilleure-poussette-cabine-avion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...categoryPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const productPages: MetadataRoute.Sitemap = poussettesData.map((p) => ({
    url: `${BASE_URL}/poussette/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
