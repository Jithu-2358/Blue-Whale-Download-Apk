// Anime Tide style: cinematic ocean-night framing, bold cel-shaded accents, one focused video experience, and no APK distribution.
import { Download, Play, Sparkles } from "lucide-react";

const videoUrl = "/manus-storage/blue-whale-awareness-video_bbfc80d6.mp4";

export default function Home() {
  return (
    <main className="anime-page">
      <div className="anime-stars" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <header className="anime-header">
        <a className="anime-brand" href="#top"><span className="anime-brand-mark">潮</span><span><strong>BLUE TIDE</strong><small>ANIME VIDEO ROOM</small></span></a>
        <span className="header-status"><i /> NOW PLAYING</span>
      </header>

      <section id="top" className="anime-hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="anime-copy">
          <p className="anime-kicker"><Sparkles size={14} /> EPISODE 01 / OCEAN SIGNAL</p>
          <h1>Blue<br /><span>Tide.</span></h1>
          <p className="anime-subtitle">A cinematic ocean visual<br />for the midnight screen.</p>
          <div className="hero-line"><span /> <small>PLAY THE MOMENT</small></div>
        </div>
        <div className="anime-video-column">
          <div className="video-label"><span>VIDEO FILE / 00:09</span><span>BLUE TIDE ARCHIVE</span></div>
          <div className="anime-video-shell">
            <div className="corner corner-tl" /><div className="corner corner-br" />
            <video controls playsInline preload="metadata" aria-label="Supplied ocean video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <div className="video-play-badge"><Play size={17} fill="currentColor" /></div>
          </div>
          <div className="video-underbar"><span className="wave-mark">〰</span><span>Watch the supplied video</span><a href={videoUrl} download="blue-tide-video.mp4"><Download size={15} /> DOWNLOAD VIDEO</a></div>
        </div>
      </section>

      <section className="anime-footer-panel"><div className="panel-kanji">海</div><div><p className="panel-label">BLUE TIDE / VISUAL ROOM</p><p className="panel-copy">One video. One ocean. Press play when you are ready.</p></div><div className="panel-coordinate">35° 41′ N<br />139° 41′ E</div></section>
      <footer className="anime-footer"><span>© BLUE TIDE ARCHIVE</span><span>KEEP THE CURRENT MOVING</span></footer>
    </main>
  );
}
