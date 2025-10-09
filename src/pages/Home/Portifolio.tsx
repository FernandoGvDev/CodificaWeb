// src/components/Portfolio.tsx
import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { motion } from "framer-motion";

const categorias: string[] = [
  "Todos",
  "Delivery",
  "Restaurante",
  "Lojas",
  "Petshop",
  "Serviços",
];

const Portfolio: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos");

  const projetosFiltrados: Project[] =
    categoriaAtiva === "Todos"
      ? projects
      : projects.filter((proj: Project) => proj.categoria === categoriaAtiva);

  return (
    <section
      className="py-16 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-100"
      aria-label="Portfólio de projetos de sites e sistemas Codifica Web"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Meus <span className="text-emerald-500">Projetos</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Confira alguns projetos que transformaram a presença online de negócios de diversos segmentos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                  categoriaAtiva === cat
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projetosFiltrados.map((proj, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-b from-blue-800 to-blue-950 rounded-2xl shadow-xl overflow-hidden transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-emerald-500/50"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Imagem do projeto */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={proj.img}
                  alt={`Projeto ${proj.titulo}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-emerald-500">
                  {proj.titulo}
                </h3>
                <p className="text-gray-300 flex-1 mb-4">{proj.descricao}</p>
                <span className="text-sm text-gray-400 mb-4">{proj.categoria}</span>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
                  >
                    Ver Projeto
                  </a>
                )}
              </div>

              {/* Efeitos decorativos */}
              <motion.div
                className="absolute w-3 h-3 bg-white rounded-full top-4 left-4 opacity-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-emerald-500 rounded-full bottom-4 right-4 opacity-50"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
