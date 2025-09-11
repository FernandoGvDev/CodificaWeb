"use client";

import { motion } from "framer-motion";

const beneficios = [
  {
    title: "Sites modernos e responsivos",
    description: "Seu site bonito e rápido em qualquer dispositivo.",
  },
  {
    title: "Mais clientes e vendas",
    description: "Estratégias digitais para atrair e converter.",
  },
  {
    title: "Tráfego pago estratégico",
    description: "Campanhas direcionadas para resultados reais.",
  },
  {
    title: "Suporte próximo e humano",
    description: "Acompanhamento dedicado sempre que precisar.",
  },
  {
    title: "Soluções sob medida",
    description: "Projetos criados de acordo com as necessidades do seu negócio.",
  },
  {
    title: "Tecnologia atualizada",
    description: "Usamos ferramentas modernas, seguras e escaláveis.",
  },
];

const BeneficiosFlow = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            A jornada com a <span className="text-blue-600">Codifica</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            Cada passo traz benefícios que impulsionam o seu negócio.
          </p>
        </div>

        {/* Desktop: Flow horizontal */}
        <div className="hidden md:flex relative items-center justify-center">
          <svg
            viewBox="0 0 1000 200"
            className="absolute w-full h-64"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 100 Q 250 0, 500 100 T 950 100"
              fill="transparent"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="8 8"
              className="animate-[dash_300s_linear_infinite]"
            />
          </svg>

          <div className="flex justify-between w-full relative">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white shadow-xl rounded-xl p-6 w-56 text-center border-t-4 border-blue-500"
              >
                {/* Ponto conectado */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>

                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {beneficio.title}
                </h3>
                <p className="text-gray-600 text-sm">{beneficio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Timeline vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500/30"></div>

          <div className="space-y-10">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Ponto */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-blue-500 rounded-full shadow-md animate-pulse"></div>

                {/* Card */}
                <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {beneficio.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animação do traço no desktop */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
};

export default BeneficiosFlow;
