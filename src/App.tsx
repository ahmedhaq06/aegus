import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
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
          <div className="logo">Aegus</div>
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
    </div>
  );
};

export default App;
