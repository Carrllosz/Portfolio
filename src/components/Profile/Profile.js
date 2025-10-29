import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaBehance, FaPlus, FaMinus } from "react-icons/fa";
import curriculo from '../../assets/Curriculo_JoaoC_PT.pdf';
import curriculoEN from '../../assets/Resume_JoaoC_EN.pdf';

const ExperienceItem = ({ company, role, description, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-t border-black/40 w-full py-2 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <div>
          <h2 className="text-2xl text-black">{company}</h2>
          <p className="text-base text-black/70">{role}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-black" /> : <FaPlus className="text-black" />}
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-black/60">{description}</p>
      </motion.div>
    </div>
  );
};

const Profile = () => {
  return (
    <div id="profile" className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-4">
      <div className="flex flex-col w-full rounded-md text-black gap-8">

        <div>
          <div className="border-t border-black/40 w-full mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-3xl mb-2">About Me</h2>

              <div className="flex items-center gap-2 mb-4">
                <a
                  href="https://www.linkedin.com/in/carrllosz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full text-white hover:text-blue-700 transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://www.behance.net/uxcarrllosz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 w-10 h-10 flex items-center justify-center rounded-full text-white hover:text-blue-600 transition"
                >
                  <FaBehance size={24} />
                </a>

              </div>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-8">
             <div>
                I'm a multidisciplinary <span className="text-black">Product Designer </span>  
                with over two years of experience, currently working at <span className="text-[#FF5B23]">Automining</span>, where I design 
                intuitive and efficient digital experiences for the mining industry. My work bridges design, data, and technology to deliver 
                seamless user interactions and visually engaging interfaces.

                <br /><br />

                Previously, I worked as a PMO intern at <span className="text-[#FF5B23]">Mineração Vale Verde</span>, where I optimized business processes and implemented automation solutions. 
                I’ve also participated in <span className="text-black">hackathons and innovation challenges</span>, constantly exploring new ways to connect creativity and technology.

                <br /><br />

                When I’m not designing, you’ll find me exploring new design trends, reading a romance, or developing ideas for my next big project.
             </div>


              <div className="flex flex-col gap-2">
                <h2 className="text-[#FF5B23]">Experiences</h2>

                <ExperienceItem 
                  className="text-black"
                  company="Automining"
                  role="UX/UI Designer"
                  description="As a UX/UI Designer at Automining, I craft intuitive and visually appealing digital experiences, focusing on usability, interaction design, and data-driven decision-making. I develop wireframes, prototypes, and high-fidelity interfaces, conduct user research to inform design decisions, and optimize data visualization for actionable insights. Additionally, I ensure design consistency across platforms and streamline workflows with BPMN, enhancing both user experience and operational efficiency."
                />

                <ExperienceItem
                  className="text-black"
                  company="Mineração Vale Verde"
                  role="PMO Intern"
                  description="At Mineração Vale Verde, I structured and optimized process flows using BPMN to enhance operational efficiency and ensure consistency in project management activities. I developed detailed reports and project status updates for internal and external stakeholders while monitoring key performance indicators (KPIs) to provide valuable insights for continuous improvement. Additionally, I created strategic presentations and documentation to support communication efforts and assisted in refining project management methodologies and best practices."
                />
                <div className="flex justify-end items-center gap-8 mb-4">
                <a
                  href={curriculo}
                  download="Curriculo_JoaoC_PT.pdf"
                  className="flex items-center gap-2 rounded-full text-black text-sm hover:text-[#FF5B23] hover:border-[#FF5B23] transition"
                >
                  <ArrowDownTrayIcon className="w-3 h-3" />
                  Download CV - PT
                </a>

                <a
                  href={curriculoEN}
                  download="Resume_JoaoC_EN.pdf"
                  className="flex items-center gap-2 rounded-full text-black text-sm hover:text-[#FF5B23] hover:border-[#FF5B23] transition"
                >
                  <ArrowDownTrayIcon className="w-3 h-3" />
                  Download CV - EN
                </a>
              </div>
              </div>

            </div>
          </div>
        </div>

        <div>
          <div className="border-t border-black/40 w-full mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-3xl mb-2">What I'm known for</h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-2">
              <h2 className="text-4xl hover:text-[#FF5B23]">Product Strategy</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Product & Project Management</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">User Research</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">UX/UI Design</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Prototyping & Design Systems</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Data Analysis & Visualization</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Business Intelligence</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Data Modeling</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Front-End Development</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Process Optimization (BPMN)</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Agile Methodologies</h2>
              <h2 className="text-4xl hover:text-[#FF5B23]">Product Thinking</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
