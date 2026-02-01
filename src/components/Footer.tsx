// src/components/Footer.tsx
'use client';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contatos } from '../data/contatos';

const socialLinks = [
  {
    icon: FaWhatsapp,
    link: `https://wa.me/55${contatos.whatsapp}`,
    label: 'WhatsApp'
  },
  {
    icon: FaInstagram,
    link: contatos.instagram,
    label: 'Instagram'
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Logo + descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/img/logo.png"
            alt="Codifica Web"
            className="mb-6 w-[160px] h-auto"
          />

          <p className="text-white/70 max-w-sm leading-relaxed">
            Desenvolvemos sites profissionais e soluções digitais focadas
            em gerar visibilidade, credibilidade e resultados reais.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-center md:items-center">
          <h4 className="font-semibold text-lg mb-6 text-white">
            Navegação
          </h4>

          <ul className="space-y-3 text-white/70">
            <li>
              <a href="/" className="hover:text-emerald-400 transition">
                Início
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-emerald-400 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-emerald-400 transition">
                Sobre
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold text-lg mb-6 text-white">
            Fale com a gente
          </h4>

          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:text-emerald-400 hover:border-emerald-400 transition"
                >
                  <Icon className="text-xl" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Codifica Web. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
