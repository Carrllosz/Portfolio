import React, { useState } from "react";
import resume from "../../assets/Resume_JoaoC_EN.pdf";
import curriculo from "../../assets/Curriculo_JoaoC_PT.pdf";
import { ArrowDown } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joaocar2003@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-white flex flex-col justify-between items-center px-6 py-10 border-t border-black/10"
    >
      <div className="w-full flex flex-col items-center justify-center flex-grow text-center">
        
        <h2 className="text-xl md:text-2xl font-light flex items-center gap-2 mb-6">
          Entre em contato
          <ArrowDown size={22} />
        </h2>

        <div className="flex items-center gap-8 text-black/80 relative">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/carrllosz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-7 h-7"
            />
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/uxcarrllosz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg"
              alt="Behance"
              className="w-7 h-7"
            />
          </a>

          {/* Gmail - copiar */}
          <button
            onClick={handleCopyEmail}
            className="hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
              alt="Gmail"
              className="w-7 h-7"
            />
          </button>

          {/* CV EN */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4572E] transition text-md font-medium"
          >
            CV EN
          </a>

          {/* CV PT */}
          <a
            href={curriculo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4572E] transition text-md font-medium"
          >
            CV PT-BR
          </a>

          {/* Feedback */}
          {copied && (
            <span className="absolute -bottom-8 text-sm text-[#E4572E] animate-fadeIn">
              E-mail copiado
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
