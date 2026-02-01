'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  MessageCircle
} from 'lucide-react';

const funcionalidades = [
  {
    icon: Globe,
    title: 'Presença profissional na internet',
    description: 'Seu negócio visível 24h por dia, transmitindo confiança desde o primeiro acesso.'
  },
  {
    icon: Smartphone,
    title: '100% responsivo',
    description: 'Funciona perfeitamente em celular, tablet e computador.'
  },
  {
    icon: Zap,
    title: 'Carregamento rápido',
    description: 'Sites leves e otimizados para não perder visitantes.'
  },
  {
    icon: Search,
    title: 'Preparado para o Google (SEO)',
    description: 'Estrutura pensada para aparecer melhor nas buscas.'
  },
  {
    icon: MessageCircle,
    title: 'Integração com WhatsApp',
    description: 'Contato fácil para o cliente falar com você em um clique.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e estabilidade',
    description: 'Tecnologia moderna e confiável para seu negócio.'
  }
];

export default function CTAfuncionalidades() {
  return (
    <section className="bg-[#0f172a] py-24 px-6 relative">
       {/* Pontos de luz decorativos */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 z-99 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 z-99 rounded-full blur-[140px]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Quer saber quanto custa um desenvolvimento de site profissional?
          </h2>

          <p className="text-white/70 mb-8 max-w-md">
            Cada projeto é pensado de forma estratégica para gerar resultados reais,
            não apenas um site bonito.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-white font-medium hover:bg-emerald-600 transition"
          >
            Solicitar orçamento
          </a>
        </motion.div>

        {/* Lista de funcionalidades */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {funcionalidades.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-emerald-400">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
