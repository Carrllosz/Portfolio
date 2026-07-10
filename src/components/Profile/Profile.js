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
  <p>I DESIGN DIGITAL PRODUCTS THROUGH</p>
  <p>RESEARCH, STRATEGY AND SYSTEMS,</p>
  <p className="text-neutral-400">
    CREATING EXPERIENCES THAT BALANCE BUSINESS
    GOALS WITH HUMAN NEEDS.
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
    I am a <span className="text-[#E4572E] font-semibold">Product Designer.</span> I design end-to-end digital products, combining research, strategy and interaction design to transform complex problems into intuitive experiences.
  </p>

  <p>
    Currently, I work at <span className="font-medium">Edge</span>, leading projects from Discovery to delivery. My work involves UX Research, Information Architecture, User Flows, Design Systems and close collaboration with Product, Engineering and Business teams.
  </p>

  <p>
    Throughout my experience, I have designed enterprise platforms, data-driven dashboards and operational systems, always focusing on usability, accessibility and scalable design decisions that support both users and business objectives.
  </p>

  <p>
    I also integrate <span className="text-[#E4572E] font-semibold">Artificial Intelligence</span> into my design workflow, using it to accelerate research, documentation, ideation and prototyping while maintaining a human-centered approach.
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
      Product Designer
    </h3>
    <span className="text-[#E4572E] font-medium text-base">
      Edge
    </span>
    <p className="text-black/60 font-medium">
      Mar 2026 – Present
    </p>
  </div>

  <div className="flex flex-col">
    <h3 className="text-lg text-black">
      Product Designer
    </h3>
    <span className="text-[#E4572E] font-medium text-base">
      Automining
    </span>
    <p className="text-black/60 font-medium">
      Oct 2024 – Feb 2026
    </p>
  </div>

  <div className="flex flex-col">
    <h3 className="text-lg text-black">
      Designer
    </h3>
    <span className="text-[#E4572E] font-medium text-base">
      Nees
    </span>
    <p className="text-black/60 font-medium">
      Nov 2025 – Mar 2025
    </p>
  </div>

  <div className="flex flex-col">
    <h3 className="text-lg text-black">
      Data-Oriented Solutions Designer
    </h3>
    <span className="text-[#E4572E] font-medium text-base">
      Orion
    </span>
    <p className="text-black/60 font-medium">
      May 2025 – Dec 2025
    </p>
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
  "Product Design",
  "UX Research",
  "User-Centered Design (UCD)",
  "Continuous Discovery",
  "Information Architecture",
  "Interaction Design",
  "User Journey Mapping",
  "User Flows",
  "Wireframing & Prototyping",
  "Design Systems",
  "Accessibility",
  "Usability Testing",
  "Product Thinking",
  "Generative AI & LLMs",
  "Figma & FigJam",
  "HTML • CSS • SQL • Python",
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
