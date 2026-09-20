import type { ChapterPageData } from "@/types/chapter";

export const chapterPages: readonly ChapterPageData[] = [
  {
    slug: "computer-society",
    name: "Computer Society",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper risus at leo auctor, ac cursus erat cursus.",

    logo: {
      src: "/images/chapters/computer-society.png",
      alt: "Logo da IEEE Computer Society",
    },

    about: {
      title: "Computer Society",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper risus at leo auctor, ac cursus erat cursus.",
        "Donec vel sapien congue erat auctor cursus. Proin in dignissim velit. Vivamus ornare imperdiet egestas.",
      ],
      image: {
        src: "/images/chapter-pages/computer-society/about/computer-society-image.png",
        alt: "Integrantes da IEEE Computer Society UFABC",
      },
    },

    seo: {
      title: "Computer Society",
      description:
        "Conheça a IEEE Computer Society da UFABC, seus voluntários, atividades e eventos.",
    },
  },
];

export function getChapterPageBySlug(
  slug: string,
): ChapterPageData | undefined {
  return chapterPages.find((chapter) => chapter.slug === slug);
}
