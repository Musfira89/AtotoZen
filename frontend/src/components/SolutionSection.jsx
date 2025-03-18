import React from "react";
import { motion } from "framer-motion";
import { cards } from "../data/cards";
import {
  Briefcase,
  Bolt,
  BookOpen,
  BarChart,
  Globe,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Activity,
  ClipboardCheck,
  Cpu,
  Layers,
  Monitor,
  Medal,
  MessageSquare,
} from "lucide-react";

const pointIcons = [
  Briefcase,
  Bolt,
  BookOpen,
  BarChart,
  Globe,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Activity,
  ClipboardCheck,
  Cpu,
  Layers,
  Monitor,
  Medal,
  MessageSquare,
];

import { HashLink as Link } from "react-router-hash-link";

const SolutionSection = () => {
  return (
    <motion.section
      id="our-solution"
      className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-[35%] text-center md:text-left">
        <h5 className="text-[#c79470] font-semibold">Our solution</h5>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 md:mt-2 leading-14">
          We unite science, <br /> data and technology
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          <strong>
            To offer the best health and well-being experience for your company.
          </strong>{" "}
          <br />
          We offer products and services that accompany your employee’s entire
          journey, from education to support in critical cases.
        </p>
        <Link to="/#contact-us" smooth>
          <button
            className="mt-6 border-2 border-transparent bg-gradient-to-r from-[#c79470] to-[#a36d50] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 
    hover:from-[#a36d50] hover:to-[#c79470] hover:scale-105 hover:shadow-lg"
          >
            Quero novos resultados
          </button>
        </Link>
      </div>

      {/* Right Side - Cards */}
      <motion.div
        className="w-full md:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg w-full h-56 object-cover"
            />
            <h3 className="text-[20px] font-bold mt-6">{card.title}</h3>
            <ul className="mt-4 text-gray-600 space-y-3">
              {card.points.map((point, i) => {
                const IconComponent =
                  pointIcons[(index * 4 + i) % pointIcons.length];
                return (
                  <li key={i} className="flex items-start gap-3 ">
                    <IconComponent className="text-gray-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SolutionSection;
