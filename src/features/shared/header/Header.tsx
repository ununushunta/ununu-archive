"use client";

import Image from "next/image";

type HeaderProps = {
  currentPage: "works" | "about";
  language: "en" | "jp";
  onPageChange: (page: "works" | "about") => void;
  onLanguageToggle: () => void;
};

export default function Header({
  currentPage,
  language,
  onPageChange,
  onLanguageToggle,
}: HeaderProps) {
  return (
    <header className="header">
      <button
        className="logoButton"
        onClick={() => onPageChange("works")}
      >
        <Image
          src="/ununu-logo.png"
          alt="ununu"
          width={54}
          height={24}
          priority
        />
      </button>

      <nav className="nav">
        <button
          className={currentPage === "works" ? "active" : ""}
          onClick={() => onPageChange("works")}
        >
          {language === "en" ? "WORKS" : "作品"}
        </button>

        <button
          className={currentPage === "about" ? "active" : ""}
          onClick={() => onPageChange("about")}
        >
          {language === "en" ? "ABOUT" : "プロフィール"}
        </button>

        <button
          className="languageButton"
          onClick={onLanguageToggle}
        >
          {language.toUpperCase()}
        </button>
      </nav>
    </header>
  );
}