'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:contato@exemplo.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const galleryImages = [
  { src: '/images/chapter-pages/computer-society/about/computer-society-image.png', alt: 'Atividade 1' },
  { src: '/images/chapter-pages/computer-society/about/computer-society-image.png', alt: 'Atividade 2' },
  { src: '/images/chapter-pages/computer-society/about/computer-society-image.png', alt: 'Atividade 3' },
  { src: '/images/chapter-pages/computer-society/about/computer-society-image.png', alt: 'Atividade 4' },
  { src: '/images/chapter-pages/computer-society/about/computer-society-image.png', alt: 'Atividade 5' },
];

export function FollowOurWorkSection() {
  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-bold text-(--content-primary,#2a313f) leading-tight mb-6">
            Acompanhe o nosso trabalho nas redes sociais!
          </h2>
          <p className="text-base text-(--content-secondary,#626c79) mb-8 leading-relaxed max-w-lg">
            Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor rhoncus sollicitudin. 
            Nullam non blandit enim, vitae ultrices sapien.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 rounded-full bg-(--ieee-blue,#0a70a3) text-white flex items-center justify-center shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover" />
            </div>
            <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover" />
            </div>
            <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[3].src} alt={galleryImages[3].alt} fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[4].src} alt={galleryImages[4].alt} fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}