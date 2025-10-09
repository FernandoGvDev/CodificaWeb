// src/pages/Sistemas.tsx
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Users, Layout, Zap, Box, Calendar, ShoppingCart, UserCheck, Truck, BookOpen } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const beneficiosSistema = [
  "Soluções 100% personalizadas para o seu negócio",
  "Automatiza processos e economiza tempo",
  "Controle total de informações e dados",
  "Integração com ferramentas e plataformas existentes",
  "Suporte contínuo durante e após o desenvolvimento",
];

const processoSistema = [
  {
    titulo: "Análise das necessidades",
    desc: "Entendemos sua dor, analisamos processos e identificamos oportunidades.",
    icon: Users,
  },
  {
    titulo: "Reunião estratégica",
    desc: "Alinhamos a ideia, discutimos funcionalidades e definimos prioridades.",
    icon: Layout,
  },
  {
    titulo: "Orçamento personalizado",
    desc: "Calculamos investimento de acordo com funcionalidades e complexidade.",
    icon: Zap,
  },
  {
    titulo: "Desenvolvimento sob medida",
    desc: "Criamos o sistema de acordo com o planejamento aprovado.",
    icon: Sparkles,
  },
];

const exemplosSistemas = [
  {
    titulo: "Gestão de Estoque",
    desc: "Controle total de produtos, entradas, saídas e relatórios.",
    icon: Box,
  },
  {
    titulo: "Agendamento Online",
    desc: "Para clínicas, salões ou serviços, com calendário e notificações.",
    icon: Calendar,
  },
  {
    titulo: "Vendas e Caixa",
    desc: "PDV online, integração com pagamentos e relatórios de vendas.",
    icon: ShoppingCart,
  },
  {
    titulo: "CRM de Clientes",
    desc: "Controle de clientes, histórico de atendimento e follow-ups.",
    icon: UserCheck,
  },
  {
    titulo: "Sistema de Delivery",
    desc: "Gestão de pedidos online, entregas e promoções.",
    icon: Truck,
  },
  {
    titulo: "Plataforma Educacional",
    desc: "Gestão de alunos, cursos, notas e certificados.",
    icon: BookOpen,
  },
];

export default function SistemasPage() {
  return (
    <div className="bg-[#0b0d0f] text-white overflow-hidden relative">
      {/* Bolhas animadas */}
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
          Sistemas <span className="text-green-400">sob medida</span> para seu negócio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-gray-300"
        >
          Criamos sistemas exclusivos que otimizam processos, aumentam resultados e dão
          controle total sobre seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20desenvolver%20um%20sistema%20sob%20medida."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Solicitar Sistema
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
            Por que ter um sistema próprio?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {beneficiosSistema.map((beneficio, i) => (
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

      {/* PROCESSO */}
      <section className="py-20 px-6 relative z-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-blue-400"
          >
            Como funciona nosso processo
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {processoSistema.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#101418] border border-blue-800/40 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:border-green-400/40 transition-all"
              >
                <item.icon className="text-green-400 w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold text-blue-400 mb-2">{item.titulo}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLOS */}
      <section className="py-20 px-6 relative z-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 text-green-400"
          >
            Tipos de sistemas que desenvolvemos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exemplosSistemas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#101418] border border-blue-800/40 p-6 rounded-2xl shadow-md hover:shadow-green-400/30 hover:border-green-400/40 transition-all"
              >
                <item.icon className="text-green-400 w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold text-blue-400 mb-2">{item.titulo}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
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
          Transforme sua empresa com um sistema completo
        </h2>
        <p className="text-gray-300 mb-6">
          Agende uma reunião e desenvolva um sistema que realmente otimize seu negócio.
        </p>
        <a
          href="https://wa.me/5551991488088?text=Olá%20Codifica%20Web!%20Quero%20desenvolver%20um%20sistema%20sob%20medida."
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
