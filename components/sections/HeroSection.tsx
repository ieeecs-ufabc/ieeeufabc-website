import Image from "next/image";

export function HeroSection() {
    return (
        <section className="flex min-h-screen flex-col items-center px-6 py-12">
            <div className="flex flex-col items-center gap-24 max-w-6xl w-full">


                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16 w-full">

                    <Image
                        src="/images/logos/ieee-logo-hero.svg"
                        alt="IEEE"
                        width={429}
                        height={131}
                        className="w-full max-w-107.25 h-auto object-contain sm:w-107.25 sm:h-32.75"
                        priority
                    />

                    <div className="hidden sm:block h-61.75 lg:h-61.5 w-2.5 bg-ieee-blue rounded-full shrink-0" />

                    <Image
                        src="/images/logos/ieee-ufabc-logo-hero.svg"
                        alt="IEEE UFABC"
                        width={526}
                        height={246}
                        className="w-full max-w-131.5 h-auto object-contain sm:w-131.5 sm:h-61.5"
                        priority
                    />

                </div>

                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-ieee-blue leading-snug sm:leading-tight max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    eget porta ligula.
                </h1>

            </div>
        </section>
    );
}