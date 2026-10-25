import React, { useState } from "react";
import { Link } from "react-router-dom";
import bradesco from "../../assets/bradesco.png";
import "./Projects.css";
import PortfolioClock from "../PortfolioClock";
import { projects } from "../../data/projectData";
import WaveText from "../WaveText";

const categories = ["Branding", "UX/UI", "Motion", "Campaign", "Game Design"];
const works = [
  { id: "moobi", ratio: 1.4, title: "Moobi", description: "More human urban mobility.", video: projects.moobi.hero.src, categories: projects.moobi.services },
  { id: "bradesco", ratio: .96, title: "Bradesco", description: "Accessible digital banking for everyone.", image: bradesco, categories: projects.bradesco.services },
  { id: "caramelandia", ratio: .9, title: "Caramelândia", description: projects.caramelandia.subtitle, image: projects.caramelandia.hero.src, categories: projects.caramelandia.services },
  { id: "naia", ratio: 1.3, position: "50% 28%", title: "NAIA", description: projects.naia.subtitle, video: projects.naia.hero.src, categories: projects.naia.services },
];
function WorkCard({ project, active, setActive }) {
  const comingSoon = Boolean(projects[project.id].comingSoon);
  const Tag = comingSoon ? "div" : Link;
  const attributes = comingSoon
    ? { tabIndex: 0, role: "group", "aria-disabled": true, "aria-label": `${project.title}: Saindo do forno já já.` }
    : { to: `/projects/${project.id}` };
  return <Tag {...attributes} className={`works-card${active === project.id ? " is-active" : ""}${comingSoon ? " is-coming-soon" : ""}`} style={{ "--card-ratio": project.ratio, "--card-position": project.position || "center" }} onMouseEnter={() => setActive(project.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(project.id)} onBlur={() => setActive(null)}>
    <div className="works-card-media">{project.video ? <video src={project.video} autoPlay muted loop playsInline aria-label={project.title} /> : <img src={project.image} alt={project.title} loading="lazy" />}{comingSoon && <span className="works-coming-soon">Saindo do forno já já.</span>}</div>
    <div className="works-caption"><span>{project.title}</span>{!comingSoon && <span>{project.description}</span>}</div>
  </Tag>;
}
export default function Projects() {
  const [filter, setFilter] = useState(null);
  const [active, setActive] = useState(null);
  const visible = works.filter(project => !filter || project.categories.includes(filter));
  return <main className="works-page">
    <aside className="works-sidebar"><nav aria-label="Filter projects">{categories.map(category => <button key={category} className={`wave-trigger${filter === category ? " is-selected" : ""}`} aria-pressed={filter === category} onClick={() => { setFilter(value => value === category ? null : category); setActive(null); }}><span className="home-slash">/ </span><WaveText>{category}</WaveText> <span className="works-count">({works.filter(project => project.categories.includes(category)).length})</span></button>)}</nav></aside><PortfolioClock className="works-clock" />
    <div className={`works-grid${active ? " has-active" : ""}`} onMouseLeave={() => setActive(null)}>{[0, 1].map(column => <div className="works-column" key={column}>{visible.filter((_, index) => index % 2 === column).map(project => <WorkCard key={project.id} project={project} active={active} setActive={setActive} />)}</div>)}{visible.length === 0 && <p className="works-empty" role="status">No projects in this category yet. Select another category.</p>}</div>
  </main>;
}
