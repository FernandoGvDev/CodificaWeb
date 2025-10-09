// src/components/BeneficiosFlow.tsx
import { motion } from "framer-motion";

const beneficios = [
  {
    title: "Sites modernos e responsivos",
    description:
      "Tenha um site bonito, rápido e funcional em qualquer dispositivo, transmitindo profissionalismo e confiabilidade.",
  },
  {
    title: "Mais clientes e vendas",
    description:
      "Transforme visitantes em clientes usando estratégias digitais que aumentam sua conversão e faturamento.",
  },
  {
    title: "Tráfego pago estratégico",
    description:
      "Campanhas inteligentes direcionadas para o público certo, garantindo resultados reais e retorno sobre investimento.",
  },
  {
    title: "Suporte próximo e humano",
    description:
      "Acompanhamento dedicado com respostas rápidas e soluções personalizadas para sua empresa crescer sem preocupação.",
  },
  {
    title: "Soluções sob medida",
    description:
      "Projetos feitos sob medida, alinhados aos objetivos do seu negócio para gerar resultados concretos e escaláveis.",
  },
  {
    title: "Tecnologia atualizada",
    description:
      "Usamos ferramentas modernas, seguras e escaláveis para manter seu negócio à frente da concorrência.",
  },
];

const BeneficiosFlow: React.FC = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      aria-label="Benefícios de criar seu site ou sistema com a Codifica Web"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-100 mb-4">
            A jornada de sucesso com a{" "}
            <span className="text-emerald-500">Codifica Web</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Cada passo da nossa parceria gera benefícios reais: mais clientes, vendas e destaque no mercado.
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
              stroke="#10B981"
              strokeWidth="3"
              strokeDasharray="8 8"
              className="animate-dash"
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
                className="relative bg-gradient-to-b from-blue-800 to-blue-950 shadow-2xl rounded-xl p-6 w-56 text-center border-t-4 border-emerald-500 hover:shadow-emerald-400/50 transition-shadow duration-500"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full shadow-lg animate-pulse"></div>
                <h3 className="font-bold text-lg mb-2 text-gray-100">
                  {beneficio.title}
                </h3>
                <p className="text-gray-200 text-sm">{beneficio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Timeline vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-emerald-500/30"></div>

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
                <div className="absolute left-0 top-2 w-6 h-6 bg-emerald-500 rounded-full shadow-md animate-pulse"></div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-950 shadow-2xl rounded-xl p-6 border-l-4 border-emerald-500 hover:shadow-emerald-400/50 transition-shadow duration-500">
                  <h3 className="font-bold text-lg text-gray-100">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{beneficio.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosFlow;
