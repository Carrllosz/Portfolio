import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";
import fluxus from "../../assets/fluxus.png";
import varejonacional from "../../assets/varejonacional.png";
import easyroute from "../../assets/easyroute.png";
import moobi from "../../assets/moobi.png";

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
    description: "Connecting friends around the world",
    tags: ["Case Study", "App Mobile"],
  },
  {
    id: "fluxus-app",
    title: "Fluxus",
    image: fluxus,
    description: "Turn chaos into flow.",
    tags: ["ERP", "CrossPlatform"],
  },
  {
    id: "varejo-bi",
    title: "BI - Varejo Nacional",
    image: varejonacional,
    description: "From raw data to revenue intelligence.",
    tags: ["BI", "Data Visualization"],
  },
  {
    id: "easyroute",
    title: "Easyroute",
    image: easyroute,
    description: "Collaborative route optimization made simple.",
    tags: ["Redesign", "App Mobile"],
  },
  {
    id: "moobi",
    title: "Moobi",
    image: moobi,
    description: "Smarter and more human urban mobility.",
    tags: ["Case Study", "App Mobile"],
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
    <div id="projects" className="w-full h-fit bg-white flex justify-center items-center pb-16 px-4 py-4">
      <div className="w-full rounded-md">
        <div className="flex flex-col w-full">
          <div className="border-t border-black/40 w-full mb-4"></div>
          <div className="flex items-center justify-between">
            <p className="text-black text-2xl md:text-3xl lg:text-3xl">
              See my work
            </p>
            <ArrowDownIcon className="w-8 h-8 text-black" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
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
                  <h2 className="text-black font-semibold text-base">
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
                      className="border border-black/30 px-4 py-2 rounded-full text-black text-xs"
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
