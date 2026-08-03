import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",

    groups: [
        { name: "general", title: "General", default: true },
        { name: "hero", title: "Hero" },
        { name: "content", title: "Content" },
        { name: "gallery", title: "Gallery" },
    ],

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            group: "general",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "titleJa",
            title: "Title (JP)",
            type: "string",
            group: "general",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "general",
            options: { source: "title" },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
            group: "general",
            validation: (Rule) => Rule.required().integer().min(1),
        }),
        defineField({
            name: "brand",
            title: "Brand",
            type: "string",
            group: "general",
        }),
defineField({
  name: "category",
  title: "Category (EN)",
  type: "string",
  group: "general",
}),
defineField({
  name: "categoryJa",
  title: "Category (JP)",
  type: "string",
  group: "general",
}),
        defineField({
            name: "year",
            title: "Year",
            type: "string",
            group: "general",
        }),
        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
            group: "general",
            initialValue: false,
        }),
        defineField({
            name: "published",
            title: "Published",
            type: "boolean",
            group: "general",
            initialValue: true,
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            group: "hero",
            options: { hotspot: true },
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            group: "hero",
            options: { hotspot: true },
        }),
defineField({
  name: "overview",
  title: "Overview (EN)",
  type: "text",
  group: "content",
  rows: 6,
}),
defineField({
  name: "overviewJa",
  title: "Overview (JP)",
  type: "text",
  group: "content",
  rows: 6,
}),
        defineField({
  name: "story",
  title: "Project Story (EN)",
  type: "array",
  group: "content",
  description:
    "制作背景やプロセスを、本文・見出し・画像を組み合わせて自由に構成できます。",
  of: [
    {
      type: "block",
      styles: [
        {title: "Normal", value: "normal"},
        {title: "Heading 2", value: "h2"},
        {title: "Heading 3", value: "h3"},
        {title: "Quote", value: "blockquote"},
      ],
      lists: [
        {title: "Bullet", value: "bullet"},
        {title: "Numbered", value: "number"},
      ],
      marks: {
        decorators: [
          {title: "Strong", value: "strong"},
          {title: "Emphasis", value: "em"},
          {title: "Underline", value: "underline"},
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
              {
                name: "openInNewTab",
                title: "Open in new tab",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: {hotspot: true},
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "画像の内容を短く説明してください。",
        },
      ],
    },
  ],
}),
defineField({
  name: "storyJa",
  title: "Project Story (JP)",
  type: "array",
  group: "content",
  description:
    "制作背景やプロセスを、日本語の本文・見出し・画像を組み合わせて構成できます。",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
              {
                name: "openInNewTab",
                title: "Open in new tab",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "画像の内容を短く説明してください。",
        },
      ],
    },
  ],
}),
        defineField({
            name: "tags",
            title: "Tags (EN)",
            type: "array",
            group: "content",
            of: [{ type: "string" }],
        }),
        defineField({
  name: "tagsJa",
  title: "Tags (JP)",
  type: "array",
  group: "content",
  of: [{ type: "string" }],
}),
        defineField({
            name: "roles",
            title: "Roles (EN)",
            type: "array",
            group: "content",
            of: [{ type: "string" }],
            description: "担当内容を自由に追加できます。",
        }),
        defineField({
  name: "rolesJa",
  title: "Roles (JP)",
  type: "array",
  group: "content",
  of: [{ type: "string" }],
  description: "担当内容を日本語で追加できます。",
}),
defineField({
  name: "achievements",
  title: "Achievements (EN)",
  type: "array",
  group: "content",
  of: [{ type: "string" }],
  description: "実績や成果を英語で追加できます。",
}),
defineField({
  name: "achievementsJa",
  title: "Achievements (JP)",
  type: "array",
  group: "content",
  of: [{ type: "string" }],
  description: "実績や成果を日本語で追加できます。",
}),
        defineField({
            name: "youtubeUrl",
            title: "YouTube URL",
            type: "url",
            group: "content",
        }),
        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            group: "gallery",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                },
            ],
        }),
    ],

    orderings: [
        {
            title: "Order",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
    ],

    preview: {
        select: {
            title: "title",
            order: "order",
            media: "heroImage",
        },
        prepare({ title, order, media }) {
            const number =
                typeof order === "number"
                    ? String(order).padStart(3, "0")
                    : "---";

            return {
                title: `${number} ${title ?? "Untitled"}`,
                media,
            };
        },
    },
});