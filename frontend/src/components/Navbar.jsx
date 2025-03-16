import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { label: "Saúde & RH", link: "#health" },
    { label: "Funcionários", link: "#employees" },
    { label: "Nossa Solução", link: "#our-solution" },
    { label: "Fale com Nossa Equipe", link: "#contact-us" },
    { label: "FAQs", link: "#faqs" }
];

  return (
    <nav className="bg-white text-[#5b3d29] font-bold text-sm w-full shadow-md overflow-x-hidden leading-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 w-auto max-w-full" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.link}`}
                smooth
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer transition duration-300 
                hover:text-[#96745e] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] 
                after:bg-[#5b3d29] after:transition-all after:duration-300 hover:after:w-full ${
                  activeIndex === index ? "after:w-full text-[#5b3d29]" : "after:w-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#5b3d29] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 text-center w-full">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.link}`}
                smooth
                onClick={() => setActiveIndex(index)}
                className={`block cursor-pointer transition duration-300 
                hover:text-[#96745e] relative after:absolute after:left-0 after:bottom-[-3px] 
                after:w-0 after:h-[2px] after:bg-[#5b3d29] after:transition-all after:duration-300 hover:after:w-full ${
                  activeIndex === index ? "after:w-full text-[#5b3d29]" : "after:w-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;