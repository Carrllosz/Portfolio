import React from "react";
import "./WaveText.css";
export default function WaveText({ children, offset = 0 }) {
  const text = String(children);
  return <span className="wave-text" aria-label={text}>{Array.from(text).map((letter, index) => <span key={index} className={`wave-letter${letter === "/" ? " home-slash" : ""}`} aria-hidden="true" style={{ "--wave-delay": `${(offset + index) * 35}ms` }}>{letter}</span>)}</span>;
}
