import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import homeMoobi from "../../assets/homemoobi.mp4";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <section
      id="home"
      className="w-full bg-white px-5 sm:px-8 lg:px-4 pt-28 lg:pt-36 "
    >
      <div className="max-w-[1600px] mx-auto flex flex-col gap-20">

        {/* INTRO */}
        <div className="min-h-[45vh] flex items-end">
          <div className="max-w-6xl">
            <h1 className="text-black font-normal uppercase leading-[1.05] tracking-[-0.03em]
                           text-[2rem]
                           sm:text-[3rem]
                           md:text-[4rem]
                           lg:text-[5rem]
                           xl:text-[2rem]">

              <p>WELCOME TO MY CORNER OF THE WEB.</p>
              <p>HERE YOU'LL FIND THE THINGS I'VE BEEN DESIGNING,</p>
              <p>BUILDING, AND EXPLORING.</p>

            </h1>
          </div>
        </div>

        {/* INFO + VIDEO */}
        <div className="flex flex-col gap-5">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-[13px] sm:text-sm text-black">

            <div className="flex flex-wrap gap-x-5 gap-y-2 uppercase tracking-wide">

              <span>Based in Arapiraca, Brazil</span>

              <span className="text-neutral-400">•</span>

              <span>2+ Years of Experience</span>

            </div>

            <span className="uppercase tracking-wide">
              <span className="text-[#FF5B23]">Product Designer</span> at Edge
            </span>

          </div>

          <div className="w-full rounded-xl overflow-hidden"> <video className="w-full h-[60vh] sm:h-[65vh] md:h-[100vh] object-cover rounded-xl" src={homeMoobi} autoPlay loop muted playsInline />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;