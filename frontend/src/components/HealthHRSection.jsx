import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Health.png";
import { FaCheck } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const HealthHRSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Dispara quando 20% da seção estiver visível
  });
  return (
    <motion.section
      ref={ref}
      className="max-w-7xl mx-auto px-4 py-22 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-11"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Conteúdo à Esquerda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-montserrat">
          Para os times de Saúde e RH
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg font-lato">
          A melhor experiência em saúde emocional e desenvolvimento do mercado.
        </p>
        <ul className="mt-6 space-y-4">
          {[
            {
              title: "Gestão de benefícios:",
              text: "Administração e acompanhamento do engajamento em um painel personalizado.",
            },
            {
              title: "Análise de comportamento:",
              text: "Acompanhamento em tempo real com insights comportamentais da equipe com base no uso do serviço, além de benchmarks de mercado.",
            },
            {
              title: "Educação e desenvolvimento:",
              text: "Suporte na implementação, biblioteca de conteúdos e educação continuada para líderes e RH.",
            },
            {
              title: "Conformidade com a NR-1:",
              text: "Suporte completo para atender aos critérios regulatórios de mapeamento e gestão de riscos psicossociais.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-3 text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="bg-[#e6c8b5] text-[#5b3d29] rounded-full p-2 flex items-center justify-center w-7 h-7">
                <FaCheck className="text-xs" />
              </span>
              <span className="text-base sm:text-lg font-poppins">
                <strong className="block sm:inline">{item.title}</strong>{" "}
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className="mt-8 sm:mt-10 border border-[#5b3d29] text-[#5b3d29] font-bold py-3 px-6 rounded-lg hover:bg-[#5b3d29] hover:text-white transition font-montserrat w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Quero novos resultados
        </motion.button>
      </motion.div>

      {/* Conteúdo à Direita */}
      <motion.div className="relative">
        <motion.img
          src={Image}
          alt="Equipe de RH"
          className="rounded-lg object-cover w-full max-h-[400px] sm:max-h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HealthHRSection;
