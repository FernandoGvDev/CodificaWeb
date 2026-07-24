export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Superfície Pura',
    description: 'Site moderno marmoraria com foco em portfólio de produtos.',
    image: '/img/projetos/superficiepura.png',
    url: 'https://superficiepura.com.br',
  },
  {
    id: 2,
    name: 'Gomes Arquitetura&Engenharia',
    description: 'Site institucional para escritório de arquitetura e engenharia, com projetos complementares.',
    image: '/img/projetos/gomesarquiteturaengenharia.png',
    url: 'https://gomesarquiteturaengenharia.com.br',
  },
  {
    id: 3,
    name: 'Marmoraria Krei',
    description: 'Site profissional para marmoraria com foco em conversão.',
    image: '/img/projetos/marmorariakrei.png',
    url: 'https://marmorariakrei.com.br',
  },
  {
    id: 4,
    name: 'Steinntz Advogados',
    description: 'Presença digital moderna para escritório de advocacia com design responsivo.',
    image: '/img/projetos/steinnz.png',
    url: 'https://steinntz.adv.br/',
  },
  {
    id: 5,
    name: 'Móveis Mello',
    description: 'Site institucional elegante para empresa de móveis.',
    image: '/img/projetos/moveismello.png',
    url: 'https://moveismello.com.br',
  },
  {
    id: 6,
    name: 'Rs Service Eletric',
    description: 'Landing page focada em serviços de eletricista.',
    image: '/img/projetos/rsservice.png',
    url: 'https://rsserviceelectric.com.br/',
  },
  {
    id: 7,
    name: 'StarMot',
    description: 'Site institucional empresa de motor com design moderno.',
    image: '/img/projetos/starmot.png',
    url: 'https://starmotmotor.com.br/',
  },
  {
    id: 8,
    name: 'Claiton Klein',
    description:'Onpage venda de Ebooks com design atrativo e foco em conversão.',
    image: '/img/projetos/claitonklein.png',
    url: 'https://claitonklein.com.br/',
  }
];