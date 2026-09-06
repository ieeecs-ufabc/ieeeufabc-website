export function ImpactSection() {
    return (
        <section className="scroll-mt-16 w-full bg-ieee-blue px-6 py-16 text-white flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Nosso Impacto
            </h1>


            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90 font-light">
                Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor rhoncus sollicitudin.
            </p>


            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">

                <div id="impacted-people" className="flex flex-col items-center justify-center space-y-2">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-tight">+10.000</span>
                    <p className="text-base sm:text-lg font-normal text-white/90">Pessoas Impactadas</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2">
                    <span id="completed-projects" className="text-3xl sm:text-4xl font-semibold tracking-tight">+15</span>
                    <p className="text-base sm:text-lg font-normal text-white/90">Projetos Realizados</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2">
                    <span id="courses-taught" className="text-3xl sm:text-4xl font-semibold tracking-tight">+10</span>
                    <p className="text-base sm:text-lg font-normal text-white/90">Cursos Ministrados</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2">
                    <span id="active-members" className="text-3xl sm:text-4xl font-semibold tracking-tight">+50</span>
                    <p className="text-base sm:text-lg font-normal text-white/90">Membros Ativos</p>
                </div>
            </div>
        </section>
    );
}