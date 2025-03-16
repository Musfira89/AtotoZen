import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const faqs = [
  {
    question: "Como posso ver o Zenklub na prática?",
    answer:
      "Basta agendar uma demonstração com a nossa equipe. É gratuito! Você conhecerá nossas soluções, verá como podemos ser o próximo passo na estratégia de saúde e bem-estar da sua empresa e tirará todas as suas dúvidas.",
  },
  {
    question: "Por que escolher o Zenklub?",
    answer:
      "O Zenklub oferece uma solução moderna, segura e integrada para o bem-estar dos colaboradores, sendo confiável para empresas do mundo todo.",
  },
  {
    question: "Como é feita a segurança dos dados?",
    answer:
      "Utilizamos criptografia de ponta a ponta, autenticação multifator e armazenamento seguro em nuvem para proteger os dados dos usuários.",
  },
  {
    question: "Quanto custa o serviço?",
    answer:
      "Os valores variam conforme o porte da empresa e os recursos desejados. Entre em contato conosco para um plano personalizado.",
  },
  {
    question: "É para todos os tipos de empresas?",
    answer:
      "Sim! Nossas soluções são flexíveis e escaláveis, atendendo desde startups e PMEs até grandes corporações.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="max-w-7xl mx-auto px-6 lg:px-6 py-40 grid md:grid-cols-5 gap-36"
    >
      {/* Conteúdo à esquerda */}
      <div className="md:col-span-2">
        <h4 className="text-sm font-medium text-[#5b3d29] tracking-wide uppercase font-poppins">
          Principais dúvidas
        </h4>
        <h2 className="text-5xl font-bold text-gray-900 mt-3 leading-tight font-montserrat">
          Veja como é fácil e seguro utilizar o Zenklub na sua empresa
        </h2>
        <p className="text-gray-600 mt-5 text-lg font-lato">
          Para saber mais,{" "}
          <Link
            to="/#contact-us"
            smooth
            className="text-[#5b3d29] font-semibold font-poppins underline"
          >
            fale com a nossa equipe
          </Link>
        </p>
      </div>

      {/* Conteúdo à direita - FAQ */}
      <div className="md:col-span-3 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300 pt-5">
            <button
              className="w-full flex justify-between items-center text-left text-xl font-medium text-gray-900 font-montserrat transition-all"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-3 text-lg font-lato">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
