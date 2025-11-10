import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (id) => {
    setIsSidebarOpen(false);

    // ABOUT → navega para /profile e volta ao topo suavemente
    if (id === "profile") {
      navigate("/profile");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
      return;
    }

    // Se não estiver na Home → vai para Home e sobe suave
    if (location.pathname !== "/") {
      navigate(`/?section=${id}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 80);
      return;
    }

    // Se já está na Home → scroll suave direto na seção
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-4 bg-white">
      <nav className="flex items-center justify-between w-full text-black">
        {/* Nome */}
        <button
          onClick={() => handleScrollToSection("home")}
          className="text-sm font-bold md:text-[12px]"
        >
          JOÃO CARLOS
        </button>

        {/* Botão Menu (Mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="text-black text-[12px] hidden md:flex justify-center gap-4 items-center">
          {["home", "projects", "profile", "contact"].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(item)}
              className="hover:text-[#FF5B23] transition-transform duration-500 ease-in-out hover:animate-rotate-up"
            >
              {item === "home"
                ? "HOME"
                : item === "projects"
                ? "WORK"
                : item === "profile"
                ? "ABOUT"
                : "CONTACT"}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full bg-[#F4F3EF] flex flex-col items-start p-6 md:p-10 justify-center gap-8 text-[#141414] md:hidden transform transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 0.4s ease-in-out, opacity 0.3s ease-in-out",
          height: "100vh",
        }}
      >
        <button
          className="absolute top-4 left-4 p-3 text-3xl text-[#141414] hover:text-[#FF5B23]"
          onClick={() => setIsSidebarOpen(false)}
        >
          <XMarkIcon className="w-8 h-8" />
        </button>

        {["home", "projects", "profile", "contact"].map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23] text-2xl"
            onClick={() => handleScrollToSection(item)}
          >
            {item === "home"
              ? "HOME"
              : item === "projects"
              ? "WORK"
              : item === "profile"
              ? "ABOUT"
              : "CONTACT"}
            <ArrowUpRightIcon className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        ))}
      </div>

      {/* Estilo da animação */}
      <style>{`
        @keyframes rotateUp {
          0% {
            transform: translateY(0) rotateX(0deg);
          }
          30% {
            transform: translateY(-5px) rotateX(180deg);
          }
          100% {
            transform: translateY(0) rotateX(360deg);
          }
        }

        .hover\\:animate-rotate-up:hover {
          animation: rotateUp 0.7s ease-in-out forwards;
          transform-origin: center;
          display: inline-block;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
