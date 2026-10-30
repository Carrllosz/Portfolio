import homeMoobi from "../assets/homemoobi.mp4";
import moobi1 from "../assets/moobi-billboard.png";
import moobi2 from "../assets/moobi-recife.png";
import moobi3 from "../assets/moobi-bus-stop.png";
import moobiGuide from "../assets/moobiguide.mp4";
import busRio from "../assets/bus_rio.mp4";
import tremSp from "../assets/trem_sp.mp4";
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
    contextTitle: "Making everyday commutes more human",
    services: ["UX/UI", "Branding"],
    client: "Personal project",
    subtitle: `Born from the idea of improving how people track and access public transportation, **Mobbi** is a personal app design project created to enhance urban mobility experiences in major Brazilian cities, helping people get to work and reach their destinations faster and more efficiently. The app offers real-time transit tracking, personalized alerts, and route comparisons based on crowding levels and travel time, while prioritizing accessibility for diverse users.`,
    link: "https://www.behance.net/gallery/237229489/MOOBI",

    impact: [
      "↑ Increased engagement through immersive property browsing.",
      "↓ Reduced friction in property discovery journey.",
      "↑ Improved lead qualification through structured filtering.",
      "↑ Stronger digital brand perception in competitive market.",
    ],

    problem:
      `Every day, millions of Brazilians navigate crowded buses, unpredictable schedules, and long waits just to get where they need to be. According to the [2022 IBGE Census](https://educa.ibge.gov.br/jovens/materias-especiais/23064-censo-2022-como-a-populacao-se-desloca-para-estudar-e-trabalhar.html), **14.9 million people depend on buses to commute to work**, with **70% spending at least 30 minutes on their journey**. But commuting isn't just about time or distance. It's about the uncertainty of missing a connection, the frustration of unexpected delays, and the challenge of navigating a city that doesn't always move at your pace.

**Moobi explores how technology can turn these everyday frustrations into better urban experiences.** By combining real-time tracking, smarter route comparisons, personalized alerts, and accessible navigation, the project gives commuters more control over their journeys. Rather than simply showing people how to get somewhere, Moobi aims to make every trip feel less uncertain, more intuitive, and ultimately more human.`,

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
      { type: "image", src: moobi1, alt: "Moobi — urban mobility billboard with a view of Rio de Janeiro" },
      { type: "video", src: moobiGuide, interactive: true, alt: "Moobi — app guide" },
      { type: "image", src: moobi3, alt: "Moobi — brand poster at a bus stop" },
      { type: "image", src: moobi2, alt: "Moobi — urban mobility campaign in Recife" },
      { type: "video", src: busRio, interactive: true, alt: "Moobi — bus journey in Rio de Janeiro" },
      { type: "video", src: tremSp, interactive: true, alt: "Moobi — train journey in São Paulo" },
      { type: "image", src: moobi7 },
    ],
  },

  "bradesco": {
   title: "Bradesco",
   contextTitle: "A more accessible first step into banking",
   services: ["UX/UI"],
   client: "Personal project",

  subtitle:
    `Driven by the goal of exploring and learning more about digital accessibility, this personal project focuses on redesigning the onboarding experience of the **Bradesco banking app**, making the first steps of accessing and navigating the platform more inclusive and accessible to users with disabilities. The redesign introduces clearer guidance, simplified navigation, voice support, and improved screen reader compatibility, aiming to make digital banking more accessible, efficient, and user-friendly for everyone.`,

  link: "https://www.behance.net/gallery/246731067/Accessible-Onboarding-Redesign-Bradesco-App",

  impact: [
    "↑ Reduced accessibility barriers during first-time onboarding.",
    "↑ Improved task completion for users with visual and motor disabilities.",
    "↑ Increased user confidence through guided onboarding flows.",
    "↑ Enhanced inclusivity with accessible interaction patterns.",
  ],

  problem:
    `In Brazil, **14.4 million people live with disabilities**, representing 7.3% of the population aged two and older, according to the [2022 IBGE Census](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43463-censo-2022-brasil-tem-14-4-milhoes-de-pessoas-com-deficiencia). Yet digital accessibility remains a global challenge: **95.9% of the one million homepages analyzed** in the [2026 WebAIM Million Report](https://webaim.org/projects/million/) presented detectable accessibility guideline violations. These findings highlight the importance of designing digital experiences that work for everyone.

With this in mind, the project reimagines **Bradesco's onboarding and home experience**, focusing on reducing accessibility barriers through clearer navigation, improved screen reader compatibility, simplified interactions, and more thoughtful information hierarchy. The goal is to make everyday banking more inclusive, empowering people with different abilities to manage their finances with greater independence, confidence, and ease.`,

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
  { type: "image", src: require("../assets/moobi-home-features.png"), alt: "Moobi — home screen features and accessible transit tools" },
  { type: "video", layout: "full", src: require("../assets/onboardingmoobi.mp4"), alt: "Moobi — onboarding experience" },
);
projects.bradesco.contentBlocks.push(
  { type: "image", src: require("../assets/bradesco.png"), alt: "Bradesco — project presentation" },
);

projects.moobi.hero = { type: "video", src: require("../assets/moobi.mp4") };
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
