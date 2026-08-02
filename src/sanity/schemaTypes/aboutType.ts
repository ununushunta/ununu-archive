import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  groups: [
  { name: "general", title: "General", default: true },
  { name: "profile", title: "Profile" },
  { name: "skills", title: "Capabilities" },
  { name: "contact", title: "Contact" },
],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "profileEn",
      title: "Profile (EN)",
      type: "text",
    }),
    defineField({
      name: "profileJa",
      title: "Profile (JP)",
      type: "text",
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experienceEn",
      title: "Experience (EN)",
      type: "text",
    }),
    defineField({
      name: "experienceJa",
      title: "Experience (JP)",
      type: "text",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "credit",
      title: "Credit",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
