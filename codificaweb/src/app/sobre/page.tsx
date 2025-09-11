// src/app/sobre/page.tsx
"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const timeline = [
  {
    date: "Fevereiro 2025",
    title: "Início da Codifica Web",
    description:
      "Fundamos a Codifica Web com o objetivo de criar sites modernos e soluções digitais para negócios locais.",
  },
  {
    date: "Abril 2025",
    title: "Primeiros Clientes",
    description:
      "Conquistamos nossos primeiros clientes, desenvolvendo sites responsivos e campanhas digitais simples, mas eficientes.",
  },
  {
    date: "Julho 2025",
    title: "Expansão de Serviços",
    description:
      "Adicionamos sistemas personalizados e gerenciamento de tráfego pago aos nossos serviços, atendendo negócios mais complexos.",
  },
  {
    date: "Setembro 2025",
    title: "Reconhecimento Local",
    description:
      "Nossa marca começou a ser reconhecida na cidade, com recomendações de clientes satisfeitos e presença online crescente.",
  },
];

export default function Sobre() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Conheça a história da Codifica Web e como crescemos junto com nossos clientes.
        </p>
      </section>

      {/* Linha do Tempo */}
      <section className="relative max-w-4xl mx-auto px-6 flex-1">
        <div className="relative flex flex-col items-center">

          {/* Linha central */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-blue-600 h-full z-0"></div>

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center mb-16 w-full">
                {/* Lado esquerdo */}
                <div className={`hidden md:block w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  {isLeft && (
                    <div className="inline-block bg-white p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 font-semibold">{item.date}</span>
                      <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                      <p className="mt-2">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Circulo central */}
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-600 border-4 border-white z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {/* Lado direito */}
                <div className={`hidden md:block w-1/2 ${!isLeft ? "pl-8 text-left" : "pr-8 text-right"}`}>
                  {!isLeft && (
                    <div className="inline-block bg-white p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 font-semibold">{item.date}</span>
                      <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                      <p className="mt-2">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Mobile */}
                <div className="md:hidden mt-4 flex flex-col items-center w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md w-full text-center">
                    <span className="text-blue-600 font-semibold">{item.date}</span>
                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bloco final */}
          <div className="relative flex justify-center mt-16 mb-16 w-full">
            <div className="bg-blue-600 text-white p-12 rounded-3xl shadow-xl max-w-lg text-center z-10">
              <h2 className="text-4xl font-bold mb-4">Agora é sua vez de evoluir!</h2>
              <p className="text-lg">
                Junte-se a nós e transforme sua presença digital. Estamos prontos para levar seu negócio para o próximo nível.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
