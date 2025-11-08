import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { projects } from "../../data/projectData";

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-black text-center mt-20">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start px-6 md:px-10 pt-[88px] pb-12 gap-16">

      {/* Linha: Voltar + Link */}
      <div className="w-full flex items-center justify-between mb-8">
        <button
          className="flex items-center gap-2 text-black hover:text-[#FF5B23] transition"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          <span className="font-medium">Voltar</span>
        </button>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF5B23] text-sm font-medium underline hover:opacity-80 transition"
        >
          Ver projeto completo →
        </a>
      </div>

      {/* Cabeçalho */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        <div className="w-full items-center justify-center flex flex-col gap-2">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="text-black/60 leading-relaxed text-sm md:text-base">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Imagem */}
      {/* Mídia (Imagem ou Vídeo) */}
      <div className="w-full rounded-xl overflow-hidden mb-10">
        {project.video ? (
          <video
            className="w-full h-[45vh] md:h-[100vh] object-cover rounded-xl"
            src={project.video}
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            className="w-full h-[22vh] md:h-[45vh] object-cover rounded-xl"
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        )}
      </div>

      {/* Corpo */}
      <div className="w-full flex flex-col justify-center items-center gap-12">

        {/* Descrição + Ferramentas */}
        <div className="text-black flex flex-col gap-10 w-full">

          <section className="w-full flex justify-center">
            <p className="text-center text-xl sm:text-2xl md:text-2xl font-medium text-black leading-relaxed max-w-4xl">
              {project.details.description}
            </p>
          </section>

        </div>

        
      </div>
    </div>
  );
};

export default ProjectsDetail;
