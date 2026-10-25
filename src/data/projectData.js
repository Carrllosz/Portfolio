import homeMoobi from "../assets/homemoobi.mp4";
import moobi1 from "../assets/moobi1.png";
import moobi2 from "../assets/802.png";
import moobi3 from "../assets/803.png";
import moobi4 from "../assets/804.png";
import moobi5 from "../assets/805.png";
import moobi6 from "../assets/806.png";
import moobi7 from "../assets/moobi7.png";
import bradescohero from "../assets/bradescohero.mp4";
import research from "../assets/research.png";
import benchmarking from "../assets/benchmarking.png";
import personas from "../assets/personas.png";
import fluxo from "../assets/Fluxo.png";
import interacao from "../assets/interacao.png";
import comecar from "../assets/comecar.png";
import conversa from "../assets/conversa.png";
import home from "../assets/home.png";

export const projects = {
  "moobi": {
    title: "Moobi",
    contextTitle: "Turning complexity into a clearer experience",
    services: ["UX/UI", "Branding"],
    subtitle: "Redefining real estate discovery through digital experience.",
    link: "https://www.behance.net/gallery/237229489/MOOBI",

    impact: [
      "↑ Increased engagement through immersive property browsing.",
      "↓ Reduced friction in property discovery journey.",
      "↑ Improved lead qualification through structured filtering.",
      "↑ Stronger digital brand perception in competitive market.",
    ],

    problem:
      "Users struggled with fragmented property information, poor visual presentation, and inefficient search experiences, reducing trust and engagement in digital real estate platforms.",

    strategy:
      "Moobi was designed as a digital-first real estate experience, prioritizing intuitive navigation, immersive visuals, and structured filtering to create a seamless and confidence-driven property discovery journey.",

    highlights: [
      "Immersive property media presentation.",
      "Advanced filtering and search logic.",
      "Clear property detail hierarchy.",
      "Mobile-first responsive interface.",
    ],

    decisions: [
      "Prioritized emotional engagement through strong visual storytelling.",
      "Reduced interface clutter to enhance decision clarity.",
      "Structured information architecture around user intent.",
      "Designed scalable component system for listing expansion.",
    ],

    hero: { type: "video", src: homeMoobi },

    contentBlocks: [
      { type: "image", src: moobi1 },
      { type: "image", src: moobi2 },
      { type: "image", src: moobi3 },
      { type: "image", src: moobi4 },
      { type: "image", src: moobi5 },
      { type: "image", src: moobi6 },
      { type: "image", src: moobi7 },
    ],
  },

  "bradesco": {
   title: "Bradesco",
   contextTitle: "A more accessible first step into banking",
   services: ["UX/UI"],

  subtitle:
    "Transforming digital banking onboarding through accessibility and inclusive UX.",

  link: "https://www.behance.net/gallery/246731067/Accessible-Onboarding-Redesign-Bradesco-App",

  impact: [
    "↑ Reduced accessibility barriers during first-time onboarding.",
    "↑ Improved task completion for users with visual and motor disabilities.",
    "↑ Increased user confidence through guided onboarding flows.",
    "↑ Enhanced inclusivity with accessible interaction patterns.",
  ],

  problem:
    "The existing onboarding experience presented accessibility barriers for users with visual and motor disabilities. Complex navigation, small touch targets, limited guidance, and inconsistent assistive technology support made it difficult for many users to independently complete their first interaction with the banking app.",

  strategy:
    "The redesign applied a human-centered design process, combining UX research, accessibility best practices, and simplified interaction patterns to create an onboarding experience that is more inclusive, intuitive, and supportive from the very first access.",

  highlights: [
    "Accessibility-first onboarding experience.",
    "Simplified navigation and interaction flows.",
    "Voice guidance and screen reader optimization.",
    "Inclusive UI following accessibility principles.",
  ],

  decisions: [
    "Simplified the onboarding journey to reduce cognitive load.",
    "Increased touch targets for easier interaction.",
    "Improved visual hierarchy with higher contrast and clearer typography.",
    "Designed onboarding components compatible with screen readers and assistive technologies.",
  ],

  hero: {
    type: "video",
    src: bradescohero,
  },

    contentBlocks: [
      { type: "research", src: research },
      { type: "benchmarking", src: benchmarking },
      { type: "personas", src: personas },
      { type: "fluxo", src: fluxo },
      { type: "interacao", src: interacao },
      { type: "comecar", src: comecar },
      { type: "conversa", src: conversa },
            { type: "home", src: home },
    ],
  },

};

projects.moobi.contentBlocks.push(
  { type: "image", src: require("../assets/moobi.png"), alt: "Moobi — visual overview" },
  { type: "image", src: require("../assets/moobilogo.png"), alt: "Moobi — brand presentation" },
  { type: "video", src: require("../assets/moobi.mp4"), alt: "Moobi — product in motion" },
);
projects.bradesco.contentBlocks.push(
  { type: "image", src: require("../assets/bradesco.png"), alt: "Bradesco — project presentation" },
);

// The cover uses the same film as the final Moobi gallery block.
projects.moobi.hero = projects.moobi.contentBlocks[projects.moobi.contentBlocks.length - 1];
projects.naia = {
  title: "NAIA",
  contextTitle: "A new space for creative work",
  comingSoon: true,
  subtitle: "UX/UI design for NAIA.",
  services: ["UX/UI"],
  hero: { type: "video", src: require("../assets/naia.mp4"), alt: "NAIA — platform in motion" },
  contentBlocks: [],
};
projects.caramelandia = {
  title: "Caramelândia",
  contextTitle: "A sweeter digital experience",
  comingSoon: true,
  subtitle: "UX/UI design for Caramelândia.",
  services: ["UX/UI"],
  hero: { type: "image", src: require("../assets/caramelandia-cover.png"), alt: "Caramelândia — white lettering over colorful sweets" },
  contentBlocks: [],
};
