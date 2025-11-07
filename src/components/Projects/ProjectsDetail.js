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
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-start px-6 md:px-4 pt-[88px] pb-10">
      {/* Botão Voltar */}
      <button
        className="flex items-center gap-3 text-black hover:text-[#FF5B23] transition-all duration-300 mb-6"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span className="font-medium">Voltar</span>
      </button>

      {/* Cabeçalho */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mb-10">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-black text-4xl md:text-5xl leading-tight">
            {project.title}
          </h1>
          <p className="text-black/60 leading-relaxed text-lg">{project.subtitle}</p>
        </div>

        <div className="w-full md:w-1/3 flex md:justify-end items-end">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5B23] text-base font-medium underline hover:opacity-80 transition"
          >
            Ver projeto completo →
          </a>
        </div>
      </div>

      {/* Imagem principal */}
      <div className="w-full rounded-xl overflow-hidden mb-10">
        <img
          className="w-full h-[55vh] object-cover rounded-xl"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <div className="border-t border-black/10 w-full mb-10"></div>

      {/* Corpo principal */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Descrição e Ferramentas */}
        <div className="text-black flex flex-col gap-10 w-full">
          <section>
            <p className="text-base text-black/70 leading-relaxed">
              {project.details.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black/80 mb-3">Ferramentas</h2>
            <div className="flex flex-wrap gap-4">
              {project.details.tools && project.details.tools.length > 0 ? (
                project.details.tools.map((tool, index) => (
                  <img
                    key={index}
                    src={tool}
                    alt={`Ferramenta ${index + 1}`}
                    className="w-12 h-12 object-contain hover:scale-110 transition-transform"
                  />
                ))
              ) : (
                <p className="text-sm text-black/50">Nenhuma ferramenta informada.</p>
              )}
            </div>
          </section>
        </div>

        {/* Problem, Solution e Impact */}
        <div className="text-black flex flex-col gap-8 w-full">
          <section>
            <h2 className="text-xl font-medium text-black/80 mb-2">Problem</h2>
            <p className="text-sm text-black/60 leading-relaxed">
              {project.details.problem}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black/80 mb-2">Solution</h2>
            <p className="text-sm text-black/60 leading-relaxed">
              {project.details.solution}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-black/80 mb-2">Impact</h2>
            <p className="text-sm text-black/60 leading-relaxed">
              {project.details.impact}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
