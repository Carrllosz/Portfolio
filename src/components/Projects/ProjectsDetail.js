import { useParams } from "react-router-dom";
import React from "react";
import { projects } from "../../data/projectData";

const BulletSection = ({ title, items, centered }) => {
  if (!items) return null;

  return (
    <div
      className={`flex flex-col gap-6 ${centered ? "items-center text-center" : ""}`}
    >
      <h2 className="text-sm tracking-widest uppercase text-black/40">
        {title}
      </h2>

      <ul
        className={`flex flex-col gap-3 text-base md:text-lg leading-relaxed text-black/80 ${
          centered ? "max-w-3xl text-justify" : ""
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};

const ParagraphSection = ({ title, text, centered }) => {
  if (!text) return null;

  return (
    <div
      className={`flex flex-col gap-6 ${centered ? "items-center text-center" : ""}`}
    >
      <h2 className="text-sm tracking-widest uppercase text-black/40">
        {title}
      </h2>

      <p
        className={`text-base md:text-lg leading-relaxed text-black/80 ${
          centered ? "max-w-3xl text-justify" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};

const MediaBlock = ({ block, fullWidth }) => {
  if (!block) return null;

  const baseClass = `rounded-xl object-cover ${
    fullWidth ? "w-full" : "w-full"
  }`;

  if (block.type === "video") {
    return (
      <video
        className={baseClass}
        src={block.src}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return <img className={baseClass} src={block.src} alt="" />;
};

const ProjectsDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <h1 className="text-black text-center mt-20">Projeto não encontrado</h1>
    );
  }

  const blocks = project.contentBlocks || [];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col px-6 pt-[200px] pb-24 gap-32">
      {/* Title */}
      <div className="text-center items-center justify-center flex flex-col gap-4">
        <h1 className="text-3xl md:text-6xl font-medium">{project.title}</h1>
        <p className="text-black/60 max-w-2xl mx-auto">{project.subtitle}</p>
        {project.link && (
           <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5B23] text-sm font-medium underline hover:opacity-80 transition"
          >
            See Full Project →
          </a>
        )}
      </div>

      {/* 1️⃣ Hero + Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        <BulletSection title="Impact" items={project.impact} />
        <MediaBlock block={project.hero} />
      </div>

      {/* 2️⃣ Full Width Media + Problem */}
      {blocks[0] && (
        <div className="flex flex-col gap-12 items-center">
          <MediaBlock block={blocks[0]} fullWidth />
          <ParagraphSection
            title="The Problem"
            text={project.problem}
            centered
          />
        </div>
      )}

      {/* 3️⃣ Media + Strategic Approach (CENTRALIZADO + JUSTIFICADO) */}
      {blocks[1] && (
        <div className="flex flex-col gap-12 items-center">
          <MediaBlock block={blocks[1]} />
          <ParagraphSection
            title="Strategic Approach"
            text={project.strategy}
            centered
          />
        </div>
      )}

      {/* 4️⃣ Media + Highlights */}
      {blocks[2] && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <MediaBlock block={blocks[2]} />
          <BulletSection title="Highlights" items={project.highlights} />
        </div>
      )}

      {/* 5️⃣ Media + Key Decisions (CENTRALIZADO + JUSTIFICADO) */}
      {blocks[3] && (
        <div className="flex flex-col gap-12 items-center">
          <MediaBlock block={blocks[3]} />
          <BulletSection
            title="Key Product Decisions"
            items={project.decisions}
            centered
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsDetail;
