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
    subtitle: "Transforming complexity into clarity through process intelligence.",
    link: "https://www.behance.net/gallery/228821855/fluxus-Process-Management-System-with-BPMN",

    hero: {
      type: "video",
      src: flu1,
      caption: "A platform that empowers organizations to visualize, optimize, and continuously improve their business processes. Designed to reduce inefficiency, align teams, and turn operational data into actionable insights."
    },

    contentBlocks: [
      { type: "image", src: flu2 },
      { type: "image", src: flu3, caption: "Fluxus helps you turn complexity into clarity, combining AI intelligence and team collaboration to refine, prioritize, and elevate your core processes." },
      { type: "video", src: flu8, caption: "Process performance dashboard showcasing KPIs and efficiency metrics." },
      { type: "video", src: flu4, caption: "Real-time task approvals and revisions that help the team manage workflows efficiently and track performance metrics." },
      { type: "video", src: flu7},
      { type: "video", src: flu5, caption: "Comprehensive risk register that enables real-time identification, assessment, and mitigation through automated corrective and preventive action tracking." },
      { type: "image", src: flu9 },
    ],

      keyAchievements: [
      "Outlined a vision to enhance process visibility and cross-department accountability.",
      "Proposed structured, collaborative mapping to minimize operational bottlenecks.",
      "Defined a data-driven framework for continuous improvement and strategic decision-making."
    ],

    details: {
      description: "Fluxus was designed to simplify process management by turning fragmented workflows into structured, measurable, and collaborative systems. It bridges the gap between strategy and execution, empowering organizations to act on real-time insights.",
      problem: "Organizations struggled to maintain visibility and consistency across complex processes.",
      solution: "Developed a collaborative BPM platform to document, analyze, and improve workflows transparently.",
      impact: "Delivered strategic alignment, efficiency gains, and sustainable process improvement."
    }
  },


  "varejo-bi": {
    title: "BI - National Retail",
    subtitle: "Turning scattered data into strategic retail intelligence.",
    link: "https://www.behance.net/gallery/233633213/BI-Varejo-Nacional",

    hero: {
      type: "image",
      src: bi2,
      caption: "A complete BI solution that transforms raw retail data into actionable insights — enabling smarter strategies, improved visibility, and faster decisions."
    },

    contentBlocks: [
      { type: "image", src: varejonacional }
    ],

    keyAchievements: [
      "Unified multiple data sources into a single analytical model.",
      "Built real-time Power BI dashboards with key retail performance metrics.",
      "Accelerated business decisions through clear, data-driven insights."
    ],

    details: {
      description: "This project connected data engineering with business strategy. By consolidating e-commerce and retail data through Databricks and Power BI, it delivered a unified view of revenue, profit, and category performance.",
      problem: "Retail managers lacked a single source of truth for key performance indicators, limiting strategic visibility.",
      solution: "Created data pipelines in Databricks and designed Power BI dashboards for real-time, visual analytics.",
      impact: "Enhanced business visibility, enabling faster and smarter decision-making across teams."
    }
  },


  "easyroute": {
    title: "Easyroute",
    subtitle: "Smart route optimization through collaboration.",
    link: "https://www.figma.com/design/tbg5nXIrfu1VxQGI7Zv0hL/Easyroute---Redesign?node-id=0-1&t=XTmkjtgFYpRhFa7k-1",

    hero: {
      type: "image",
      src: easyroute,
      caption: "A collaborative routing app that simplifies logistics by combining real-time updates, shared visibility, and role-based control, reducing friction and saving time for teams on the move."
    },

    contentBlocks: [
      { type: "image", src: easy1, caption: "Login and onboarding flow optimized for clarity and quick conversion." },
      { type: "image", src: easy3 },
      { type: "video", src: easyroutedetail, caption: "Through the redesign, shared route sessions became more intuitive and responsive, combining live synchronization, access control, and adaptive recalculation to streamline teamwork." },
      { type: "video", src: easy4 },
    ],

  keyAchievements: [
      "Boosted user engagement and positive feedback through improved collaboration.",
      "Streamlined multi-stop route planning with an intuitive redesign.",
      "Bridged communication gaps via real-time, shared visibility.",
      "Enhanced team efficiency and control in route execution."
    ],

    details: {
      description: "Easyroute bridges technology and collaboration, enabling teams to plan, execute, and adapt their logistics routes efficiently. Every feature — from permissions to live synchronization — was designed to close communication gaps and streamline delivery operations.",
      problem: "Teams faced inefficiencies and miscommunication when managing shared logistics routes.",
      solution: "Developed real-time synchronization, role management, and live updates to improve coordination.",
      impact: "Cut planning time and improved operational flow between field teams and management."
    }
  },


  "moobi": {
    title: "Moobi",
    subtitle: "Empowering urban mobility through real-time intelligence.",
    link: "https://www.behance.net/gallery/237229489/MOOBI",

    hero: {
      type: "video",
      src: homeMoobi,
      caption: "A human-centered mobility app designed to make public transportation more predictable, safe, and inclusive, powered by real-time data and accessibility-first design."
    },

    contentBlocks: [
      { type: "image", src: moobi1, caption: "Simplified real-time map with lines and stops to reduce uncertainty." },
      { type: "image", src: moobi2},
      { type: "image", src: moobi3},
      { type: "image", src: moobi4 },
      { type: "image", src: moobi5},
      { type: "image", src: moobi6, caption: "Moobi helps users make smarter, safer commuting decisions through real-time route comparisons, predictive crowd insights, and inclusive navigation, delivering clarity, comfort, and control in every journey." },
      { type: "image", src: moobi7},
    ],

    keyAchievements: [
      "Enhanced commuter confidence through real-time insights.",
      "Advanced accessibility with inclusive design thinking.",
      "Reimagined public transport with a user-centered approach."
    ],

    details: {
      description: "Moobi reimagines public transportation with real-time intelligence and inclusive design. It turns uncertainty into confidence by providing users with accurate, accessible, and humanized mobility data.",
      problem: "Urban mobility lacked predictability, accessibility, and trust in user experience.",
      solution: "Developed a real-time, data-driven platform with an inclusive interface focused on safety and usability.",
      impact: "Transformed public transport into a smarter, safer, and more inclusive experience for all users."
    }
  }

};
