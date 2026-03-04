import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import moobi from "../../assets/moobilogo.png";
import fluxus from "../../assets/fluxuslogo.png";
import easyroute from "../../assets/easyroutelogo.png";

const projects = [
  {
    id: "fluxus-app",
    image: fluxus,
    description: "Turn chaos into flow.",
  },
  {
    id: "easyroute",
    image: easyroute,
    description: "Collaborative route optimization made simple.",
  },
  {
    id: "moobi",
    image: moobi,
    description: "Smarter and more human urban mobility.",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    projectIndex: null,
  });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
      projectIndex: index,
    });
  };

  const handleMouseLeave = () => {
    setHoverPosition({
      ...hoverPosition,
      visible: false,
      projectIndex: null,
    });
  };

  return (
    <div
      id="projects"
      className="w-full h-fit bg-white flex justify-center items-center pb-4 px-4"
    >
      <div className="w-full rounded-md">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative group block w-full">
                <div className="overflow-hidden rounded-2xl relative">
                  {/* 👇 Condicional: vídeo ou imagem */}
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[400px] md:h-[300px] lg:h-[700px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.image}
                      className="w-full h-[350px] md:h-[300px] lg:h-[700px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* 🧠 Hover text overlay (nome + descrição) */}
                  <div
                      className={`flex justify-center absolute inset-x-0 bottom-0 p-4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}
                    >
                      <p
                        className={` text-[10px] sm:text-sm md:text-[14px] opacity-90 ${
                          project.id === "moobi" || project.id === "fluxus-app"
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {project.description}
                      </p>

                    </div>

                  {/* 🔸 Hover circle animation */}
                  {hoverPosition.visible &&
                    hoverPosition.projectIndex === index && (
                      <div
                        className="absolute w-16 h-16 bg-[#FF5B23] rounded-full flex justify-center items-center transition-transform duration-75 ease-out pointer-events-none"
                        style={{
                          top: `${hoverPosition.y - 32}px`,
                          left: `${hoverPosition.x - 32}px`,
                        }}
                      >
                        <ArrowUpRightIcon className="w-8 h-8 text-white" />
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
