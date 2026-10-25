import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WaveText from "../WaveText";
import RedCursor from "../RedCursor";
import HomeIntro from "../Home/HomeIntro";
import { hasSeenIntro } from "../Home/introSession";
import "../Home/Home.css";

const links = [["/", "HOME"], ["/works", "WORKS"], ["/profile", "ABOUT"], ["mailto:joaocar2003@gmail.com", "CONTACT ME"]];
export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(() => window.matchMedia("(max-width: 700px)").matches);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    const update = () => setSmallScreen(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const trigger = useRef(null);
  const panel = useRef(null);
  const home = pathname === "/";
  const dark = pathname === "/works" || pathname === "/profile" || pathname.startsWith("/projects/");
  const [intro, setIntro] = useState(() => home && !hasSeenIntro());
  const wordmark = useRef(null);
  const finishIntro = useCallback(() => setIntro(false), []);
  const showMenu = dark || (home && smallScreen);
  useEffect(() => { if (!showMenu) setOpen(false); }, [showMenu]);
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = event => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
      if (event.key === "Tab") {
        const items = [trigger.current, ...panel.current.querySelectorAll("a")];
        const index = items.indexOf(document.activeElement);
        if (event.shiftKey && index <= 0) { event.preventDefault(); items[items.length - 1].focus(); }
        else if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); items[0].focus(); }
      }
    };
    panel.current?.querySelector("a")?.focus();
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); };
  }, [open]);
  const navLinks = links.map(([url, label]) => {
    const content = <><span className="home-slash">/ </span><WaveText>{label}</WaveText></>;
    return url.startsWith("mailto:")
      ? <a className="wave-trigger" href={url} key={url} onClick={() => { setOpen(false); trigger.current?.focus(); }}>{content}</a>
      : <Link className="wave-trigger" to={url} key={url} aria-current={pathname === url ? "page" : undefined} onClick={() => setOpen(false)}>{content}</Link>;
  });
  return <>
    {dark && <RedCursor />}
    {home && intro && <HomeIntro target={wordmark} onComplete={finishIntro} />}
    {showMenu && <button className={`portfolio-menu-shade${open ? " is-visible" : ""}`} aria-hidden={!open} tabIndex={-1} aria-label="Close menu" onClick={() => { setOpen(false); trigger.current?.focus(); }} />}
    <header className={`portfolio-header${home ? " on-home" : ""}${showMenu ? " has-dropdown" : ""}${dark ? " on-dark" : ""}${open ? " menu-is-open" : ""}${home && intro ? " home-intro-active" : ""}`}>
      <div className="portfolio-brand-row"><Link ref={wordmark} to="/" className="home-wordmark" aria-label="João dos Anjos — Home"><span>JOÃO</span><strong><i className="wordmark-slash" aria-hidden="true">/</i>DOS ANJOS</strong></Link>
      {showMenu && <button ref={trigger} className="portfolio-menu-trigger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="portfolio-menu" onClick={() => setOpen(value => !value)}><svg className="portfolio-menu-symbol" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10H16" /></svg></button>}</div>
      {home && !open && <><nav className="home-menu" aria-label="Main navigation">{navLinks.slice(0, 3)}</nav><div className="home-contact">{navLinks[3]}</div></>}
      {showMenu && <div className="portfolio-menu-reveal" inert={!open ? true : undefined} aria-hidden={!open}><div className="portfolio-menu-clip"><nav ref={panel} id="portfolio-menu" className="portfolio-menu-panel" aria-label="Main navigation">{navLinks}</nav></div></div>}
    </header>
  </>;
}
