"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { projects } from "./data";

type Language = "en" | "jp";
type View = "works" | "about";

const padNumber = (index: number) => String(index + 1).padStart(2, "0");

export default function ArchiveApp() {
  const [language, setLanguage] = useState<Language>("en");
  const [view, setView] = useState<View>("works");
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [openMobileId, setOpenMobileId] = useState<string | null>(projects[0].id);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("ununu-language");
    if (stored === "en" || stored === "jp") setLanguage(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ununu-language", language);
    document.documentElement.lang = language === "jp" ? "ja" : "en";
  }, [language]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [selectedId],
  );

  const text = (en: string, jp: string) => (language === "jp" ? jp : en);

  const selectProject = (id: string) => {
    setSelectedId(id);
    setView("works");
  };

  return (
    <div className="archiveShell">
      <header className="siteHeader">
        <button className="brandButton" onClick={() => setView("works")} aria-label="Go to works">
          <Image src="/ununu-logo.png" alt="ununu" width={54} height={28} priority />
        </button>

        <nav className="siteNav" aria-label="Primary navigation">
          <button className={view === "works" ? "active" : ""} onClick={() => setView("works")}>
            {text("WORKS", "作品")}
          </button>
          <button className={view === "about" ? "active" : ""} onClick={() => setView("about")}>
            {text("ABOUT", "プロフィール")}
          </button>
          <button
            className="languageButton active"
            onClick={() => setLanguage((current) => (current === "en" ? "jp" : "en"))}
            aria-label={
              language === "en"
                ? "Current language: English. Switch to Japanese."
                : "現在の表示言語：日本語。英語に切り替えます。"
            }
          >
            {language === "en" ? "EN" : "JP"}
          </button>
        </nav>
      </header>

      {view === "works" ? (
        <section className={`worksLayout ${sidebarCollapsed ? "sidebarCollapsed" : ""}`}>
          <aside className="projectSidebar">
            <button
              className="sidebarToggle"
              onClick={() => setSidebarCollapsed((current) => !current)}
              aria-label={sidebarCollapsed ? "Open project list" : "Close project list"}
            >
              {sidebarCollapsed ? "›" : "‹"}
            </button>

            <div className="projectSidebarContent">
              <p className="eyebrow">
                {text("PROJECTS", "プロジェクト")} / {projects.length}
              </p>
              <div className="projectList">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    className={`projectListItem ${project.id === selectedProject.id ? "active" : ""}`}
                    onClick={() => selectProject(project.id)}
                  >
                    <span>{padNumber(index)}</span>
                    <span>{project.title[language]}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="desktopProjectDetail" key={`${selectedProject.id}-${language}`}>
            <ProjectDetail project={selectedProject} language={language} />
          </main>

          <div className="mobileProjectList">
            <p className="eyebrow">
              {text("PROJECTS", "プロジェクト")} / {projects.length}
            </p>
            {projects.map((project, index) => {
              const open = openMobileId === project.id;
              return (
                <article className={`mobileProjectRow ${open ? "open" : ""}`} key={project.id}>
                  <button
                    className="mobileProjectTrigger"
                    onClick={() => setOpenMobileId(open ? null : project.id)}
                    aria-expanded={open}
                  >
                    <span>{padNumber(index)}</span>
                    <span>{project.title[language]}</span>
                    <span>{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <div className="mobileProjectBody">
                      <ProjectDetail project={project} language={language} compact />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <About language={language} />
      )}
    </div>
  );
}

function ProjectDetail({
  project,
  language,
  compact = false,
}: {
  project: (typeof projects)[number];
  language: Language;
  compact?: boolean;
}) {
  const text = (en: string, jp: string) => (language === "jp" ? jp : en);
  const alternateTitle = language === "en" ? project.title.jp : project.title.en;

  return (
    <article className={`projectDetail ${compact ? "compact" : ""}`}>
      <div className={`projectHero ${project.heroClass}`} aria-label={`${project.title.en} placeholder hero`} />

      <div className="projectInformation">
        {project.logo ? (
          <div className="projectLogoFrame">
            <Image
              src={project.logo}
              alt={`${project.title.en} logo`}
              width={2000}
              height={650}
              className="projectLogo"
            />
          </div>
        ) : null}

        <h1 className={project.logo ? "titleWithLogo" : "titleWithoutLogo"}>{project.title[language]}</h1>
        <p className="alternateTitle">{alternateTitle}</p>
        <p className="projectMeta">
          {project.brand} ・ {project.category[language]}
          {project.year ? ` ・ ${project.year}` : ""}
        </p>
        <p className="projectDescription">{project.description[language]}</p>

        <div className="tagList">
          {project.tags.map((tag) => (
            <span className="tag" key={`${tag.en}-${tag.jp}`}>
              {tag[language]}
            </span>
          ))}
        </div>

        <section className="makingSection">
          <p className="eyebrow">{text("MAKING & STILLS", "メイキング・場面写真")}</p>
          <div className="makingGrid" aria-label="Placeholder gallery">
            <div />
            <div />
            <div />
          </div>
        </section>
      </div>
    </article>
  );
}

function About({ language }: { language: Language }) {
  const text = (en: string, jp: string) => (language === "jp" ? jp : en);

  return (
    <main className="aboutPage">
      <p className="eyebrow">{text("ABOUT", "プロフィール")}</p>
      <section className="aboutIntro">
        <div className="aboutPhoto">PHOTO</div>
        <div>
          <h1>{text("Shunta Sasaki", "佐々木 駿太")}</h1>
          <p>
            {text(
              "Creative producer based in Tokyo, working across original IP, branded entertainment, publishing, digital experiences and partnerships.",
              "東京を拠点に、オリジナルIP、ブランドエンターテインメント、出版、デジタル体験、パートナーシップなどを手がけるクリエイティブプロデューサーです。",
            )}
          </p>
        </div>
      </section>

      <section className="aboutSection">
        <h2>{text("EXPERTISE", "専門領域")}</h2>
        <p>Creative Direction</p>
        <p>Content Production</p>
        <p>Original IP Development</p>
        <p>Partnership Marketing</p>
        <p>Brand Storytelling</p>
      </section>

      <section className="aboutSection">
        <h2>{text("CONTACT", "連絡先")}</h2>
        <a href="mailto:hello@ununushunta.com">hello@ununushunta.com</a>
        <a href="#">LinkedIn ↗</a>
        <a href="#">Instagram ↗</a>
      </section>

      <footer className="siteFooter">
        <span>© 2026 ununu</span>
        <span>Designed by Shunta Sasaki</span>
      </footer>
    </main>
  );
}
