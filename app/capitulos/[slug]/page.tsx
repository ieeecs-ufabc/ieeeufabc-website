import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import {
  chapterPages,
  getChapterPageBySlug,
} from "@/data/chapterPages";

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

export default async function ChapterPage({
  params,
}: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterPageBySlug(slug);

  if (!chapter) {
    notFound();
  }

  return (
    <>
      <Header />

      <main id="inicio" className="flex-1">
        <section
          id="computer-society"
          aria-labelledby="chapter-title"
          className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-6 py-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1
              id="chapter-title"
              className="text-3xl font-semibold text-ieee-blue sm:text-4xl"
            >
              {chapter.name}
            </h1>

            <p className="mt-6 text-base leading-7 text-content-secondary sm:text-lg">
              {chapter.introduction}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}