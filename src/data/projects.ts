export type Project = {
  titulo: string;
  descricao: string;
  img: string;
  categoria: "Delivery" | "Restaurante" | "Lojas" | "Petshop" | "Serviços";
  link?: string; // não é obrigatório
};

export const projects: Project[] = [
  {
    titulo: "Site institucional - Superficie Pura",
    descricao: "Fornecemos orientação jurídica com profissionalismo e total transparência! Auxiliamos você em demandas: familiares etc...",
    img: "/img/projetos/superficiepura.jpeg",
    categoria: "Serviços",
    link: "https://superficiepura.com.br/",
  },
  {
    titulo: "Portifólio + Site - Steinntz Advogados",
    descricao: "Fornecemos orientação jurídica com profissionalismo e total transparência! Auxiliamos você em demandas: familiares etc...",
    img: "/img/projetos/steinntz.jpeg",
    categoria: "Serviços",
    link: "https://steinntz.adv.br/",
  },
  {
    titulo: "Onpage - RS Service Electric",
    descricao: "Empresa de serviços elétricos residenciais e comerciais.",
    img: "/img/projetos/rsserviceelectric.jpeg",
    categoria: "Serviços",
    link: "https://rsserviceelectric.com.br",
  },
  {
    titulo: "Pagina de venda - Como Lotar sua Agenda",
    descricao: "Pagina de vendas para Ebook de Como Lotar sua Agenda de Clientes, para pintores residenciais.",
    img: "/img/projetos/como-lotar-agenda.jpeg",
    categoria: "Lojas",
    link: "https://claitonklein.com.br",
  },
  {
    titulo: "Onpage - Mecânica automotiva",
    descricao: "Oficina especializada em Funilaria, Pintura, Martelinho de Ouro, Polimento e Cristalização.",
    img: "/img/projetos/nova-alianca.jpeg",
    categoria: "Serviços",
    link: "https://nova-alianca.pages.dev/",
  },
  {
    titulo: "Site institucional - StarMot",
    descricao: "Soluções ágeis e seguras para locação de empilhadeiras, carga, descarga e remoção.",
    img: "/img/projetos/starmot.jpeg",
    categoria: "Serviços",
    link: "https://starmot.pages.dev/",
  },
  {
    titulo: "Cardapio + Site - JL Marmitex",
    descricao: "Na JL Marmitex você encontra pratos caseiros feitos com carinho, ingredientes selecionados e aquele tempero de casa de vó.",
    img: "/img/projetos/jlmarmitex.jpeg",
    categoria: "Delivery",
    link: "https://jlmarmitex.pages.dev/",
  },
];
