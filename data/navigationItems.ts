export type NavigationItem = {
    id: string;
    label: string;
    href: string;
};

export const navigationItems: NavigationItem[] = [
    {
        id: 'inicio',
        label: "Início",
        href: "#inicio"
    },
    {
        id: 'ramo',
        label: "O Ramo",
        href: "#ramo"
    },
    {
        id: 'capitulos',
        label: "Capítulos",
        href: "#capitulos"
    },
    {
        id: 'impacto',
        label: "Nosso impacto",
        href: "#nosso-impacto"
    },
    {
        id: 'voluntarios',
        label: "Voluntários",
        href: "#voluntarios"
    },
    {
        id: 'diretoria',
        label: "Diretoria",
        href: "#diretoria"
    },
    {
        id: 'faca-parte',
        label: "Faça parte",
        href: "#faca-parte"
    },
]

