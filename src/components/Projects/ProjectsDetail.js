import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../../data/projectData";
import WaveText from "../WaveText";
import PortfolioClock from "../PortfolioClock";
import "../DarkPages.css";

function Media({ block, title, hero }) {
  if (!block?.src) return null;
  return <div className={`case-media${hero ? " case-hero" : ""}`}>{block.type === "video" ? <video src={block.src} autoPlay muted loop playsInline controls={false} disablePictureInPicture disableRemotePlayback tabIndex={-1} onContextMenu={event => event.preventDefault()} aria-label={title} /> : <img src={block.src} alt={title} loading={hero ? "eager" : "lazy"} />}</div>;
}
function Narrative({ title, text, items }) {
  if (!text && !items?.length) return null;
  return <section className="case-narrative"><h2>{title}</h2><div>{text && <p>{text}</p>}{items?.length > 0 && <ul>{items.map(item => <li key={item}><span className="home-slash">/ </span>{item}</li>)}</ul>}</div></section>;
}

function ProjectGallery({ blocks, title }) {
  const rows = [];
  for (let index = 0; index < blocks.length;) {
    const start = index;
    const count = index % 3 === 0 ? 1 : 2;
    const row = blocks.slice(index, index + count);
    rows.push(<div className={`case-gallery-row${row.length === 2 ? " is-pair" : ""}`} key={start}>{row.map((block, offset) => <Media key={start + offset} block={block} title={block.alt || `${title} — project detail ${start + offset + 1}`} />)}</div>);
    index += row.length;
  }
  return <section className="case-gallery" aria-label={`${title} — project gallery`}>{rows}</section>;
}
function ProjectNavigation({ currentId }) {
  const ids = Object.keys(projects).filter(id => !projects[id].comingSoon);
  const index = ids.indexOf(currentId);
  return <nav className="case-project-navigation" aria-label="Project navigation">{[
    { id: ids[index - 1], label: "Previous project", direction: "previous" },
    { id: ids[index + 1], label: "Next project", direction: "next" },
  ].map(item => {
    const arrow = <svg viewBox="0 0 24 24" aria-hidden="true"><path d={item.direction === "previous" ? "M19 12H5m7-7-7 7 7 7" : "M5 12h14m-7-7 7 7-7 7"} /></svg>;
    const content = <>{arrow}<span><span className="case-navigation-label">{item.label}</span>{item.id && <WaveText>{projects[item.id].title}</WaveText>}</span></>;
    return item.id ? <Link key={item.direction} className={`case-project-step wave-trigger is-${item.direction}`} to={`/projects/${item.id}`}>{content}</Link> : <button key={item.direction} type="button" className={`case-project-step is-${item.direction}`} disabled>{content}</button>;
  })}</nav>;
}
export default function ProjectsDetail() {
  const { id } = useParams();
  const project = projects[id];
  if (project?.comingSoon) return <Navigate to="/works" replace />;
  if (!project) return <main className="case-page dark-page"><h1>Project not found</h1></main>;
  const blocks = project.contentBlocks || [];
  return <main className="case-page dark-page">
    <aside className="case-sidebar"><Link to="/works" className="case-back-button wave-trigger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg><WaveText>Back</WaveText></Link><h1>{project.title.toUpperCase()}{project.year && <span className="dark-muted"> {project.year}</span>}</h1><p className="case-summary">{project.description || project.subtitle}</p><dl className="case-facts"><div><dt>CLIENTS</dt><dd>{project.client || project.title.toUpperCase()}</dd></div><div><dt>SERVICE</dt><dd>{project.services?.length ? project.services.join(", ") : project.service || "UX/UI"}</dd></div></dl>{project.team?.length > 0 && <section className="case-team"><h2>TEAM</h2>{project.team.map(member => <p key={member.name}>{member.role} <span className="home-slash">/ </span>{member.name}</p>)}</section>}</aside>
    <article className="case-content" aria-label={`${project.title} case study`}><Media block={project.hero} title={`${project.title} — overview`} hero /><Narrative title={project.contextTitle || project.title} text={project.problem || project.subtitle} /><ProjectGallery blocks={blocks} title={project.title} /><ProjectNavigation currentId={id} /></article><PortfolioClock />
  </main>;
}
