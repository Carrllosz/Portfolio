import React from "react";
import perfil from '../../assets/perfil.jpg';
import mvv from '../../assets/nvv.jpg';
import automining from '../../assets/automining.jpg';
import curriculo from '../../assets/curriculo_joaocarlos.pdf';
import angular from '../../assets/angular.png';
import camunda from '../../assets/camunda.png';
import figma from '../../assets/figma.png';
import javascript from '../../assets/javascript.png';
import msproject from '../../assets/project.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import miro from '../../assets/miro.png';
import ts from '../../assets/ts.png';
import { DocumentIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaGithub, FaBehance   } from "react-icons/fa"; 
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

        <div className="w-full h-full">
          <div className="h-[300px] md:h-[300px] lg:h-[440px] bg-[#141414] rounded-3xl relative p-4">
            <div className="flex absolute top-0 right-0 gap-3 p-4">
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

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="https://www.linkedin.com/in/carrllosz/" target="_blank" rel="noopener noreferrer" className="w-full h-[100px] md:h-[300px] lg:h-[150px] bg-[#007EBB] rounded-2xl relative flex flex-col items-center justify-center">
              <FaLinkedinIn className="w-8 h-8 text-white absolute top-2 right-4" />
              <div className="w-[calc(100%-2rem)] h-px absolute bottom-8 bg-white mt-4"></div>
              <p className="absolute bottom-2 left-4 text-white text-sm">@carrllosz</p>
            </a>

            <a href="https://github.com/Carrllosz" target="_blank" rel="noopener noreferrer" className="w-full h-[100px] md:h-[300px] lg:h-[150px] bg-[#F4F3EF] border b-2 border-[#141414] rounded-2xl relative flex flex-col items-center justify-center">
              <FaGithub className="w-8 h-8 text-[#141414] absolute top-2 right-4" />
              <div className="w-[calc(100%-2rem)] h-px absolute bottom-8 bg-[#141414] mt-4"></div>
              <p className="absolute bottom-2 left-4 text-[#141414] text-sm">@carrllosz</p>
            </a>

            <a href="https://www.behance.net/uxcarrllosz" target="_blank" rel="noopener noreferrer" className="w-full h-[100px] md:h-[300px] lg:h-[150px] bg-[#0077FF] rounded-2xl relative flex flex-col items-center justify-center">
              <FaBehance className="w-8 h-8 text-white absolute top-2 right-4" />
              <div className="w-[calc(100%-2rem)] h-px absolute bottom-8  bg-white mt-4"></div>
              <p className="absolute bottom-2 left-4 text-white text-sm">@uxcarrllosz</p>
            </a>
          </div>

        </div>
        </div>

        <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
        </div>

        <div className="my-6 mx-4 sm:mx-6 md:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="flex items-center justify-start gap-4 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 pr-0 md:pr-4">
            <h2 className="font-semibold text-lg">(Áreas que eu atuo)</h2>
            <ArrowDownRightIcon className="w-6 h-6" />
          </div>

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
              Com minha experiência em front-end, otimizei a comunicação entre design e desenvolvimento, garantindo que as entregas fossem consistentes com as especificações técnicas e garantisse a acessibilidade dos projetos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 pl-0 md:pl-">
            <div className="">
              <h2 className="font-bold text-xl">Projetos</h2>
              <p className="text-sm text-gray-600">
                Planejo e gerencio projetos com foco em eficiência, utilizando cronogramas, modelagem BPMN e gestão de indicadores para alcançar metas estratégicas.
              </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <h2 className="font-bold text-xl">Produto</h2>
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

      <div className="my-6 mx-4 sm:mx-6 md:mx-10">
      <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4">
        <h2 className="font-semibold text-lg">(Educação)</h2>
        <ArrowDownRightIcon className="w-6 h-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-start">
        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2022 - Atual
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Universidade Federal de Alagoas</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">Ciência da Computação</h1>
          </div>
        </div>

        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2024
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Alura</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">UX Design: Elaborando Projetos Estratégicos</h1>
          </div>
        </div>

        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2024
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Alura</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">UI Design: Criando o design de um protótipo</h1>
          </div>
        </div>

        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2023
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Xperiun</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">Minicurso de Power BI</h1>
          </div>
        </div>

        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2023
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Alura</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">MS Project: planejando cronogramas de projeto</h1>
          </div>
        </div>

        <div className="w-full max-w-[350px] h-[200px] md:h-[250px] lg:h-[200px] mt-4 bg-[#F4F3EF] border border-[#141414] rounded-2xl relative flex flex-col items-start p-4">
          <p className="text-xs md:text-sm absolute top-4 left-4 bg-[#141414] text-white py-2 px-4 rounded-3xl">
            2023
          </p>
          <div className="absolute bottom-4 left-4">
            <h2 className="font-regular text-sm md:text-lg lg:text-xl">Alura</h2>
            <h1 className="font-bold text-sm md:text-lg lg:text-xl">PMBOK na prática parte 1: gerenciando seu projeto</h1>
          </div>
        </div>
      </div>
      </div>

      <div className="my-4">
          <div className="border border-gray-300 mx-10"></div>
      </div>

      <div className="my-6 mx-4 sm:mx-6 md:mx-10">
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
            <h2 className="font-bold text-base sm:text-lg md:text-xl">
              Desenvolvedor Front-end <br />& UX/UI Designer
            </h2>
              <p className="text-sm">Automining</p>
              <p className="text-sm text-[#FF5B23]"> Outubro 2024 - Presente</p>
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
              <p className="text-sm text-[#FF5B23]"> Abril 2023 - Setembro</p>
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

      <div className="my-6 mx-4 sm:mx-6 md:mx-10">
        <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4">
          <h2 className="font-semibold text-lg">(Minha Toolbox)</h2>
          <ArrowDownRightIcon className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-10 gap-6 my-6">
          <img src={angular} alt="Angular" className="w-12 h-12 object-contain" />
          <img src={python} alt="python" className="w-12 h-12 object-contain" />
          <img src={sql} alt="sql" className="w-12 h-12 object-contain" />
          <img src={javascript} alt="javascript" className="w-12 h-12 object-contain" />
          <img src={camunda} alt="camunda" className="w-12 h-12 object-contain" />
          <img src={figma} alt="figma" className="w-12 h-12 object-contain" />
          <img src={miro} alt="miro" className="w-12 h-12 object-contain" />
          <img src={msproject} alt="msproject" className="w-12 h-12 object-contain" />
          <img src={react} alt="react" className="w-12 h-12 object-contain" />
          <img src={ts} alt="typescript" className="w-12 h-12 object-contain" />
        </div>
      </div>

      </div>
    </div>
  );
};

export default Profile;
