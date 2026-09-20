import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChapterAboutSection } from "@/components/chapters/ChapterAboutSection";

import { chapterPages, getChapterPageBySlug } from "@/data/chapterPages";

type ChapterPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return chapterPages.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({
  params,
}: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterPageBySlug(slug);

  if (!chapter) {
    return {
      title: "Capítulo não encontrado",
    };
  }

  return {
    title: chapter.seo.title,
    description: chapter.seo.description,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterPageBySlug(slug);

  if (!chapter) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        <ChapterAboutSection about={chapter.about} />
      </main>

      <Footer />
    </>
  );
}
