export interface Plano {
  titulo: string;
  descricao: string;
  preco?: string; // opcional — pode não ter em "Sob orçamento"
}

export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  beneficios: string[];
  planos: Plano[];
}

export const servicos: Servico[] = [
  {
    id: "sites",
    titulo: "Desenvolvimento de Sites",
    descricao:
      "Criamos sites modernos, rápidos e otimizados para atrair mais clientes e fortalecer sua marca. Ideal para empresas, lojas e profissionais que desejam presença digital com resultado.",
    beneficios: [
      "Layout responsivo e profissional",
      "Otimização SEO",
      "Hospedagem e domínio opcional",
      "Suporte e manutenção",
    ],
    planos: [
      {
        titulo: "Plano Bronze",
        descricao: "Ideal para quem está começando. Site simples com até 2 páginas.",
        preco: "R$ 499",
      },
      {
        titulo: "Plano Prata",
        descricao: "Site profissional com até 6 páginas e design personalizado.",
        preco: "R$ 899",
      },
      {
        titulo: "Plano Ouro",
        descricao: "Site completo com loja virtual, SEO avançado e integrações.",
        preco: "R$ 1499",
      },
    ],
  },
  {
    id: "sistemas",
    titulo: "Desenvolvimento de Sistemas",
    descricao:
      "Criamos sistemas personalizados que otimizam processos e automatizam o dia a dia da sua empresa. Ideal para negócios que buscam soluções sob medida.",
    beneficios: [
      "Painel administrativo completo",
      "Controle de estoque, vendas e relatórios",
      "Integração com API e banco de dados",
      "Interface moderna e intuitiva",
    ],
    planos: [
      {
        titulo: "Sob Orçamento",
        descricao:
          "Cada sistema é único. Entre em contato e conte sua ideia — criaremos uma solução feita sob medida para o seu negócio.",
      },
    ],
  },
];
