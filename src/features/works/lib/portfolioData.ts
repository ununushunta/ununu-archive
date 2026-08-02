import {ABOUT_QUERY, PROJECTS_QUERY} from "@/sanity/lib/queries";
import {client, urlFor} from "@/sanity/lib/client";
import type {Project} from "@/features/works/projects";
import type {
  SanityAboutRecord,
  SanityProjectRecord,
} from "@/sanity/lib/types";

const fallbackHero =
  "radial-gradient(circle at 70% 25%, rgba(232, 201, 164, 0.38), transparent 25%), linear-gradient(135deg, #1f2426 0%, #2d3132 42%, #764f35 100%)";

function toProject(record: SanityProjectRecord): Project {
  const slug = record.slug?.current ?? "";
  const heroImageUrl = urlFor(record.heroImage);

  return {
    id: slug,
    order: record.order ?? 0,
    title: record.title ?? "",
    titleJa: record.titleJa ?? "",
    brand: record.brand ?? "",
    category: record.category ?? "",
    year: record.year ?? "",
    overview: record.overview ?? "",
    story: record.story ?? [],
roles: record.roles ?? [],
achievements: record.achievements ?? [],
    tags: record.tags ?? [],
    heroImage: heroImageUrl ? `url(${heroImageUrl})` : fallbackHero,
    logo: urlFor(record.logo) ?? "",
    gallery: (record.gallery ?? [])
      .map((item) => urlFor(item))
      .filter((url): url is string => Boolean(url)),
    youtubeUrl: record.youtubeUrl ?? "",
    featured: record.featured ?? false,
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const records =
      await client.fetch<SanityProjectRecord[]>(PROJECTS_QUERY);

    return records.map(toProject);
  } catch (error) {
    console.error("Failed to fetch projects from Sanity:", error);
    return [];
  }
}

export async function getAbout() {
  try {
    const record =
      await client.fetch<SanityAboutRecord | null>(ABOUT_QUERY);

    if (!record) {
      return null;
    }

    return {
      name: record.name ?? "",
      role: record.role ?? "",
      profileEn: record.profileEn ?? "",
      profileJa: record.profileJa ?? "",
      capabilities: record.capabilities ?? [],
      experienceEn: record.experienceEn ?? "",
      experienceJa: record.experienceJa ?? "",
      contactEmail: record.contactEmail ?? "",
      linkedinUrl: record.linkedinUrl ?? "",
      instagramUrl: record.instagramUrl ?? "",
      credit: record.credit ?? "",
    };
  } catch (error) {
    console.error("Failed to fetch About data from Sanity:", error);
    return null;
  }
}