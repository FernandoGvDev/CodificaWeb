'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { contatos } from '../../data/contatos';

export default function WhatsAppCTA() {
  return (
    <section className="relative bg-[#0f172a] py-20 px-6 text-center">
      
      {/* Pontos de luz decorativos */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 z-99 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 z-99 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Pronto para impulsionar seu negócio?
        </h2>

        <p className="text-white/80 text-lg md:text-xl mb-10">
          Converse com um especialista e descubra como sua presença digital pode gerar resultados reais.
        </p>

        <motion.a
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={`https://wa.me/55${contatos.whatsapp}?text=Olá! Quero impulsionar meu negócio com a Codifica Web.`}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg md:text-xl font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all"
        >
          <FaWhatsapp className="w-6 h-6" />
          Fale com um especialista
        </motion.a>
      </motion.div>
    </section>
  );
}
