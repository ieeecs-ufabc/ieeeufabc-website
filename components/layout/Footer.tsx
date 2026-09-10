import Image from "next/image"
import { navigationItems } from '@/data/navigationItems'

const socialMedias = [
    {
        image: "/images/social-media/facebook.svg",
        label: "Facebook",
        href: "#facebook", /*Link da pagina */
    },
    {
        image: "/images/social-media/instagram.svg",
        label: "Instagram",
        href: "#instagram", /*Link da pagina */
    },
    {
        image: "/images/social-media/linkedin.svg",
        label: "Linkedin",
        href: "#linkedin", /*Link da pagina */
    },
    {
        image: "/images/social-media/twitter.svg",
        label: "Twitter",
        href: "#twitter", /*Link da pagina */
    }
]

export function Footer() {
    return (
        <footer className="bg-ieee-blue text-white py-12 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Seção Principal (Esquerda e Direita) */}
                <div className="flex flex-col md:flex-row justify-between gap-10 items-start">

                    {/* Lado esquerdo do footer */}
                    <div className="max-w-xs space-y-4">
                        <Image
                            src="/images/logos/ieee-ufabc-logo.svg"
                            alt="IEEE UFABC"
                            width={160}
                            height={60}
                            className="h-auto w-40"
                        />
                        <p className="text-sm leading-snug text-white/90">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus turpis, aliquam in nibh vitae, volutpat malesuada libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </div>

                    {/* Lado direito do footer */}
                    <div className="flex flex-col sm:flex-row gap-12 md:gap-24">

                        {/* Mapa do Site */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Mapa do Site</h2>
                            <ul className="space-y-2 text-sm text-white/90">
                                {navigationItems.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.href} className="hover:underline transition-colors">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Redes Sociais */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Redes Sociais</h2>
                            <ul className="flex items-center gap-3">
                                {socialMedias.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="hover:opacity-80 transition-opacity">
                                            <Image
                                                src={item.image}
                                                alt={item.label}
                                                width={36}
                                                height={36}
                                                className="w-9 h-9"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-white/30 my-8" />

                {/* Copyright */}
                <p className="text-xs text-white/80">
                    © 2026 IEEE UFABC. All rights reserved.
                </p>

            </div>
        </footer>
    )
}