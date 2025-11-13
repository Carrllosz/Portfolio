import { useParams } from "react-router-dom";
import React from "react";
import { projects } from "../../data/projectData";

const ProjectsDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-black text-center mt-20">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col px-6 md:px-6 pt-[250px] pb-16 gap-40">

      {/* Título + frase + link */}
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-3xl md:text-7xl">{project.title}</h1>
        <p className="text-black/60 max-w-3xl text-base md:text-lg">{project.subtitle}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5B23] text-sm font-medium underline hover:opacity-80 transition"
          >
            See Full Project →
          </a>
        )}
      </div>

      {/* Hero Principal */}
      <div className="w-full flex flex-col items-center gap-40">
        {project.hero.type === "video" ? (
          <video className="rounded-xl w-full h-[50vh] lg:h-[100vh] object-cover" src={project.hero.src} autoPlay loop muted playsInline />
        ) : (
          <img className="rounded-xl w-full h-[100vh] object-cover" src={project.hero.src} alt="" />
        )}

        {/* CAPTION ADICIONADO AQUI */}
        {project.hero.caption && (
          <p className="text-black w-full lg:w-[800px] text-center text-xl sm:text-xl md:text-2xl lg:text-2xl ">
            {project.hero.caption}
          </p>
        )}
      </div>

      {/* Conteúdo Flexível */}
      <div className="flex flex-col gap-40">
        {project.contentBlocks.map((block, index) => {
          if (block.type === "image") {
            return (
              <figure key={index} className="flex flex-col items-center gap-40">
                <img className="rounded-xl w-full object-cover" src={block.src} alt="" />
                {block.caption && <figcaption className="text-black max-w-2xl text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                    {block.caption}
                  </figcaption>}
              </figure>
            );
          }

          if (block.type === "video") {
            return (
              <figure key={index} className="flex flex-col items-center gap-40">
                <video className="rounded-xl w-full object-cover" src={block.src} autoPlay loop muted />
                {block.caption &&  <figcaption className="text-black max-w-2xl text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                    {block.caption}
                  </figcaption>}
              </figure>
            );
          }

          if (block.type === "row") {
            return (
              <div key={index} className="flex flex-col gap-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {block.items.map((item, i) =>
                    item.type === "image" ? (
                      <img key={i} className="rounded-xl w-full object-cover" src={item.src} alt="" />
                    ) : (
                      <video key={i} className="rounded-xl w-full h-[70vh] object-cover" src={item.src} autoPlay loop muted />
                    )
                  )}
                </div>
                {block.caption && <p className="text-black text-center ">{block.caption}</p>}
              </div>
            );
          }

          if (block.type === "grid") {
            return (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {block.items.map((item, i) => (
                  <img key={i} className="rounded-xl w-full h-[70vh] object-cover" src={item.src} alt="" />
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Key achievements */}
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-base text-black/70 ">KEY ACHIEVEMENTS INCLUDE:</h2>
        <ul className="list-disc pl-6 text-base lg:text-xl leading-relaxed">
          {project.keyAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ProjectsDetail;
