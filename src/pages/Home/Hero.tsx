// src/components/Hero.tsx
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
  ],
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Digitação simples
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
      className="relative w-full min-h-[calc(100vh)] overflow-hidden"
      role="banner"
      aria-label="Hero - Transforme seu negócio com tecnologia"
    >
      {/* Imagem de fundo */}
      <img
        src="/img/backgraudHero.png"
        alt="Transforme seu negócio com soluções digitais"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-emerald-700 text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>

        <h2 className="text-white text-xl md:text-3xl h-10 mb-6">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/55${contatos.whatsapp}?text=Olá! Quero impulsionar meu negócio com a Codifica Web.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-yellow-400 hover:from-red-600 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            <FaWhatsapp size={20} />
            Fale Conosco Agora
          </a>

          <ScrollLink
            to="projetos"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center justify-center gap-2 bg-yellow-400 hover:bg-red-600 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Veja Nossos Resultados
          </ScrollLink>
        </div>

        <p className="text-gray-300 mt-6 max-w-xl text-center text-sm md:text-base">
          Soluções digitais personalizadas para transformar seu negócio, aumentar vendas e conquistar clientes que realmente importam.
        </p>
      </div>
    </section>
  );
};

export default Hero;
