import varejonacional from "../assets/varejonacional.png";
import easyroute from "../assets/easyroute.png";
import homeMoobi from "../assets/homemoobi.mp4";
import moobi1 from "../assets/moobi1.png";
import moobi2 from "../assets/802.png";
import moobi3 from "../assets/803.png";
import moobi4 from "../assets/804.png";
import moobi5 from "../assets/805.png";
import moobi6 from "../assets/806.png";
import moobi7 from "../assets/moobi7.png";
import easyroutedetail from "../assets/easyroutedetail.mp4";
import easy1 from "../assets/easyroutelogin.png";
import easy3 from "../assets/principal.png";
import easy4 from "../assets/easy4.mp4";
import bi2 from "../assets/bi2.png";
import flu1 from "../assets/fluxus.mp4";
import flu2 from "../assets/fluxus2.png";
import flu3 from "../assets/fluxus3.png";
import flu4 from "../assets/fluxus4.mp4";
import flu5 from "../assets/fluxus6.mp4";
import flu7 from "../assets/fluxus7.mp4";
import flu8 from "../assets/fluxus8.mp4";
import flu9 from "../assets/fluxus9.png";

export const projects = {
  "fluxus-app": {
    title: "Fluxus",
    subtitle: "Turning operational complexity into measurable performance.",
    link: "https://www.behance.net/gallery/228821855/fluxus-Process-Management-System-with-BPMN",

    impact: [
      "↓ Estimated 25–40% reduction in process inefficiencies (McKinsey Digital benchmark).",
      "↑ Increased cross-department visibility through centralized BPMN documentation.",
      "↓ Faster risk response cycles with structured mitigation workflows.",
      "↑ Stronger strategic alignment between operations and leadership.",
    ],

    problem:
      "Organizations faced fragmented workflows, limited visibility into process performance, and reactive risk management, generating inefficiencies, accountability gaps, and misalignment between strategy and execution.",

    strategy:
      "Fluxus was designed as a collaborative BPM platform grounded in BPMN methodology, embedding KPI dashboards and risk management directly into workflows to transform processes into measurable, continuously improvable systems.",

    highlights: [
      "Real-time approvals and workflow revisions.",
      "AI-assisted process refinement.",
      "Live performance dashboards with operational KPIs.",
      "Integrated risk register with corrective/preventive tracking.",
    ],

    decisions: [
      "Prioritized clarity over feature overload to increase adoption.",
      "Structured risk as proactive, not reactive.",
      "Embedded analytics inside workflows instead of isolating them.",
      "Designed modular architecture to support scalability.",
    ],

    hero: { type: "video", src: flu1 },

    contentBlocks: [
      { type: "image", src: flu2 },
      { type: "image", src: flu3 },
      { type: "video", src: flu8 },
      { type: "video", src: flu4 },
      { type: "video", src: flu7 },
      { type: "video", src: flu5 },
      { type: "image", src: flu9 },
    ],
  },

  "easyroute": {
    title: "EasyRoute",
    subtitle: "Optimizing last-mile logistics through intelligent routing.",
    link: "https://www.figma.com/design/tbg5nXIrfu1VxQGI7Zv0hL/Easyroute---Redesign?node-id=0-1&t=XTmkjtgFYpRhFa7k-1",

    impact: [
      "↓ Estimated 15–30% reduction in fuel costs with route optimization (Deloitte Logistics Insights).",
      "↑ Improved delivery time predictability through dynamic routing.",
      "↓ Reduced manual dispatch errors with centralized visibility.",
      "↑ Higher driver productivity through streamlined task flows.",
    ],

    problem:
      "Logistics operations relied on manual route planning, limited real-time visibility, and inefficient communication between dispatch and drivers, leading to delays, higher costs, and inconsistent performance.",

    strategy:
      "EasyRoute was structured as a mobile-first logistics platform combining route optimization logic, real-time tracking, and operational dashboards to transform fragmented delivery operations into data-driven execution.",

    highlights: [
      "Dynamic route recalculation.",
      "Driver task management interface.",
      "Live tracking with operational overview.",
      "Performance dashboard with delivery metrics.",
    ],

    decisions: [
      "Focused on driver simplicity to reduce cognitive load in the field.",
      "Designed real-time visibility as a core feature, not an add-on.",
      "Balanced automation with manual override flexibility.",
      "Structured data collection to enable future predictive analytics.",
    ],

    hero: { type: "video", src: easyroutedetail },

    contentBlocks: [
      { type: "image", src: easy1 },
      { type: "image", src: easy3 },
      { type: "video", src: easy4 },
      { type: "image", src: bi2 },
    ],
  },

  "moobi": {
    title: "Moobi",
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

};
