import React from "react";
import usiminas from "../../assets/usiminas.png";
import verum from "../../assets/verum.png";
import mvv from "../../assets/mvv.png";
import appian from "../../assets/appian.png";
import atn from "../../assets/ATN.png";
import aura from "../../assets/aura.png";
import aguas from "../../assets/aguas.png";
import orion from "../../assets/orion.svg";
import bahia from "../../assets/bahia.png";

const brandLogos = [usiminas, verum, mvv, appian, atn, aura, aguas, orion, bahia];

const MovingBrands = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-10 flex justify-center items-center">
      <div className="marquee">
        <div className="marquee__track">
          {/* Duplicar conteúdo pra criar efeito de loop infinito */}
          {brandLogos.concat(brandLogos).map((logo, index) => (
            <div
              key={index}
              className="marquee__item grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee__track {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .marquee__item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* animação contínua e infinita */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* pausa suave ao hover */
        .marquee__track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .marquee__item img {
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingBrands;
