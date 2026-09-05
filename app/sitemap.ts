import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    {
      path: "/abogado-penalista-cdmx",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/defensa-penal-chimalhuacan",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/abogado-juicios-orales",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/asesoria-victimas-delitos",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return [
    ...staticPaths.map(({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
