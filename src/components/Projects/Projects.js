import React from "react";
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";
import figma from "../../assets/figma.png";
import miro from "../../assets/miro.png";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-start p-4">
      <div className="max-w-6xl w-full rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold text-[#F4F3EF]">
            PROJETOS
          </h1>
          <ArrowDownLeftIcon className="w-24 h-24 text-[#F4F3EF]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex w-full max-w-full h-[200px] md:h-[250px] lg:h-[200px] mt-6  border border-[#F4F3EF] rounded-2xl overflow-hidden">
            <div className="w-1/3 flex flex-col justify-between p-4 text-[#F4F3EF]">
              <div className="flex flex-col">
                <h2 className="font-bold text-xs md:text-lg lg:text-xl">
                <a href="https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon" target="_blank" rel="noopener noreferrer">
                  Redesign App Mobile - Amazon
                </a>
                </h2>
                <h1 className="font-regular text-xs md:text-lg lg:text-xl">
                  Case Study
                </h1>
              </div>

              <div className="flex flex-col">
                  <h2 className="font-regular text-xs md:text-lg lg:text-base">
                    Ferramenta(s) usada(s)
                  </h2>
                  <div className="flex gap-4 mt-2">
                    <img
                      src={figma}
                      alt="Figma"
                      className="w-12 h-12 object-contain"
                    />
                    <img
                      src={miro}
                      alt="Miro"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
            </div>

            <div className="w-2/3 h-full">
            <a href="https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon" target="_blank" rel="noopener noreferrer">
              <img
                src={amazon}
                alt="Amazon redesign"
                className="w-full h-full object-cover"
              />
            </a>
            </div>
          </div>
          <div className="flex w-full max-w-full h-[200px] md:h-[250px] lg:h-[200px] mt-6  border border-[#F4F3EF] rounded-2xl overflow-hidden">
            <div className="w-1/3 flex flex-col justify-between p-4 text-[#F4F3EF]">
              <div className="flex flex-col">
                <h2 className="font-bold text-xs md:text-lg lg:text-xl">
                <a href="https://www.behance.net/gallery/219990865/Friends-App-Mobile" target="_blank" rel="noopener noreferrer">
                  Friends - App Mobile
                </a>
                </h2>
                <h1 className="font-regular text-xs md:text-lg lg:text-xl">
                  Case Study
                </h1>
              </div>

              <div className="flex flex-col">
                  <h2 className="font-regular text-xs md:text-lg lg:text-base">
                    Ferramenta(s) usada(s)
                  </h2>
                  <div className="flex gap-4 mt-2">
                    <img
                      src={figma}
                      alt="Figma"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
            </div>

            <div className="w-2/3 h-full">
            <a href="https://www.behance.net/gallery/219990865/Friends-App-Mobile" target="_blank" rel="noopener noreferrer">
              <img
                src={friends}
                alt="Friends"
                className="w-full h-full object-cover"
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
