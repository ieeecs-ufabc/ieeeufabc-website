'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string | number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    category: 'HARDWARE',
    title: 'Repara CS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    imageUrl: '/images/chapter-pages/computer-society/events/event-placeholder.png',
    linkUrl: '/projects/schedule-planner',
  },
  {
    id: 2,
    category: 'DESENVOLVIMENTO WEB',
    title: 'WEB CS',
    description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    imageUrl: '/images/chapter-pages/computer-society/events/event-placeholder.png',
    linkUrl: '/projects/workshop-web',
  },
  {
    id: 3,
    category: 'AUTOMAÇÃO & DADOS',
    title: 'Data Sphere',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
    imageUrl: '/images/chapter-pages/computer-society/events/event-placeholder.png',
    linkUrl: '/projects/data-pipeline',
  },
];

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export function ProjectsSection({
  title = 'Projetos',
  subtitle = 'Conheça alguns dos principais desenvolvimentos, iniciativas e workshops realizados.',
  projects = defaultProjects,
}: ProjectsSectionProps) {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-(--content-primary,#2a313f) mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-(--content-secondary,#626c79) max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.linkUrl}
            className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-200">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-(--ieee-blue,#0a70a3) text-white p-6 flex flex-col justify-between grow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-(--ieee-blue,#0a70a3) text-white font-medium hover:bg-opacity-90 transition-colors shadow-md"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
}