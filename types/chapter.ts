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

  seo: {
    title: string;
    description: string;
  };
};