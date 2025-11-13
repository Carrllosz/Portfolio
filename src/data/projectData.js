import amazon from "../assets/amazon.png";
import fluxus from "../assets/fluxus.png";
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
import friends1 from "../assets/friends1.png";
import friends2 from "../assets/friends2.png";
import friends3 from "../assets/friends3.png";
import amazon1 from "../assets/amazon1.mp4";
import amazon2 from "../assets/amazon2.png";
import amazon3 from "../assets/amazon3.png";
import amazon5 from "../assets/amazon6.mp4";
import amazon8 from "../assets/amazon9.png";
import flu1 from "../assets/fluxus.mp4";
import flu2 from "../assets/fluxus2.png";
import flu3 from "../assets/fluxus3.png";
import flu4 from "../assets/fluxus4.mp4";
import flu5 from "../assets/fluxus6.mp4";
import flu7 from "../assets/fluxus7.mp4";
import flu8 from "../assets/fluxus8.mp4";
import flu9 from "../assets/fluxus9.png";

export const projects = {

  "amazon-redesign": {
    title: "REDESIGN - AMAZON APP",
    subtitle: "Enhancing usability and design.",
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",

    hero: {
      type: "video",
      src: amazon1,
      caption: "A redesigned Amazon shopping experience focused on clarity, usability, and product discovery efficiency. The interface organizes hierarchy and navigation paths to reduce friction and guide users more confidently through the marketplace."
    },

    contentBlocks: [
        { type: "image", src: amazon2, caption: "Em desenvolvimento..." },
        { type: "image", src: amazon3},
        { type: "image", src: amazon8, caption: "Em desenvolvimento..." },
        { type: "video", src: amazon5 },
      ],

    keyAchievements: [
      "Clearer product discovery flow.",
      "Improved information hierarchy.",
      "Enhanced mobile-first usability."
    ],

    details: {
      description: "A redesign of the Amazon app with the goal of reducing navigation friction and improving clarity across the product discovery experience. Focused on organizing visual hierarchy, simplifying navigation across main tabs, and increasing user confidence when browsing.",
      problem: "Users faced navigation overload and visual complexity, making product discovery harder.",
      solution: "Reworked the structure of main navigation and reorganized marketplace categories and UI layers.",
      impact: "A more intuitive exploration flow that increases engagement and reduces cognitive load during shopping."
    }
  },


  "friends-app": {
    title: "Friends - Mobile App",
    subtitle: "Connecting friends around the world.",
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",

    hero: {
      type: "image",
      src: friends1,
      caption: "A lightweight social platform focused on simple and intentional content sharing. Designed to reduce noise and create a more direct connection between expression and audience."
    },

    contentBlocks: [
      { type: "image", src: friends2, caption: "Em desenvolvimento..." },
      { type: "image", src: friends3 },
    ],

    keyAchievements: [
      "Lightweight posting and editing flow.",
      "Minimal and intuitive UI.",
      "Improved user control over shared content."
    ],

    details: {
      description: "A minimalist social app that enables users to create, edit, and manage text posts without the complexity of large social networks. Designed to support direct expression and fast interaction.",
      problem: "Social platforms often overwhelm users with noise and unnecessary interaction complexity.",
      solution: "Built a minimal environment centered on ownership and clarity of content.",
      impact: "Users gain control and focus, enabling more meaningful and intentional posting."
    }
  },


  "fluxus-app": {
    title: "Fluxus",
    subtitle: "Streamline your processes. Empower your business.",
    link: "https://www.behance.net/gallery/228821855/fluxus-Process-Management-System-with-BPMN",

    hero: {
      type: "video",
      src: flu1,
      caption: "A collaborative platform for mapping, analyzing, and improving business processes. Designed for transparency, operational control, and aligned decision-making across multiple teams."
    },

    contentBlocks: [
      { type: "image", src: flu2 },
      { type: "image", src: flu3, caption: "Em desenvolvimento..." },
      { type: "video", src: flu8, caption: "Em desenvolvimento..." },
      { type: "video", src: flu4, caption: "Em desenvolvimento..." },
      { type: "video", src: flu7},
      { type: "video", src: flu5, caption: "Em desenvolvimento..."  },
      { type: "image", src: flu9 },
    ],

    keyAchievements: [
      "Encouraged collaborative process ownership.",
      "Improved risk identification visibility.",
      "Greater operational efficiency."
    ],

    details: {
      description: "Fluxus enables organizations to map, analyze, and manage their processes collaboratively. The system supports documentation, risk assessments, and improvement cycles in a transparent and structured environment.",
      problem: "Teams lacked shared visibility and accountability in process management.",
      solution: "Developed collaborative interfaces for process mapping, review workflows, and improvement tracking.",
      impact: "Improved operational clarity, reduced rework, and strengthened cross-team alignment."
    }
  },


  "varejo-bi": {
    title: "BI - National Retail",
    subtitle: "From raw data to revenue intelligence.",
    link: "https://www.behance.net/gallery/233633213/BI-Varejo-Nacional",

    hero: {
      type: "image",
      src: bi2,
      caption: "A business intelligence dashboard transforming fragmented retail datasets into unified insights. Designed to support decision-making across sales strategy, operational efficiency, and performance tracking."
    },

    contentBlocks: [
      { type: "image", src: varejonacional }
    ],

    keyAchievements: [
      "Unified sales view across multiple sources.",
      "Interactive KPI dashboard.",
      "Improved strategic decision-making."
    ],

    details: {
      description: "An end-to-end Business Intelligence solution built to consolidate e-commerce data and present strategic KPIs in a visual and explorative dashboard.",
      problem: "Retail performance data was scattered across systems, slowing analysis and decision-making.",
      solution: "Developed data pipelines in Databricks and built interactive dashboards in Power BI.",
      impact: "Enabled faster strategic insight, performance tracking, and decision-making agility."
    }
  },


  "easyroute": {
    title: "Easyroute",
    subtitle: "Collaborative route optimization made simple.",
    link: "https://www.figma.com/design/tbg5nXIrfu1VxQGI7Zv0hL/Easyroute---Redesign?node-id=0-1&t=XTmkjtgFYpRhFa7k-1",

    hero: {
      type: "image",
      src: easyroute,
      caption: "A route planning tool designed for teams that need real-time coordination. Shared access, role permissions, and synchronized updates ensure clarity and control during group navigation."
    },

    contentBlocks: [
      { type: "image", src: easy1 },
      { type: "image", src: easy3 },
      { type: "video", src: easyroutedetail, caption: "Supports shared decision-making and multi-stop logistics." },
      { type: "video", src: easy4},
    ],

    keyAchievements: [
      "Improved multi-stop route coordination.",
      "Enhanced team collaboration.",
      "Reduced planning time and operational overhead."
    ],

    details: {
      description: "Easyroute helps teams plan and execute routes with multiple stops and shared user permissions. Designed to support real-time coordination across logistics and group travel scenarios.",
      problem: "Coordinating routes with multiple people and checkpoints lacked structure and flexibility.",
      solution: "Introduced role permissions, synchronized route sessions, and live state updates.",
      impact: "Improved collaboration efficiency and reduced logistical misalignment."
    }
  },


  "moobi": {
    title: "Moobi",
    subtitle: "Smarter and more human urban mobility.",
    link: "https://www.behance.net/gallery/237229489/MOOBI",

    hero: {
      type: "video",
      src: homeMoobi,
      caption: "A real-time public transit companion designed to reduce uncertainty, improve accessibility, and increase confidence during daily commuting. Supports route comparison, crowding insights, and inclusive navigation."
    },

    contentBlocks: [
      { type: "image", src: moobi1 },
      { type: "image", src: moobi2 },
      { type: "image", src: moobi3 },
      { type: "image", src: moobi4 },
      { type: "image", src: moobi5 },
      { type: "image", src: moobi6, caption: "Clear interface and inclusive navigation." },
      { type: "image", src: moobi7 },
    ],

    keyAchievements: [
      "Enhanced accessibility and inclusivity.",
      "Real-time transit reliability insights.",
      "Improved commuting confidence and safety."
    ],

    details: {
      description: "Moobi provides a real-time transit experience that helps commuters navigate public transportation with confidence. It enables route comparison, crowding indicators, and accessible travel planning.",
      problem: "Public transport is unpredictable, crowded, and often inaccessible.",
      solution: "Designed intuitive navigation with real-time data and accessibility-first UI elements.",
      impact: "Reduces uncertainty and improves user autonomy, safety, and daily commuting comfort."
    }
  }

};
