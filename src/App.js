import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Named handlers for proper cleanup
    const updateProgressBar = () => {
      const denom = document.documentElement.scrollHeight - window.innerHeight;
      const progress = denom > 0 ? (window.scrollY / denom) * 100 : 0;
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
      }
    };

    const handleHeaderScroll = () => {
      const header = document.querySelector('.site-header');
      if (!header) return;
      if (window.scrollY > 100) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.section, .hero, .floating-card, .education-item, .achievement-card')
      .forEach((el) => observer.observe(el));

    // Add scroll progress bar to DOM if not present
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);
    }

    // Single named scroll handler
    const onScroll = () => {
      updateProgressBar();
      handleHeaderScroll();
    };

    window.addEventListener('scroll', onScroll);

    // Initial call
    updateProgressBar();
    handleHeaderScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      const existingProgressBar = document.querySelector('.scroll-progress');
      if (existingProgressBar) existingProgressBar.remove();
    };
  }, []);

  return (
    <div className="site-root">
      <div className="world-map-background" />
      <div className="world-map-overlay" />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}