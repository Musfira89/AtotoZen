import React from "react";
import Logo from "../assets/logo.png"; // Ajuste o caminho conforme necessário

const Footer = () => {
  return (
    <footer className="bg-[#f3efec] text-[#5b3d29] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300 pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Seção Esquerda - Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo Zenklub" className="h-32 w-32 md:h-44 md:w-44" />
          </div>

          {/* Seção Direita - Informações da Empresa */}
          <div className="text-center md:text-right text-xs space-y-2">
            <p>&copy; 2024 Zenklub | Zenklub Serviços Ltda - CNPJ: 24.166.595/0001-18</p>
            <p>Endereço: Av. Angélica, 2491, conjunto 91E, CEP 01227-200, São Paulo - SP</p>
            <p>Possui registro no Cadastro Nacional de Estabelecimentos de Saúde (CNES) sob protocolo 9763775.</p>
            <p>Registrado no Conselho Regional de Psicologia da 6ª Região sob nº 13005/J.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
