import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { packageThemes } from "@/data/packages";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blogPosts";

const siteUrl = "https://velvetgirlentertainment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/girls`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/gallery`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/cities`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/book-now`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/join-team`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packageThemes.map((t) => ({
    url: `${siteUrl}/packages/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${siteUrl}/cities/${c.stateSlug}/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...packageRoutes,
    ...cityRoutes,
    ...blogRoutes,
  ];
}
