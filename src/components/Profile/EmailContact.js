import React, { useEffect, useRef, useState } from "react";
import WaveText from "../WaveText";

const email = "joaocar2003@gmail.com";

export default function EmailContact() {
  const [message, setMessage] = useState("");
  const [copying, setCopying] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    clearTimeout(timer.current);
    setCopying(true);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied");
    } catch {
      setMessage("Unable to copy email");
    } finally {
      setCopying(false);
      timer.current = setTimeout(() => setMessage(""), 2400);
    }
  }

  return <div className="about-email-row">
    <a className="wave-trigger" href={`mailto:${email}`}><WaveText>{email}</WaveText></a>
    <span className="about-copy-wrap">
      <button type="button" className="about-copy-email" onClick={copyEmail} disabled={copying} aria-label="Copy email">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>
      </button>
      <span className={`about-copy-feedback${message ? " is-visible" : ""}`} role="status" aria-live="polite">{message}</span>
    </span>
  </div>;
}
