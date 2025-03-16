import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Ícone Lucide
import imageSrc from "../assets/headerImg.png"; // Ajuste o caminho conforme necessário
import { HashLink as Link } from "react-router-hash-link";

const NR1Section = () => {
  return (
    <section className="bg-[#f3efec] text-[#3d2a1e] py-28 px-4 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between">
      
      {/* Lado direito: Imagem */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={imageSrc} alt="Prontidão da empresa para a NR-1" className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg" />
      </motion.div>

      {/* Lado esquerdo: Conteúdo */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left px-4"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
         <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Garanta a <span className="text-[#5b3d29]">Conformidade com a NR-1</span> para sua Empresa
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
          A partir de <strong style={{ fontFamily: "Poppins, sans-serif" }}>maio de 2025</strong>, todas as empresas deverão cumprir as normas da NR-1. 
          Esteja preparado implementando medidas estruturadas de conformidade, incluindo:
        </p>
        <ul className="text-base sm:text-lg space-y-4">
          {[
            "Mapeamento e reporte de riscos psicossociais no PGR",
            "Implementação de ações mitigadoras com iniciativas de saúde mental"
          ].map((text, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: "easeOut" }}
            >
              <CheckCircle className="text-[#5b3d29]" size={22} />
              <span className="font-medium" style={{ fontFamily: "Lato, sans-serif" }}>{text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
           initial={{ opacity: 0, scale: 0.9 }} 
           animate={{ opacity: 1, scale: 1 }} 
           transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
           className="flex justify-center md:justify-start"
        >
          <Link
            to="/#contact-us" 
            smooth
            className="mt-8 inline-block bg-[#5b3d29] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#4a3224] transition-transform transform hover:scale-105"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Fale com a gente
          </Link>
        </motion.a>
      </motion.div>

    </section>
  );
};

export default NR1Section;
