import React, { useEffect, useRef, useState } from "react";
import { markIntroSeen } from "./introSession";

export default function HomeIntro({ target, onComplete }) {
  const [givenLetters, setGivenLetters] = useState(0);
  const [cursorAtStart, setCursorAtStart] = useState(false);
  const [letters, setLetters] = useState(0);
  const [slash, setSlash] = useState(false);
  const mark = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markIntroSeen(); onComplete(); return;
    }
    const timers = [];
    for (let index = 1; index <= 4; index++) {
      timers.push(setTimeout(() => setGivenLetters(index), 650 + (index - 1) * 300));
    }
    const text = "DOS ANJOS";
    for (let index = 1; index <= text.length; index++) {
      timers.push(setTimeout(() => setLetters(index), 2100 + (index - 1) * 280));
    }
    timers.push(setTimeout(() => setCursorAtStart(true), 5600));
    timers.push(setTimeout(() => setSlash(true), 6600));
    let animation;
    let cancelled = false;
    timers.push(setTimeout(() => {
      const element = mark.current;
      const destination = target.current;
      if (!element || !destination) return;
      const from = element.getBoundingClientRect();
      const to = destination.getBoundingClientRect();
      animation = element.animate([
        { transform: "translate(0, 0) scale(1)" },
        { transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width})` },
      ], { duration: 2200, easing: "cubic-bezier(.65, 0, .35, 1)", fill: "forwards" });
      animation.finished.then(() => { if (!cancelled) { markIntroSeen(); onComplete(); } }).catch(() => {});
    }, 7300));
    return () => { cancelled = true; timers.forEach(clearTimeout); animation?.cancel(); };
  }, [target, onComplete]);
  return <div className="home-opening" role="status" aria-label="João dos Anjos">
    <div ref={mark} className="home-opening-mark" aria-hidden="true"><span className="intro-given-name">{"JOÃO".slice(0, givenLetters)}{givenLetters > 0 && letters === 0 && <span className="intro-given-caret">|</span>}</span><strong>{"DOS ANJOS".slice(0, letters)}{letters > 0 && !slash && <span className={`intro-typing-caret${cursorAtStart ? " is-at-start" : ""}`}>|</span>}<i className={slash ? "intro-slash is-typed" : "intro-slash"}>/</i></strong></div>
  </div>;
}
