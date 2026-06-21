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
            <h2>Pure Sound.<br />Zero Distraction.</h2>
            <p className="description">
              UniWave headphones combine bespoke craftsmanship with precision audio engineering. 
              Designed for audiophiles who demand clarity, comfort, and uncompromising acoustics. 
              Experience sound in its truest form.
            </p>
          </div>
        </section>

        {/* SECTION 3: SMART ANC */}
        <section className="section anc-section">
          <div className="section-content left-align">
            <h2>Smart ANC</h2>
            <p className="anc-subtitle">Active Noise Cancelling</p>
            <p className="description">
              Hybrid active noise cancellation adapts to your environment in real-time. 
              Dual beamforming microphones detect ambient noise, cancelling it out before it reaches your ears. 
              Block out the world and stay in your zone.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;