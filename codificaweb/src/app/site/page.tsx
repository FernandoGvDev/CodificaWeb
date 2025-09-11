// src/app/servicos/page.tsx
"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Globe,
    Server,
    Smartphone,
    Headphones,
    Layout,
    Sparkles,
} from "lucide-react";

const beneficiosSite = [
    "Mais credibilidade para o seu negócio",
    "Disponível 24 horas por dia",
    "Facilidade para atrair novos clientes",
    "Maior destaque no Google e redes sociais",
    "Centraliza informações e promoções",
];

const servicosIncluidos = [
    { titulo: "Hospedagem", desc: "Seu site disponível 24h.", icon: Server },
    { titulo: "Domínio", desc: "Endereço próprio na web.", icon: Globe },
    { titulo: "Design Responsivo", desc: "Funciona em celular e computador.", icon: Smartphone },
    { titulo: "Suporte", desc: "Atendimento humano sempre que precisar.", icon: Headphones },
    { titulo: "Personalização", desc: "Layout exclusivo para sua marca.", icon: Layout },
];

const planos = [
    {
        nome: "Plano Essencial",
        preco: "R$ 79/mês",
        descricao: "Ideal para quem está começando",
        inclui: [
            "Hospedagem + Domínio",
            "Criação de até 5 páginas",
            "Integração com WhatsApp",
            "Suporte via chat",
        ],
    },
    {
        nome: "Plano Profissional",
        preco: "R$ 149/mês",
        descricao: "Mais completo para empresas",
        destaque: true,
        inclui: [
            "Hospedagem + Domínio",
            "Criação de até 10 páginas",
            "E-mail profissional",
            "Suporte prioritário",
        ],
    },
    {
        nome: "Plano Premium",
        preco: "R$ 249/mês",
        descricao: "Tudo que sua empresa precisa",
        inclui: [
            "Hospedagem + Domínio",
            "Site ilimitado em páginas",
            "E-mail profissional",
            "Suporte VIP 24/7",
            "Gestão de atualizações",
        ],
    },
];

export default function ServicosPage() {
    return (
        <div className="bg-white text-gray-800 relative overflow-hidden">
            {/* Bolhas animadas no fundo */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"
            />
            <motion.div
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-32 right-10 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-30"
            />

            <Header />

            {/* Hero com animação impactante */}
            <section className="bg-blue-700 text-white pt-32 md:pt-40 pb-20 text-center relative z-10">
                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Criação de Sites{" "}
                    <span className="text-pink-400">Profissionais</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-6 text-lg max-w-2xl mx-auto"
                >
                    Tenha um site moderno, exclusivo e com todo o suporte da Codifica Web
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <a
                        href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site."
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

            {/* Benefícios de ter um site */}
            <section className="max-w-6xl mx-auto py-16 px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-6 text-blue-600"
                >
                    Por que ter um site próprio?
                </motion.h2>
                <ul className="space-y-3">
                    {beneficiosSite.map((item, index) => (
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
                        O que você recebe com a{" "}
                        <span className="text-pink-500">Codifica Web</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
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
                        Nossos Planos
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
                                className={`p-6 rounded-2xl shadow-lg border transition relative ${plano.destaque ? "border-pink-500 bg-white" : "bg-white"
                                    }`}
                            >
                                {plano.destaque && (
                                    <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                        Mais Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-blue-600">{plano.nome}</h3>
                                <p className="text-xl font-semibold mt-2 text-green-600">
                                    {plano.preco}
                                </p>
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
                    Seu negócio merece estar online
                </h2>
                <p className="mb-6 text-gray-600">
                    A Codifica Web cuida de tudo: design, domínio, hospedagem e suporte.
                </p>
                <a
                    href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20um%20site%20para%20o%20meu%20negócio."
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
