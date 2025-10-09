// src/components/Servicos.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { servicos } from "../../data/servicos";

const Servicos: React.FC = () => {
  const navigate = useNavigate();

  // 🔹 Filtra apenas sites e sistemas
  const servicosFiltrados = servicos.filter(
    (s) => s.id === "sites" || s.id === "sistemas"
  );

  return (
    <section
      className="py-14 pb-20 bg-gradient-to-r from-black via-blue-950 to-black relative overflow-hidden border-2 border-blue-600 rounded-4xl mt-20 mb-20 mx-4 md:mx-8 lg:mx-16"
      aria-label="Serviços profissionais de desenvolvimento de sites e sistemas"
    >
      {/* Título da seção com SEO */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-100 mb-4"
        >
          Nossos Serviços Digitais
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 md:text-lg"
        >
          Transformamos ideias em soluções digitais que aumentam vendas, melhoram a eficiência e destacam sua marca no mercado.
        </motion.p>
      </div>

      {/* Grid de serviços */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2">
        {servicosFiltrados.map((servico, index) => (
          <motion.div
            key={servico.id}
            initial={{ opacity: 0, y: 80, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="group relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform-gpu hover:rotate-1 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-500"
          >
            {/* Imagem */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={
                  servico.id === "sites"
                    ? "/img/site.jpg"
                    : "/img/sistema.jpg"
                }
                alt={`Serviço de ${servico.titulo} - Codifica Web`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col flex-1 relative z-10">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-3 text-blue-200"
              >
                {servico.titulo}
              </motion.h3>
              <p className="text-white/90 flex-1 mb-6 text-sm md:text-base">
                {servico.descricao} <span className="font-semibold">Transforme sua ideia em resultados reais e aumente suas vendas hoje mesmo!</span>
              </p>

              <button
                onClick={() => navigate(`/${servico.id}`)}
                className="mt-auto bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Saiba Mais
              </button>
            </div>

            {/* Efeitos visuais para UI dinâmica */}
            <motion.div
              className="absolute w-3 h-3 bg-white rounded-full top-6 left-6 opacity-40"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-yellow-300 rounded-full bottom-8 right-8 opacity-50"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
