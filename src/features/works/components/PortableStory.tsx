import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";

type PortableStoryProps = {
  value: PortableTextBlock[];
};

export default function PortableStory({ value }: PortableStoryProps) {
  if (!value?.length) {
    return null;
  }

  return (
    <section className="worksStory">
      <PortableText
        value={value}
        components={{
          types: {
            image: ({ value }) => {
              const imageUrl = urlFor(value);

              if (!imageUrl) {
                return null;
              }

              return (
                <figure className="worksStoryImage">
                  <img src={imageUrl} alt={value?.alt ?? ""} />

                  {value?.caption ? (
                    <figcaption>{value.caption}</figcaption>
                  ) : null}
                </figure>
              );
            },
          },
        }}
      />
    </section>
  );
}