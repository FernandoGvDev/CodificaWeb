// Componentes
import Header from "../../components/Header";
import Hero from "./Hero";
import Servicos from "./Servicos";
import BeneficiosFlow from "./BeneficiosFlow"
import Portifolio from "./Portifolio";
import SobreNos from "./SobreNos";
import HeroCTA from "./HeroCTA";
import Footer from "./../../components/Footer";


export default function Home() {
  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Hero */}
      <Hero
        title="Bem-vindo à Codifica Web"
      />

      {/* Benefícios */}
      <div className="mt-20">
        <BeneficiosFlow />
      </div>

      {/* Projetos */}
      <div className="" id="projetos">
        <Portifolio />
      </div>
      {/* Serviços */}
      <Servicos />

      {/* Sobre Nós */}
      <div className="py-24" id="sobre">
        <SobreNos />
      </div>

      {/* CTA */}
      <div id="contato" className="py-32">
        <HeroCTA />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
