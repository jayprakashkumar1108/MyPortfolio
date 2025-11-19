import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Animated Background Elements */}
        <div className="about-bg-elements">
          <div className="about-bg-circle about-circle-1"></div>
          <div className="about-bg-circle about-circle-2"></div>
          <div className="about-floating-shape about-shape-1"></div>
          <div className="about-floating-shape about-shape-2"></div>
        </div>

        <div className="section-header">
          <h2 className="section-title">SUMMARY</h2>
          <p className="section-subtitle">Professional Overview</p>
        </div>

        <div className="about-content">
          {/* Main Summary Card */}
          <div className={`summary-card ${isVisible ? 'visible' : ''}`}>
            <div className="summary-text">
              <p className="summary-paragraph">Full Stack Developer proficient in HTML, CSS,  JavaScript, Node.js, React.js, MongoDB and modern DevOps tools.
              </p>

              <p className="summary-paragraph">
                Strong foundation in <span className="text-highlight">Data Structures and Algorithms</span> with
                <span className="achievement-badge">1500+ problems solved</span> across platforms.
                Experienced in building responsive, scalable web applications with proper
                component-based architecture.
              </p>

              <p className="summary-paragraph">
                Currently working at <span className="company-highlight">Apmosys Technologies</span> with
                hands-on experience in full stack development and DevOps practices including Jenkins, Docker, Ansible and Packer.
              </p>
            </div>


            
          </div>
        </div>
      </div>
    </section>
  );
}