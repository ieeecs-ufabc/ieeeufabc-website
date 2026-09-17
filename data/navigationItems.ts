export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export type HeaderNavigationItem =
  | NavigationItem
  | {
      id: string;
      label: string;
      children: readonly NavigationItem[];
    };

export const homeHeaderNavigationItems: readonly HeaderNavigationItem[] = [
  {
    id: "inicio",
    label: "Início",
    href: "/#inicio",
  },
  {
    id: "ramo",
    label: "O Ramo",
    href: "/#ramo",
  },
  {
    id: "capitulos",
    label: "Capítulos",
    children: [
      {
        id: "computer-society",
        label: "Computer Society",
        href: "/capitulos/computer-society#computer-society",
      },
    ],
  },
  {
    id: "diretoria",
    label: "Diretoria",
    href: "/#diretoria",
  },
  {
    id: "faca-parte",
    label: "Faça parte",
    href: "/#faca-parte",
  },
];

export const navigationItems: readonly NavigationItem[] = [
  {
    id: "inicio",
    label: "Início",
    href: "#inicio",
  },
  {
    id: "ramo",
    label: "O Ramo",
    href: "#ramo",
  },
  {
    id: "capitulos",
    label: "Capítulos",
    href: "#capitulos",
  },
  {
    id: "impacto",
    label: "Nosso impacto",
    href: "#nosso-impacto",
  },
  {
    id: "voluntarios",
    label: "Voluntários",
    href: "#voluntarios",
  },
  {
    id: "diretoria",
    label: "Diretoria",
    href: "#diretoria",
  },
  {
    id: "faca-parte",
    label: "Faça parte",
    href: "#faca-parte",
  },
];