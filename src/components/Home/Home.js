import React, { useCallback, useEffect, useRef, useState } from "react";
import homeMoobi from "../../assets/moobipubli.mp4";
import bahia from "../../assets/home-bahia.png";
import alagoas from "../../assets/home-alagoas.png";
import TypedText from "./TypedText";
import { hasSeenIntro } from "./introSession";
import "./Home.css";

function PlayIcon({ paused }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{paused ? <path d="M8 5v14M16 5v14" /> : <path d="M7 4.8c0-1 1-1.6 1.8-1.1l12 7.2c.8.5.8 1.7 0 2.2l-12 7.2c-.8.5-1.8-.1-1.8-1.1Z" />}</svg>;
}

const Home = () => {
  const initialIntro = useRef(!hasSeenIntro());
  const video = useRef(null);
  const timer = useRef(null);
  const autoplayHandled = useRef(false);
  const cursor = useRef(null);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [pointerVisible, setPointerVisible] = useState(false);
  const startVideo = useCallback(async () => {
    clearTimeout(timer.current);
    try { await video.current?.play(); } catch { setPlaying(false); }
  }, []);

  useEffect(() => {
    const scheduleAutoplay = () => {
      clearTimeout(timer.current);
      // Count five seconds only once the Home is visible, after the opening.
      if (autoplayHandled.current || document.hidden || !hasSeenIntro() ||
          document.querySelector(".page-curtain-cover, .page-curtain-covered, .page-curtain-reveal")) return;
      timer.current = setTimeout(() => {
        if (document.hidden || window.location.pathname !== "/") return;
        autoplayHandled.current = true;
        startVideo();
      }, 5000);
    };
    scheduleAutoplay();
    document.addEventListener("visibilitychange", scheduleAutoplay);
    window.addEventListener("portfolio-intro-complete", scheduleAutoplay);
    window.addEventListener("portfolio-page-ready", scheduleAutoplay);
    return () => {
      clearTimeout(timer.current);
      document.removeEventListener("visibilitychange", scheduleAutoplay);
      window.removeEventListener("portfolio-intro-complete", scheduleAutoplay);
      window.removeEventListener("portfolio-page-ready", scheduleAutoplay);
    };
  }, [startVideo]);

  useEffect(() => {
    if (!playing) return;
    let frame;
    const update = () => {
      const media = video.current;
      if (media && Number.isFinite(media.duration) && media.duration > 0) {
        setProgress(Math.min(1, media.currentTime / media.duration));
      }
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  function toggleVideo() {
    autoplayHandled.current = true;
    clearTimeout(timer.current);
    if (video.current?.paused) startVideo();
    else video.current?.pause();
  }

  function toggleSound() {
    const media = video.current;
    if (!media) return;
    media.muted = !media.muted;
    setMuted(media.muted);
  }

  function movePointer(event) {
    if (event.pointerType !== "mouse") return;
    cursor.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
    cursor.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
    setPointerVisible(!event.target.closest("a, button:not(.home-video-surface)"));
  }

  return (
    <section id="home" className={`portfolio-home${playing ? " is-playing" : ""}${initialIntro.current ? " has-opening" : ""}`} aria-label="Introduction" onPointerMove={movePointer} onPointerLeave={() => setPointerVisible(false)}>
      <video ref={video} className="home-background" src={homeMoobi} muted={muted} onVolumeChange={() => setMuted(video.current?.muted ?? true)} loop playsInline preload="auto" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-hidden="true" />
      <button className="home-video-surface" aria-label={playing ? "Pause background video" : "Play background video"} onClick={toggleVideo} tabIndex={-1} />
      <div className="home-biography">
        <p><TypedText>Born in </TypedText><span className="home-place" tabIndex={0}><TypedText offset={8}>Bahia</TypedText><img src={bahia} alt="Map of Bahia" /></span><TypedText offset={13}>, but raised in </TypedText><span className="home-place" tabIndex={0}><TypedText offset={29}>Alagoas</TypedText><img src={alagoas} alt="Map of Alagoas" /></span><TypedText offset={36}>, i am passionate about design, culture, food, criativity and accessible technologies that connect. Currently, i work as a UX/UI Designer at EDGE, working at the intersection between</TypedText></p>
        <div className="home-disciplines">
          <span tabIndex={0} className="wave-trigger"><span className="home-slash"><TypedText offset={211}>/ </TypedText></span><TypedText offset={213}>strategy,</TypedText></span>
          <span tabIndex={0} className="wave-trigger"><span className="home-slash"><TypedText offset={222}>/ </TypedText></span><TypedText offset={224}>experience e</TypedText></span>
          <span tabIndex={0} className="wave-trigger"><span className="home-slash"><TypedText offset={236}>/ </TypedText></span><TypedText offset={238} final>innovation.</TypedText></span>
        </div>
      </div>
      <div ref={cursor} className={`home-play-cursor${pointerVisible ? " is-visible" : ""}`} aria-hidden="true"><PlayIcon paused={playing} /><span>{playing ? "Pause" : "Play"}</span></div>
      <button className="home-video-toggle home-sound-toggle" onClick={toggleSound} aria-label={muted ? "Unmute video" : "Mute video"} aria-pressed={!muted} title={muted ? "Unmute" : "Mute"}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z" />{muted ? <path d="m16 9 6 6m0-6-6 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></>}</svg>
      </button>
      <button className="home-video-toggle" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"} aria-pressed={playing}>
        <svg className="home-video-progress" viewBox="0 0 44 44" aria-hidden="true"><circle className="video-progress-track" cx="22" cy="22" r="19" /><circle className="video-progress-value" cx="22" cy="22" r="19" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - progress * 100} /></svg>
        <PlayIcon paused={playing} />
      </button>
    </section>
  );
};
export default Home;
