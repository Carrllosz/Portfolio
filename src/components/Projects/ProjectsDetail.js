import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { projects } from "../../data/projectData"; // novo local dos dados

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-black text-center">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start px-4 pt-[88px] py-4">
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

      <div className="text-black flex flex-col gap-10 w-full">
        <section>
          <h2 className="text-2xl font-semibold text-black/80 mb-2">Problema</h2>
          <p className="text-lg text-black/60">{project.details.problem}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black/80 mb-2">Solução</h2>
          <p className="text-lg text-black/60">{project.details.solution}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black/80 mb-2">Impacto</h2>
          <p className="text-lg text-black/60">{project.details.impact}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black/80 mb-4">Mockups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.details.mockups.map((mockup, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={mockup.img}
                  alt={mockup.caption}
                  className="rounded-xl"
                />
                <p className="text-black/50 mt-2">{mockup.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsDetail;
