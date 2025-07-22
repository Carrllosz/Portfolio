import amazon from "../assets/amazon.png";
import friends from "../assets/friends.jpg";
import fluxus from "../assets/fluxus.png";

export const projects = {
  "amazon-redesign": {
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    subtitle: "Enhancing usability and design.",
    description: "Melhoria da usabilidade e estética do app Amazon.",
    tags: ["Redesign", "Mobile"],
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
    details: {
      problem: "O aplicativo da Amazon apresentava dificuldades de navegação e excesso de informações, o que impactava negativamente a experiência do usuário.",
      solution: "Reestruturei a hierarquia visual e os fluxos principais, tornando a navegação mais intuitiva e o layout mais limpo.",
      impact: "A experiência se tornou mais fluida e clara, o que potencialmente aumenta a conversão de usuários e melhora a satisfação.",
      mockups: [
        { img: amazon, caption: "Mockup da Home com novo layout" }
      ]
    }
  },
  "friends-app": {
    title: "Friends - App Mobile",
    image: friends,
    subtitle: "Connecting friends around the world",
    description: "CRUD social em formato mobile e minimalista.",
    tags: ["Case Study", "Mobile"],
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
    details: {
      problem: "Usuários sentiam falta de apps simples para postar ideias rápidas com controle total sobre os posts.",
      solution: "Desenvolvi um app com interface clean e recursos de CRUD para postagens.",
      impact: "Redução de complexidade para usuários que querem apenas publicar e interagir com postagens.",
      mockups: [
        { img: friends, caption: "Interface de criação de postagens" }
      ]
    }
  },
  "fluxus-app": {
    title: "Fluxus - ERP",
    image: fluxus,
    subtitle: "Streamline your processes. Empower your business",
    description: "Fluxus is a comprehensive process management platform designed to transform how organizations map, analyze, and optimize their operations.",
    tags: ["ERP", "CrossPlatform"],
    link: "https://www.behance.net/gallery/228821855/fluxus-Process-Management-System-with-BPMN",
    details: {
      problem: "Usuários sentiam falta de apps simples para postar ideias rápidas com controle total sobre os posts.",
      solution: "Desenvolvi um app com interface clean e recursos de CRUD para postagens.",
      impact: "Redução de complexidade para usuários que querem apenas publicar e interagir com postagens.",
      mockups: [
        { img: fluxus, caption: "Interface de criação de postagens" }
      ]
    }
  }
};
