import amazon from "../assets/amazon.png";
import friends from "../assets/friends.jpg";
import fluxus from "../assets/fluxus.png";
import varejonacional from "../assets/varejonacional.png";

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
      problem: " Os usuários enfrentavam a ausência de uma cultura colaborativa na gestão de processos e de riscos. Isso resultava em uma compreensão fragmentada dos processos da empresa, falta de envolvimento do usuário no design e oportunidades de melhoria perdidas. A causa principal era a comunicação deficiente e a falta de treinamento, impactando diretamente a eficiência geral e o alinhamento estratégico.",
      solution: "Foi desenvolvida a plataforma Fluxus com um fluxo de trabalho estruturado e eficiente. A solução garante uma progressão clara do conceito ao produto final, permitindo que os usuários gerenciem ativamente os processos e riscos do negócio. O design da plataforma promove a colaboração e o feedback dos usuários, abordando diretamente a falta de cultura colaborativa ao fomentar a responsabilidade compartilhada sobre os processos.",
      impact: "O resultado final é um sistema que não apenas é funcional e utilizável, mas que também incentiva a colaboração, tornando os processos mais eficientes e melhor alinhados com os objetivos do negócio.",
    }
  },
  "varejo-bi": {
    title: "BI - Varejo Nacional",
    image: varejonacional,
    subtitle: "From raw data to revenue intelligence.",
    description: "This Business Intelligence project transforms raw e-commerce data into strategic business insights. It uses a structured process that includes Databricks for data processing, SQL for KPI aggregation, and Power BI for creating an interactive, data-driven dashboard.",
    tags: ["BI", "Data Visualization"],
    link: "https://www.behance.net/gallery/233633213/BI-Varejo-Nacional",
    details: {
      problem: "Os usuários careciam de uma visão unificada e clara do desempenho em vendas e lucratividade do varejo nacional, com dados espalhados por diferentes fontes, dificultando a análise de tendências e a tomada de decisões estratégicas.",
      solution: " Desenvolvi uma solução completa de Business Intelligence, utilizando o Databricks para consolidar os dados, calcular indicadores-chave de desempenho (KPIs) e criar um dashboard interativo no Power BI para visualização.",
      impact: "A solução forneceu uma visão centralizada e intuitiva da performance do negócio, permitindo a identificação rápida de oportunidades de crescimento, otimização de vendas e tomadas de decisões mais ágeis e estratégicas.",
    }
  }
};
