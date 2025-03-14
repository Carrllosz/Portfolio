import React, { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
    <header className="bg-[#141414] fixed top-0 left-0 w-full z-50 px-4 py-8 md:px-10">
      <nav className="flex items-center justify-between w-full text-white">
        {/* Nome */}
        <span className="text-xl md:text-2xl">
          João <span className="relative">Carlos
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FF5B23]"></span>
          </span>
        </span>

        {/* Botão Menu (Mobile) */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>

        {/* Links de navegação (Desktop) */}
        <div className="text-white/50 hidden md:flex justify-end gap-6 items-center">
          <button onClick={() => handleScrollToSection("home")} className="hover:text-white">
            Home
          </button>
          <button onClick={() => handleScrollToSection("about")} className="hover:text-white">
            About me
          </button>
          <button onClick={() => handleScrollToSection("projects")} className="hover:text-white">
            Projects
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
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[#F4F3EF] flex flex-col items-start p-4 md:p-10 justify-center gap-8 text-[#141414] md:hidden">
          <button
            className="absolute top-4 right-4 p-3 text-xl text-[#141414] hover:text-[#FF5B23]"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>

          <button className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]" onClick={() => handleScrollToSection("home")}>
            Home
            <ArrowUpRightIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]" onClick={() => handleScrollToSection("about")}>
            About me
            <ArrowUpRightIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]" onClick={() => handleScrollToSection("projects")}>
            Projects
            <ArrowUpRightIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]" onClick={() => handleScrollToSection("contact")}>
            Contact
            <ArrowUpRightIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
