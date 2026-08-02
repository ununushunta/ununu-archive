import type { PortableTextBlock } from "@portabletext/react";
export type Project = {
  id: string;
  order: number;

  title: string;
  titleJa: string;

  brand: string;
  category: string;
  year: string;

  overview: string;

story: PortableTextBlock[];
roles: string[];
achievements: string[];

  tags: string[];

  heroImage: string;
  logo: string;

  gallery: string[];

  youtubeUrl?: string;

  featured?: boolean;
};

export const fallbackProjects: Project[] = [
  {
    id: "sunset-over-sunrise",
    order: 1,
    title: "Sunset Over Sunrise",
    titleJa: "どんな綺麗な朝日より沈む夕日を僕は推す。",
    brand: "Canva",
    category: "Tutorial Drama",
    year: "2026",
    overview:
      "A low-contrast visual identity for a quiet retail concept, balancing product clarity with a softly atmospheric tone.",
story: [],
roles: [],
achievements: [],
      tags: ["Brand", "Packaging", "Retail"],
    heroImage:
      "radial-gradient(circle at 70% 25%, rgba(232, 201, 164, 0.38), transparent 25%), linear-gradient(135deg, #1f2426 0%, #2d3132 42%, #764f35 100%)",
    logo: "",
    gallery: ["Frame 01", "Frame 02", "Frame 03", "Frame 04"],
    youtubeUrl: "",
    featured: true,
  },
  {
    id: "toku-nana",
    order: 2,
    title: "Toku & Nana",
    titleJa: "とく＆なな",
    brand: "Canva",
    category: "Brand System",
    year: "2025",
    overview:
      "A calm visual system shaped around warmth, clarity, and a restrained sense of motion.",
story: [],
roles: [],
achievements: [],
      tags: ["Brand", "Identity", "Retail"],
    heroImage:
      "radial-gradient(circle at 30% 45%, rgba(237, 223, 189, 0.35), transparent 20%), linear-gradient(135deg, #1b2e29 0%, #745449 48%, #2b2629 100%)",
    logo: "",
    gallery: ["Frame 01", "Frame 02", "Frame 03", "Frame 04"],
    youtubeUrl: "",
    featured: false,
  },
];

export const projects = fallbackProjects;
