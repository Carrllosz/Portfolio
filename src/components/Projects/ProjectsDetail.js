import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../../data/projectData";
import WaveText from "../WaveText";
import PortfolioClock from "../PortfolioClock";
import "../DarkPages.css";

function Media({ block, title, hero }) {
  const video = useRef(null);
  const manuallyMuted = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const media = video.current;
    if (!media || !block?.interactive) return;
    let visible = false;
    let disposed = false;
    const syncAudio = async () => {
      const audible = visible && !document.hidden && !manuallyMuted.current;
      media.muted = !audible;
      setMuted(!audible);
      if (audible && !media.paused) {
        try { await media.play(); } catch {
          if (!disposed) { media.muted = true; setMuted(true); media.play().catch(() => {}); }
        }
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= .5;
      syncAudio();
    }, { threshold: [0, .5, 1] });
    observer.observe(media);
    document.addEventListener("visibilitychange", syncAudio);
    document.addEventListener("pointerdown", syncAudio);
    document.addEventListener("keydown", syncAudio);
    return () => {
      disposed = true;
      observer.disconnect();
      media.muted = true;
      document.removeEventListener("visibilitychange", syncAudio);
      document.removeEventListener("pointerdown", syncAudio);
      document.removeEventListener("keydown", syncAudio);
    };
  }, [block?.interactive, block?.src]);
  if (!block?.src) return null;
  const toggleVideo = async () => {
    if (!video.current) return;
    if (video.current.paused) {
      try { await video.current.play(); } catch { setPlaying(false); }
    } else video.current.pause();
  };
  return <div className={`case-media${hero ? " case-hero" : ""}`}>
    {block.type === "video" ? <video ref={video} src={block.src} autoPlay muted={muted} loop playsInline controls={false} disablePictureInPicture disableRemotePlayback tabIndex={-1} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onVolumeChange={() => setMuted(video.current?.muted ?? true)} onTimeUpdate={() => { const media = video.current; setProgress(media?.duration ? media.currentTime / media.duration : 0); }} onContextMenu={event => event.preventDefault()} aria-label={title} /> : <img src={block.src} alt={title} loading={hero ? "eager" : "lazy"} />}
    {block.type === "video" && block.interactive && <div className="case-video-controls">
      <button type="button" onClick={() => { if (video.current) { video.current.muted = !video.current.muted; manuallyMuted.current = video.current.muted; setMuted(video.current.muted); } }} aria-label={muted ? "Unmute video" : "Mute video"} aria-pressed={!muted}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z" />{muted ? <path d="m16 9 6 6m0-6-6 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></>}</svg>
      </button>
      <button type="button" onClick={toggleVideo} aria-label={playing ? "Pause video" : "Play video"} aria-pressed={playing}>
        <svg className="case-video-progress" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="19" opacity=".25" /><circle cx="22" cy="22" r="19" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - progress * 100} /></svg>
        <svg viewBox="0 0 24 24" aria-hidden="true">{playing ? <path d="M8 5v14M16 5v14" /> : <path d="m7 4 14 8-14 8Z" />}</svg>
      </button>
    </div>}
  </div>;
}
function Narrative({ title, text, items }) {
  if (!text && !items?.length) return null;
  return <section className="case-narrative"><h2>{title}</h2><div>{text && <RichParagraphs text={text} />}{items?.length > 0 && <ul>{items.map(item => <li key={item}><span className="home-slash">/ </span>{item}</li>)}</ul>}</div></section>;
}

function RichParagraphs({ text }) {
  return text.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph.split(/(\*\*.*?\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part, partIndex) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) return <a key={partIndex} className="case-source-link wave-trigger" href={link[2]} target="_blank" rel="noopener noreferrer"><WaveText>{link[1]}</WaveText></a>;
    return part;
  })}</p>);
}

function ProjectSummary({ text }) {
  return <div className="case-summary"><RichParagraphs text={text} /></div>;
}

function ProjectGallery({ blocks, title }) {
  const rows = [];
  for (let index = 0; index < blocks.length;) {
    const start = index;
    const count = blocks[index].layout === "full" || blocks[index + 1]?.layout === "full" || index % 3 === 0 ? 1 : 2;
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
    <aside className="case-sidebar"><Link to="/works" className="case-back-button wave-trigger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" /></svg><WaveText>Back</WaveText></Link><h1>{project.title.toUpperCase()}{project.year && <span className="dark-muted"> {project.year}</span>}</h1><ProjectSummary text={project.description || project.subtitle} /><dl className="case-facts"><div><dt>CLIENTS</dt><dd>{project.client || project.title.toUpperCase()}</dd></div><div><dt>SERVICE</dt><dd>{project.services?.length ? project.services.join(", ") : project.service || "UX/UI"}</dd></div></dl>{project.team?.length > 0 && <section className="case-team"><h2>TEAM</h2>{project.team.map(member => <p key={member.name}>{member.role} <span className="home-slash">/ </span>{member.name}</p>)}</section>}</aside>
    <article className="case-content" aria-label={`${project.title} case study`}><Media block={project.hero} title={`${project.title} — overview`} hero /><Narrative title={project.contextTitle || project.title} text={project.problem || project.subtitle} /><ProjectGallery blocks={blocks} title={project.title} /><ProjectNavigation currentId={id} /></article><PortfolioClock />
  </main>;
}
