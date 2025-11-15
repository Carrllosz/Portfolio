import React from "react";
import footer from "../../assets/tech.mp4";
import { useNavigate, useLocation } from "react-router-dom";
import resume from "../../assets/Resume_JoaoC_EN.pdf";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id) => {
    // Se for ABOUT → vai para /profile
    if (id === "profile") {
      navigate("/profile");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
      return;
    }

    // Se não está na home → navega para home e sobe
    if (location.pathname !== "/") {
      navigate(`/?section=${id}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
      return;
    }

    // Se já está na home → rola direto para a seção
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-white flex flex-col justify-start items-center px-6 py-10 border-t border-black/10"
    >
      {/* conteúdo principal */}
      <div className="w-full flex flex-col md:flex-row items-center gap-12 flex-grow">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={footer}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[30vh] sm:h-[35vh] md:h-[60vh] object-cover rounded-xl"
          />
        </div>

        {/* Texto e links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-2">
              Let’s talk...
            </h2>
            <p className="text-lg md:text-xl text-black/70">Drop me a line.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Pages */}
            <div>
              <h3 className="text-black/60 mb-2 font-medium text-sm uppercase tracking-widest">
                Pages
              </h3>
              <ul className="flex flex-col gap-2 text-black/80">
                <li>
                  <button
                    onClick={() => goTo("home")}
                    className="hover:text-[#E4572E] transition cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goTo("profile")}
                    className="hover:text-[#E4572E] transition cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goTo("projects")}
                    className="hover:text-[#E4572E] transition cursor-pointer"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goTo("contact")}
                    className="hover:text-[#E4572E] transition cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
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
                    href={resume}
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

      {/* Footer */}
      <div className="w-full flex justify-between items-center border-t border-black/10 mt-8 pt-4 text-sm text-black/50">
        <p>©2025 João Carlos</p>
        <p>
          Be your on <span className="text-[#E4572E]">guide</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
