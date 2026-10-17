'use client';

import Image from 'next/image';

interface Volunteer {
  id: string | number;
  name: string;
  imageUrl: string;
}

const defaultVolunteers: Volunteer[] = [
  {
    id: 1,
    name: 'Nome Sobrenome',
    imageUrl: '/images/board/pessoa1.png',
  },
  {
    id: 2,
    name: 'Nome Sobrenome',
    imageUrl: '/images/board/pessoa2.png',
  },
  {
    id: 3,
    name: 'Nome Sobrenome',
    imageUrl: '/images/board/pessoa3.png',
  },
  {
    id: 4,
    name: 'Nome Sobrenome',
    imageUrl: '/images/board/pessoa1.png',
  },
  {
    id: 5,
    name: 'Nome Sobrenome',
    imageUrl: '/images/board/pessoa2.png',
  },
];

interface VolunteersSectionProps {
  title?: string;
  subtitle?: string;
  volunteers?: Volunteer[];
}

export default function VolunteersSection({
  title = 'Voluntários',
  subtitle = 'Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor rhoncus sollicitudin.',
  volunteers = defaultVolunteers,
}: VolunteersSectionProps) {
  const infiniteVolunteers = [...volunteers, ...volunteers, ...volunteers, ...volunteers];

  return (
    <section className="py-16 bg-ieee-blue text-white flex flex-col w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-wide">{title}</h2>
        <p className="mt-4 text-base font-normal leading-7 text-white sm:text-lg lg:text-xl lg:leading-8">
          {subtitle}
        </p>
      </div>

      <div className="w-full relative flex mask-infinite-scroll">
        <ul className="flex w-max animate-infinite-scroll items-center gap-10 shrink-0">
          {infiniteVolunteers.map((volunteer, index) => (
            <li key={`${volunteer.id}-${index}`} className="shrink-0">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 shadow-md">
                  <Image
                    src={volunteer.imageUrl}
                    alt={volunteer.name}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover"
                  />
                </div>

                <span className="text-sm sm:text-base font-medium text-white text-center max-w-35 truncate">
                  {volunteer.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}