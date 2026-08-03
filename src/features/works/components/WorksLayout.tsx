"use client";

import ProjectMeta from "@/features/works/components/ProjectMeta";
import { useMemo, useState } from "react";
import Gallery from "@/features/works/components/Gallery";
import Hero from "@/features/works/components/Hero";
import ProjectInfo from "@/features/works/components/ProjectInfo";
import Sidebar from "@/features/works/components/Sidebar";
import type { Project } from "@/features/works/projects";

type WorksLayoutProps = {
  projects: Project[];
  language: "en" | "jp";
};

export default function WorksLayout({
  projects,
  language,
}: WorksLayoutProps) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? "");
  const [mobileOpenProjectId, setMobileOpenProjectId] = useState<string | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [projects, selectedProjectId],
  );

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setMobileOpenProjectId((current) => (current === projectId ? null : projectId));
  };

const renderProjectDetail = (project: (typeof projects)[number]) => (
  <div className="worksDetail">
    <Hero project={project} />
    <ProjectInfo project={project} language={language} />

    <div className="worksPostContent">
      <Gallery project={project} language={language} />
      <ProjectMeta project={project} language={language} />
    </div>
  </div>
);

  return (
    <div className={`worksLayout ${isSidebarCollapsed ? "sidebarCollapsed" : ""}`}>
      <Sidebar
        projects={projects}
        selectedProjectId={selectedProject?.id ?? selectedProjectId}
        onSelect={handleProjectSelect}
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((current) => !current)}
      />

      <main className="worksMain">
        {selectedProject ? renderProjectDetail(selectedProject) : null}
      </main>

      <div className="mobileProjectList">
        {projects.map((project) => {
          const isOpen = mobileOpenProjectId === project.id;

          return (
            <div key={project.id} className={`mobileProjectRow ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="mobileProjectTrigger"
                onClick={() => handleProjectSelect(project.id)}
              >
                <span className="worksSidebarIndex">{String(project.order).padStart(3, "0")}</span>
                <span className="worksSidebarTitle">{project.title}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen ? <div className="mobileProjectBody">{renderProjectDetail(project)}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
