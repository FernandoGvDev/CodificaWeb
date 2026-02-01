// src/components/HeroCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { contatos } from '../../data/contatos';

const HeroCTA: React.FC = () => {
  const whatsappLink = `https://wa.me/55${contatos.whatsapp}?text=Olá! Quero impulsionar meu negócio com a Codifica Web.`;

  return (
    <section
      className="relative py-24 px-6"
      style={{
        background: 'linear-gradient(to top, #e5e7eb 50%, #0f172a 50%)', // blue-950 / gray-200
      }}
      aria-label="Chamada para ação - Solicitar orçamento de site profissional"
    >
      <div className="max-w-5xl mx-auto text-center bg-white rounded-3xl shadow-xl px-8 md:px-16 py-16">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        >
          Leve seu <span className="text-emerald-500">negócio</span> para outro nível
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 md:text-xl max-w-2xl mx-auto mb-10"
        >
          Sites profissionais, rápidos e pensados para gerar mais contatos,
          credibilidade e oportunidades para sua empresa.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-10 py-5 text-lg md:text-xl font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition"
          aria-label="Fale conosco no WhatsApp"
        >
          Falar com um especialista
        </motion.a>

        {/* Redução de risco */}
        <p className="text-sm text-gray-500 mt-6">
          Atendimento direto pelo WhatsApp • Orçamento sem compromisso
        </p>
      </div>
    </section>
  );
};

export default HeroCTA;
