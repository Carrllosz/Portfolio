import React from "react";
import perfil from "../../assets/perfil.jpg";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center px-4 md:px-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-start gap-6 md:gap-12">

        <div className="w-full flex flex-col justify-center gap-6 lg:gap-8">
          <h1 className="text-white font-medium text-4xl md:text-5xl lg:text-9xl">Product Designer.</h1>

          <div className="lg:w-[850px]  text-white/50 text-base md:text-lg lg:text-xl leading-relaxed">
            <p>
            I'm an Arapiraca-based Product Designer with a strong background in UX and Front-end Development, crafting seamless and impactful digital experiences.
            </p>
            <p>
              Currently at <span className="text-[#FF5B23]">Automining</span>, previously at 
              <span className="text-[#FF5B23]"> Mineração Vale Verde</span>, blending design and technology to build intuitive, high-performing interfaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 text-white text-xs md:text-lg lg:text-sm">
            <p className="border border-white/30 px-4 py-2 rounded-full">2+ years of exp</p>
            <p className="border border-white/30 px-4 py-2 rounded-full">Product Design</p>
            <p className="border border-white/30 px-4 py-2 rounded-full">BPMN</p>
            <p className="border border-white/30 px-4 py-2 rounded-full">UX Strategy</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
