import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const projects = {
  "amazon-redesign": {
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    description: "Enhancing usability and design.",
    tags: ["Redesign", "Mobile"],
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
  },
  "friends-app": {
    title: "Friends - App Mobile",
    image: friends,
    description: "Friends é um aplicativo móvel que melhora a conexão entre amigos.",
    tags: ["Case Study", "Mobile"],
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
  },
};

const ExperienceItem = ({ company, role, description }) => {
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
        <p className="mt-2 text-white/40">{description}</p>
      </motion.div>
    </div>
  );
};

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-white text-center">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full h-screen bg-[#141414] flex flex-col justify-center items-start px-4 md:px-10 pb-8">
      <button
        className="absolute top-4 left-4 text-white border border-white px-4 py-2 rounded-full hover:bg-[#FF5B23] hover:border-[#FF5B23]"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
      <div className="flex gap-4">
        <img
          src={project.image}
          alt={project.title}
          href={project.link}
          className="w-full md:w-[800px] rounded-2xl h-[250px] md:h-[300px] lg:h-[350px] object-cover"
        />
        <div>
          <h1 className="text-white text-3xl mt-6">{project.title}</h1>
          <p className="text-gray-400 text-lg mt-2">{project.description}</p>
          <div className="flex gap-4 mt-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-[#FF5B23] text-white px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 w-full mt-8 mb-8"></div>

       <div className="text-white flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="w-full md:w-2/3">
                  <div>
                    I'm a multi-disciplinary <span>Product Designer</span>  
                    with over two years of experience, currently working at <span className="text-[#FF5B23]">Automining</span>, where I create 
                    intuitive and efficient digital experiences for the mining industry. My work bridges design and technology, ensuring 
                    seamless user interactions and visually compelling interfaces.
                  </div>                  
                </div>
      
                <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-8">
                  <div>
                    <h1>ola</h1>
                    <p>,fffdsfdsdf</p>
                  </div>

                  <div className="border-t border-white/40 w-full mt-4 mb-4"></div>

                  <div>
                    <h1>ola</h1>
                    <p>,fffdsfdsdf</p>
                  </div>

                </div>
              </div>
    </div>
  );
};

export default ProjectsDetail;
