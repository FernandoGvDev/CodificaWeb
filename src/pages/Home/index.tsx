// Componentes
import Hero from "./Hero";
import CTAfuncionalidades from "./CTAfuncionalidades";
import Beneficios from "./Beneficios"
import Portifolio from "./Portifolio";
import SobreNos from "./SobreNos";
import HeroCTA from "./HeroCTA";
import Footer from "./../../components/Footer";
import ComoFunciona from "./ComoFunciona";


export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <ComoFunciona />

      {/* Projetos */}
      <div className="" id="projetos">
        <Portifolio />
      </div>

      <Beneficios />
      <CTAfuncionalidades />

      {/* Sobre Nós */}
      <div className="py-24" id="sobre">
        <SobreNos />
      </div>

      {/* CTA */}
      <div id="contato" className="pt-32">
        <HeroCTA />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
