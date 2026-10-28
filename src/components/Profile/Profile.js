import React from "react";
import GreetingPortrait from "./GreetingPortrait";
import EmailContact from "./EmailContact";
import brazil from "../../assets/about-brazil.png";
import WaveText from "../WaveText";
import PortfolioClock from "../PortfolioClock";
import "../DarkPages.css";

const experience = [
  ["ux/ui designer", "edge", "mar 2026", "present"],
  ["process designer", "nees", "nov 2025", "dez 2026"],
  ["product designer", "automining", "oct 2024", "feb 2026"],
  ["research", "orion", "may 2025", "dec 2025"],
  ["pmo intern", "mineração vale verde", "apr 2023", "oct 2024"],
];
function Entry({ title, organization, start, end }) {
  return <div className="about-entry"><p><span className="home-slash">/ </span>{title}{organization && <><span>, </span><span className="dark-muted">{organization}</span></>}</p>{start && <p className="about-date">{start}{end && <> <span className="home-slash">—</span> {end}</>}</p>}</div>;
}
export default function Profile() {
  return <main id="profile" className="about-page dark-page">
    <section className="about-introduction" aria-label="About João">
      <p>I’m a Brazilian designer, born in Bahia, but raised in Alagoas. My journey has taken me through different places and creative environments, shaping a multidisciplinary perspective that continues to influence my work everyday. With a background in Computer Science and a strong connection to design, I explore the digital ways to create through</p>
      <div className="about-disciplines">
        <span tabIndex={0} className="about-discipline-line wave-trigger"><b className="home-slash">/ </b><WaveText>strategy,</WaveText></span>
        <span tabIndex={0} className="about-discipline-line wave-trigger"><b className="home-slash">/ </b><WaveText>experience and</WaveText></span>
        <p className="about-continuation"><span tabIndex={0} className="wave-trigger"><b className="home-slash">/ </b><WaveText>innovation.</WaveText></span>{" "}I’m driven by ideas, transforming them into visuals that feel alive, expressive and accessible. From startups to large corporations, I've had the opportunity to bring ideas to life across different projects and teams. Today, i lead some projects as a UX/UI Designer at EDGE, one of <span className="about-brazil" tabIndex={0}><span className="about-brazil-name">Brazil</span><img src={brazil} alt="" aria-hidden="true" /></span>’s largest innovation centers.</p>
      </div>
    </section>
    <div className="about-columns">
      <section className="about-contact"><h2>CONTACT ME</h2><a className="wave-trigger" href="https://www.linkedin.com/in/carrllosz" target="_blank" rel="noreferrer"><WaveText>linkedin.com/in/carrllosz</WaveText></a><EmailContact /><GreetingPortrait /></section>
      <section><h2>WORK EXPERIENCE</h2>{experience.map(([title, organization, start, end]) => <Entry key={organization} {...{title, organization, start, end}} />)}</section>
      <div className="about-education"><section><h2>EDUCATION</h2><Entry title="ciência da computação" organization="ufal" /><Entry title="ux e design de produtos digitais" organization="puc minas" /></section><section><h2>AWARDS</h2><Entry title="festival curicaca" organization="edge" start="11 october 2025" /></section></div>
    </div>
    <PortfolioClock />
  </main>;
}
