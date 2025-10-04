"use client";

import { useState } from "react";
import { projects, Project } from "./data/projects";

const categorias = ["Todos", "Delivery", "Restaurante", "Lojas", "Petshop", "Serviços"];

export default function Portfolio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const projetosFiltrados = categoriaAtiva === "Todos"
    ? projects
    : projects.filter((proj: Project) => proj.categoria === categoriaAtiva);

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Meus <span className="text-blue-600">Projetos</span>
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-4 py-2 rounded-full border transition font-medium
                ${categoriaAtiva === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 text-gray-800 hover:bg-blue-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((proj, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
              <img src={proj.img} alt={proj.titulo} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-600">{proj.titulo}</h3>
                <p className="text-gray-700 mt-2">{proj.descricao}</p>
                <span className="text-sm text-gray-500 block mt-2">{proj.categoria}</span>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
