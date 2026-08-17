// Signal Coast style: video-first editorial layout, ink-blue/cream/teal palette, calm motion, and plainspoken safety language.
import { ArrowDown, ArrowUpRight, Download, HeartHandshake, ShieldAlert } from "lucide-react";

const videoUrl = "/manus-storage/blue-whale-awareness-video_bbfc80d6.mp4";

const signals = [
  {
    number: "01",
    title: "Secrecy is a warning sign",
    copy: "Requests to hide messages, tasks, or conversations from family and trusted adults can be a way to isolate someone.",
  },
  {
    number: "02",
    title: "Pressure is not proof",
    copy: "Threats, dares, countdowns, and claims that you must prove yourself are manipulation—not a test of courage.",
  },
  {
    number: "03",
    title: "Connection changes the current",
    copy: "Save evidence, stop replying, and involve a trusted person, school counselor, or local support service.",
  },
];

function AppMark() {
  return <div className="app-mark" aria-label="Signal Coast whale-tail shield mark"><img src="/manus-storage/whale-mark_41e9ee98.png" alt="" /></div>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Signal Coast home">
          <AppMark />
          <span>
            <strong>Signal Coast</strong>
            <small>Digital safety notes</small>
          </span>
        </a>
        <nav className="header-nav" aria-label="Page navigation">
          <a href="#why-it-matters">Why it matters</a>
          <a href="#what-to-do">What to do</a>
          <a className="header-cta" href="#support">Find support <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="video-landing">
        <div className="landing-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A public-interest guide</p>
          <h1>Keep the video.<br /><em>Skip the challenge.</em></h1>
          <p className="landing-deck">A calm, clear explanation of why the so-called Blue Whale challenge is dangerous—and how to help someone step away from online pressure.</p>
          <div className="landing-actions">
            <a className="button button-primary" href={videoUrl} download="blue-whale-awareness-video.mp4"><Download size={17} /> Download this video</a>
            <a className="text-link" href="#why-it-matters">Read the safety notes <ArrowDown size={16} /></a>
          </div>
          <p className="meta-note">The download is the supplied awareness video only. This site does not distribute any game or challenge.</p>
        </div>
        <div className="video-frame-wrap">
          <div className="video-meta"><span><i className="route-marker" /> PUBLIC-SERVICE EVIDENCE</span><span>ROUTE 01 / 04</span></div>
          <div className="video-frame">
            <video controls playsInline preload="metadata" aria-label="Supplied Blue Whale awareness video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support embedded video. Use the download button instead.
            </video>
          </div>
          <div className="video-caption"><span className="signal-dot" /> Watch first, then read what to do next.</div>
        </div>
      </section>

      <div className="current-line" aria-hidden="true"><span /><span /><span /></div>

      <section id="why-it-matters" className="editorial-section split-section">
        <div className="section-intro">
          <p className="eyebrow">01 / The context</p>
          <h2>What people call the “Blue Whale challenge” is not a safe game.</h2>
          <p className="body-lede">The name has been used online for coercive, harmful, and sometimes fabricated stories. Regardless of the label, a message that pressures someone into secrecy, fear, or self-harm should be treated as a serious safety issue.</p>
        </div>
        <aside className="signal-card">
          <div className="card-icon"><ShieldAlert size={21} /></div>
          <p className="card-kicker">THE DOWNSIDE</p>
          <h3>It can isolate, frighten, and manipulate.</h3>
          <p>Engaging with threatening accounts can increase anxiety, disrupt sleep, damage trust, and make it harder to ask for help. No online “challenge” is worth risking a person’s safety.</p>
        </aside>
      </section>

      <section className="image-band" aria-label="A visual reminder to look for a safe route">
        <img src="/manus-storage/signal-illustration_9f4d80ac.png" alt="Illustration of a lighthouse beam guiding toward a safe shoreline" />
        <div className="image-band-copy"><p className="eyebrow"><span className="eyebrow-line" /> SAFE ROUTE / 02° 14′ N</p><p>When something online feels secretive, threatening, or impossible to stop, bring another person into the conversation.</p></div>
      </section>

      <section id="what-to-do" className="editorial-section signals-section">
        <div className="signals-heading"><p className="eyebrow"><span className="eyebrow-line" /> 02 / THE NEXT SAFE MOVE</p><h2>Read the signals.<br />Make the route wider.</h2><div className="rail-note"><span className="route-marker" /> HANDRAIL NOTE<br /><strong>Keep one trusted person in the loop.</strong></div></div>
        <div className="signal-list">
          {signals.map((signal) => <article className="signal-row" key={signal.number}><span className="signal-number">{signal.number}</span><div><h3>{signal.title}</h3><p>{signal.copy}</p></div></article>)}
        </div>
      </section>

      <section id="support" className="support-section">
        <div className="support-mark"><HeartHandshake size={28} /></div>
        <div><p className="eyebrow"><span className="eyebrow-line" /> 03 / IF THIS IS CLOSE TO HOME</p><h2>You do not have to handle it alone.</h2><p>If you or someone you know is being threatened, pressured, or encouraged to hurt themselves, tell a trusted adult or support professional now. If there is immediate danger, contact local emergency services. Do not forward harmful instructions or accept secrecy as a condition of help.</p></div>
        <div className="support-actions"><a className="button button-light" href="https://findahelpline.com/" target="_blank" rel="noreferrer">Find a local helpline <ArrowUpRight size={17} /></a><p>Outside the U.S.? Find local crisis support through Find A Helpline.</p></div>
      </section>

      <footer className="site-footer"><div className="brand-lockup footer-brand"><AppMark /><span><strong>Signal Coast</strong><small>Clarity is a safety tool.</small></span></div><p>This page is educational information, not a substitute for local emergency or professional support.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
