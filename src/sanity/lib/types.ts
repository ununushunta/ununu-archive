import type { PortableTextBlock } from "@portabletext/react";
export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityImage = {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityProjectRecord = {
  _id: string;
  _type: "project";
  title?: string;
  titleJa?: string;
  slug?: SanitySlug;
  order?: number;
  brand?: string;
  category?: string;
  categoryJa?: string;
  year?: string;
  overview?: string;
  overviewJa?: string;
story?: PortableTextBlock[];
storyJa?: PortableTextBlock[];
roles?: string[];
rolesJa?: string[];
achievements?: string[];
achievementsJa?: string[];
  tags?: string[];
  tagsJa?: string[];
  heroImage?: SanityImage | null;
  logo?: SanityImage | null;
  gallery?: SanityImage[];
  youtubeUrl?: string;
  featured?: boolean;
  published?: boolean;
};

export type SanityAboutRecord = {
  _id: string;
  _type: "about";
  name?: string;
  role?: string;
  profileEn?: string;
  profileJa?: string;
  capabilities?: string[];
  experienceEn?: string;
  experienceJa?: string;
  contactEmail?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  credit?: string;
};
