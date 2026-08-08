import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";

type PortableStoryProps = {
  value: PortableTextBlock[];
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (
      parsedUrl.hostname === "youtu.be" ||
      parsedUrl.hostname === "www.youtu.be"
    ) {
      videoId = parsedUrl.pathname.slice(1);
    }

    if (
      parsedUrl.hostname === "youtube.com" ||
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "m.youtube.com"
    ) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") ?? "";
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/")[2] ?? "";
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/")[2] ?? "";
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

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

            youtube: ({ value }) => {
              const embedUrl = getYouTubeEmbedUrl(value?.url ?? "");

              if (!embedUrl) {
                return null;
              }

              return (
                <figure className="worksStoryYoutube">
                  <div className="worksStoryYoutubeFrame">
                    <iframe
                      src={embedUrl}
                      title={value?.caption ?? "YouTube video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

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