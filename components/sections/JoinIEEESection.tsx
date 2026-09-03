import Image from "next/image";

import { opportunities } from "@/data/opportunities";

export function JoinIEEESection() {
  return (
    <section
      id="faca-parte"
      aria-labelledby="join-ieee-title"
      className="scroll-mt-16 flex min-h-[calc(100svh-4rem)] w-full items-center bg-white px-6 py-8 sm:px-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="max-w-220.5">
          <h2
            id="join-ieee-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-content-primary sm:text-4xl"
          >
            Faça Parte da IEEE
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-content-secondary sm:text-lg lg:text-xl lg:leading-8">
            Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor
            rhoncus sollicitudin.
          </p>
        </header>

        <ul className="mt-8 grid gap-y-10 md:grid-cols-2 md:justify-items-center md:gap-x-12 xl:grid-cols-3 xl:gap-x-16">
          {opportunities.map((opportunity, index) => (
            <li key={opportunity.id} className="mx-auto w-full max-w-90">
              <article>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={opportunity.image}
                    alt=""
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-sm font-semibold leading-5 text-content-primary">
                  <span>{opportunity.deadline}</span>
                  <span>{opportunity.chapter}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold leading-7 text-content-primary 2xl:text-2xl 2xl:leading-8">
                  {opportunity.title}
                </h3>

                <p className="mt-2 text-base font-normal leading-6 text-content-secondary lg:text-lg lg:leading-7 2xl:text-xl 2xl:leading-8">
                  {opportunity.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
