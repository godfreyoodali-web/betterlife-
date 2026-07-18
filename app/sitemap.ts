import type { MetadataRoute } from "next";
import { site, categories } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "daily", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/disclosure`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${site.url}/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/${p.category}/${p.slug}`,
    lastModified: p.updatedDate ?? p.publishDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
