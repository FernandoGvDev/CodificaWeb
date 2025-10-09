import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import { servicos } from "../../data/servicos";

export default function SitePage() {
  const siteServico = servicos.find((s) => s.id === "sites");
  if (!siteServico) return null;

  return (
    <div className="bg-[#0b0d0f] text-white overflow-hidden relative">
      {/* Bolhas decorativas animadas */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 right-10 w-52 h-52 bg-green-500/20 rounded-full blur-3xl"
      />

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-lg mb-6"
        >
          Crie um <span className="text-green-400">site profissional</span> que gera resultados
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-gray-300"
        >
          A <span className="text-blue-400 font-semibold">Codifica Web</span> desenvolve sites rápidos, modernos e otimizados para conquistar mais clientes e destacar sua marca na internet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20criar%20meu%20site."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Quero meu site
          </a>
          <a
            href="#planos"
            className="border border-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition text-blue-400"
          >
            Ver planos
          </a>
        </motion.div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-green-400"
          >
            Por que seu negócio precisa de um site?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {siteServico.beneficios.map((beneficio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-r from-blue-950/60 to-green-900/40 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 border border-blue-700/30 hover:border-green-400/40 transition-all"
              >
                <CheckCircle className="text-green-400 w-8 h-8 mb-3" />
                <p className="text-gray-200 text-lg">{beneficio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-20 px-6 relative z-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Planos de Sites</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {siteServico.planos.map((plano, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#101418] border border-blue-800/40 rounded-2xl p-8 hover:border-green-500/40 transition-all shadow-lg hover:shadow-green-400/30"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">{plano.titulo}</h3>
                <p className="text-gray-400 mb-4">{plano.descricao}</p>
                {plano.preco && (
                  <p className="text-blue-400 text-lg font-semibold mb-6">{plano.preco}</p>
                )}
                <a
                  href={`https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Tenho%20interesse%20no%20${encodeURIComponent(
                    plano.titulo
                  )}.`}
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  Solicitar orçamento
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 text-center bg-gradient-to-r from-blue-950 via-black to-green-950 relative z-10"
      >
        <Sparkles className="w-10 h-10 mx-auto text-green-400 mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-blue-400">
          Seu site pode transformar o seu negócio
        </h2>
        <p className="text-gray-300 mb-6">
          Dê o próximo passo e conquiste clientes online com um site de verdade.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20criar%20meu%20site."
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl text-white font-semibold shadow-lg transition"
        >
          Falar com especialista
        </a>
      </motion.section>

      <Footer />
    </div>
  );
}
