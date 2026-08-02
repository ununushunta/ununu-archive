import type { Project } from "@/features/works/projects";

type HeroProps = {
  project: Project;
};

export default function Hero({ project }: HeroProps) {
  if (!project.heroImage) {
    return null;
  }

  return (
    <div className="worksHeroFrame">
      <div
        className="worksHero"
        style={{ backgroundImage: project.heroImage }}
        aria-label={`${project.title} hero preview`}
        role="img"
      />
    </div>
  );
}
