"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "@/features/works/projects";

type GalleryProps = {
  project: Project;
  language: "en" | "jp";
};

export default function Gallery({
  project,
  language,
}: GalleryProps) {
  const gallery = (project.gallery ?? []).filter(Boolean);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (gallery.length === 0) {
    return null;
  }

  const scrollToImage = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, gallery.length - 1));
    const target = carousel.children[nextIndex] as HTMLElement | undefined;

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setCurrentIndex(nextIndex);
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel || carousel.clientWidth === 0) {
      return;
    }

    const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setCurrentIndex(Math.max(0, Math.min(index, gallery.length - 1)));
  };

  return (
    <section className="worksGallerySection">
      <div className="worksGalleryHeader">
        <h2 className="worksArchiveSectionTitle">
          {language === "jp" ? "ギャラリー" : "Gallery"}
        </h2>

        {gallery.length > 1 ? (
          <p className="worksGalleryCounter">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </p>
        ) : null}
      </div>

      <div
        ref={carouselRef}
        className="worksGalleryCarousel"
        aria-label={`${project.title} gallery`}
        onScroll={handleScroll}
      >
        {gallery.map((item, index) => {
          const isRemoteImage = item.startsWith("http");

          return (
            <figure
              key={`${project.id}-${item}-${index}`}
              className="worksGallerySlide"
            >
              {isRemoteImage ? (
                <Image
                  src={item}
                  alt={`${project.title} gallery item ${index + 1}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 760px) 100vw, 820px"
                  className="worksGalleryCarouselImage"
                />
              ) : (
                <div className="worksGalleryPlaceholder">
                  <span>{item}</span>
                </div>
              )}
            </figure>
          );
        })}
      </div>

      {gallery.length > 1 ? (
        <div className="worksGalleryControls">
          <button
            type="button"
            onClick={() => scrollToImage(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label={language === "jp" ? "前の画像" : "Previous image"}
          >
            ←
          </button>

          <div className="worksGalleryDots" aria-hidden="true">
            {gallery.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentIndex ? "active" : ""}
                onClick={() => scrollToImage(index)}
                tabIndex={-1}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToImage(currentIndex + 1)}
            disabled={currentIndex === gallery.length - 1}
            aria-label={language === "jp" ? "次の画像" : "Next image"}
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}