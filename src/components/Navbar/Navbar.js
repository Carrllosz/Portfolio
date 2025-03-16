import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-8 md:px-10 backdrop-blur-md bg-[#141414]/60">
      {/* Navbar com efeito Glass */}
      <nav className="flex items-center justify-between w-full text-white">
        {/* Nome */}
        <span className="text-xl md:text-2xl">
          João <span className="relative">Carlos
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FF5B23]"></span>
          </span>
        </span>

        {/* Botão Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>

        {/* Links de navegação (Desktop) */}
        <div className="text-white/50 hidden md:flex justify-center gap-4 items-center">
          <button onClick={() => handleScrollToSection("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => handleScrollToSection("projects")} className="hover:text-white">
            Projects
          </button>
          <button onClick={() => handleScrollToSection("profile")} className="hover:text-white">
            About me
          </button>
        </div>

        {/* Botão Contact me (Somente Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleScrollToSection("contact")}
            className="flex items-center border border-[#141414] px-4 py-2 rounded-full text-[#FF5B23] hover:border hover:border-[#FF5B23] transition-all duration-300"
          >
            <div className="w-3 h-3 bg-[#FF5B23] rounded-full mr-2 transition-all duration-300"></div>
            Contact me
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full bg-[#F4F3EF] flex flex-col items-start p-6 md:p-10 justify-center gap-8 text-[#141414] md:hidden transform transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 0.4s ease-in-out, opacity 0.3s ease-in-out",
          height: "100vh", // Garante que o menu ocupe 100% da altura da tela
        }}
      >
        <button
          className="absolute top-4 left-4 p-3 text-3xl text-[#141414] hover:text-[#FF5B23]"
          onClick={() => setIsSidebarOpen(false)}
        >
          <XMarkIcon className="w-8 h-8" />
        </button>

        <button
          className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23] text-2xl"
          onClick={() => handleScrollToSection("home")}
        >
          Home
          <ArrowUpRightIcon className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <button
          className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23] text-2xl"
          onClick={() => handleScrollToSection("projects")}
        >
          Projects
          <ArrowUpRightIcon className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <button
          className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23] text-2xl"
          onClick={() => handleScrollToSection("profile")}
        >
          About me
          <ArrowUpRightIcon className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <button
          className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23] text-2xl"
          onClick={() => handleScrollToSection("contact")}
        >
          Contact
          <ArrowUpRightIcon className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
