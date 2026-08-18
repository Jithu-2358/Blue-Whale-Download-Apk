// Reference-match style: tall mobile Blue Whale intro, cobalt video-room landing page, supplied video only.
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowRight, Menu, Play, Waves, X } from "lucide-react";

const videoUrl = "/manus-storage/blue-whale-reference_abe0dc24.mp4";
const introDuration = 8000;

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<number | null>(null);

  const replayIntro = useCallback(() => {
    setIntroVisible(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setIntroVisible(false), introDuration);
    const video = introVideoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    replayIntro();
    const onPageShow = () => replayIntro();
    const onVisibility = () => { if (document.visibilityState === "visible") replayIntro(); };
    const onFocus = () => replayIntro();
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onFocus);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onFocus);
    };
  }, [replayIntro]);

  const skipIntro = () => {
    setIntroVisible(false);
    introVideoRef.current?.pause();
  };

  return (
    <div className="reference-site">
      <section className={`reference-intro ${introVisible ? "is-visible" : "is-hidden"}`} aria-hidden={!introVisible}>
        <div className="intro-lines" aria-hidden="true" />
        <div className="intro-orb" aria-hidden="true" />
        <p className="intro-label"><span className="intro-star">✧</span> BLUE ARC STUDIO / OPENING</p>
        <h1 className="intro-title">BLUE<br /><span>WHALE</span></h1>
        <div className="intro-video-frame"><video ref={introVideoRef} autoPlay muted playsInline preload="auto" poster="/manus-storage/ocean-hero_81c956de.png" aria-label="Blue Whale opening video"><source src={videoUrl} type="video/mp4" /></video></div>
        <div className="intro-curves" aria-hidden="true" />
        <button className="intro-skip" onClick={skipIntro}>Skip Intro <ArrowRight size={20} /></button>
        <div className="intro-progress" aria-hidden="true"><span /></div>
      </section>

      <header className="reference-header"><a href="#home" className="reference-brand"><span className="brand-mark"><Waves size={28} /></span><span><strong>BLUE WHALE GAME</strong><small>ANIME VIDEO ROOM</small></span></a><button className="reference-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu">{menuOpen ? <X size={36} /> : <Menu size={36} />}</button><nav className={menuOpen ? "reference-nav open" : "reference-nav"}><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#video" onClick={() => setMenuOpen(false)}>Video</a><a href={videoUrl} download="blue-whale.mp4" onClick={() => setMenuOpen(false)}>Download</a></nav></header>

      <main id="home">
        <section className="reference-hero"><div className="reference-route" aria-hidden="true" /><p className="reference-kicker"><span /> EPISODE 01 / OCEAN SIGNAL</p><h2>Ride the<br /><em>blue current.</em></h2><p className="reference-description">A cinematic anime video room shaped by deep water, bright tide marks, and one unforgettable ocean frame.</p><div className="reference-actions"><a className="reference-download" href={videoUrl} download="blue-whale.mp4"><ArrowDownToLine size={21} /> Download Blue Whale</a><a className="reference-explore" href="#video"><Play size={20} fill="currentColor" /> Explore the page</a></div></section>
        <section id="video" className="reference-player-section"><div className="player-meta"><span>NOW PLAYING</span><span>00:09</span></div><div className="reference-player"><video controls playsInline preload="metadata" poster="/manus-storage/ocean-hero_81c956de.png" aria-label="Blue Whale video"><source src={videoUrl} type="video/mp4" /></video><span className="player-tag">BLUE / 01</span></div><p className="player-caption">Supplied video · blue ocean archive</p></section>
      </main>
    </div>
  );
}
