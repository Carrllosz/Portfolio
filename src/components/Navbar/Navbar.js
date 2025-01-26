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
    <header className="bg-[#141414] fixed top-0 left-0 w-full z-50 p-10">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full justify-between text-white">
          <span className="flex justify-start items-center">
            Product Designer
          </span>

          {/* Botão de menu para mobile */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>

          {/* Links para desktop */}
          <div className="hidden md:flex justify-end gap-8 items-center">
            <button onClick={() => handleScrollToSection("home")} className="hover:text-[#FF5B23]">
              Home
            </button>
            <button onClick={() => handleScrollToSection("about")} className="hover:text-[#FF5B23]">
              About me
            </button>
            <button onClick={() => handleScrollToSection("projects")} className="hover:text-[#FF5B23]">
              Projects
            </button>
            <button onClick={() => handleScrollToSection("contact")} className="hover:text-[#FF5B23]">
              Contact
            </button>
          </div>
        </div>

        {/* Sidebar para mobile */}
        {isSidebarOpen && (
          <div className="fixed text-6xl inset-0 bg-[#F4F3EF] flex flex-col items-start p-10 justify-center gap-12 text-[#141414] md:hidden">
            <button
              className="absolute top-5 right-5 p-5 text-xl text-[#141414] hover:text-[#FF5B23]"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✖
            </button>

            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => handleScrollToSection("home")}
            >
              HOME
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => handleScrollToSection("about")}
            >
              ABOUT ME
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => handleScrollToSection("projects")}
            >
              PROJECTS
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => handleScrollToSection("contact")}
            >
              CONTACT
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
