import amazon from "../assets/amazon.png";
import friends from "../assets/friends.jpg";
import fluxus from "../assets/fluxus.png";
import varejonacional from "../assets/varejonacional.png";
import figmaLogo from "../assets/figma.svg";
import miro from "../assets/miro.png";
import googleforms from "../assets/googleforms.png";
import BI from "../assets/BI.png";
import Databricks from "../assets/databricks.png";
import sql from "../assets/sql.png";
import pyspark from "../assets/pyspark.jpg";


export const projects = {
  "amazon-redesign": {
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    subtitle: "Enhancing usability and design.",
    description: "Melhoria da usabilidade e estética do app Amazon.",
    tags: ["Redesign", "Mobile"],
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
    details: {
      description: "O aplicativo móvel da Amazon, apesar de amplamente utilizado, apresentava problemas de usabilidade e design, sendo considerado confuso e visualmente pouco atraente por muitos usuários. O desafio do projeto foi redesenhar a interface de navegação entre as principais abas e o sistema de descoberta de produtos, tornando-os mais intuitivos e esteticamente agradáveis. O resultado foi uma experiência mais clara, fluida e envolvente, que melhora a satisfação do usuário e potencializa as taxas de conversão.",
      problem: "O aplicativo da Amazon apresentava dificuldades de navegação e excesso de informações, o que impactava negativamente a experiência do usuário.",
      solution: "Reestruturei a hierarquia visual e os fluxos principais, tornando a navegação mais intuitiva e o layout mais limpo.",
      impact: "A experiência se tornou mais fluida e clara, o que potencialmente aumenta a conversão de usuários e melhora a satisfação.",
      tools: [figmaLogo, miro, googleforms]
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
      description: "Friends App é um aplicativo móvel minimalista, inspirado em redes sociais, que foi desenvolvido com foco em funcionalidades CRUD simples para postagens de texto. Ele permite que os usuários criem, editem e excluam suas próprias postagens, além de visualizar tanto seus conteúdos quanto os de outros usuários. Cada publicação exibe o nome do autor, título, texto, opções de gerenciamento e um carimbo de tempo que indica há quanto tempo foi publicada. O projeto foi concebido em alta fidelidade no Figma, priorizando organização, clareza nas decisões de design e uma experiência intuitiva, funcional e visualmente atraente.",
      problem: "Usuários sentiam falta de apps simples para postar ideias rápidas com controle total sobre os posts.",
      solution: "Desenvolvi um app com interface clean e recursos de CRUD para postagens.",
      impact: "Redução de complexidade para usuários que querem apenas publicar e interagir com postagens.",
      tools: [figmaLogo]
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
      description: "O Fluxus é uma plataforma abrangente de gerenciamento de processos e análise de riscos, desenvolvida para ajudar empresas a mapear, monitorar e otimizar suas operações de forma colaborativa. O sistema permite que os usuários visualizem fluxos de trabalho detalhados, identifiquem gargalos e riscos potenciais, e participem ativamente da melhoria contínua dos processos. Com interfaces intuitivas e funcionalidades de feedback colaborativo, o Fluxus facilita a comunicação entre equipes, promove a responsabilidade compartilhada e garante que as decisões estratégicas sejam baseadas em dados claros e precisos, resultando em processos mais eficientes e melhor alinhados aos objetivos do negócio.",
      problem: " Os usuários enfrentavam a ausência de uma cultura colaborativa na gestão de processos e de riscos. Isso resultava em uma compreensão fragmentada dos processos da empresa, falta de envolvimento do usuário no design e oportunidades de melhoria perdidas. A causa principal era a comunicação deficiente e a falta de treinamento, impactando diretamente a eficiência geral e o alinhamento estratégico.",
      solution: "Foi desenvolvida a plataforma Fluxus com um fluxo de trabalho estruturado e eficiente. A solução garante uma progressão clara do conceito ao produto final, permitindo que os usuários gerenciem ativamente os processos e riscos do negócio. O design da plataforma promove a colaboração e o feedback dos usuários, abordando diretamente a falta de cultura colaborativa ao fomentar a responsabilidade compartilhada sobre os processos.",
      impact: "O resultado final é um sistema que não apenas é funcional e utilizável, mas que também incentiva a colaboração, tornando os processos mais eficientes e melhor alinhados com os objetivos do negócio.",
      tools: [figmaLogo, miro, googleforms]

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
      description: "O BI – Varejo Nacional é um painel interativo que organiza e apresenta de forma clara dados de vendas, margens de lucro, ticket médio e desempenho do varejo nacional. A solução permite que gerentes e equipes visualizem informações relevantes de forma rápida e intuitiva, facilitando a análise e compreensão do desempenho do negócio.",
      problem: "Os usuários careciam de uma visão unificada e clara do desempenho em vendas e lucratividade do varejo nacional, com dados espalhados por diferentes fontes, dificultando a análise de tendências e a tomada de decisões estratégicas.",
      solution: " Desenvolvi uma solução completa de Business Intelligence, utilizando o Databricks para consolidar os dados, calcular indicadores-chave de desempenho (KPIs) e criar um dashboard interativo no Power BI para visualização.",
      impact: "A solução forneceu uma visão centralizada e intuitiva da performance do negócio, permitindo a identificação rápida de oportunidades de crescimento, otimização de vendas e tomadas de decisões mais ágeis e estratégicas.",
      tools: [figmaLogo, BI, pyspark, Databricks, sql]
    }
  }
};
