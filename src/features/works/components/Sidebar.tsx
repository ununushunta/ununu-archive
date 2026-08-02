import type { Project } from "@/features/works/projects";

type SidebarProps = {
  projects: Project[];
  selectedProjectId: string;
  onSelect: (projectId: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({
  projects,
  selectedProjectId,
  onSelect,
  isCollapsed,
  onToggle,
}: SidebarProps) {
  return (
    <aside className={`worksSidebar ${isCollapsed ? "collapsed" : ""}`} aria-label="Projects sidebar">
      <button
        type="button"
        className="worksSidebarToggle"
        onClick={onToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? ">" : "<"}
      </button>

      <div className="worksSidebarHeader">
        <p className="worksSidebarLabel">{isCollapsed ? "" : "PROJECTS"}</p>
      </div>

      <div className="worksSidebarList">
        {projects.map((project) => {
          const isActive = selectedProjectId === project.id;

          return (
            <button
              key={project.id}
              type="button"
              className={`worksSidebarItem ${isActive ? "active" : ""}`}
              onClick={() => onSelect(project.id)}
            >
              <span className="worksSidebarIndex" data-tooltip={project.title}>
                {String(project.order).padStart(3, "0")}
              </span>
              {!isCollapsed ? <span className="worksSidebarTitle">{project.title}</span> : null}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
