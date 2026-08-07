import type { Performer } from "@/data/performers";

const CMS_API_URL = process.env.CMS_API_URL ?? "http://localhost:3000";

export interface CmsPerformer extends Omit<Performer, "tags" | "tagline"> {
  tags?: string[];
  bio?: string | null;
  tagline?: string | null;
  galleryImages?: string[];
  videos?: string[];
}

interface RawCmsPerformer {
  id: string;
  slug: string;
  name: string;
  bio: string | null;
  tagline: string | null;
  title: string | null;
  location: string | null;
  city: string | null;
  citySlug: string | null;
  stateSlug: string | null;
  hairColor: string | null;
  languages: string[];
  services: string[];
  tags: string[];
  image: string | null;
  galleryImages: string[];
  videos: string[];
  eventsCount: string | null;
  availableTonight: boolean;
  availableToday: boolean;
  rating: number;
  reviewsCount: number;
  isVerified: boolean;
  featured: boolean;
}

function normalize(p: RawCmsPerformer): CmsPerformer {
  return {
    id: p.slug,
    slug: p.slug,
    name: p.name,
    bio: p.bio,
    tagline: p.tagline,
    title: p.title ?? "",
    location: p.location ?? "",
    city: p.city ?? "",
    citySlug: p.citySlug ?? undefined,
    stateSlug: p.stateSlug ?? undefined,
    hairColor: p.hairColor ?? undefined,
    languages: p.languages,
    services: p.services,
    tags: p.tags,
    image: p.image ?? "",
    galleryImages: p.galleryImages,
    videos: p.videos,
    eventsCount: p.eventsCount ?? "",
    availableTonight: p.availableTonight,
    availableToday: p.availableToday,
    rating: p.rating,
    reviewsCount: p.reviewsCount,
    isVerified: p.isVerified,
    featured: p.featured,
  };
}

import { performers as staticPerformers } from "@/data/performers";

export async function getPublishedPerformers(): Promise<CmsPerformer[]> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/performers`, {
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 300, tags: ["cms"] },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = (await res.json()) as RawCmsPerformer[];
    return data.map(normalize);
  } catch {
    // Fallback to static performers if CMS is unavailable
    return staticPerformers.map(p => ({
      ...p,
      bio: null,
      tagline: p.tagline || null,
      videos: [],
      galleryImages: p.galleryImages || [],
      tags: p.tags as string[] | undefined,
    })) as CmsPerformer[];
  }
}

export async function getPerformerBySlugFromCms(slug: string): Promise<CmsPerformer | null> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/performers/${slug}`, {
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 300, tags: ["cms"] },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as RawCmsPerformer;
    return normalize(data);
  } catch {
    return null;
  }
}

export interface CmsSection {
  id: string;
  type: string;
  order: number;
  props: Record<string, string>;
}

export async function getPageSections(slug: string): Promise<CmsSection[]> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/pages/${slug}`, {
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 60, tags: ["cms"] },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { sections: CmsSection[] };
    return data.sections;
  } catch {
    return [];
  }
}

export function sectionProps<T extends Record<string, string>>(
  sections: CmsSection[],
  type: string,
  fallback: T,
): T & { sectionId: string | null } {
  const section = sections.find((s) => s.type === type);
  if (!section) return { ...fallback, sectionId: null };
  return { ...fallback, ...section.props, sectionId: section.id };
}
