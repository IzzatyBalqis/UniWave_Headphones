import { useState, useEffect } from 'react';
import Experience from './components/Experience';

function App() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // scroll progress in screen heights
      const progress = window.scrollY / window.innerHeight;
      setScrollOffset(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplore = () => {
    // scroll to next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 3D background */}
      <Experience scrollOffset={scrollOffset} />

      {/* page content */}
      <main className="html-container">

        {/* Hero */}
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

        {/* Introduction */}
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

        {/* AI Focus Mute */}
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

        {/* Study Mode */}
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

        {/* EchoShare */}
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

        {/* Final */}
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