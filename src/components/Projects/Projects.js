import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";

const projects = [
  {
    title: "Redesign App Mobile - Amazon",
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
    image: amazon,
    description: "Enhancing usability and design.",
    tags: ["Redesign", "Mobile"],
    position: "left",
  },
  {
    title: "Friends - App Mobile",
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
    image: friends,
    description: "Enhancing usability and design.",
    tags: ["Case Study", "Mobile"],
    position: "right",
  },
];

const Projects = () => {
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
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center px-4 md:px-10 pb-8">
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

        <div className="flex flex-col gap-10 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 flex flex-col items-center ${
                project.position === "left" ? "self-start" : "self-end"
              }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
              >
                <div
                  className="overflow-hidden rounded-2xl relative"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={handleMouseLeave}
                >
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
              </a>

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
