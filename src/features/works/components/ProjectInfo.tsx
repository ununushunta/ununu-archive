import Image from "next/image";
import PortableStory from "./PortableStory";
import type {Project} from "@/features/works/projects";

type ProjectInfoProps = {
  project: Project;
};

export default function ProjectInfo({project}: ProjectInfoProps) {
  const hasLogo = Boolean(project.logo?.trim());
  const titleJa = project.titleJa?.trim();
  const overview = project.overview?.trim();

  return (
    <section className="worksProjectInfo">
      <div
        className={`worksIdentityGrid ${
          hasLogo ? "worksIdentityGridWithLogo" : ""
        }`}
      >
        <div className="worksArchiveField worksTitleField">
  <p className="worksArchiveLabel">Title</p>

  {titleJa ? <p className="worksTitleJa">{titleJa}</p> : null}

  <h1 className="worksTitle">{project.title}</h1>
</div>

        {hasLogo ? (
          <div className="worksArchiveField worksLogoField">
            <p className="worksArchiveLabel">Logo</p>

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
            <p className="worksArchiveLabel">Brand</p>
            <p className="worksArchiveValue">{project.brand}</p>
          </div>
        ) : null}

        {project.category ? (
          <div className="worksArchiveField">
            <p className="worksArchiveLabel">Category</p>
            <p className="worksArchiveValue">{project.category}</p>
          </div>
        ) : null}

        {project.year ? (
          <div className="worksArchiveField">
            <p className="worksArchiveLabel">Year</p>
            <p className="worksArchiveValue">{project.year}</p>
          </div>
        ) : null}
      </div>

      {overview ? (
        <section className="worksArchiveSection">
          <h2 className="worksArchiveSectionTitle">Overview</h2>
          <p className="worksOverview">{overview}</p>
        </section>
      ) : null}

      {project.story.length > 0 ? (
        <section className="worksArchiveSection">
          <h2 className="worksArchiveSectionTitle">Project Story</h2>
          <PortableStory value={project.story} />
        </section>
      ) : null}

    </section>
  );
}