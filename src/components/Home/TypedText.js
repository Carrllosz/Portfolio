import React from "react";

export default function TypedText({ children, offset = 0, delay = 180, interval = 48, final = false }) {
  return <span className="typed-text" aria-label={children} style={{ "--typing-step": `${interval}ms` }}>{Array.from(children).map((letter, index) => (
    <span aria-hidden="true" className={`typed-letter wave-letter${final && index === Array.from(children).length - 1 ? " typed-final-letter" : ""}`} key={index} style={{ "--wave-delay": `${index * 35}ms`, "--letter-delay": `${delay + (offset + index) * interval}ms` }}>{letter}</span>
  ))}</span>;
}
