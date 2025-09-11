"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SobreNos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Imagem */}
        <motion.div
          className="w-full md:w-1/2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/img/mascote.png"
            alt="Codifica Web"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Sobre <span className="text-blue-600">Codifica Web</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            Somos uma empresa apaixonada por tecnologia e inovação. Criamos soluções digitais personalizadas, desde sites modernos até sistemas inteligentes, sempre com foco em resultados e na experiência do usuário.
          </p>
          <p className="text-gray-600 md:text-lg">
            Nosso objetivo é ajudar empresas a se destacarem online, aumentando vendas, engajamento e credibilidade. Cada projeto é único e pensado para superar expectativas.
          </p>

          {/* Diferenciais */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {[
              { title: "Inovação", description: "Soluções criativas e modernas." },
              { title: "Qualidade", description: "Projetos com excelência técnica." },
              { title: "Suporte", description: "Atendimento rápido e humano." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-blue-50 p-4 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h4 className="font-bold text-lg text-blue-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNos;
