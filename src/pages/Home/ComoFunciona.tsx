'use client';

import { motion } from 'framer-motion';
import { Search, Layers, Rocket } from 'lucide-react';

export default function ComoFunciona() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #e5e7eb 50%, #0f172a 50%)', // blue-950 / gray-200
      }}
    >

      {/* Radial central para destaque dos cards */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[80%] h-[80%] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Agência de Sites
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Como Funciona
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Etapa 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-neutral-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              1. Entendimento do Negócio
            </h3>
            <p className="text-white/75 leading-relaxed">
              Conhecemos sua empresa, seus objetivos e o perfil do seu cliente ideal,
              entendendo exatamente o que sua marca precisa transmitir no site.
            </p>
          </motion.div>

          {/* Etapa 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-neutral-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              2. Definição de Funcionalidades
            </h3>
            <p className="text-white/75 leading-relaxed">
              Definimos o que pode ser integrado ao site, como blog, loja virtual,
              sistemas personalizados ou outras funcionalidades que agreguem valor.
            </p>
          </motion.div>

          {/* Etapa 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-neutral-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              3. Briefing e Mão na Obra
            </h3>
            <p className="text-white/75 leading-relaxed">
              Após o alinhamento final, iniciamos o desenvolvimento do site com foco
              em performance, design profissional e SEO, entregando um projeto pronto
              para gerar resultados.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
