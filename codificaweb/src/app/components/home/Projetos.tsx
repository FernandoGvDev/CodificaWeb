"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projetos = [
  {
    title: "Advocacia Silva",
    description: "Site moderno e profissional para escritórios de advocacia, transmitindo credibilidade e confiança aos clientes.",
    imgSrc: "/img/steinntz.jpeg",
    link: "#",
  },
  {
    title: "Estúdio de Unhas Glam",
    description: "Portfólio online para manicures e estúdios de beleza, mostrando trabalhos, serviços e facilitando agendamentos.",
    imgSrc: "/img/studio.png",
    link: "#",
  },
  {
    title: "Restaurante Sabor & Arte",
    description: "Landing page e cardápio online para restaurantes, destacando pratos, promoções e reservas de forma elegante.",
    imgSrc: "/img/lanchonete.png",
    link: "#",
  },
  {
    title: "Açaíteria Tropical",
    description: "Cardápio digital interativo para açaíterias, com fotos, preços, complementos e promoções, facilitando pedidos online.",
    imgSrc: "/img/acaiteria.jpeg",
    link: "#",
  },
];

const ProjetosSlideFuturista = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projetos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Título */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Nossos <span className="text-blue-600">Projetos</span>
        </h2>
        <p className="text-gray-600 md:text-lg">
          Um portfólio moderno e interativo mostrando nossa criatividade.
        </p>
      </div>

      {/* Slide Desktop */}
      <div className="hidden md:flex items-center justify-center relative space-x-8">
        <button
          onClick={prevProject}
          className="absolute left-0 bg-white/80 rounded-full p-3 shadow-lg hover:bg-white z-10"
        >
          &#8592;
        </button>

        <div className="flex overflow-hidden px-4">
          {projetos.map((projeto, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-72 h-96 bg-white rounded-2xl shadow-2xl flex flex-col cursor-pointer overflow-hidden transition-all duration-500 ${
                  isActive ? "scale-105 z-10" : "scale-90 opacity-60 z-0"
                }`}
                whileHover={{ scale: 1.08 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={projeto.imgSrc}
                    alt={projeto.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{projeto.title}</h3>
                  <p className="text-gray-600 text-sm">{projeto.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={nextProject}
          className="absolute right-0 bg-white/80 rounded-full p-3 shadow-lg hover:bg-white z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Slide Mobile corrigido */}
      <div className="md:hidden mt-12 flex overflow-x-auto space-x-4 px-4 snap-x snap-mandatory">
        {projetos.map((projeto, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-80 flex-shrink-0 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden cursor-pointer snap-start"
          >
            <div className="relative w-full h-48">
              <Image
                src={projeto.imgSrc}
                alt={projeto.title}
                fill
                className="object-cover rounded-t-2xl"
                unoptimized
              />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-center">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{projeto.title}</h3>
              <p className="text-gray-600 text-sm">{projeto.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosSlideFuturista;
