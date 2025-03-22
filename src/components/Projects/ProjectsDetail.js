import { useParams, useNavigate } from "react-router-dom";
import amazon from "../../assets/amazon.png";
import friends from "../../assets/friends.jpg";

const projects = {
  "amazon-redesign": {
    title: "Redesign App Mobile - Amazon",
    image: amazon,
    description: "Enhancing usability and design.",
    tags: ["Redesign", "Mobile"],
    link: "https://www.behance.net/gallery/199894671/UX-UI-Case-Study-Redesign-do-App-da-Amazon",
  },
  "friends-app": {
    title: "Friends - App Mobile",
    image: friends,
    description: "Friends é um aplicativo móvel que melhora a conexão entre amigos.",
    tags: ["Case Study", "Mobile"],
    link: "https://www.behance.net/gallery/219990865/Friends-App-Mobile",
  },
};

const ProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <h1 className="text-white text-center">Projeto não encontrado</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-[#141414] flex flex-col justify-center items-start px-4 md:px-10 pb-8">
      <button
        className="absolute top-4 left-4 text-white border border-white px-4 py-2 rounded-full hover:bg-[#FF5B23] hover:border-[#FF5B23]"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
      <div className="flex gap-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-[800px] rounded-2xl h-[250px] md:h-[300px] lg:h-[350px] object-cover"
        />
        <div>
          <h1 className="text-white text-3xl mt-6">{project.title}</h1>
          <p className="text-gray-400 text-lg mt-2">{project.description}</p>
          <div className="flex gap-4 mt-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-[#FF5B23] text-white px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 w-full mt-8 mb-8"></div>

      {/* About Me Section 
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl md:text-3xl lg:text-3xl mb-2 text-white">About Me</h2>
        </div>
        
        <div className="w-full md:w-3/4 text-gray-400 text-lg leading-relaxed">
          <p>
            I'm a multi-disciplinary <span className="text-white">Product Designer</span>  
            with over two years of experience, currently working at <span className="text-[#FF5B23]">Automining</span>, where I create 
            intuitive and efficient digital experiences for the mining industry. My work bridges design and technology, ensuring 
            seamless user interactions and visually compelling interfaces.
          </p>
          <br />
          <p>
            Previously, I worked as a PMO intern at <span className="text-[#FF5B23]">Mineração Vale Verde</span>, optimizing business processes and automation. 
            Beyond work, I’ve participated in <span className="text-white">hackathons and innovation challenges</span>, always seeking new ways to push 
            the boundaries of technology and design.
          </p>
          <br />
          <p>
            In my free time, you’ll find me exploring new design trends, training at the gym, or brainstorming my next big project.
          </p>
        </div>
      </div>
*/}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-blue-400 underline"
      >
        Ver mais no Behance
      </a>
    </div>
  );
};

export default ProjectsDetail;
