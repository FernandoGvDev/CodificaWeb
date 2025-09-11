"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Orçamento", href: "https://wa.me/5551991488088", highlight: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para aplicar sombra mais forte
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      <div
        className={`w-full transition-all ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/60 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/img/logo.png" alt="Logo" width={150} height={50} unoptimized />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 font-medium transition-transform duration-200 ${
                  item.highlight
                    ? "text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-md hover:scale-105 transform"
                    : "text-gray-700 hover:text-blue-500"
                } group`}
              >
                {item.name}
                {!item.highlight && (
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Hamburger Mobile */}
          <div className="md:hidden mr-3.5">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX size={28} className="text-gray-800" />
              ) : (
                <HiMenu size={28} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu abaixo do header */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md overflow-hidden"
            >
              <div className="flex flex-col items-center space-y-6 py-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold transition-colors duration-200 ${
                      item.highlight
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded shadow-md"
                        : "text-gray-800 hover:text-blue-500"
                    } w-3/4 text-center`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Ícones de redes sociais */}
                <div className="flex justify-center space-x-6 mt-4">
                  <a
                    href="https://wa.me/5551991488088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-2xl hover:scale-110 transition"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com/codifica_web/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 text-2xl hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
