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

export const footerNavigationItems: readonly NavigationItem[] = [
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
    id: "computer-society",
    label: "Computer Society",
    href: "/capitulos/computer-society#computer-society",
  },
  {
    id: "impacto",
    label: "Nosso impacto",
    href: "/#nosso-impacto",
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

  /* Adicionar o trecho "Voluntários" após aprovação do PR pendente */
  /*
  {
    id: "voluntarios",
    label: "Voluntários",
    href: "/#voluntarios",
  },
  */
];