// src/app/servicos/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "SITE",
    description:
      "Criação de sites modernos e responsivos para presença digital sólida e atração de clientes.",
    benefits: [
      "Credibilidade profissional online",
      "Integração com redes sociais",
      "Otimização para conversão",
    ],
    image: "/img/site.jpg",
    page: "/site",
    whatsappMsg:
      "Olá Codifica Web! Quero informações sobre criação de site personalizado.",
  },
  {
    title: "TRÁFEGO PAGO",
    description:
      "Campanhas online estratégicas para gerar leads e aumentar vendas rapidamente.",
    benefits: [
      "Segmentação precisa do público",
      "Resultados mensuráveis",
      "Maior retorno sobre investimento (ROI)",
    ],
    image: "/img/trafego.jpg",
    page: "/trafego",
    whatsappMsg:
      "Olá Codifica Web! Quero informações sobre campanhas de Tráfego Pago.",
  },
  {
    title: "SISTEMAS PERSONALIZADOS",
    description:
      "Desenvolvimento de sistemas sob medida para automatizar processos e gerenciar clientes e estoque.",
    benefits: [
      "Economia de tempo",
      "Decisões baseadas em dados",
      "Redução de erros operacionais",
    ],
    image: "/img/sistema.jpg",
    page: "/sistemas",
    whatsappMsg:
      "Olá Codifica Web! Quero agendar uma reunião para desenvolver um sistema sob medida.",
  },
];

export default function Servicos() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Sites, sistemas e campanhas digitais que geram resultados reais para o seu negócio.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20informações%20sobre%20os%20serviços."
          target="_blank"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Solicite um Orçamento
        </a>
      </section>

      {/* Serviços */}
      <section className="max-w-6xl mx-auto py-24 px-6 space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-between gap-12 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Imagem */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-lg">{service.description}</p>

              <ul className="space-y-2 mt-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Botões */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href={service.page}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition text-center"
                >
                  Saiba mais
                </Link>
                <a
                  href={`https://wa.me/5551991488088?text=${encodeURIComponent(
                    service.whatsappMsg
                  )}`}
                  target="_blank"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Diferenciais */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">Por que escolher a Codifica Web?</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Design Moderno</h4>
            <p>Criação de layouts elegantes, funcionais e otimizados para experiência do usuário.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Suporte Ágil</h4>
            <p>Atendimento rápido e próximo, garantindo que seus projetos estejam sempre atualizados.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Resultados Concretos</h4>
            <p>Foco em métricas e performance para gerar mais vendas e leads para seu negócio.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Quer seu projeto online?</h2>
        <p className="text-lg mb-8">
          Entre em contato e receba uma proposta personalizada da nossa equipe.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20iniciar%20um%20projeto."
          target="_blank"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Fale conosco no WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
