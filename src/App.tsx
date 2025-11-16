import React from 'react';
import './App.css';
import SpotlightCard from './SpotlightCard';
import DotGrid from './DotGrid';
import PrivacyIcon from '../Cards-icons/Privacy.svg';
import PracticalIcon from '../Cards-icons/Practical.svg';
import ExpertiseIcon from '../Cards-icons/Expertise.svg';
import ResponsibilityIcon from '../Cards-icons/Responsibility.svg';
import AegusLogo from '../AEGUS Logo.png';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Background Dot Grid */}
      <DotGrid
        className="dot-grid-bg"
        dotSize={7}
        gap={22}
        baseColor="#1a2f5a"
        activeColor="#4d7aff"
        baseAlpha={0.22}
        activeAlpha={0.58}
        proximity={130}
        shockRadius={200}
        shockStrength={3.5}
        resistance={650}
        returnDuration={0.85}
        style={{}}
      />
      {/* Grid lines - horizontal */}
      <div className="grid-line horizontal" style={{top: '60px'}}></div>
      <div className="grid-line horizontal" style={{top: '120px'}}></div>
      <div className="grid-line horizontal" style={{top: '180px'}}></div>
      <div className="grid-line horizontal" style={{top: '240px'}}></div>
      <div className="grid-line horizontal" style={{top: '300px'}}></div>
      <div className="grid-line horizontal" style={{top: '360px'}}></div>
      <div className="grid-line horizontal" style={{top: '420px'}}></div>
      <div className="grid-line horizontal" style={{top: '480px'}}></div>
      <div className="grid-line horizontal" style={{top: '540px'}}></div>
      <div className="grid-line horizontal" style={{top: '600px'}}></div>
      
      {/* Grid lines - vertical */}
      <div className="grid-line vertical" style={{left: '80px'}}></div>
      <div className="grid-line vertical" style={{left: '140px'}}></div>
      <div className="grid-line vertical" style={{left: '200px'}}></div>
      <div className="grid-line vertical" style={{left: '260px'}}></div>
      <div className="grid-line vertical" style={{left: '320px'}}></div>
      <div className="grid-line vertical" style={{left: '380px'}}></div>
      <div className="grid-line vertical" style={{left: '440px'}}></div>
      <div className="grid-line vertical" style={{left: '500px'}}></div>
      <div className="grid-line vertical" style={{left: '560px'}}></div>
      <div className="grid-line vertical" style={{left: '620px'}}></div>
      <div className="grid-line vertical" style={{left: '680px'}}></div>
      <div className="grid-line vertical" style={{left: '740px'}}></div>
      <div className="grid-line vertical" style={{left: '800px'}}></div>
      <div className="grid-line vertical" style={{left: '860px'}}></div>
      <div className="grid-line vertical" style={{left: '920px'}}></div>
      <div className="grid-line vertical" style={{left: '980px'}}></div>
      <div className="grid-line vertical" style={{left: '1040px'}}></div>
      <div className="grid-line vertical" style={{left: '1100px'}}></div>
      <div className="grid-line vertical" style={{left: '1160px'}}></div>
      <div className="grid-line vertical" style={{left: '1220px'}}></div>
      
      {/* Filled rectangles - some grid cells filled with lighter shade */}
      <div className="filled-cell" style={{top: '120px', left: '140px', width: '60px', height: '60px'}}></div>
      <div className="filled-cell" style={{top: '180px', left: '380px', width: '120px', height: '60px'}}></div>
      <div className="filled-cell" style={{top: '300px', left: '680px', width: '60px', height: '120px'}}></div>
      <div className="filled-cell" style={{top: '420px', left: '200px', width: '60px', height: '60px'}}></div>
      <div className="filled-cell" style={{top: '240px', left: '860px', width: '120px', height: '60px'}}></div>
      <div className="filled-cell" style={{top: '480px', left: '500px', width: '60px', height: '60px'}}></div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">AEGUS</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Technology</a>
            <a href="#">Contact</a>
          </div>
          <button className="nav-button">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Private
            <br />
            Legal AI Assistant
            <div className="badge">
              All processed
              <br />
              privately, offline
            </div>
          </h1>
          <p className="hero-description">
            USBot brings powerful document analysis, summarization, and
            contract drafting to your workflow — all running locally within
            your protected environment. No servers, no data leaks, no
            compliance risks.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </main>

      {/* Principles Section */}
      <section id="principles" style={{ padding: '120px 28px 140px' }}>
        <div style={{ maxWidth: 1380, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 34px',
              borderRadius: 50,
              border: '1px solid rgba(255,255,255,0.10)',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              color: '#FFFFFF',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.6px',
              boxShadow: '0 6px 26px -4px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >Our Core Principles</div>
          <div style={{ height: 42 }} />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 40,
              alignItems: 'stretch',
            }}
          >
            {/* Card 1 */}
            <SpotlightCard spotlightColor="rgba(0, 56, 255, 0.15)">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
                <img src={PrivacyIcon} alt="" aria-hidden="true" style={{ width: 96, height: 96 }} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '0.3px', margin: '0 0 14px' }}>Privacy First</h3>
              <p style={{ color: 'rgba(234,241,255,0.74)', fontSize: 15, lineHeight: 1.65, fontWeight: 400 }}>
                Every decision starts with privacy. No tracking. No cloud dependency. Complete data ownership.
              </p>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard spotlightColor="rgba(0, 56, 255, 0.15)">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
                <img src={PracticalIcon} alt="" aria-hidden="true" style={{ width: 96, height: 96 }} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '0.3px', margin: '0 0 14px' }}>Practical Innovation</h3>
              <p style={{ color: 'rgba(234,241,255,0.74)', fontSize: 15, lineHeight: 1.65, fontWeight: 400 }}>
                We build useful, efficient tools that improve daily workflows—human‑centered, not hype‑driven.
              </p>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard spotlightColor="rgba(0, 56, 255, 0.15)">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
                <img src={ExpertiseIcon} alt="" aria-hidden="true" style={{ width: 96, height: 96 }} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '0.3px', margin: '0 0 14px' }}>Expertise You Can Trust</h3>
              <p style={{ color: 'rgba(234,241,255,0.74)', fontSize: 15, lineHeight: 1.65, fontWeight: 400 }}>
                Led by professionals who understand the balance between innovation and compliance.
              </p>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard spotlightColor="rgba(0, 56, 255, 0.15)">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
                <img src={ResponsibilityIcon} alt="" aria-hidden="true" style={{ width: 96, height: 96 }} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '0.3px', margin: '0 0 14px' }}>Responsibility</h3>
              <p style={{ color: 'rgba(234,241,255,0.74)', fontSize: 15, lineHeight: 1.65, fontWeight: 400 }}>
                We're committed to building AI that enhances professional work—without exploiting user data.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section id="purpose" style={{ padding: '96px 24px 120px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 34px',
            borderRadius: 50,
            border: '1px solid rgba(255,255,255,0.10)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            color: '#FFFFFF',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.6px',
            boxShadow: '0 6px 26px -4px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            marginBottom: 16,
          }}>Our Purpose</div>

          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 40, lineHeight: 1.15, margin: '0 0 16px' }}>
            Empowering Professionals,
            <br />
            Protecting Privacy.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: '0 auto 28px', maxWidth: 720 }}>
            In a world increasingly reliant on digital tools, Aegus delivers cutting‑edge, on‑device AI that
            ensures unparalleled security and efficiency for legal professionals, chartered accountants, and more.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Discover our product</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 24px 60px', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#000000', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={AegusLogo} alt="Aegus" style={{ height: 56 }} />
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Solutions</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Contact</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
