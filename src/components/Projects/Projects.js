import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";
import fluxus from "../../assets/fluxus.png";
import varejonacional from "../../assets/varejonacional.png";
import easyroute from "../../assets/easyroute.png";
import moobimp4 from "../../assets/moobi.mp4";
import fluxusmp4 from "../../assets/fluxus.mp4";
import amazonmp4 from "../../assets/amazon.mp4";
import appfriends from "../../assets/appfr.png";
import easyrout from "../../assets/easyrouter.mp4";

const projects = [
  {
    id: "amazon-redesign",
    title: "Redesign App Mobile - Amazon",
    video: amazonmp4,
    description: "Enhancing usability and design.",
  },
  {
    id: "friends-app",
    title: "Friends - App Mobile",
    image: appfriends,
    description: "Connecting friends around the world",
  },
  {
    id: "fluxus-app",
    title: "Fluxus",
    video: fluxusmp4,
    description: "Turn chaos into flow.",
  },
  {
    id: "varejo-bi",
    title: "BI - Varejo Nacional",
    image: varejonacional,
    description: "From raw data to revenue intelligence.",
  },
  {
    id: "easyroute",
    title: "Easyroute",
    video: easyrout,
    description: "Collaborative route optimization made simple.",
  },
  {
    id: "moobi",
    title: "Moobi",
    video: moobimp4,
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
                      className="w-full h-[350px] md:h-[300px] lg:h-[700px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[350px] md:h-[300px] lg:h-[700px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* 🧠 Hover text overlay (nome + descrição) */}
                  <div
                      className={`flex justify-between absolute inset-x-0 bottom-0 p-4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}
                    >
                      <p
                        className={` text-[10px] sm:text-sm md:text-[14px] font-semibold ${
                          project.id === "moobi" ? "text-black" : "text-white"
                        }`}
                      >
                        {project.title}
                      </p>
                      <p
                        className={` text-[10px] sm:text-sm md:text-[14px] opacity-90 ${
                          project.id === "moobi" ? "text-black" : "text-white"
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
