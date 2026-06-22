import { useState, useEffect } from 'react';
import Experience from './components/Experience';

function App() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how many screen heights (0 to 2) we have scrolled
      const progress = window.scrollY / window.innerHeight;
      setScrollOffset(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplore = () => {
    // Smooth scroll down to the second section (Introduction)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Background 3D Viewport with Scroll Tracking */}
      <Experience scrollOffset={scrollOffset} />

      {/* 2. Foreground HTML Layer */}
      <main className="html-container">

        {/* SECTION 1: HERO */}
        <section className="section hero-section">
          <div className="section-content left-align">
            <h1>UniWave</h1>
            <p className="tagline">
              One Wave. Pure Focus.
            </p>
            <button className="explore-btn" onClick={handleExplore}>
              Explore Sound
            </button>
          </div>
        </section>

        {/* SECTION 2: INTRODUCTION */}
        <section className="section intro-section">
          <div className="section-content right-align">
            <h2>Built for Focus.<br />Made for Students.</h2>
            <p className="description">
              UniWave is a productivity-first smart headphone built for university students.
              It cuts through dorm noise, lecture-hall chatter, and digital distraction so you can
              study longer, retain more, and stay in flow — without tuning out the moments that matter.
            </p>
          </div>
        </section>

        {/* SECTION 3: AI FOCUS MUTE */}
        <section className="section focus-section">
          <div className="section-content left-align">
            <h2>AI Focus Mute</h2>
            <p className="feature-subtitle">Distraction, Cancelled</p>
            <p className="description">
              On-device AI learns the sounds that break your concentration — notifications, chatter,
              background noise — and mutes them in real time, while keeping important voices clear.
              One tap drops you into deep work.
            </p>
          </div>
        </section>

        {/* SECTION 4: STUDY MODE */}
        <section className="section study-section">
          <div className="section-content right-align">
            <h2>Study Mode</h2>
            <p className="feature-subtitle">Pomodoro + Ambient Sound</p>
            <p className="description">
              A built-in Pomodoro timer paces your focus and break cycles, layered with curated
              ambient soundscapes — rain, café, white noise. Train your brain to start working
              the moment the session begins.
            </p>
          </div>
        </section>

        {/* SECTION 5: ECHOSHARE */}
        <section className="section echo-section">
          <div className="section-content left-align">
            <h2>EchoShare</h2>
            <p className="feature-subtitle">Study Together, Anywhere</p>
            <p className="description">
              Share one audio stream across up to four headphones at once. Run a group revision
              playlist, a shared lecture recording, or a synced focus session — everyone hears
              the same thing, perfectly in time.
            </p>
          </div>
        </section>

        {/* SECTION 6: FINAL / OUTRO */}
        <section className="section final-section">
          <div className="section-content center-align">
            <h2>The Future of<br />Student Productivity.</h2>
            <p className="description">
              Less noise. Sharper focus. Better grades. UniWave is your companion
              for studying, learning, and achieving more — every day.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;