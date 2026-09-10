import Image from "next/image"
import { chapterItems } from "@/data/chapters"

export function ChaptersSection() {
    return (
        <section>
            <section
                className="scroll-mt-16 bg-white px-6 py-20 sm:px-8 sm:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <header className="mx-auto w-full max-w-220.5 text-center">
                        <h2
                            id="board-title"
                            className="text-3xl font-semibold leading-tight tracking-tight text-content-primary sm:text-4xl"
                        >
                            Conheça Nossos Capítulos
                        </h2>

                        <p className="mt-4 text-base font-normal leading-7 text-content-secondary sm:text-lg lg:text-2xl lg:leading-9">
                            Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor
                            rhoncus.
                        </p>
                    </header>

                    <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-10 lg:gap-y-16">
                        {chapterItems.map((chapter) => (
                            <li key={chapter.id} className="text-center">
                                <div className="relative mx-auto h-28 w-28 overflow-hidden sm:h-36 sm:w-36">
                                    <Image
                                        src={chapter.image}
                                        alt={`Retrato de ${chapter.name}`}
                                        fill
                                        sizes="auto, auto   "
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="mt-4 text-base font-bold leading-7 text-content-primary md:text-xl">
                                    {chapter.name}
                                </h3>

                                <p className="mt-1 text-base font-normal leading-7 text-content-secondary md:text-xl">
                                    {chapter.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
    )
}