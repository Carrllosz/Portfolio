import React, { useEffect, useRef } from "react";
import "./DarkPages.css";
export default function RedCursor() {
  const cursor = useRef(null);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let point = null;
    const move = event => {
      if (!query.matches || event.pointerType !== "mouse") return;
      point = event;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!cursor.current) return;
        document.documentElement.classList.add("red-cursor-enabled");
        cursor.current.style.transform = `translate3d(${point.clientX}px, ${point.clientY}px, 0)`;
        cursor.current.style.opacity = "1";
      });
    };
    const leave = () => { if (cursor.current) cursor.current.style.opacity = "0"; };
    const change = () => { if (!query.matches) { document.documentElement.classList.remove("red-cursor-enabled"); leave(); } };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    query.addEventListener("change", change);
    return () => { cancelAnimationFrame(frame); document.documentElement.classList.remove("red-cursor-enabled"); document.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); window.removeEventListener("blur", leave); query.removeEventListener("change", change); };
  }, []);
  return <div ref={cursor} className="portfolio-red-cursor" aria-hidden="true" />;
}
