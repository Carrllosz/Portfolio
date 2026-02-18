import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div
      id="profile"
      className="w-full min-h-screen bg-white flex pt-[100px] justify-center items-center px-4 py-4"
    >
      <div className="flex flex-col w-full rounded-md text-black gap-32">
        {/* INTRO - Strategic Statement */}
        <div className="w-full min-h-[60vh] bg-white flex flex-col pt-[140px] justify-between items-start px-4">
          <div className="text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium tracking-tight">
            <p>I DESIGN FOR HUMANS THROUGH THE LENS OF LOGIC,</p>
            <p>TRANSFORMING COMPLEX DATA INTO SCALABLE</p>
            <p className="text-neutral-400">
              AND HIGH-IMPACT DIGITAL PRODUCTS.
            </p>
          </div>
        </div>

        {/* ABOUT - Professional Narrative */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-base mb-2 text-black/60 uppercase tracking-wider font-semibold">
                01 — About
              </h2>
            </div>

           <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-6 text-[18px] md:text-[20px] text-neutral-800">
  <p>
    I am a <span className="text-[#E4572E] font-semibold">Designer. </span>I specialize in architecting interfaces for high-complexity enterprise platforms where clarity is the most valuable asset.
  </p>

  <p>
    Currently at <span className="font-medium">Automining</span>, I lead the design of industrial ecosystems, serving a robust portfolio of major players such as 
    <span className="font-medium text-black"> USIMINAS, Aura Minerals, Appian Capital Brazil, and Mineração Vale Verde</span>. Through these partnerships, I’ve also delivered strategic solutions for 
    <span className="text-neutral-600"> Atlantic Nickel, Águas do Rio, Bahia Nickel, Verum Partners, and MiningHub</span>.
  </p>

  <p>
    In these environments, I achieved an 
    <span className="text-[#E4572E] font-semibold"> 87% reduction in user journey friction</span> by merging complex data visualization with rigorous usability standards and "handoff-zero" workflows.
  </p>

  <p>
    Previously, I optimized global operations at <span className="font-medium text-black">Mineração Vale Verde</span>, reporting directly to stakeholders in London and Australia, ensuring visual and technical integrity in every deliverable.
  </p>

  <p className="text-neutral-500 text-base">
    Beyond the screen, I explore the intersection of AI-driven design and system architecture to scale digital products without losing their human essence.
  </p>
</div>
          </div>
        </div>

        {/* EXPERIENCE - Professional Authority */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-base mb-2 text-black/60 uppercase tracking-wider font-semibold">
                02 — Experiences
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-8 text-sm">
              <div className="flex flex-col">
                <h3 className="text-lg text-black">
                  Product Designer & Design Systems
                </h3>
                <span className="text-[#E4572E] font-medium text-base">
                  Automining
                </span>
                <p className="text-black/60 font-medium">2024 - Present</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-black">Designer</h3>
                <span className="text-[#E4572E] font-medium text-base">
                  ORION
                </span>
                <p className="text-black/60 font-medium">2025 - Present</p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg text-black">PMO Intern</h3>
                <span className="text-[#E4572E] font-medium text-base">
                  Mineração Vale Verde
                </span>
                <p className="text-black/60 font-medium">2023 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* KNOWN FOR - Skills adjusted for seniority */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-20">
            <div className="w-full md:w-2/3">
              <h2 className="text-base mb-2 text-black/60 uppercase tracking-wider font-semibold">
                03 — Expertise
              </h2>
            </div>

            <div className="flex flex-col w-full md:w-2/3 leading-relaxed gap-2">
              {[
                "System Architecture & Design Engineering",
                "Enterprise UI / ERP Solutions",
                "Design Systems Governance",
                "Handoff-Zero Workflows",
                "Data Visualization (Power BI / DAX)",
                "Accessibility Compliance (WCAG 2.1)",
                "Product Strategy & Thinking",
                "User Research & Usability Testing",
                "Front-End Development (React / Angular)",
                "Process Optimization (BPMN)",
                "AI-Driven Design (GenAI / LLMs)",
                "Global Stakeholder Management",
              ].map((item) => (
                <motion.h2
                  key={item}
                  whileHover={{ x: 6 }}
                  className="text-[15px] font-medium cursor-default text-black/80 hover:text-[#E4572E] transition-all"
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
