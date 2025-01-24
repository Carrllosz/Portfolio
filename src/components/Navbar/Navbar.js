import React, { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import br from '../../assets/brasil.png';
import uk from '../../assets/uk.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("pt"); // Estado para a linguagem selecionada

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <header className="bg-[#141414] fixed top-0 left-0 w-full z-50 p-10">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full justify-between text-white">
          <span className="flex justify-start items-center">
            Product Designer
          </span>
        
          {/* 
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLanguageChange("pt")}
              className={`w-10 h-8 border-2 ${
                language === "pt" ? "border-white" : "border-transparent"
              }`}
            >
              <img
                src={br}
                alt="Português"
                className="w-10 h-6"
              />
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`w-10 h-8 border-2 ${
                language === "en" ? "border-white" : "border-transparent"
              }`}
            >
              <img
                src={uk}
                alt="English"
                className="w-10 h-6"
              />
            </button>
          </div>
          */}

          {/* Menu button for small screens */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>

          {/* Navbar links for larger screens */}
          <div className="hidden md:flex justify-end gap-8 items-center">
            <button className="hover:text-[#FF5B23]">Home</button>
            <button className="hover:text-[#FF5B23]">About me</button>
            <button className="hover:text-[#FF5B23]">Projects</button>
            <button className="hover:text-[#FF5B23]">Contact</button>
          </div>
        </div>

        {/* Sidebar for smaller screens */}
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
              onClick={() => setIsSidebarOpen(false)}
            >
              HOME
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => setIsSidebarOpen(false)}
            >
              ABOUT ME
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => setIsSidebarOpen(false)}
            >
              PROJECTS
              <ArrowUpRightIcon className="w-12 h-12" />
            </button>
            <button
              className="w-full flex items-center justify-between text-left border-b border-gray-700 hover:text-[#FF5B23]"
              onClick={() => setIsSidebarOpen(false)}
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
