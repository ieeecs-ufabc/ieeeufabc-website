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
        id: "aerospace-electronic-systems",
        label: "Aerospace and Electronic Systems Society",
        href: "/capitulos/aerospace-electronic-systems",
      },
      {
        id: "computer-society",
        label: "Computer Society",
        href: "/capitulos/computer-society",
      },
      {
        id: "engineering-medicine-biology",
        label: "Engineering in Medicine and Biology Society",
        href: "/capitulos/engineering-medicine-biology",
      },
      {
        id: "electronics-packaging",
        label: "Electronics Packaging Society",
        href: "/capitulos/electronics-packaging",
      },
      {
        id: "power-energy",
        label: "Power & Energy Society",
        href: "/capitulos/power-energy",
      },
      {
        id: "robotics-automation",
        label: "Robotics and Automation Society",
        href: "/capitulos/robotics-automation",
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
