import Image from "next/image";

import type { ChapterPageData } from "@/types/chapter";

type ChapterAboutSectionProps = {
  about: ChapterPageData["about"];
};

export function ChapterAboutSection({
  about,
}: ChapterAboutSectionProps) {
  return (
    <section
      id="computer-society"
      aria-labelledby="chapter-about-title"
      className="scroll-mt-16 bg-ieee-blue text-white"
    >
      <div className="grid lg:min-h-[30rem] lg:grid-cols-[48%_52%]">
        <div className="px-6 py-12 sm:px-8 lg:px-10 lg:py-10">
          <div className="max-w-xl">
            <h1
              id="chapter-about-title"
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              {about.title}
            </h1>

            <div className="mt-5 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph}`}
                  className="text-lg leading-7 text-white/95 sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-72 sm:min-h-96 lg:min-h-full">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 52vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}