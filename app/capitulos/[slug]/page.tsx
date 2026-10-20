import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChapterAboutSection } from "@/components/chapters/ChapterAboutSection";
import { ChapterEventsSection } from "@/components/chapters/ChapterEventsSection";

import { chapterPages, getChapterPageBySlug } from "@/data/chapterPages";
import VolunteersSection from "@/components/sections/VolunteersSection";
import { BoardSection } from "@/components/sections/BoardSection";
import {ProjectsSection} from "@/components/sections/ProjectsSection";
import {FollowOurWorkSection} from "@/components/sections/FollowOurWorkSection";

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
        <BoardSection/>
        <VolunteersSection />
        <ProjectsSection/>
        <ChapterEventsSection events={chapter.events} />
        <FollowOurWorkSection />
      </main>

      <Footer />
    </>
  );
}
