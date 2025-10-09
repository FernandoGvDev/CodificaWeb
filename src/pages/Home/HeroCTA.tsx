// src/components/HeroCTA.tsx
import { motion } from "framer-motion";

const HeroCTA: React.FC = () => {
  const whatsappLink = "https://wa.me/51991488088";

  return (
    <section
      className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden gap-6 bg-gradient-to-r from-black via-blue-950 to-black border-2 border-blue-600 rounded-4xl mt-20 mb-20 mx-4 md:mx-8 lg:mx-16"
      aria-label="Chamada para ação - Aumente suas vendas e destaque sua marca"
    >
      {/* Título principal */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-100 mb-4 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Leve seu <span className="text-emerald-500">negócio</span> para outro nível
      </motion.h1>

      {/* Subtítulo persuasivo */}
      <motion.p
        className="text-gray-300 md:text-xl mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Conquiste mais clientes, aumente suas vendas e fortaleça sua marca online com soluções digitais modernas, rápidas e confiáveis.
      </motion.p>

      {/* Botões CTA */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* WhatsApp */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl md:text-2xl rounded-full shadow-2xl overflow-hidden transition-transform duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(16,185,129,0.6)" }}
          whileTap={{ scale: 0.95 }}
          aria-label="Fale conosco no WhatsApp e aumente suas vendas"
        >
          Fale conosco no WhatsApp
          {/* Glow animado */}
          <motion.span
            className="absolute inset-0 rounded-full bg-green-400 opacity-20"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.a>

      </div>
    </section>
  );
};

export default HeroCTA;
