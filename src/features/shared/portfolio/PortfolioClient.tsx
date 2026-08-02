"use client";

import { useState } from "react";
import AboutPage from "@/features/about/components/AboutPage";
import Header from "@/features/shared/header/Header";
import WorksLayout from "@/features/works/components/WorksLayout";
import type { Project } from "@/features/works/projects";

type PortfolioClientProps = {
  initialProjects: Project[];
  initialAbout: {
    name: string;
    role: string;
    profileEn: string;
    profileJa: string;
    capabilities: string[];
    experienceEn: string;
    experienceJa: string;
    contactEmail: string;
    linkedinUrl: string;
    instagramUrl: string;
    credit: string;
  } | null;
};

export default function PortfolioClient({ initialProjects, initialAbout }: PortfolioClientProps) {
  const [currentPage, setCurrentPage] = useState<"works" | "about">("works");
  const [language, setLanguage] = useState<"en" | "jp">("en");

  return (
    <>
      <Header
        currentPage={currentPage}
        language={language}
        onPageChange={setCurrentPage}
        onLanguageToggle={() => setLanguage((current) => (current === "en" ? "jp" : "en"))}
      />

      {currentPage === "about" ? (
        <AboutPage language={language} about={initialAbout} />
      ) : (
        <WorksLayout
  projects={initialProjects}
  language={language}
/>
      )}
    </>
  );
}
