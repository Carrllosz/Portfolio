import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";

const projects = {
  "amazon-redesign": {
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    subtitle: "Enhancing usability and design.",
    description: "For the Amazon Mobile App Redesign, I focused on improving the navigation and product discovery experience, addressing user feedback about the original app being confusing and visually cluttered. I redesigned the interface to create a more intuitive and visually appealing layout, enhancing usability across key app sections. This redesign aims to boost user satisfaction and increase conversion rates by simplifying interactions and streamlining the overall user journey.",
    tags: ["Redesign", "Mobile"],
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
  },
  "friends-app": {
    title: "Friends - App Mobile",
    image: friends,
    subtitle: "Connecting friends around the world",
    description: "In this project, I designed Friends App Mobile, a streamlined social media app focused on basic CRUD functionality for posts. I crafted a high-fidelity mobile interface in Figma that allows users to create, edit, delete, and view text-based posts with author info and timestamps. Throughout the process, I managed design decisions, file organization, and user experience to deliver a clean, intuitive, and efficient solution based on clear requirements.",
    tags: ["Case Study", "Mobile"],
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
  },
};

const ExperienceItem = ({ company, role, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-white/40 w-full py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <div>
          <h2 className="text-2xl text-white">{company}</h2>
          <p className="text-base text-white/60">{role}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-white/40">{subtitle}</p>
      </motion.div>
    </div>
  );
};

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-black text-center">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-start items-start px-4 pt-[88px] py-4">
      <button
        className="top-4 left-4 text-black py-4 flex justify-center items-center gap-4 hover:text-[#FF5B23]"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        Voltar
      </button>


      <div className="w-full h-fit bg-white flex flex-col items-end" id="home">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-black font-medium text-5xl md:text-3xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-black/60 leading-relaxed text-2xl">
            {project.subtitle}
          </p>
        </div>

        <div className="w-full md:w-1/3 flex md:justify-start items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5B23] text-lg underline hover:opacity-80 transition"
          >
            Ver projeto completo no Behance →
          </a>
        </div>
      </div>

      <div className="w-full mt-10 rounded-xl overflow-hidden">
        <img
          className="w-full h-[55vh] object-cover rounded-xl"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>
      </div>

      <div className="border-t border-black/40 w-full mt-8 mb-8"></div>

      <div className="text-black flex flex-col md:flex-row justify-between items-start gap-6 w-full">
        <div className="w-full md:w-2/3 text-2xl">
          <div>
           {project.description}
          </div>                  
        </div>

        <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-4 text-xl">
          <div>
            <h1 className="text-black/60 font-semibold">Product</h1>
            <p>Em desenvolvimento</p>
          </div>

          <div className="border-t border-black/40 w-full mt-2 mb-2"></div>

          <div>
            <h1 className="text-black/60 font-semibold">Skills</h1>
            <p>Em desenvolvimento</p>
          </div>

          <div className="border-t border-black/40 w-full mt-2 mb-2"></div>

          <div>
            <h1 className="text-black/60 font-semibold">Timeline</h1>
            <p>Em desenvolvimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
