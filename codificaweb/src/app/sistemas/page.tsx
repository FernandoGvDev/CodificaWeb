// src/app/sistemas/page.tsx
"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Users, Layout, Sparkles, Zap, Box, Calendar, ShoppingCart, UserCheck, Truck, BookOpen } from "lucide-react";

const beneficiosSistema = [
  "Soluções 100% personalizadas para o seu negócio",
  "Automatiza processos e economiza tempo",
  "Controle total de informações e dados",
  "Integração com ferramentas e plataformas existentes",
  "Suporte contínuo durante e após o desenvolvimento",
];

const processoSistema = [
  {
    titulo: "Análise das necessidades",
    desc: "Entendemos sua dor, analisamos processos e identificamos oportunidades.",
    icon: Users,
  },
  {
    titulo: "Reunião estratégica",
    desc: "Alinhamos a ideia, discutimos funcionalidades e definimos prioridades.",
    icon: Layout,
  },
  {
    titulo: "Orçamento personalizado",
    desc: "Calculamos investimento de acordo com funcionalidades e complexidade.",
    icon: Zap,
  },
  {
    titulo: "Desenvolvimento sob medida",
    desc: "Criamos o sistema de acordo com o planejamento aprovado.",
    icon: Sparkles,
  },
];

const exemplosSistemas = [
  {
    titulo: "Gestão de Estoque",
    desc: "Controle total de produtos, entradas, saídas e relatórios.",
    icon: Box,
  },
  {
    titulo: "Agendamento Online",
    desc: "Para clínicas, salões ou serviços, com calendário e notificações.",
    icon: Calendar,
  },
  {
    titulo: "Vendas e Caixa",
    desc: "PDV online, integração com pagamentos e relatórios de vendas.",
    icon: ShoppingCart,
  },
  {
    titulo: "CRM de Clientes",
    desc: "Controle de clientes, histórico de atendimento e follow-ups.",
    icon: UserCheck,
  },
  {
    titulo: "Sistema de Delivery",
    desc: "Gestão de pedidos online, entregas e promoções.",
    icon: Truck,
  },
  {
    titulo: "Plataforma Educacional",
    desc: "Gestão de alunos, cursos, notas e certificados.",
    icon: BookOpen,
  },
];

export default function SistemasPage() {
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
          Sistemas Sob Medida <span className="text-pink-400">para seu negócio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg max-w-2xl mx-auto"
        >
          Criamos sistemas exclusivos que resolvem suas necessidades, automatizam processos e aumentam resultados.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20agendar%20uma%20reunião%20para%20desenvolver%20um%20sistema%20sob%20medida."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition"
          >
            Agendar Reunião
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
          className="text-3xl font-bold mb-6 text-blue-600 text-center"
        >
          Por que ter um sistema próprio?
        </motion.h2>
        <ul className="space-y-3 max-w-3xl mx-auto">
          {beneficiosSistema.map((item, index) => (
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

      {/* Processo do serviço */}
      <section className="bg-gray-50 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-green-600"
          >
            Como funciona nosso processo
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {processoSistema.map((passo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <passo.icon className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-600">{passo.titulo}</h3>
                <p className="text-gray-600">{passo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos de sistemas */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-blue-600 text-center"
        >
          Que tipo de sistemas podemos criar?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {exemplosSistemas.map((exemplo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <exemplo.icon className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">{exemplo.titulo}</h3>
              <p className="text-gray-600">{exemplo.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20desenvolver%20um%20sistema%20como%20estes."
            target="_blank"
            className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition"
          >
            Quero algo assim
          </a>
        </motion.div>
      </section>

      {/* CTA final */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-20 px-6 md:px-0 text-center relative z-10"
      >
        <Sparkles className="mx-auto w-10 h-10 mb-4 text-pink-400" />
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Pronto para tirar sua ideia do papel?
        </h2>
        <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
          Agende uma reunião com a Codifica Web, discutiremos seu projeto, ajustaremos a ideia e passaremos um orçamento personalizado.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20agendar%20uma%20reunião%20para%20desenvolver%20um%20sistema%20sob%20medida."
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition"
        >
          Agendar Reunião
        </a>
      </motion.section>

      <Footer />
    </div>
  );
}
