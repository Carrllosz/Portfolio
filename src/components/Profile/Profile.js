import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn, FaBehance, FaPlus, FaMinus } from "react-icons/fa";
import curriculo from "../../assets/Curriculo_JoaoC_PT.pdf";
import curriculoEN from "../../assets/Resume_JoaoC_EN.pdf";

const ExperienceItem = ({ company, role, description, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-t border-black/40 w-full py-2 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <div>
          <h2 className="text-xl font-medium text-black">{company}</h2>
          <p className="text-base text-black/70">{role}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaMinus className="text-black" />
          ) : (
            <FaPlus className="text-black" />
          )}
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
    <div
      id="profile"
      className="w-full min-h-screen bg-white flex pt-[100px] justify-center items-center px-4 py-4"
    >
      <div className="flex flex-col w-full rounded-md text-black gap-32">
        {/* INTRO */}
        <div className="w-full min-h-[60vh] bg-white flex flex-col pt-[140px] justify-between items-start px-4">
         <div className="text-black text-xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug ">
          <p>I DESIGN AND MANAGE DIGITAL EXPERIENCES THAT BALANCE CREATIVITY,</p>
          <p>STRATEGY, AND IMPACT — TURNING IDEAS INTO PRODUCTS THAT TRULY MATTER.</p>
        </div>
        </div>

        {/* ABOUT */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-sm mb-2 text-black/50">
                About Me
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-6 text-sm text-black/80">
              <p>
                I'm a multidisciplinary Product Designer with over two years of
                experience, currently working at{" "}
                <span className="relative group font-medium">
                  Automining
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E4572E] transition-all duration-300 group-hover:w-full"></span>
                </span>
                , where I design intuitive and efficient digital experiences for
                the mining industry. My work bridges design, data, and
                technology to deliver seamless user interactions and visually
                engaging interfaces.
              </p>

              <p>
                Previously, I worked as a PMO intern at{" "}
                <span className="relative group font-medium">
                  Mineração Vale Verde
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E4572E] transition-all duration-300 group-hover:w-full"></span>
                </span>
                , where I optimized business processes and implemented automation
                solutions.
              </p>

              <p>
                When I’m not designing, you’ll find me exploring new design
                trends, reading a romance, or developing ideas for my next big
                project.
              </p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-sm mb-2 text-black/50">
                Experiences
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-6 text-sm">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-medium text-black">
                  UX/UI Designer
                </h3>
                <span className="text-[#E4572E] text-sm">Automining</span>
                <p className="text-black/50 text-sm">2024 - Present</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-medium text-black">PMO Intern</h3>
                <span className="text-[#E4572E] text-sm">
                  Mineração Vale Verde
                </span>
                <p className="text-black/50 text-sm">2023 - 2024</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* KNOWN FOR */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl lg:text-sm mb-2 text-black/50">
                What I'm known for
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-2">
              {[
                "Product Strategy",
                "Product & Project Management",
                "User Research",
                "UX/UI Design",
                "Prototyping & Design Systems",
                "Data Analysis & Visualization",
                "Business Intelligence",
                "Data Modeling",
                "Front-End Development",
                "Process Optimization (BPMN)",
                "Agile Methodologies",
                "Product Thinking",
              ].map((item) => (
                <motion.h2
                  key={item}
                  whileHover={{ x: 4 }}
                  className="text-sm cursor-default hover:text-[#E4572E] transition"
                >
                  {item}
                </motion.h2>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
