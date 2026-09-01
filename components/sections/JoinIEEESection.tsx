import Image from "next/image";

import { opportunities } from "@/data/opportunities";

export function JoinIEEESection() {
  return (
    <section
      id="faca-parte"
      aria-labelledby="join-ieee-title"
      className="scroll-mt-20 bg-white px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-220.5">
          <h2
            id="join-ieee-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-content-primary sm:text-4xl lg:text-5xl"
          >
            Faça Parte da IEEE
          </h2>

          <p className="mt-4 text-base font-normal leading-7 text-content-secondary sm:text-lg lg:text-2xl lg:leading-9">
            Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor rhoncus sollicitudin.
          </p>
        </header>

        <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <li key={opportunity.id}>
              <article>
                <div className="relative aspect-16/10 overflow-hidden rounded-xl">
                  <Image
                    src={opportunity.image}
                    alt=""
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-sm text-content-secondary">
                  <span>{opportunity.deadline}</span>
                  <span>{opportunity.chapter}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold leading-7 text-content-primary">
                  {opportunity.title}
                </h3>

                <p className="mt-2 text-base font-normal leading-6 text-content-secondary">
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