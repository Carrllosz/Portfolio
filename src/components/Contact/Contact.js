import React from "react";
import homeMoobi from "../../assets/homemoobi.mp4";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-white flex flex-col justify-start items-center px-6 py-10 "
    >
      {/* CONTEÚDO PRINCIPAL: imagem (esquerda) + bloco direito (frase + colunas) */}
      <div className="w-full flex flex-col md:flex-row items-center gap-12 flex-grow border-t border-black/10">
        {/* COLUNA ESQUERDA - IMAGEM */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={homeMoobi}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[10vh] sm:h-[25vh] md:h-[60vh] object-cover rounded-xl"
          />
        </div>

        {/* COLUNA DIREITA - FRASE NO TOPO E AS DUAS COLUNAS ABAIXO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* FRASE PRINCIPAL */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-2">
              Let’s talk...
            </h2>
            <p className="text-lg md:text-xl text-black/70">Drop me a line.</p>
          </div>

          {/* LINKS ABAIXO DA FRASE - GRID COM DUAS COLUNAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* PÁGINAS */}
            <div>
              <h3 className="text-black/60 mb-2 font-medium text-sm uppercase tracking-widest">
                Pages
              </h3>
              <ul className="flex flex-col gap-2 text-black/80">
                <li>
                  <Link to="/" className="hover:text-[#E4572E] transition cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-[#E4572E] transition cursor-pointer">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" className="hover:text-[#E4572E] transition cursor-pointer">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="hover:text-[#E4572E] transition cursor-pointer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-black/60 mb-2 font-medium text-sm uppercase tracking-widest">
                Social
              </h3>
              <ul className="flex flex-col gap-2 text-black/80">
                <li>
                  <a
                    href="https://www.linkedin.com/in/carrllosz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4572E] transition"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/uxcarrllosz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4572E] transition"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:joaocar2003@gmail.com"
                    className="hover:text-[#E4572E] transition"
                  >
                    G-Mail
                  </a>
                </li>
                <li>
                  <a
                    href="/Resume_JoaoC_EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4572E] transition"
                  >
                    See Full CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* LINHA INFERIOR - MAIS PRÓXIMA DO CONTEÚDO */}
      <div className="w-full flex justify-between items-center border-t border-black/10 mt-8 pt-4 text-sm text-black/50">
        <p>©2025 João Carlos</p>
        <p>
          Made with <span className="text-[#E4572E]">love</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
