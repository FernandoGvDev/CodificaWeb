'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { contatos } from '../../data/contatos';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] px-6">

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        {/* Logo */}
        <motion.img
          src="/img/logo.png"
          alt="Codifica Web - Desenvolvimento de Sites e SEO"
          className="mx-auto mb-8 mt-15 w-45 md:w-60"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Headline SEO + Conversão */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Sua empresa visível no Google
          <span className="block text-blue-300">
            com sites profissionais
          </span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-lg md:text-2xl text-white/90 mb-6">
          Mais visibilidade, mais contatos e mais oportunidades para o seu negócio
        </h2>

        {/* Micro autoridade */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/85 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            Sites rápidos e responsivos
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            SEO técnico e local
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            Projetos reais para empresas
          </div>
        </div>

        {/* CTA principal */}
        <div className="flex flex-col items-center gap-4">
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/55${contatos.whatsapp}?text=Olá! Quero impulsionar meu negócio com a Codifica Web.`}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all"
          >
            Fale com um especialista
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Redução de risco */}
          <span className="text-sm text-white/70">
            Atendimento direto pelo WhatsApp • Orçamento sem compromisso
          </span>

          {/* CTA secundário */}
          <a
            href="#projetos"
            className="text-sm md:text-base text-blue-300 hover:text-blue-200 transition"
          >
            Ver portfólio
          </a>
        </div>
      </motion.div>
    </section>
  );
}
