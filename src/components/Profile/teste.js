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
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center">
      <div className="w-full">

      <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16 px-4 md:px-10 pb-6">
        <div className="w-full md:w-[600px] lg:w-[600px] h-[600px] md:h-[500px] lg:h-[600px] bg-[#141414] rounded-3xl overflow-hidden">
          <img src={perfil} alt="perfil" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-[600px] lg:w-[650px] h-[600px] md:h-[500px] lg:h-[550px] flex flex-col justify-between">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">Hey!</h1>

          <div className="text-white text-base md:text-lg lg:text-4xl">
            <p>
              I'm João, a UX/UI Designer and Front-end Developer creating seamless and impactful digital experiences.
            </p>
            <p>
              Currently at <span className="text-[#FF5B23]">Automining</span>, 
              <span> previously at </span>
              <span className="text-[#FF5B23]"> Mineração Vale Verde.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-white justify-start">
            <p className="border border-white p-2 px-4 rounded-full">2+ years of exp</p>
            <p className="border border-white p-2 px-4 rounded-full">Product Design</p>
            <p className="border border-white p-2 px-4 rounded-full">BPMN</p>
            <p className="border border-white p-2 px-4 rounded-full">UX Strategy</p>
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
              <li>Desenvolve soluções front-end escaláveis com Angular, HTML e CSS.</li>
              <li>Cria interfaces centradas no usuário, aplicando boas práticas de UX/UI.</li>
              <li>Realiza pesquisas e testes de usabilidade para aprimorar fluxos de trabalho</li>
              <li>Produz wireframes, protótipos e designs de alta fidelidade.</li>
              <li>Otimiza a arquitetura da informação e a visualização de dados.</li>
              <li>Melhora processos operacionais usando BPMN.</li>
              <li>Colabora com a equipe para alinhar objetivos de negócio, viabilidade técnica e necessidades dos usuários.</li>
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
