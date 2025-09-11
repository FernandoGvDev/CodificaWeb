"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Servico {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

const servicos: Servico[] = [
  {
    title: "SITE",
    description:
      "Desenvolvemos sites modernos, responsivos e rápidos para sua empresa se destacar online.",
    imgSrc: "/img/site.jpg",
    link: "/site",
  },
  {
    title: "TRÁFEGO PAGO",
    description:
      "Impulsione suas vendas com campanhas de anúncios pagas, direcionadas e estratégicas.",
    imgSrc: "/img/trafego.jpg",
    link: "/trafego",
  },
  {
    title: "SISTEMAS",
    description:
      "Criamos sistemas personalizados para otimizar processos e aumentar a produtividade do seu negócio.",
    imgSrc: "/img/sistema.jpg",
    link: "/sistemas",
  },
];

const Servicos: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Título seção */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Nossos Serviços
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 md:text-lg"
        >
          Transformamos ideias em soluções digitais que impulsionam seu negócio.
        </motion.p>
      </div>

      {/* Grid Serviços */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        {servicos.map((servico, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="group relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform-gpu hover:rotate-1 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-500"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-pink-500 to-yellow-400 blur-2xl group-hover:opacity-50 transition duration-500"></div>

            {/* Imagem */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              <Image
                src={servico.imgSrc}
                alt={servico.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col flex-1 relative z-10">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-3"
              >
                {servico.title}
              </motion.h3>
              <p className="text-white/90 flex-1 mb-6">{servico.description}</p>

              <Link href={servico.link}>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 0px 20px rgba(255,255,255,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-300"
                >
                  Saiba Mais
                </motion.button>
              </Link>
            </div>

            {/* Partículas decorativas */}
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
