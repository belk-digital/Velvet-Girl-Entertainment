import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { packageThemes } from "@/data/packages";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blogPosts";

const siteUrl = "https://velvetgirlentertainment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/girls`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/cities`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/book-now`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/join-team`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packageThemes.map((t) => ({
    url: `${siteUrl}/packages/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${siteUrl}/cities/${c.stateSlug}/${c.slug}`,
    lastModified: now,
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
