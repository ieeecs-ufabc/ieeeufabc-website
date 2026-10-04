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

    events: {
      title: "Eventos",
      description: "Maecenas tincidunt justo metus.",
      items: [
        {
          id: "evento-1",
          title: "Título do evento 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
          eventDate: "2026-10-19",
          registrationDeadline: "2026-10-02",
          image: {
            src: "/images/chapter-pages/computer-society/events/event-placeholder.png",
            alt: "Atividade da IEEE Computer Society UFABC",
          },
        },
        {
          id: "evento-2",
          title: "Título do evento 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
          eventDate: "2026-06-11",
          registrationDeadline: "2026-06-01",
          image: {
            src: "/images/chapter-pages/computer-society/events/event-placeholder.png",
            alt: "Atividade da IEEE Computer Society UFABC",
          },
        },
        {
          id: "evento-3",
          title: "Título do evento 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
          eventDate: "2026-08-19",
          registrationDeadline: "2026-08-02",
          image: {
            src: "/images/chapter-pages/computer-society/events/event-placeholder.png",
            alt: "Atividade da IEEE Computer Society UFABC",
          },
        },
        {
          id: "evento-4",
          title: "Título do evento 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
          eventDate: "2026-11-07",
          registrationDeadline: "2026-10-30",
          image: {
            src: "/images/chapter-pages/computer-society/events/event-placeholder.png",
            alt: "Atividade da IEEE Computer Society UFABC",
          },
        },
        {
          id: "evento-5",
          title: "Título do evento 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
          eventDate: "2026-11-21",
          registrationDeadline: "2026-11-14",
          image: {
            src: "/images/chapter-pages/computer-society/events/event-placeholder.png",
            alt: "Atividade da IEEE Computer Society UFABC",
          },
        },
      ],
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
