import React from "react";
import portrait from "../../assets/about-portrait.png";
import WaveText from "../WaveText";
import PortfolioClock from "../PortfolioClock";
import "../DarkPages.css";

const experience = [
  ["UX/UI Designer", "EDGE", "Mar 2026", "Present"],
  ["Process Designer", "NEES", null, null],
  ["Product Designer", "Automining", "Oct 2024", "Feb 2026"],
  ["Data-Oriented Solutions Designer", "Orion", "May 2025", "Dec 2025"],
  ["PMO Intern", "Mineração Vale Verde", null, null],
];
function Entry({ title, organization, start, end }) {
  return <div className="about-entry"><p><span className="home-slash">/ </span>{title}{organization && <><span>, </span><span className="dark-muted">{organization}</span></>}</p>{start && <p className="about-date">{start}{end && <> <span className="home-slash">—</span> {end}</>}</p>}</div>;
}
export default function Profile() {
  return <main id="profile" className="about-page dark-page">
    <section className="about-introduction" aria-label="About João">
      <p>Born in Bahia, but raised in Alagoas, i am passionate about design, culture, food, creativity and accessible technologies that connect. Currently, i work as a UX/UI Designer at EDGE, working at the intersection between</p>
      <div className="about-disciplines"><span tabIndex={0} className="wave-trigger"><b className="home-slash">/ </b><WaveText>strategy,</WaveText></span><span tabIndex={0} className="wave-trigger"><b className="home-slash">/ </b><WaveText>experience e</WaveText></span><span tabIndex={0} className="wave-trigger"><b className="home-slash">/ </b><WaveText>innovation.</WaveText></span></div>
      <p>I design digital products through research, strategy and interaction design. From enterprise platforms to operational systems and data-driven dashboards, my work connects user needs with business goals, making complex experiences feel effortless.</p>
    </section>
    <div className="about-columns">
      <section className="about-contact"><h2>CONTACT ME</h2><a className="wave-trigger" href="https://www.linkedin.com/in/carrllosz" target="_blank" rel="noreferrer"><WaveText>linkedin.com/in/carrllosz</WaveText></a><a className="wave-trigger" href="mailto:joaocar2003@gmail.com"><WaveText>joaocar2003@gmail.com</WaveText></a><img src={portrait} alt="João dos Anjos outdoors in the afternoon sun" /></section>
      <section><h2>WORK EXPERIENCE</h2>{experience.map(([title, organization, start, end]) => <Entry key={organization} {...{title, organization, start, end}} />)}</section>
      <div className="about-education"><section><h2>EDUCATION</h2><Entry title="Ciência da Computação" organization="UFAL" /><Entry title="UX e Design de Produtos Digitais" organization="PUC Minas" /></section><section><h2>AWARDS</h2><Entry title="Festival Curicaca" organization="EDGE" start="August 2025" /></section></div>
    </div>
    <PortfolioClock />
  </main>;
}
