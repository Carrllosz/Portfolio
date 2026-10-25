import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayed, setDisplayed] = useState(location);
  const [phase, setPhase] = useState("idle");
  const displayedKey = useRef(location.key);

  useEffect(() => {
    if (location.key === displayedKey.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      displayedKey.current = location.key;
      setDisplayed(location);
      setPhase("idle");
      return;
    }
    setPhase("cover");
    return undefined;
  }, [location]);

  function finishPhase(event) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (phase === "cover") {
      displayedKey.current = location.key;
      setDisplayed(location);
      window.scrollTo(0, 0);
      // Let the new route commit while the curtain still fully covers it.
      setPhase("covered");
    } else if (phase === "reveal") {
      setPhase("idle");
      requestAnimationFrame(() => window.dispatchEvent(new Event("portfolio-page-ready")));
    }
  }
  useEffect(() => {
    if (phase !== "covered") return;
    let next;
    const first = requestAnimationFrame(() => {
      next = requestAnimationFrame(() => setPhase("reveal"));
    });
    return () => { cancelAnimationFrame(first); cancelAnimationFrame(next); };
  }, [phase]);

  return <>
    <div className={`page-content${phase === "reveal" ? " page-content-enter" : ""}`} inert={phase !== "idle" ? true : undefined}>{React.cloneElement(children, { location: displayed })}</div>
    <div className={`page-curtain page-curtain-${phase}`} onTransitionEnd={finishPhase} aria-hidden="true" />
  </>;
}
