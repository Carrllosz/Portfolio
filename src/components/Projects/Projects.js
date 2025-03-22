import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";

const projects = [
  {
    id: "amazon-redesign",
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    description: "Enhancing usability and design.",
    tags: ["Redesign", "Mobile"],
  },
  {
    id: "friends-app",
    title: "Friends - App Mobile",
    image: friends,
    description: "Enhancing usability and design.",
    tags: ["Case Study", "Mobile"],
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
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center px-4 md:px-10">
      <div className="w-full rounded-md">
        <div className="flex flex-col w-full">
          <div className="border-t border-white/40 w-full mb-4"></div>
          <div className="flex items-center justify-between">
            <p className="text-white text-2xl md:text-3xl lg:text-3xl">
              See my work
            </p>
            <ArrowDownIcon className="w-8 h-8 text-[#F4F3EF]" />
          </div>
        </div>

        <div className="flex gap-4 mt-6 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full md:w-1/2 flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)} // Redireciona para a página de detalhes
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative group block">
                <div className="overflow-hidden rounded-2xl relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  {hoverPosition.visible && hoverPosition.projectIndex === index && (
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

              <div className="flex justify-between w-full items-center mt-2">
                <div>
                  <h2 className="text-white font-semibold text-base">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <p
                      key={i}
                      className="border border-white/30 px-4 py-2 rounded-full text-white text-xs"
                    >
                      {tag}
                    </p>
                  ))}
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
