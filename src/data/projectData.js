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
import easyroute from "../assets/easyroute.png";
import moobi from "../assets/moobi.png";
import homeMoobi from "../assets/homemoobi.mp4";

export const projects = {
  "amazon-redesign": {
    "title": "Redesign Mobile App - Amazon",
    "image": amazon,
    "subtitle": "Enhancing usability and design.",
    "description": "Improving the usability and aesthetics of the Amazon app.",
    "tags": ["Redesign", "Mobile"],
    "link": "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
    "details": {
      "description": "The Amazon mobile app, although widely used, had usability and design issues, often considered confusing and visually unattractive by many users. The project challenge was to redesign the navigation interface between main tabs and the product discovery system, making them more intuitive and visually appealing. The result was a clearer, smoother, and more engaging experience, improving user satisfaction and potentially increasing conversion rates.",
      "problem": "The Amazon app had navigation difficulties and information overload, negatively impacting the user experience.",
      "solution": "I restructured the visual hierarchy and main flows, making navigation more intuitive and the layout cleaner.",
      "impact": "The experience became smoother and clearer, potentially increasing user conversion and satisfaction.",
      "tools": [figmaLogo, miro, googleforms]
    }
  },
  "friends-app": {
    "title": "Friends - Mobile App",
    "image": friends,
    "subtitle": "Connecting friends around the world",
    "description": "Minimalist social CRUD mobile app.",
    "tags": ["Case Study", "Mobile"],
    "link": "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
    "details": {
      "description": "Friends App is a minimalist mobile application inspired by social networks, developed with a focus on simple CRUD functionalities for text posts. Users can create, edit, and delete their own posts, as well as view their own and other users' content. Each post displays the author's name, title, text, management options, and a timestamp indicating when it was published. The project was designed in high fidelity in Figma, prioritizing organization, clear design decisions, and an intuitive, functional, and visually appealing experience.",
      "problem": "Users lacked simple apps to quickly post ideas with full control over their posts.",
      "solution": "I developed a clean interface app with CRUD features for posts.",
      "impact": "Reduced complexity for users who just want to post and interact with content.",
      "tools": [figmaLogo]
    }
  },
  "fluxus-app": {
    "title": "Fluxus",
    "image": fluxus,
    "subtitle": "Streamline your processes. Empower your business",
    "description": "Fluxus is a comprehensive process management platform designed to transform how organizations map, analyze, and optimize their operations.",
    "tags": ["ERP", "CrossPlatform"],
    "link": "https://www.behance.net/gallery/228821855/fluxus-Process-Management-System-with-BPMN",
    "details": {
      "description": "Fluxus is a comprehensive process management and risk analysis platform developed to help companies map, monitor, and optimize their operations collaboratively. The system allows users to view detailed workflows, identify bottlenecks and potential risks, and actively participate in continuous process improvement. With intuitive interfaces and collaborative feedback features, Fluxus facilitates team communication, promotes shared accountability, and ensures that strategic decisions are based on clear, accurate data, resulting in more efficient processes aligned with business goals.",
      "problem": "Users faced a lack of collaborative culture in process and risk management, leading to fragmented understanding of company processes, low user engagement in design, and missed improvement opportunities. Poor communication and lack of training directly impacted efficiency and strategic alignment.",
      "solution": "The Fluxus platform was developed with a structured and efficient workflow. The solution ensures clear progression from concept to final product, enabling users to actively manage business processes and risks. The platform's design promotes collaboration and user feedback, addressing the lack of collaborative culture by fostering shared responsibility for processes.",
      "impact": "The final system is not only functional and usable but also encourages collaboration, making processes more efficient and better aligned with business objectives.",
      "tools": [figmaLogo, miro, googleforms]
    }
  },
  "varejo-bi": {
    "title": "BI - National Retail",
    "image": varejonacional,
    "subtitle": "From raw data to revenue intelligence.",
    "description": "This Business Intelligence project transforms raw e-commerce data into strategic business insights. It uses a structured process that includes Databricks for data processing, SQL for KPI aggregation, and Power BI for creating an interactive, data-driven dashboard.",
    "tags": ["BI", "Data Visualization"],
    "link": "https://www.behance.net/gallery/233633213/BI-Varejo-Nacional",
    "details": {
      "description": "BI – National Retail is an interactive dashboard that organizes and presents sales data, profit margins, average ticket, and retail performance in a clear manner. The solution allows managers and teams to quickly and intuitively access relevant information, facilitating analysis and understanding of business performance.",
      "problem": "Users lacked a unified and clear view of national retail sales and profitability, with data scattered across different sources, making trend analysis and strategic decision-making difficult.",
      "solution": "I developed a complete Business Intelligence solution, using Databricks to consolidate data, calculate key performance indicators (KPIs), and create an interactive Power BI dashboard for visualization.",
      "impact": "The solution provided a centralized and intuitive view of business performance, enabling rapid identification of growth opportunities, sales optimization, and faster, more strategic decision-making.",
      "tools": [figmaLogo, BI, pyspark, Databricks, sql]
    }
  },
  "easyroute": {
    title: "Easyroute",
    "image": easyroute,
    subtitle: "Collaborative route optimization made simple.",
    description: "Easyroute is a mobile application for route optimization that leverages user collaboration to plan and execute routes efficiently. The system allows users to create, track, and share routes in real-time, with role-based permissions and subscription plans tailored to different usage levels.",
    tags: ["Redesign", "App Mobile"],
    link: "https://www.figma.com/design/tbg5nXIrfu1VxQGI7Zv0hL/Easyroute---Redesign?node-id=0-1&t=XTmkjtgFYpRhFa7k-1",
    details: {
      description: "Easyroute is a mobile app that enables users to create customized routes, optimize paths with multiple stops, and track their progress in real time. Its main feature lies in collaboration — multiple users can participate in the same route with specific permissions, making coordination smoother and more efficient.",
      problem: "Users often struggle to manage routes with multiple stops and share them collaboratively, especially when coordinating deliveries or group trips.",
      solution: "We developed a mobile application that allows users to create, view, and track optimized routes in real time, with role-based permissions for reading, editing, or executing. The system includes local caching, offline support, and scalable subscription plans for different needs.",
    impact: "Easyroute improves route planning efficiency, reduces time and logistical costs, and enhances collaboration among teams and users. The app provides a smooth and intuitive experience suitable for both personal and professional use.",
      tools: [figmaLogo]
    }
  },
  "moobi": {
    title: "Moobi",
    "image": homeMoobi,
    "video": homeMoobi,
    subtitle: "Smarter and more human urban mobility.",
    description: "Moobi is a smart urban mobility platform designed to improve public transportation experiences in large Brazilian cities. It offers real-time tracking, personalized alerts, and route comparisons based on travel time and crowding, focusing on accessibility and inclusivity.",
    tags: ["UI/UX Design", "Urban Mobility"],
    link: "https://www.behance.net/gallery/237229489/MOOBI",
    details: {
      description: "Moobi provides an intelligent and inclusive approach to commuting. Users can track public transport in real time, compare routes based on time and crowding, and receive personalized alerts for a safer, more predictable journey. Its simplified interface ensures usability for all, including people with disabilities.",
      problem: "Public transportation in major cities is often unpredictable, crowded, and inaccessible — making daily commutes stressful and inefficient for millions of users.",
      solution: "We designed an intuitive and inclusive mobility platform that connects users to public transportation in real time. Through intelligent route comparisons, personalized notifications, and an accessible interface, Moobi transforms chaotic commutes into safer, more informed, and more humanized experiences.",
      impact: "Moobi enhances urban commuting by making it more predictable, safe, and accessible. It empowers users with real-time data and inclusive design, helping them navigate cities with confidence, clarity, and control.",
      tools: [figmaLogo]
    }
  }
};
