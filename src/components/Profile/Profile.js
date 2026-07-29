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
          <div className="max-w-6xl">
  <div
    className="
      text-black
      font-normal
      uppercase
      leading-[1.05]
      tracking-[-0.03em]
      text-[2rem]
      sm:text-[3rem]
      md:text-[4rem]
      lg:text-[5rem]
      xl:text-[2rem]
    "
  >
    <p>DESIGNING PRODUCTS</p>
    <p>THAT FEEL</p>
    <p className="text-neutral-400">
      EFFORTLESS.
    </p>
  </div>
</div>
        </div>

        {/* ABOUT - Professional Narrative */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-base mb-2 text-black uppercase tracking-wider">
                About
              </h2>
            </div>

          <div className="flex flex-col w-full md:w-2/3 gap-8 text-[18px] md:text-[20px] leading-relaxed text-neutral-800">

  <p>
    I'm a <span className="text-[#E4572E] font-semibold">Product Designer </span>
    focused on turning complex problems into intuitive digital products through
    research, strategy and interaction design.
  </p>

  <p>
    At <span className="font-medium">Edge</span>, I lead products from discovery
    to delivery, working across UX Research, Information Architecture,
    Design Systems and cross-functional collaboration.
  </p>

  <p>
    I've designed enterprise platforms, operational systems and data-driven
    dashboards, balancing user needs with business goals.
  </p>

  <p>
    I also use <span className="text-[#E4572E] font-semibold">AI</span> to
    accelerate research, ideation and prototyping while keeping every decision
    human-centred.
  </p>

</div>
          </div>
        </div>

        {/* EXPERIENCE - Professional Authority */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-base mb-2 text-black uppercase tracking-wider">
                Experiences
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
              <h2 className="text-base mb-2 text-black uppercase tracking-wider">
                Expertise
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
