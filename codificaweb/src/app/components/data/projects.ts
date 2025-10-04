export type Project = {
  titulo: string;
  descricao: string;
  img: string;
  categoria: "Delivery" | "Restaurante" | "Lojas" | "Petshop" | "Serviços";
  link?: string; // não é obrigatório
};

export const projects: Project[] = [
  {
    titulo: "Onpage para RS Service Electric",
    descricao: "Empresa de serviços elétricos residenciais e comerciais.",
    img: "/img/projetos/rsserviceelectric.jpeg",
    categoria: "Serviços",
    link: "https://rsserviceelectric.com.br",
  },
  {
    titulo: "Restaurante Japonês",
    descricao: "Site moderno com cardápio e integração com redes sociais.",
    img: "/img/projetos/sabor-japao.jpeg",
    categoria: "Restaurante",
  },
  {
    titulo: "Mecânica automotiva",
    descricao: "Oficina especializada em Funilaria, Pintura, Martelinho de Ouro, Polimento e Cristalização.",
    img: "/img/projetos/nova-alianca.jpeg",
    categoria: "Serviços",
    link: "https://nova-alianca.pages.dev/",
  },
  {
    titulo: "Empilhando Soluções",
    descricao: "Soluções ágeis e seguras para locação de empilhadeiras, carga, descarga e remoção.",
    img: "/img/projetos/locacao.jpeg",
    categoria: "Serviços",
    link: "https://empilhando-solucoes.pages.dev/",
  },
  {
    titulo: "JL Marmitex",
    descricao: "Na JL Marmitex você encontra pratos caseiros feitos com carinho, ingredientes selecionados e aquele tempero de casa de vó.",
    img: "/img/projetos/jlmarmitex.jpeg",
    categoria: "Delivery",
    link: "https://jlmarmitex.pages.dev/",
  },
  {
    titulo: "Steinntz Advogados",
    descricao: "Fornecemos orientação jurídica com profissionalismo e total transparência! Auxiliamos você em demandas: familiares etc...",
    img: "/img/projetos/steinntz.jpeg",
    categoria: "Serviços",
    link: "https://steinntz.adv.br/",
  },
];
