import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const ChatScheduleForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    employees: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx27f6zlwbFw4oTE16DQ6A_qxAbTY0tKOiFWlBd6qNXL-YuXwq_p3KOfH6zRK26nIEdXw/exec";

    const formBody = new URLSearchParams(formData).toString();

    try {
      const response = await axios.post(scriptURL, formBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Response from Google Script:", response.data);

      if (response.data.includes("Success")) {
        toast.success("Form submitted successfully!", {
          style: { background: "black", color: "white" },
        });

        setFormData({
          email: "",
          name: "",
          phone: "",
          company: "",
          employees: "",
        });
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.", {
        style: { background: "black", color: "white" },
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      id="contact-us"
      className="bg-[#f3efec] text-[#5b3d29] py-32 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Agende um bate-papo com a gente
        </h2>
        <p className="text-md md:text-md text-[#5b3d29] mb-18">
          Condições especiais para ter o Zenklub na sua empresa e estar em
          conformidade com a NR-1
        </p>
      </div>

      <form
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-semibold mb-2">
            E-mail Corporativo*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Nome*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Número de Telefone (WhatsApp)*
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="+55"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Empresa*</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold mb-2">
            Número de colaboradores*
          </label>
          <select
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300"
            required
          >
            <option value="">Selecionar</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        <div className="mt-6 sm:col-span-2 flex justify-start">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-[#5b3d29] text-white font-semibold rounded-md hover:bg-[#dfb396] transition"
          >
            Agendar conversa
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChatScheduleForm;
