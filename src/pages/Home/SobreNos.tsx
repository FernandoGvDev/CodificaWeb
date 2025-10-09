// src/components/SobreNos.tsx
import { motion } from "framer-motion";

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
        <motion.div
          className="w-full md:w-1/2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/mascote.png"
            alt="Mascote da Codifica Web"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
              <motion.div
                key={idx}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 p-6 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="font-bold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-gray-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNos;
