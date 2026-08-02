type AboutPageProps = {
  language: "en" | "jp";
  about: {
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

const copy = {
  en: {
    name: "Shunta Sasaki",
    role: "Creative Director / Producer",
    intro:
      "Shunta Sasaki is a creative director and producer building brand narratives, editorial worlds, and character-led storytelling with a clear point of view. His practice bridges strategy, direction, and production to shape work that feels precise, emotionally resonant, and culturally aware.",
    capabilitiesHeading: "SELECTED CAPABILITIES",
    profileHeading: "PROFILE / EXPERIENCE",
    profile:
      "Based in a multidisciplinary practice that moves between creative direction, story development, and production, Shunta works across campaign, branded entertainment, and cultural content. The focus remains on shaping consistent identities and immersive experiences that can travel across platforms with clarity and character.",
    profile2:
      "Recent work emphasizes collaboration, editorial sensibility, and quietly confident visual language. From concept to delivery, the goal is to build thoughtful systems that support both brand ambition and audience connection.",
    contactHeading: "CONTACT",
    email: "hello@ununu.studio",
    credit: "Designed by Shunta Sasaki",
  },
  jp: {
    name: "Shunta Sasaki",
    role: "Creative Director / Producer",
    intro:
      "Shunta Sasakiは、ブランドの物語性とキャラクターを軸にしたクリエイティブディレクションとプロデュースを行うクリエイターです。戦略から方向性、制作までを一貫して扱い、明確で感情的に届く作品をつくっています。",
    capabilitiesHeading: "主な実務",
    profileHeading: "プロフィール / 経歴",
    profile:
      "クリエイティブディレクション、ストーリー開発、プロデュースを含むマルチディシプリンな実務を通じて、キャンペーンやブランディッド・エンターテインメント、文化的なコンテンツに関わってきました。ブランドの立ち位置と物語を整理し、複数の接点で一貫した体験をつくることを重視しています。",
    profile2:
      "近年は、編集的な感性と静かな表現力を活かし、コンセプトから仕上がりまでを一貫して支える制作を進めています。対象の魅力を丁寧に伝えるための構造と表現を整えることを大切にしています。",
    contactHeading: "お問い合わせ",
    email: "hello@ununu.studio",
    credit: "Designed by Shunta Sasaki",
  },
} as const;

export default function AboutPage({ language, about }: AboutPageProps) {
  const t = copy[language];
  const profileText = language === "en" ? about?.profileEn : about?.profileJa;
  const experienceText = language === "en" ? about?.experienceEn : about?.experienceJa;
  const capabilities = about?.capabilities?.length ? about.capabilities : [
    "Creative Direction",
    "Content Strategy",
    "Branded Entertainment",
    "Character Development",
    "Production",
    "AI-assisted Creative Development",
  ];

  return (
    <main className="aboutPage">
<section className="aboutIntro">
  <div>
    <h1>{about?.name ?? t.name}</h1>
  </div>
</section>

      <section className="aboutSection">
        <h2>{t.profileHeading}</h2>
        {profileText ? <p>{profileText}</p> : null}
        {experienceText ? <p>{experienceText}</p> : null}
      </section>

            <section className="aboutSection">
        <h2>{t.capabilitiesHeading}</h2>
        {capabilities.map((capability) => (
          <p key={capability}>{capability}</p>
        ))}
      </section>

      <section className="aboutSection">
        <h2>{t.contactHeading}</h2>
        <a href={`mailto:${about?.contactEmail ?? t.email}`}>{about?.contactEmail ?? t.email}</a>
        {about?.linkedinUrl ? (
          <a href={about.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        ) : null}
        {about?.instagramUrl ? (
          <a href={about.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        ) : null}
      </section>

      <footer className="siteFooter">
        <span>{about?.credit ?? t.credit}</span>
        <span>{about?.role ?? t.role}</span>
      </footer>
    </main>
  );
}
