import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaBehance, FaGithub, FaPlus, FaMinus } from "react-icons/fa";
import curriculo from '../../assets/curriculo_ofc.pdf';

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
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-4">
      <div className="flex flex-col w-full rounded-md text-black gap-8">

        <div>
          <div className="border-t border-black/40 w-full mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-3xl mb-2">About Me</h2>

              <div className="flex items-center gap-4 mb-4">
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
                <a
                  href="https://github.com/carrllosz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black w-10 h-10 flex items-center justify-center rounded-full text-white hover:tect-gray-500 transition"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href={curriculo}
                  download="Carlos_CV.pdf"
                  className="flex items-center border gap-2 border-black px-4 py-2 rounded-full text-black text-xs hover:bg-[#FF5B23] transition"
                >
                  Download CV
                  <ArrowDownTrayIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-8">
              <div>
                I'm a multi-disciplinary <span className="text-black">Product Designer</span>  
                with over two years of experience, currently working at <span className="text-[#FF5B23]">Automining</span>, where I create 
                intuitive and efficient digital experiences for the mining industry. My work bridges design and technology, ensuring 
                seamless user interactions and visually compelling interfaces.

                <br /><br />

                Previously, I worked as a PMO intern at <span className="text-[#FF5B23]">Mineração Vale Verde</span>, optimizing business processes and automation. 
                Beyond work, I’ve participated in <span className="text-black">hackathons and innovation challenges</span>, always seeking new ways to push 
                the boundaries of technology and design.

                <br /><br />

                In my free time, you’ll find me exploring new design trends, training at the gym, or brainstorming my next big project.
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[#FF5B23]">Experience</h2>

                <ExperienceItem 
                  className="text-black"
                  company="Automining"
                  role="UX/UI Designer and Front-end Developer"
                  description="As a Front-End Developer & UX/UI Designer at Automining, I create scalable digital solutions using Angular, HTML, and CSS, ensuring usability and efficiency. I design intuitive interfaces, conduct user research to refine interactions, and develop wireframes and prototypes to enhance user experience. Additionally, I optimize data visualization, maintain design consistency, and streamline workflows with BPMN to improve operational efficiency."
                />

                <ExperienceItem
                  className="text-black"
                  company="Mineração Vale Verde"
                  role="PMO Intern"
                  description="At Mineração Vale Verde, I structured and optimized process flows using BPMN to enhance operational efficiency and ensure consistency in project management activities. I developed detailed reports and project status updates for internal and external stakeholders while monitoring key performance indicators (KPIs) to provide valuable insights for continuous improvement. Additionally, I created strategic presentations and documentation to support communication efforts and assisted in refining project management methodologies and best practices."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border-t border-black/40 w-full mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-1xl lg:text-xl mb-2">What I'm known for</h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-2">
              <h2 className="text-4xl">User Research</h2>
              <h2 className="text-4xl">User Experience</h2>
              <h2 className="text-4xl">UI Design & Prototyping</h2>
              <h2 className="text-4xl">Design Systems</h2>
              <h2 className="text-4xl">Interaction Design</h2>
              <h2 className="text-4xl">Front-End Development</h2>
              <h2 className="text-4xl">Data Visualization</h2>
              <h2 className="text-4xl">Responsive & Adaptive Design</h2>
              <h2 className="text-4xl">Accessibility & Inclusive Design</h2>
              <h2 className="text-4xl">Product Thinking</h2>
              <h2 className="text-4xl">Agile & Design Sprints</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
