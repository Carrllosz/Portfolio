import React, { useEffect, useRef, useState } from "react";
import portrait from "../../assets/about-portrait.png";

const greetings = [
  { text: "Olá", lang: "pt", color: "#EE0000" },
  { text: "Hello", lang: "en", color: "#3600EE" },
  { text: "Hola", lang: "es", color: "#D000EE" },
  { text: "Bonjour", lang: "fr", color: "#EE4400" },
  { text: "Ciao", lang: "it", color: "#00875A" },
  { text: "Hallo", lang: "de", color: "#0055EE" },
  { text: "こんにちは", lang: "ja", color: "#C90055" },
  { text: "안녕하세요", lang: "ko", color: "#7B00EE" },
  { text: "你好", lang: "zh", color: "#007E91" },
  { text: "Привет", lang: "ru", color: "#D03B00" },
  { text: "مرحبًا", lang: "ar", color: "#A600D9" },
  { text: "नमस्ते", lang: "hi", color: "#006BBA" },
  { text: "Γεια σου", lang: "el", color: "#B80058" },
  { text: "Merhaba", lang: "tr", color: "#006E52" },
  { text: "Hej", lang: "sv", color: "#4A00EE" },
];

export default function GreetingPortrait() {
  const [bubbles, setBubbles] = useState([]);
  const sequence = useRef(0);
  const previous = useRef(null);
  const timers = useRef(new Set());

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  function showGreeting(event, force = false, keyboard = false) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = keyboard ? rect.width / 2 : event.clientX - rect.left;
    const y = keyboard ? rect.height / 2 : event.clientY - rect.top;
    const now = performance.now();
    const last = previous.current;
    const distance = Math.max(36, Math.min(70, rect.width * .18));
    if (!force && last && (now - last.time < 160 || Math.hypot(x - last.x, y - last.y) < distance)) return;
    previous.current = { x, y, time: now };
    const id = sequence.current++;
    const greeting = greetings[id % greetings.length];
    setBubbles(current => [...current.slice(-5), { id, ...greeting, x: x / rect.width * 100, y: y / rect.height * 100 }]);
    const timer = setTimeout(() => {
      setBubbles(current => current.filter(bubble => bubble.id !== id));
      timers.current.delete(timer);
    }, 2200);
    timers.current.add(timer);
  }

  return <button type="button" className="about-portrait" aria-label="Passe pela foto ou toque para descobrir olá em diferentes idiomas"
    onPointerEnter={event => { if (event.pointerType === "mouse") showGreeting(event, true); }}
    onPointerMove={event => { if (event.pointerType === "mouse") showGreeting(event); }}
    onPointerLeave={() => { previous.current = null; }}
    onPointerDown={event => { if (event.pointerType !== "mouse") showGreeting(event, true); }}
    onClick={event => { if (event.detail === 0) showGreeting(event, true, true); }}>
    <img src={portrait} alt="João dos Anjos outdoors in the afternoon sun" />
    <span className="portrait-greetings" aria-hidden="true">{bubbles.map(bubble => <span key={bubble.id} className="portrait-greeting-position" style={{ left: `${bubble.x}%`, top: `${bubble.y}%` }}><span lang={bubble.lang} dir="auto" className="portrait-greeting" style={{ "--greeting-color": bubble.color }}>{bubble.text}</span></span>)}</span>
  </button>;
}
