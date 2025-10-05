import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servico from "./components/home/Servico";
import Beneficios from "./components/home/Beneficios";
import SobreNos from "./components/home/SobreNos";
import HeroCTA from "./components/home/HeroCTA";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div>
        <Hero
          title="Bem-vindo a Codifica Web"
          ctaText="Saiba Mais"
          ctaLink="/sobre"
        />
      </div>

      {/* Serviços */}
      <div className="py-24">
        <Servico />
      </div>

      {/* Benefícios */}
      <div className="py-24 bg-gray-50">
        <Beneficios />
      </div>

      {/* Projetos */}
      <div className="py-24" id="projetos">
        <Portfolio />
      </div>

      {/* Sobre Nós */}
      <div className="py-24 bg-gray-50">
        <SobreNos />
      </div>

      {/* CTA */}
      <div className="py-32">
        <HeroCTA />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
