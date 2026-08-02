import Image from "next/image";
import type { Project } from "@/features/works/projects";

type GalleryProps = {
  project: Project;
};

export default function Gallery({ project }: GalleryProps) {
  const gallery = (project.gallery ?? []).filter(Boolean);

  if (gallery.length === 0) {
    return null;
  }

return (
  <section className="worksGallerySection">
    <h2 className="worksArchiveSectionTitle">Gallery</h2>

    <div className="worksGallery" aria-label={`${project.title} gallery`}>
      {gallery.map((item, index) => {
        const isRemoteImage = item.startsWith("http");

        return (
          <div key={`${project.id}-${item}-${index}`} className="worksGalleryItem">
            {isRemoteImage ? (
              <Image
                src={item}
                alt={`${project.title} gallery item ${index + 1}`}
                width={400}
                height={300}
                className="worksGalleryImage"
              />
            ) : (
              <span>{item}</span>
            )}
          </div>
        );
      })}
    </div>
  </section>
);
}
