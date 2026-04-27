import doctrineImg from "@/assets/lesson-doctrine.jpg";
import familyImg from "@/assets/lesson-family.jpg";
import christianLifeImg from "@/assets/lesson-christian-life.jpg";
import youthImg from "@/assets/lesson-youth.jpg";

export type LessonTheme = "Doutrina" | "Família" | "Vida Cristã" | "Juventude";

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  date: string; // ISO
  theme: LessonTheme;
  cover: string;
  teacher: string;
  verse: string;
  description: string;
  resources: {
    pdfUrl: string;
    slidesUrl: string;
    galleryUrl: string;
    externalLinks: { label: string; url: string }[];
  };
}

export const themes: LessonTheme[] = ["Doutrina", "Família", "Vida Cristã", "Juventude"];

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "A Graça que Transforma",
    subtitle: "Entendendo a salvação pela fé",
    date: "2026-04-26",
    theme: "Doutrina",
    cover: doctrineImg,
    teacher: "Pr. André Lima",
    verse: "Efésios 2:8-9",
    description:
      "Um mergulho na doutrina da graça e como ela molda nossa caminhada diária com Cristo na cidade de hoje.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_1",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_1",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_1",
      externalLinks: [
        { label: "Estudo Complementar", url: "https://example.com" },
        { label: "Vídeo da Aula", url: "https://example.com" },
      ],
    },
  },
  {
    id: "2",
    title: "Família Forte na Fé",
    subtitle: "Construindo lares cristãos",
    date: "2026-04-19",
    theme: "Família",
    cover: familyImg,
    teacher: "Pra. Mariana Costa",
    verse: "Josué 24:15",
    description:
      "Princípios bíblicos para edificar uma família resiliente em meio à cultura contemporânea.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_2",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_2",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_2",
      externalLinks: [{ label: "Material para Casais", url: "https://example.com" }],
    },
  },
  {
    id: "3",
    title: "Oração no Asfalto",
    subtitle: "Vida devocional na correria urbana",
    date: "2026-04-12",
    theme: "Vida Cristã",
    cover: christianLifeImg,
    teacher: "Diac. Felipe Souza",
    verse: "1 Tessalonicenses 5:17",
    description:
      "Como manter uma vida de oração vibrante mesmo em meio ao caos da metrópole.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_3",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_3",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_3",
      externalLinks: [],
    },
  },
  {
    id: "4",
    title: "Geração Sem Medo",
    subtitle: "Jovens chamados para impactar",
    date: "2026-04-05",
    theme: "Juventude",
    cover: youthImg,
    teacher: "Pr. Lucas Mendes",
    verse: "1 Timóteo 4:12",
    description:
      "Um chamado profético para a geração jovem da Igreja Batista Nacional viver a fé com ousadia.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_4",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_4",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_4",
      externalLinks: [{ label: "Playlist de Louvor", url: "https://example.com" }],
    },
  },
  {
    id: "5",
    title: "A Trindade Revelada",
    subtitle: "Pai, Filho e Espírito Santo",
    date: "2026-03-29",
    theme: "Doutrina",
    cover: doctrineImg,
    teacher: "Pr. André Lima",
    verse: "Mateus 28:19",
    description:
      "Estudo profundo sobre a doutrina trinitária e suas implicações práticas.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_5",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_5",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_5",
      externalLinks: [],
    },
  },
  {
    id: "6",
    title: "Amor que Resiste",
    subtitle: "Casamento à prova de tempo",
    date: "2026-03-22",
    theme: "Família",
    cover: familyImg,
    teacher: "Pra. Mariana Costa",
    verse: "1 Coríntios 13",
    description:
      "Os fundamentos do amor ágape no casamento cristão moderno.",
    resources: {
      pdfUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_PDF_6",
      slidesUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_SLIDES_6",
      galleryUrl: "https://drive.google.com/drive/folders/PLACEHOLDER_GALLERY_6",
      externalLinks: [],
    },
  },
];
