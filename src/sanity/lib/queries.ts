import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && published == true] | order(order asc, _createdAt asc) {
    _id,
    _type,
    title,
    titleJa,
    slug,
    order,
    brand,
    category,
    year,
    overview,
    story,
roles,
achievements,
    tags,
    heroImage,
    logo,
    gallery,
    youtubeUrl,
    featured,
    published
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"] | order(_createdAt asc)[0] {
    _id,
    _type,
    name,
    role,
    profileEn,
    profileJa,
    capabilities,
    experienceEn,
    experienceJa,
    contactEmail,
    linkedinUrl,
    instagramUrl,
    credit
  }
`);
