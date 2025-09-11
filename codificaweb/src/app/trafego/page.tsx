// src/app/trafego/page.tsx
"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart2,
  TrendingUp,
  Target,
  Users,
  Sparkles,
} from "lucide-react";

const beneficiosTrafego = [
  "Mais clientes chegando até você",
  "Campanhas otimizadas para vender mais",
  "Controle total do seu investimento",
  "Relatórios detalhados de desempenho",
  "Resultados rápidos e mensuráveis",
];

const servicosIncluidos = [
  { titulo: "Campanhas Google Ads", desc: "Apareça no topo do Google.", icon: BarChart2 },
  { titulo: "Facebook & Instagram Ads", desc: "Alcance seu público nas redes.", icon: Users },
  { titulo: "Segmentação Precisa", desc: "Seu anúncio para quem realmente importa.", icon: Target },
  { titulo: "Otimização Constante", desc: "Campanhas ajustadas para melhores resultados.", icon: TrendingUp },
];

const planos = [
  {
    nome: "Plano Inicial",
    preco: "R$ 179/mês",
    descricao: "Ideal para testar anúncios e alcançar novos clientes",
    inclui: [
      "Configuração de até 2 campanhas",
      "Análise de público-alvo",
      "Relatórios mensais",
    ],
  },
  {
    nome: "Plano Profissional",
    preco: "R$ 780/mês",
    descricao: "Para empresas que querem crescer rápido",
    destaque: true,
    inclui: [
      "Configuração de até 5 campanhas",
      "Otimização diária",
      "Relatórios detalhados semanais",
      "Suporte prioritário",
    ],
  },
  {
    nome: "Plano Premium",
    preco: "R$ 1.299/mês",
    descricao: "Máxima performance e resultados",
    inclui: [
      "Campanhas ilimitadas",
      "Gestão completa de anúncios",
      "Relatórios detalhados diários",
      "Consultoria estratégica",
      "Suporte VIP 24/7",
    ],
  },
];

export default function TrafegoPage() {
  return (
    <div className="bg-white text-gray-800 relative overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="bg-blue-700 text-white pt-32 md:pt-40 pb-20 text-center relative z-10">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Tráfego Pago <span className="text-pink-400">Profissional</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg max-w-2xl mx-auto"
        >
          Atraia clientes rapidamente com campanhas otimizadas para sua empresa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20informações%20sobre%20Tráfego%20Pago."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#planos"
            className="border border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Ver Planos
          </a>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-blue-600"
        >
          Por que investir em Tráfego Pago?
        </motion.h2>
        <ul className="space-y-3">
          {beneficiosTrafego.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="text-green-500" /> {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Serviços inclusos */}
      <section className="bg-gray-50 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-green-600"
          >
            O que está incluso no serviço
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servicosIncluidos.map((servico, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
              >
                <servico.icon className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg">{servico.titulo}</h3>
                <p className="text-gray-600 mt-2">{servico.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-gray-100 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-green-600"
          >
            Nossos Planos de Tráfego Pago
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                className={`p-6 rounded-2xl shadow-lg border transition relative ${
                  plano.destaque ? "border-pink-500 bg-white" : "bg-white"
                }`}
              >
                {plano.destaque && (
                  <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    Mais Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-blue-600">{plano.nome}</h3>
                <p className="text-xl font-semibold mt-2 text-green-600">{plano.preco}</p>
                <p className="text-gray-600 mt-2">{plano.descricao}</p>
                <ul className="mt-4 space-y-2 text-left">
                  {plano.inclui.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Tenho%20interesse%20no%20${encodeURIComponent(plano.nome)}.`}
                  target="_blank"
                  className="block mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl transition"
                >
                  Quero esse plano
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-20 px-6 md:px-0 text-center relative z-10"
      >
        <Sparkles className="mx-auto w-10 h-10 mb-4 text-pink-400" />
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Quer atrair clientes de verdade?
        </h2>
        <p className="mb-6 text-gray-600">
          A Codifica Web cria campanhas de tráfego pago otimizadas para vender mais.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20começar%20campanhas%20de%20Tráfego%20Pago."
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition"
        >
          Fale agora com a gente
        </a>
      </motion.section>

      <Footer />
    </div>
  );
}