import React, { useEffect, useState } from "react";
import "./PortfolioClock.css";
export default function PortfolioClock({ className = "dark-page-clock" }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const timer = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(timer); }, []);
  return <time className={`portfolio-clock ${className}`} dateTime={time.toISOString()}><span className="portfolio-clock-dot" aria-hidden="true" /><span>{time.toLocaleTimeString("en-GB", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })} UTC-3</span></time>;
}
