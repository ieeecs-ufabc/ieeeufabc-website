import Image from "next/image";

import { boardMembers } from "@/data/board";

export function BoardSection() {
  return (
    <section
      id="diretoria"
      aria-labelledby="board-title"
      className="scroll-mt-16 bg-white px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="board-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-content-primary sm:text-4xl lg:text-5xl"
          >
            Conheça Nossa Diretoria
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-content-secondary sm:text-lg lg:text-2xl lg:leading-9">
            Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor
            rhoncus sollicitudin. Nullam non blandit enim, vitae ultrices
            sapien.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-10 lg:gap-y-16">
          {boardMembers.map((member) => (
            <li key={member.id} className="text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36">
                <Image
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  fill
                  sizes="(min-width: 640px) 144px, 112px"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 text-base font-bold leading-7 text-content-primary md:text-xl">
                {member.name}
              </h3>

              <p className="mt-1 text-base font-normal leading-7 text-content-secondary md:text-xl">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
