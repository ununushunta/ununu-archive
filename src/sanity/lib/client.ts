import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3ke5jkn1";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2024-01-01",
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: unknown) {
  if (!source) {
    return null;
  }

  try {
    return builder.image(source as never).url();
  } catch {
    return null;
  }
}
