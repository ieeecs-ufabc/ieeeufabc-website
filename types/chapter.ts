export type ChapterImage = {
  src: string;
  alt: string;
};

export type ChapterPageData = {
  slug: string;
  name: string;
  introduction: string;

  logo: ChapterImage;

  about: {
    title: string;
    paragraphs: readonly string[];
    image: ChapterImage;
  };

  events: {
    title: string;
    description: string;
    items: readonly ChapterEvent[];
  };

  seo: {
    title: string;
    description: string;
  };
};

export type ChapterEvent = {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  registrationDeadline: string;
  image: ChapterImage;
};