// src/components/SobreNos.tsx

const SobreNos: React.FC = () => {
  const diferenciais = [
    { title: "Inovação", description: "Soluções criativas e modernas para destacar sua marca." },
    { title: "Qualidade", description: "Projetos com excelência técnica e atenção aos detalhes." },
    { title: "Suporte", description: "Atendimento próximo, rápido e humano sempre que precisar." },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-gray-100"
      aria-label="Sobre a Codifica Web - Quem somos e nossos diferenciais"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Imagem */}
        <div className="w-full md:w-1/2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/img/mascote.png"
            alt="Mascote da Codifica Web"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-100">
            Sobre <span className="text-emerald-500">Codifica Web</span>
          </h2>

          <p className="text-gray-300 md:text-lg">
            Na <strong>Codifica Web</strong>, transformamos ideias em soluções digitais que geram resultados reais. Criamos sites modernos, sistemas inteligentes e experiências online que conquistam clientes.
          </p>

          <p className="text-gray-300 md:text-lg">
            Nosso objetivo é impulsionar negócios, aumentar vendas e fortalecer sua marca. Cada projeto é único, pensado para surpreender e encantar o usuário.
          </p>

          {/* Diferenciais */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            {diferenciais.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 p-6 rounded-2xl shadow-lg text-center"
              >
                <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-gray-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
