import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import homeVideo from "../../assets/home.mp4";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col pt-[160px] justify-between items-start px-4 py-4" id="home">
      <div className="w-full flex flex-col md:flex-row items-end justify-end gap-8 md:gap-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h1 className="text-black font-medium text-8xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight">
            Product Designer.
          </h1>

          <div className="text-black/60 text-2xl sm:text-lg md:text-1xl lg:text-xl leading-relaxed space-y-4">
            <p>
              I'm an Arapiraca-based Product Designer with a strong background in UX and Front-end Development, crafting seamless and impactful digital experiences.
            </p>
            <p>
              Currently at <span className="text-[#FF5B23]">Automining</span>, previously at 
              <span className="text-[#FF5B23]"> Mineração Vale Verde</span>, blending design and technology to build intuitive, high-performing interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 rounded-xl overflow-hidden">
        <video
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] object-cover rounded-xl"
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Home;
