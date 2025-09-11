"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo e descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/img/logo.png"
            alt="Codifica Web"
            width={150}
            height={50}
            className="mb-4"
            unoptimized
          />
          <p className="text-gray-400">
            Transformamos ideias em soluções digitais inovadoras. Sites, sistemas e marketing para seu negócio crescer.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-500 transition">Início</Link></li>
            <li><Link href="/servicos" className="hover:text-blue-500 transition">Serviços</Link></li>
            <li><Link href="/#projetos" className="hover:text-blue-500 transition">Projetos</Link></li>
            <li><Link href="/sobre" className="hover:text-blue-500 transition">Sobre Nós</Link></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            {[
              { icon: FaWhatsapp, link: "https://wa.me/5551991488088" },
              { icon: FaInstagram, link: "https://www.instagram.com/codifica_web/" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#3b82f6" }}
                className="text-2xl text-white transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Codifica Web. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
