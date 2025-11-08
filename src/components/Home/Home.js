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
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div
      className="w-full min-h-[160vh] bg-white flex flex-col pt-[160px] justify-between items-start px-4"
      id="home"
    >
      <div className="w-full flex flex-col md:flex-row items-end justify-end gap-8 md:gap-16">
        <div className="w-full">
          <div className="text-black text-xl sm:text-3xl md:text-4xl lg:text-4xl">
            <p>
              WELCOME TO MY SPACE ON THE INTERNET, WHERE I SHOWCASE MY WORK,
            </p>
            <p>
              CREATIVE PROCESS, ANIMATIONS, AND A VARIETY OF OTHER THINGS
            </p>
            <p>
              I'M CURRENTLY EXPLORING.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between items-center text-black text-[12px] sm:text-sm md:text-[12px]">
          <span>BASED OUT OF ARAPIRACA</span>
          <span>WORKING AT AUTOMINING</span>
        </div>

        <div className="w-full rounded-xl overflow-hidden">
          <video
            className="w-full h-[60vh] sm:h-[65vh] md:h-[100vh] object-cover rounded-xl"
            src={homeMoobi}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
