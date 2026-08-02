import Image from "next/image";
import PortableStory from "./PortableStory";
import type {Project} from "@/features/works/projects";

type ProjectInfoProps = {
  project: Project;
  language: "en" | "jp";
};

export default function ProjectInfo({
  project,
  language,
}: ProjectInfoProps) {
const hasLogo = Boolean(project.logo?.trim());

const displayTitle =
  language === "jp"
    ? project.titleJa?.trim() || project.title
    : project.title;

const secondaryTitle =
  language === "jp"
    ? project.title
    : project.titleJa?.trim();

const overview =
  language === "jp"
    ? project.overviewJa?.trim() || project.overview
    : project.overviewEn?.trim() || project.overview;

const story =
  language === "jp"
    ? project.storyJa?.length
      ? project.storyJa
      : project.story
    : project.storyEn?.length
      ? project.storyEn
      : project.story;

      const labels =
  language === "jp"
    ? {
        title: "タイトル",
        logo: "ロゴ",
        brand: "ブランド",
        category: "カテゴリー",
        year: "年",
        overview: "概要",
        story: "プロジェクトストーリー",
      }
    : {
        title: "Title",
        logo: "Logo",
        brand: "Brand",
        category: "Category",
        year: "Year",
        overview: "Overview",
        story: "Project Story",
      };

      const displayCategory =
  language === "jp"
    ? project.categoryJa?.trim() || project.category
    : project.category;

  return (
    <section className="worksProjectInfo">
      <div
        className={`worksIdentityGrid ${
          hasLogo ? "worksIdentityGridWithLogo" : ""
        }`}
      >
        <div className="worksArchiveField worksTitleField">
  <p className="worksArchiveLabel">{labels.title}</p>

{secondaryTitle ? (
  <p className="worksTitleJa">{secondaryTitle}</p>
) : null}

<h1 className="worksTitle">{displayTitle}</h1>
</div>

        {hasLogo ? (
          <div className="worksArchiveField worksLogoField">
            <p className="worksArchiveLabel">{labels.logo}</p>

            <div className="worksLogoFrame">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={320}
                height={160}
                className="worksLogoImage"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="worksMetadataGrid">
        {project.brand ? (
          <div className="worksArchiveField">
            <p className="worksArchiveLabel">{labels.brand}</p>
            <p className="worksArchiveValue">{project.brand}</p>
          </div>
        ) : null}

{displayCategory ? (
  <div className="worksArchiveField">
    <p className="worksArchiveLabel">{labels.category}</p>
    <p className="worksArchiveValue">{displayCategory}</p>
  </div>
) : null}

        {project.year ? (
          <div className="worksArchiveField">
            <p className="worksArchiveLabel">{labels.year}</p>
            <p className="worksArchiveValue">{project.year}</p>
          </div>
        ) : null}
      </div>

      {overview ? (
        <section className="worksArchiveSection">
          <h2 className="worksArchiveSectionTitle">{labels.overview}</h2>
          <p className="worksOverview">{overview}</p>
        </section>
      ) : null}

{story.length > 0 ? (
  <section className="worksArchiveSection">
    <h2 className="worksArchiveSectionTitle">{labels.story}</h2>
    <PortableStory value={story} />
  </section>
) : null}

    </section>
  );
}