"use client";

import { motion } from "framer-motion";

const HeroCTA = () => {
  const whatsappLink = "https://wa.me/51991488088";

  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Título */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Leve seu <span className="text-blue-600">negócio</span> para outro nível
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-600 md:text-xl mb-12 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Conecte-se com seus clientes, aumente suas vendas e destaque sua marca online com soluções digitais modernas.
      </motion.p>

      {/* Botão CTA */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-12 py-5 bg-blue-500 text-white font-bold text-xl md:text-2xl rounded-full shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59,130,246,0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        Fale conosco no WhatsApp
        {/* Glow animado */}
        <motion.span
          className="absolute inset-0 rounded-full bg-blue-400 opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.a>
    </section>
  );
};

export default HeroCTA;
