import type { Project } from "@/features/works/projects";

type ProjectMetaProps = {
  project: Project;
  language: "en" | "jp";
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

export default function ProjectMeta({
  project,
  language,
}: ProjectMetaProps) {
  const roles =
    language === "jp"
      ? (project.rolesJa?.length ? project.rolesJa : project.roles).filter(
          Boolean,
        )
      : (project.rolesEn?.length ? project.rolesEn : project.roles).filter(
          Boolean,
        );

  const achievements =
    language === "jp"
      ? (
          project.achievementsJa?.length
            ? project.achievementsJa
            : project.achievements
        ).filter(Boolean)
      : (
          project.achievementsEn?.length
            ? project.achievementsEn
            : project.achievements
        ).filter(Boolean);

  const tags =
    language === "jp"
      ? (project.tagsJa?.length ? project.tagsJa : project.tags).filter(Boolean)
      : project.tags.filter(Boolean);

  const youtubeUrl = project.youtubeUrl?.trim();

  const youtubeEmbedUrl = youtubeUrl
    ? getYouTubeEmbedUrl(youtubeUrl)
    : null;

  const hasCredits = roles.length > 0 || achievements.length > 0;

  if (!hasCredits && tags.length === 0 && !youtubeEmbedUrl) {
    return null;
  }

  return (
    <section className="worksProjectMeta">
      {youtubeEmbedUrl ? (
        <section className="worksArchiveSection">
          <h2 className="worksArchiveSectionTitle">
            {language === "jp" ? "動画" : "YouTube"}
          </h2>

          <div className="worksYoutubeEmbed">
            <iframe
              src={youtubeEmbedUrl}
              title={`${project.title} on YouTube`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      {hasCredits ? (
        <div className="worksCreditsGrid">
          {roles.length > 0 ? (
            <section className="worksArchiveField">
              <h2 className="worksArchiveLabel">
                {language === "jp" ? "担当" : "Role"}
              </h2>

              <ul className="worksArchiveList">
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {achievements.length > 0 ? (
            <section className="worksArchiveField">
              <h2 className="worksArchiveLabel">
                {language === "jp" ? "実績" : "Achievements"}
              </h2>

              <ul className="worksArchiveList">
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : null}

      {tags.length > 0 ? (
        <section className="worksArchiveSection">
          <h2 className="worksArchiveSectionTitle">
            {language === "jp" ? "タグ" : "Tags"}
          </h2>

          <div className="worksTags" aria-label="Project tags">
            {tags.map((tag) => (
              <span key={tag} className="worksTag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}