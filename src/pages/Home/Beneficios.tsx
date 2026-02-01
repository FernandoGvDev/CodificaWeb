'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Share2,
  MapPin,
  Search,
  ShieldCheck,
  Coffee,
  ThumbsUp,
} from 'lucide-react';

const beneficios = [
  {
    icon: Phone,
    title: 'Integração com WhatsApp',
    description: 'Converse facilmente com seus clientes direto pelo site.',
  },
  {
    icon: Share2,
    title: 'Redes Sociais',
    description: 'Conecte seu site às principais redes sociais.',
  },
  {
    icon: MapPin,
    title: 'Google Maps',
    description: 'Mostre a localização da sua empresa com precisão.',
  },
  {
    icon: Search,
    title: 'SEO Avançado',
    description: 'Otimize seu site para ser encontrado no Google.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    description: 'Sites seguros com HTTPS e proteção contra ataques.',
  },
  {
    icon: Coffee,
    title: 'Suporte Dedicado',
    description: 'Atendimento rápido para resolver qualquer problema.',
  },
  {
    icon: ThumbsUp,
    title: 'Design Profissional',
    description: 'Layouts modernos e atraentes que impressionam.',
  },
];

export default function Beneficios() {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Benefícios com <span className="text-blue-400">CodificaWeb</span>
        </motion.h2>

        <ul className="space-y-6 text-left">
          {beneficios.map((b, index) => {
            const Icon = b.icon;
            return (
              <motion.li
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-gray-300 text-sm">{b.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
