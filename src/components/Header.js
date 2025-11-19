import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on nav links
  const handleNavClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  // Toggle mobile menu with body scroll lock
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Close mobile menu on resize and handle scroll effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Bubble background elements */}
        <div className="bubble-bg">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>

        <div className="container">
          <div className="brand">
            <div className="logo">JP</div>
            <div className="brand-text">
              <h1 className="brand-title">Jay Prakash</h1>
              <p className="brand-sub">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <a href="#home" className="nav-link">
              <span>Home</span>
            </a>
            <a href="#about" className="nav-link">
              <span>About</span>
            </a>
            <a href="#skills" className="nav-link">
              <span>Skills</span>
            </a>
            <a href="#experience" className="nav-link">
              <span>Experience</span>
            </a>
            <a href="#projects" className="nav-link">
              <span>Projects</span>
            </a>
            <a href="#contact" className="nav-link cta">
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Navigation Menu */}
      <nav className={`nav mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <button className="nav-close-btn" onClick={toggleMenu} aria-label="Close menu">
          ×
        </button>
        
        <a href="#home" onClick={handleNavClick} className="nav-link">
          <span>Home</span>
        </a>
        <a href="#about" onClick={handleNavClick} className="nav-link">
          <span>About</span>
        </a>
        <a href="#skills" onClick={handleNavClick} className="nav-link">
          <span>Skills</span>
        </a>
        <a href="#experience" onClick={handleNavClick} className="nav-link">
          <span>Experience</span>
        </a>
        <a href="#projects" onClick={handleNavClick} className="nav-link">
          <span>Projects</span>
        </a>
        <a href="#contact" className="nav-link cta" onClick={handleNavClick}>
          <span>Contact</span>
        </a>
      </nav>
    </>
  );
}