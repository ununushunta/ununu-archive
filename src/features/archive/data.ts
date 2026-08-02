export type LocalizedText = {
  en: string;
  jp: string;
};

export type Project = {
  id: string;
  title: LocalizedText;
  brand: string;
  category: LocalizedText;
  year?: string;
  description: LocalizedText;
  tags: LocalizedText[];
  logo?: string;
  heroClass: string;
};

export const projects: Project[] = [
  {
    id: "sunset-over-sunrise",
    title: {
      en: "Sunset Over Sunrise",
      jp: "どんな綺麗な朝日より沈む夕日を僕は推す。",
    },
    brand: "Canva",
    category: { en: "Tutorial Drama", jp: "チュートリアルドラマ" },
    year: "2026",
    description: {
      en: "Executive produced Canva Japan's second branded drama series, generating 328 media placements, including five national newspapers.",
      jp: "Canva Japanの第2弾ブランドドラマをエグゼクティブプロデュース。全国紙5紙を含む328件のメディア掲載を獲得しました。",
    },
    tags: [
      { en: "Drama", jp: "ドラマ" },
      { en: "Creative Direction", jp: "クリエイティブディレクション" },
      { en: "Production", jp: "プロデュース" },
    ],
    logo: "/project-logos/sunset-over-sunrise.png",
    heroClass: "heroSunset",
  },
  {
    id: "toku-and-nana",
    title: { en: "Toku & Nana", jp: "とくめいとななし" },
    brand: "Canva",
    category: { en: "IP & Illustration Assets", jp: "IP・イラスト素材" },
    year: "2025",
    description: {
      en: "Created an original IP and led production of 25,000+ illustration assets for Canva, later expanding the IP into a manga series.",
      jp: "オリジナルIPを企画し、Canva向けに25,000点以上のイラスト素材制作を主導。その後、漫画シリーズへ展開しました。",
    },
    tags: [
      { en: "Original IP", jp: "オリジナルIP" },
      { en: "Illustration", jp: "イラスト" },
      { en: "Manga", jp: "漫画" },
    ],
    heroClass: "heroToku",
  },
  {
    id: "canva-re-rota-momo",
    title: { en: "Canva-re! Rota Momo", jp: "キャンバれ！郎太桃" },
    brand: "Canva / Shogakukan",
    category: { en: "Manga Series", jp: "漫画シリーズ" },
    year: "2024",
    description: {
      en: "Created Canva Japan's original manga series serialized in CoroCoro Comic with AC-bu.",
      jp: "AC部とともに、コロコロコミックで連載されたCanva Japanオリジナル漫画シリーズを企画・制作しました。",
    },
    tags: [
      { en: "Manga", jp: "漫画" },
      { en: "Publishing", jp: "出版" },
      { en: "Creative Production", jp: "クリエイティブプロデュース" },
    ],
    heroClass: "heroManga",
  },
  {
    id: "shopping-street",
    title: {
      en: "I'm Doing Great in the Shopping Street Today",
      jp: "拝啓 今日も私と商店街は元気です",
    },
    brand: "Canva",
    category: { en: "Tutorial Drama", jp: "チュートリアルドラマ" },
    description: {
      en: "Executive produced Canva Japan's first branded drama series.",
      jp: "Canva Japan初のブランドドラマシリーズをエグゼクティブプロデュースしました。",
    },
    tags: [
      { en: "Drama", jp: "ドラマ" },
      { en: "Production", jp: "プロデュース" },
    ],
    heroClass: "heroShopping",
  },
  {
    id: "interrogate-and-operate",
    title: { en: "Interrogate and Operate", jp: "ソウサは取調室で。" },
    brand: "Canva",
    category: { en: "Short Drama Series", jp: "ショートドラマシリーズ" },
    description: {
      en: "Created and produced a detective-style short drama series.",
      jp: "刑事ドラマ仕立てのショートドラマシリーズを企画・プロデュースしました。",
    },
    tags: [
      { en: "Short Drama", jp: "ショートドラマ" },
      { en: "Concept", jp: "企画" },
    ],
    heroClass: "heroInterrogate",
  },
  {
    id: "many-homework-cafe",
    title: { en: "The Café of Many Homework", jp: "宿題の多い喫茶店" },
    brand: "Canva",
    category: { en: "Short Drama Series", jp: "ショートドラマシリーズ" },
    description: {
      en: "Produced a vertical short drama series showcasing Canva through everyday design challenges.",
      jp: "日常のデザイン課題を通してCanvaを紹介する縦型ショートドラマをプロデュースしました。",
    },
    tags: [
      { en: "Vertical Video", jp: "縦型動画" },
      { en: "Production", jp: "プロデュース" },
    ],
    heroClass: "heroCafe",
  },
  {
    id: "voice-actor-tutorials",
    title: { en: "Voice Actor Tutorial Series", jp: "声優チュートリアルシリーズ" },
    brand: "Canva",
    category: { en: "Tutorial Video", jp: "チュートリアル動画" },
    description: {
      en: "Produced tutorial videos featuring leading Japanese voice actors including Akio Otsuka, Megumi Ogata, and Yui Ishikawa.",
      jp: "大塚明夫、緒方恵美、石川由依をはじめとする日本を代表する声優陣を起用したチュートリアル動画をプロデュースしました。",
    },
    tags: [
      { en: "Video", jp: "映像" },
      { en: "Voice Actors", jp: "声優" },
    ],
    heroClass: "heroVoice",
  },
  {
    id: "irasutoya",
    title: { en: "Irasutoya", jp: "いらすとや" },
    brand: "Canva / Irasutoya",
    category: { en: "Content Partnership", jp: "コンテンツパートナーシップ" },
    description: {
      en: "Led the partnership, bringing 20,000+ localized illustration assets to Canva.",
      jp: "パートナーシップを主導し、20,000点以上のローカライズされたイラスト素材をCanvaへ導入しました。",
    },
    tags: [
      { en: "Partnership", jp: "パートナーシップ" },
      { en: "Illustration", jp: "イラスト" },
    ],
    heroClass: "heroIrasutoya",
  },
  {
    id: "sanrio-characters",
    title: { en: "Sanrio Characters", jp: "サンリオキャラクターズ" },
    brand: "Canva / Sanrio",
    category: { en: "Partnership Marketing", jp: "パートナーシップマーケティング" },
    description: {
      en: "Managed partnership marketing campaigns.",
      jp: "パートナーシップマーケティングキャンペーンを担当しました。",
    },
    tags: [
      { en: "Partnership", jp: "パートナーシップ" },
      { en: "Marketing", jp: "マーケティング" },
    ],
    heroClass: "heroSanrio",
  },
  {
    id: "one-voice",
    title: { en: "ONE VOICE", jp: "ONE VOICE" },
    brand: "National Geographic Japan",
    category: { en: "Mini Documentary Series", jp: "ミニドキュメンタリーシリーズ" },
    description: {
      en: "Created and produced an original mini documentary series showcasing the voice actors and narrators behind National Geographic's documentaries.",
      jp: "ナショナル ジオグラフィックのドキュメンタリーを支える声優・ナレーターと、その声の仕事に迫るオリジナルミニドキュメンタリーを企画・制作しました。",
    },
    tags: [
      { en: "Documentary", jp: "ドキュメンタリー" },
      { en: "Original Series", jp: "オリジナルシリーズ" },
    ],
    heroClass: "heroOneVoice",
  },
  {
    id: "revival-zoo",
    title: { en: "REVIVAL ZOO", jp: "再生動物園" },
    brand: "National Geographic Japan",
    category: { en: "Digital Installation", jp: "デジタルインスタレーション" },
    year: "2022",
    description: {
      en: "Produced a digital installation at Shibuya Miyashita Park that brought three extinct animals back to life in 3D using RealSense and Unreal Engine.",
      jp: "アースデイ2022に渋谷・宮下公園で開催した、絶滅動物3種を3Dで蘇らせるデジタルインスタレーションをプロデュースしました。",
    },
    tags: [
      { en: "Installation", jp: "インスタレーション" },
      { en: "Experience", jp: "体験設計" },
    ],
    heroClass: "heroZoo",
  },
  {
    id: "hino-yojin-neo",
    title: { en: "HINO-YOJIN NEO feat. AKKOGORILLA", jp: "HINO-YOJIN NEO feat. あっこゴリラ" },
    brand: "National Geographic Japan",
    category: { en: "Music & Social Campaign", jp: "音楽・ソーシャルキャンペーン" },
    year: "2021",
    description: {
      en: "Updated a familiar Japanese fire-safety phrase for 2021 with rapper AKKOGORILLA and the Fire Science Laboratory at Tokyo University of Science.",
      jp: "東京理科大学火災科学研究所監修のもと、ラッパー・あっこゴリラとともに防火標語を2021年版の楽曲としてアップデートしました。",
    },
    tags: [
      { en: "Music", jp: "音楽" },
      { en: "Campaign", jp: "キャンペーン" },
    ],
    heroClass: "heroFire",
  },
];
