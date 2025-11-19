import React from 'react';

export default function Hero() {
  
  return (
    <section className="hero" id="home">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-circle circle-4"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge badge-icon">
              <div className="badge-icon">👨🏻‍💻</div>
              <span>Full Stack Developer</span>
              <div className="badge-sparkle"></div>
            </div>

            <h1 className="hero-title">
              <span className="title-line">
                Hello, I'm <span className="gradient-text">Jay Prakash</span>
              </span>
              <span className="title-line">
                Crafting <span className="highlight-text">Digital Experiences</span>
              </span>
              <span className="title-line">
                That <span className="animated-text">Inspire</span>
              </span>
            </h1>

            <p className="hero-sub">
              Full Stack Developer & DevOps Engineer with expertise in modern web technologies.
              I transform complex problems into elegant, scalable solutions that drive business success.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary magnetic">
                <span className="btn-content">
                  <a href="#projects" class="explore-btn">
                    <span>Explore My Work</span>
                  </a>
                  <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="btn-shine"></div>
              </button>

              <button className="btn btn-secondary magnetic">
                <a
                  href="/JAYPRAKASHRESUME.pdf"
                  download="JayPrakash_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-content">
                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Download CV</span>
                  </span>
                </a>
              </button>            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number" data-count="600">1500+</div>
                <div className="stat-label">DSA Problems</div>
              </div>
              <div className="stat">
                <div className="stat-number" data-count="2">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number" data-count="15">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number" data-count="10">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            {/* Beautiful Programmer Animation */}
            <div className="programmer-animation">
              <div className="animation-scene">
                {/* Desk */}
                <div className="desk"></div>

                {/* Programmer Character */}
                <div className="programmer">
                  <div className="head">
                    <div className="face">
                      <div className="eye left-eye"></div>
                      <div className="eye right-eye"></div>
                      <div className="mouth"></div>
                    </div>
                    <div className="hair"></div>
                    <div className="glasses"></div>
                  </div>
                  <div className="body">
                    <div className="shirt"></div>
                  </div>
                  <div className="arm left-arm">
                    <div className="hand"></div>
                  </div>
                  <div className="arm right-arm">
                    <div className="hand"></div>
                  </div>
                </div>

                {/* Laptop */}
                <div className="laptop">
                  <div className="laptop-screen">
                    <div className="screen-content">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="cursor"></div>
                    </div>
                    <div className="screen-glow"></div>
                  </div>
                  <div className="laptop-base"></div>
                  <div className="keyboard"></div>
                </div>

                {/* Floating Tech Elements */}
                <div className="tech-orbits">
                  <div className="orbit orbit-1">
                    <div className="tech-icon react">⚛️</div>
                  </div>
                  <div className="orbit orbit-2">
                    <div className="tech-icon node">🟢</div>
                  </div>
                  <div className="orbit orbit-3">
                    <div className="tech-icon database">🗄️</div>
                  </div>
                  <div className="orbit orbit-4">
                    <div className="tech-icon server">⚡</div>
                  </div>
                </div>

                {/* Code Particles */}
                <div className="code-particles">
                  <div className="particle">{'{ }'}</div>
                  <div className="particle">&lt;/&gt;</div>
                  <div className="particle">( )</div>
                  <div className="particle">=></div>
                  <div className="particle">💻</div>
                  <div className="particle">🚀</div>
                  <div className="particle">🎯</div>
                  <div className="particle">⚙️</div>
                  <div className="particle">🔗</div>
                  <div className="particle">⚡</div>
                </div>

                {/* Thought Bubble */}
                <div className="bubble-position hero-badge badge-icon">
                  <div className="">
                    <span>🚀 Devops</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="floating-card profile-card">
              <div className="card-image">
                <div className="profile-image-container">
                  <div className="profile-avatar">
                    <div className="avatar-inner">JP</div>
                  </div>
                </div>
                <div className="online-status">
                  <div className="status-dot"></div>
                  <span>Available</span>
                </div>
              </div>

              <div className="card-content">
                <h3>Jay Prakash Kumar</h3>
                <p className="role">Full Stack Developer</p>

                <div className="tech-tags">
                  <span className="tech-tag react">React</span>
                  <span className="tech-tag node">Node.js</span>
                  <span className="tech-tag devops">DevOps</span>
                </div>

                <div className="card-footer">
                  <div className="connect-btn">
                    <span>Let's Connect</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="floating-card experience-card">
              <div className="card-icon">
                <div className="icon-bg">💼</div>
              </div>
              <div className="card-content">
                <div className="card-badge">Current</div>
                <h4>Full Stack Developer</h4>
                <p>Apmosys Technologies</p>
              </div>
            </div>

            <div className="floating-card location-card">
              <div className="card-icon">
                <div className="icon-bg">📍</div>
              </div>
              <div className="card-content">
                <h4>Based In India</h4>
                <p>Available Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}