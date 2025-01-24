import React from "react";
import perfil from '../../assets/perfil.jpg';
import mvv from '../../assets/nvv.jpg';
import automining from '../../assets/automining.jpg';
import amazon from '../../assets/amazon.png';
import curriculo from '../../assets/curriculo_joaocarlos.pdf';
import { DocumentIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub  } from "react-icons/fa"; 
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center p-4">
      <div className="max-w-6xl w-full bg-[#F4F3EF] rounded-md">
        <div className="flex flex-col justify-start items-start p-6 md:p-10 text-[#141414]">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
            JOÃO CARLOS
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl">
          Product Designer | UX/UI Designer | Desenvolvedor Front-end
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center px-4 md:px-10 pb-6">
          <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] bg-[#141414] rounded-3xl overflow-hidden">
            <img
              src={perfil}
              alt="perfil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] bg-[#141414] rounded-3xl relative p-4">
          <div className="flex absolute top-0 right-0 gap-3 p-4">
          <div className="relative group">
            <button className="bg-[#F4F3EF] w-10 h-10 rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/in/carrllosz/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-[#141414] hover:text-[#FF5B23]" />
              </a>
            </button>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[#FF5B23] text-white text-xs py-1 px-2 rounded-md">
              LinkedIn
            </span>
          </div>

          <div className="relative group">
            <button className="bg-[#F4F3EF] w-10 h-10 rounded-full flex items-center justify-center">
              <a href="https://github.com/Carrllosz" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-[#141414] hover:text-[#FF5B23]" />
              </a>
            </button>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[#FF5B23] text-white text-xs py-1 px-2 rounded-md">
              GitHub
            </span>
          </div>

          <div className="relative group">
            <button className="bg-[#F4F3EF] w-10 h-10 rounded-full flex items-center justify-center">
              <a
                className="flex justify-center items-center w-full text-white"
                href={curriculo}
                download="Curriculo_JoaoCarlos.pdf"
              >
                <DocumentIcon className="text-[#141414] w-6 h-6 hover:text-[#FF5B23]" />
              </a>
            </button>
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[#FF5B23] text-white text-xs py-1 px-2 rounded-md">
              Download Currículo
            </span>
          </div>
          </div>
            <p className="absolute bottom-0 left-0 text-white text-base md:text-lg lg:text-4xl p-4 hover:text-[#FF5B23]">
            Como Product Designer, eu me especializo em criar soluções digitais intuitivas e impactantes.
            </p>
          </div>
        </div>

        <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
        </div>

        <div className="my-6 mx-4 sm:mx-6 md:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Primeira coluna */}
          <div className="flex items-center justify-start gap-4 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 pr-0 md:pr-4">
            <h2 className="font-semibold text-lg">(Áreas que eu atuo)</h2>
            <ArrowDownRightIcon className="w-6 h-6" />
          </div>

          {/* Segunda coluna */}
          <div className="grid grid-cols-1 gap-6 pr-0 md:pr-2 border-b md:border-b-0 md:border-r border-gray-300">
            <div>
              <h2 className="font-bold text-xl">UX/UI Design</h2>
              <p className="text-sm text-gray-600">
                Crio interfaces centradas no usuário, combinando design intuitivo com práticas de usabilidade para entregar experiências marcantes.
              </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <h2 className="font-bold text-xl">Desenvolvimento Front-end</h2>
              <p className="text-sm text-gray-600">
              Com experiência no desenvolvimento de aplicações modernas e responsivas usando React.js e Angular, trago conhecimento em otimização de performance e garantia de acessibilidade.
              </p>
            </div>
          </div>

          {/* Terceira coluna */}
          <div className="grid grid-cols-1 gap-6 pl-0 md:pl-">
            <div className="">
              <h2 className="font-bold text-xl">Projects</h2>
              <p className="text-sm text-gray-600">
                Planejo e gerencio projetos com foco em eficiência, utilizando cronogramas, modelagem BPMN e gestão de indicadores para alcançar metas estratégicas.
              </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <h2 className="font-bold text-xl">Product</h2>
              <p className="text-sm text-gray-600">
                Transformo ideias em soluções estratégicas, gerenciando backlog, roadmaps e métricas para entregar produtos impactantes.
              </p>
            </div>
          </div>
        </div>
        </div>

      <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
      </div>

      <div className="my-6 mx-10">
      <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4">
        <h2 className="font-semibold text-lg">(Minhas experiências)</h2>
        <ArrowDownRightIcon className="w-6 h-6" />
      </div>

      <div className="grid my-6 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] bg-[#141414] rounded-3xl overflow-hidden">
          <img
            src={automining}
            alt="perfil"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[350px] md:h-[300px] lg:h-[400px] bg-[#141414] rounded-3xl relative p-4 text-white">
          <div className="flex items-start justify-between w-full absolute top-0 left-0 p-4">
            <div>
              <h2 className="font-bold text-base md:text-xl">Estagiário Front-end</h2>
              <p className="text-sm">Automining</p>
            </div>

            <div className="flex justify-end text-xs md:text-sm absolute top-0 right-0 p-4">
              Outubro 2024 - Presente
            </div>
          </div>

          <div className="absolute bottom-0 left-0 text-white text-sm md:text-base p-4 hover:text-[#FF5B23]">
            <ul className="list-disc pl-5 space-y-2">
              <li>Modelagem de processos com BPMN</li>
              <li>Criação de protótipos interativos no Figma</li>
              <li>Desenvolvimento de interfaces com Angular, HTML e CSS</li>
              <li>Alinhamento de entregas com requisitos dos clientes</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[350px] md:h-[300px] lg:h-[400px] bg-[#141414] rounded-3xl relative p-4 text-white">
          <div className="flex items-start justify-between w-full absolute top-0 left-0 p-4">
            <div>
              <h2 className="font-bold text-base md:text-xl">Estagiário de PMO</h2>
              <p className="text-sm">Mineração Vale Verde</p>
            </div>

            <div className="flex justify-end text-xs md:text-sm absolute top-0 right-0 p-4">
              Abril 2023 - Setembro
            </div>
          </div>

          <div className="absolute bottom-0 left-0 text-white text-sm md:text-base p-4 hover:text-[#FF5B23]">
            <ul className="list-disc pl-5 space-y-2">
              <li>Desenvolvimento de dashboards para monitoramento de KPIs</li>
              <li>Modelagem e otimização de processos com BPMN</li>
              <li>Implementação de automações (Python, Power Automate, VBA)</li>
              <li>Suporte a reuniões de gestão com dados estratégicos</li>
              <li>Centralização e garantia da consistência dos dados</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] bg-[#141414] rounded-3xl overflow-hidden">
          <img
            src={mvv}
            alt="perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>

      <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
      </div>

      <div className="my-6 mx-10">
      <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4">
        <h2 className="font-semibold text-lg">(Ferramentas que possuo conhecimento)</h2>
        <ArrowDownRightIcon className="w-6 h-6" />
      </div>    
      </div>

      <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
      </div>

      <div className="my-6 mx-10">
      <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4">
        <h2 className="font-semibold text-lg">(Meus Projetos)</h2>
        <ArrowDownRightIcon className="w-6 h-6" />
      </div>

      <div className="flex my-6">
        <div className="relative w-full h-[150px] md:h-[150px] lg:h-[250px] rounded-2xl overflow-hidden">
          <img
            src={amazon}
            alt="Redesign App Amazon"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#141414] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl justify-center items-center flex">
            <button className="font-bold bg-white w-[150px] h-[50px] justify-center items-center rounded-md hover:bg-[#FF5B23] hover:text-white">
              <a href="https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon" target="_blank" rel="noopener noreferrer">
                Sobre o Projeto
              </a>
            </button>
          </div>
        </div>
      </div>
      </div>

      </div>
    </div>
  );
};

export default Profile;
