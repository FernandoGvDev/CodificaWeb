"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  ctaText: string;
  ctaLink: string;
  phrases?: string[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  ctaText,
  ctaLink,
  phrases = [
    "Evolua seu negócio",
    "Atraia mais clientes",
    "Impulsione suas vendas",
    "Transforme sua presença online",
    "Destaque-se da concorrência",
    "Conquiste novos mercados",
    "Venda mais com facilidade",
    "Inove e cresça rápido",
    "Seu negócio merece brilhar",
  ],
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/img/backgraudHero.png"
        alt="Hero Background"
        fill
        className="object-cover scale-105 transition-transform duration-500 ease-in-out hover:scale-110"
        priority
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Partículas flutuantes */}
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full top-10 left-20 opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-pink-400 rounded-full top-1/2 left-1/3 opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-yellow-300 rounded-full top-3/4 left-2/3 opacity-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {/* Frase animada */}
        <h2 className="text-white text-xl md:text-3xl h-10 mb-6">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </h2>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href={ctaLink}>
            <button className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg animate-pulse hover:scale-105 transition-transform">
              {ctaText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
