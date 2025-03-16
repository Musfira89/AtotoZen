import React from "react";
import Image from "../assets/Employess.png"; // Ajuste o caminho conforme necessário
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HashLink as Link } from "react-router-hash-link";

const EmployeesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Dispara quando 20% da seção estiver visível
  });

  return (
    <motion.section
     id="employees"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-16 items-center border-t border-b border-gray-300 border-dotted"
    >
      {/* Conteúdo Esquerdo (Imagem) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative"
      >
        <img
          src={Image}
          alt="Funcionários usando a plataforma"
          className="rounded-lg object-cover w-full"
        />
      </motion.div>

      {/* Conteúdo Direito (Texto) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Para os Funcionários
        </h2>
        <p className="text-gray-600 mt-4">
          Inteligência e dados para potencializar a estratégia de pessoas.
        </p>
        <ul className="mt-6 space-y-4">
          {[
            {
              title: "Diagnóstico:",
              text: "Os colaboradores têm acesso ao Índice de Bem-Estar Corporativo e instrumentos para Ansiedade (GAD7) e Depressão (PHQ9).",
            },
            {
              title: "Caminho de cuidado individual:",
              text: "Com base nos resultados, criamos uma jornada personalizada via o App.",
            },
            {
              title: "Sessões com especialistas:",
              text: "Psicólogos, psicanalistas, nutricionistas, terapeutas e coaches.",
            },
            {
              title: "Educação e Desenvolvimento:",
              text: "Lives, treinamentos e workshops para o desenvolvimento socioemocional e profissional.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4 + index * 0.2, // Efeito de escalonamento
              }}
              className="flex items-center space-x-3 text-gray-700"
            >
              <span className="bg-[#e6c8b5] text-[#6e4c35] rounded-full p-2 flex items-center justify-center w-7 h-7">
                <FaCheck className="text-xs" />
              </span>
              <span className="text-lg">
                <strong className="inline-block">{item.title}</strong>{" "}
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col space-y-3">
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="bg-[#c79470] text-white text-sm px-4 py-2 rounded-full w-fit"
          >
            Atendimento e suporte 24 horas por dia, 7 dias por semana.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
            className="bg-[#c79470] text-white text-sm px-4 py-2 rounded-full w-fit"
          >
            Pioneiros na coordenação do cuidado em saúde mental no Brasil.
          </motion.p>
        </div>
        <Link to="/#contact-us" smooth>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
            className="border border-[#5b3d29] text-[#5b3d29] text-sm px-8 py-3 rounded-md w-fit font-semibold hover:bg-[#5b3d29] hover:text-white transition mt-5"
          >
            Fale com nosso time
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default EmployeesSection;
