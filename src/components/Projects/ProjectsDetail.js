import { useParams, useNavigate } from "react-router-dom";
import React from "react";
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

      <div className="w-full grid grid-cols-2 gap-16">
        <div className="text-black flex flex-col gap-10 w-full">
          <section>
            <p className="text-lg text-black/60">{project.details.description}</p>
          </section>

           <section>
              <h2 className="text-2xl font-semibold text-black/80 mb-2">Ferramentas</h2>
              <div className="flex flex-wrap gap-4">
                {project.details.tools && project.details.tools.length > 0 ? (
                  project.details.tools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool}
                      alt={`Ferramenta ${index + 1}`}
                      className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    />
                  ))
                ) : (
                  <p className="text-lg text-black/60">Nenhuma ferramenta informada.</p>
                )}
              </div>
            </section>
        </div>

        <div className="text-black flex flex-col gap-4 w-full">
          <section>
            <h2 className="text-2xl font-semibold text-black/80 mb-2">Problema</h2>
            <p className="text-lg text-black/60">{project.details.problem}</p>
          </section>
          
          <div className="border-t border-black/40 w-full"></div>

          <section>
            <h2 className="text-2xl font-semibold text-black/80 mb-2">Solução</h2>
            <p className="text-lg text-black/60">{project.details.solution}</p>
          </section>

          <div className="border-t border-black/40 w-full"></div>

          <section>
            <h2 className="text-2xl font-semibold text-black/80 mb-2">Impacto</h2>
            <p className="text-lg text-black/60">{project.details.impact}</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
