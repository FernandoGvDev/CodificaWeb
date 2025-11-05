import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  // Sincroniza o estado do iframe com o histórico
  useEffect(() => {
    if (iframeUrl) {
      // Adiciona um novo estado no histórico ao abrir o iframe
      window.history.pushState({ iframeOpen: true }, "");
    }

    const handlePopState = (_event: PopStateEvent) => {
      if (iframeUrl) {
        // Se houver iframe aberto, fecha ele ao voltar
        setIframeUrl(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [iframeUrl]);

  const openIframe = (url: string) => {
    setIframeUrl(url);
  };

  const closeIframe = () => {
    setIframeUrl(null);
    // Remove o último estado do histórico para evitar ficar preso
    window.history.back();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Meus <span className="text-emerald-500">Projetos</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Confira alguns projetos que transformaram a presença online de negócios de diversos segmentos.
          </p>
        </div>

        {/* Grid de projetos */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-b from-blue-800 to-blue-950 rounded-2xl shadow-xl overflow-hidden transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-emerald-500/50"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Imagem do projeto */}
              <div className="relative w-full h-auto overflow-hidden">
                <img
                  src={proj.img}
                  alt={`Projeto ${proj.titulo}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-emerald-500">
                  {proj.titulo}
                </h3>
                <span className="text-sm text-gray-400 mb-4">{proj.categoria}</span>

                {proj.link && (
                  <button
                    onClick={() => openIframe(proj.link as string)}
                    className="inline-block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
                  >
                    Ver Projeto
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Iframe modal */}
        {iframeUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 w-full max-w-5xl h-full md:h-[80%] rounded-xl overflow-hidden relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
                onClick={closeIframe}
              >
                ✕
              </button>
              <iframe
                src={iframeUrl}
                title="Projeto"
                className="w-full h-full"
                frameBorder={0}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
