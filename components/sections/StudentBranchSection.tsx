import Image from "next/image";

export function StudentBranchSection() {
  return (
    <section
      id="ramo"
      aria-labelledby="student-branch-title"
      className="scroll-mt-16"
    >
      <div className="grid md:grid-cols-2">
        <div className="flex items-center bg-[#00629B] px-6 py-12 text-white sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-xl md:mx-0">
            <h2
              id="student-branch-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              O Ramo Estudantil IEEE
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-white/90">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                semper risus at leo auctor, ac cursus erat cursus. Cras eu diam
                a dolor dignissim venenatis lacinia sit amet arcu. Morbi et orci
                fermentum, ultrices leo vitae, consequat risus. Vestibulum in
                faucibus sapien, et lacinia eros.
              </p>

              <p>
                Donec vel sapien congue erat auctor cursus. Proin in dignissim
                velit. Vivamus ornare imperdiet egestas. Phasellus tempus
                iaculis purus, eu consectetur nibh venenatis a. Praesent sed est
                ultricies, fringilla nulla id, mattis augue. Ut ut volutpat
                libero, eget rutrum erat. Donec id massa sit amet mauris
                pulvinar vehicula. Nullam pharetra lectus vitae vestibulum
                efficitur.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-72 sm:min-h-96 md:min-h-115">
          <Image
            src="/images/branch/ufabc-campus.png"
            alt="Campus da Universidade Federal do ABC"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
