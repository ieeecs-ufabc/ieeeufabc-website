export type Opportunity = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  chapter: string;
  image: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "opportunity-1",
    title: "Letramento Digital - Processo Seletivo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
    deadline: "Inscrições até 02/08",
    chapter: "Computer Society",
    image: "/images/opportunities/computer-society.png",
  },
  {
    id: "opportunity-2",
    title: "Letramento Digital - Processo Seletivo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
    deadline: "Inscrições até 02/08",
    chapter: "Computer Society",
    image: "/images/opportunities/computer-society.png",
  },
  {
    id: "opportunity-3",
    title: "Letramento Digital - Processo Seletivo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum euismod urna.",
    deadline: "Inscrições até 02/08",
    chapter: "Computer Society",
    image: "/images/opportunities/computer-society.png",
  },
];