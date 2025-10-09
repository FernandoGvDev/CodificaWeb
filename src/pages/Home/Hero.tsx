// src/components/Hero.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { contatos } from "../../data/contatos";

interface HeroProps {
  title: string;
  phrases?: string[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  phrases = [
    "Evolua seu negócio e conquiste mais clientes",
    "Atraia vendas todos os dias com estratégias digitais",
    "Impulsione seu faturamento sem complicações",
    "Transforme sua presença online em autoridade",
    "Destaque-se da concorrência com soluções profissionais",
    "Conquiste novos mercados de forma rápida e eficiente",
    "Venda mais com facilidade usando tecnologia inteligente",
    "Inove, cresça rápido e supere expectativas",
    "Seu negócio merece brilhar e gerar resultados reais",
  ],
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔹 Efeito de digitação animada
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout: number;

    if (!isDeleting && text === currentPhrase) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === "") {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      }, 600);
    } else {
      timeout = window.setTimeout(() => {
        setText(
          isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1)
        );
      }, isDeleting ? 50 : 120);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      role="banner"
      aria-label="Hero - Transforme seu negócio com tecnologia"
    >
      {/* Imagem de fundo */}
      <img
        src="/img/backgraudHero.png"
        alt="Transforme seu negócio com soluções digitais"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-500 ease-in-out hover:scale-110"
        loading="lazy"
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Partículas flutuantes para UI dinâmica */}
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
        {/* Título principal com SEO e persuasão */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-emerald-700 text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {/* Frase animada com gatilhos mentais */}
        <h2 className="text-white text-xl md:text-3xl h-10 mb-6">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </h2>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Botão WhatsApp com gatilho de urgência e cores chamativas */}
          <a
            href={`https://wa.me/55${contatos.whatsapp}?text=Olá! Quero impulsionar meu negócio com a Codifica Web.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-yellow-400 hover:from-red-600 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <FaWhatsapp size={20} />
            Fale Conosco Agora
          </a>

          {/* Botão scroll para portfólio com gatilho de prova social */}
          <ScrollLink
            to="projetos"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center justify-center gap-2 bg-yellow-400 hover:bg-red-600 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Veja Nossos Resultados
          </ScrollLink>
        </motion.div>

        {/* Mensagem de persuasão abaixo do CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 mt-6 max-w-xl text-center text-sm md:text-base"
        >
          Soluções digitais personalizadas para transformar seu negócio, aumentar vendas e conquistar clientes que realmente importam.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
