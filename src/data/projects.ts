export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  project: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "TPS Geotecnia",
    description: "Site em React para empresa TPS Geotecnia",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://tpsgeotecnia.com.br/",
    project: "landing",
  },
  {
    id: "2",
    title: "Geofore",
    description: "Site em next para empresa Geofore",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://geofore.com.br/",
    project: "landing",
  },
  {
    id: "3",
    title: "Aghora Engenharia",
    description: "Site em React para empresa Aghora Engenharia",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "https://aghoraengenharia.com.br/",
    project: "landing",
  },
  {
    id: "4",
    title: "coursecompletions",
    description: "Plugin Moodle para analisar possiveis evasões",
    tech: ["PHP"],
    link: "https://github.com/Broninn/local_coursecompletions",
    project: "moodle",
  },
  {
    id: "5",
    title: "API de Restaurante",
    description: "API REST para gerenciar pedidos de restaurante",
    tech: ["TypeScript", "Node.js", "Express", "Knex", "SQLite", "Zod", "TSX"],
    link: "https://github.com/Broninn/api-restaurante",
    project: "api",
  },
];
