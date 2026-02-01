// src/components/SobreNos.tsx
'use client';

import { Lightbulb, Award, Headphones } from 'lucide-react';

const SobreNos: React.FC = () => {
  const diferenciais = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Soluções modernas pensadas para destacar sua marca no digital.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Código limpo, design profissional e atenção aos detalhes.'
    },
    {
      icon: Headphones,
      title: 'Suporte próximo',
      description: 'Atendimento humano, rápido e direto com quem desenvolve.'
    }
  ];

  return (
    <section
      className="bg-[#0f172a] py-24 px-6"
      aria-label="Sobre a Codifica Web"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <div className="relative w-full h-64 md:h-[420px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl">
          <img
            src="/img/perfil.png"
            alt="Mascote da Codifica Web"
            className="w-full h-full object-contain p-6"
            loading="lazy"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Sobre a <span className="text-emerald-400">Codifica Web</span>
          </h2>

          <p className="text-white/70 md:text-lg max-w-xl">
            Desenvolvemos sites e soluções digitais focadas em gerar resultados reais,
            não apenas presença online.
          </p>

          <p className="text-white/70 md:text-lg max-w-xl">
            Cada projeto é pensado estrategicamente para atrair clientes,
            fortalecer sua marca e facilitar o contato.
          </p>

          {/* Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition"
                >
                  <div className="flex justify-center mb-4 text-emerald-400">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h4 className="font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
