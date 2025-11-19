import React from 'react';

export default function Education() {
  const educationData = [
    {
      institution: "University Institute of Technology, Burdwan University",
      degree: "Bachelor of Engineering - Information Technology",
      score: "CGPA: 8.36",
      period: "2021 – Present",
      location: "Burdwan, West Bengal",
      icon: "🎓",
      highlights: [
        "Specialized in Software Engineering and Web Technologies",
        "Active participant in coding competitions and tech festivals",
        "Coursework includes DSA, DBMS, OOP, and Web Development"
      ]
    },
    {
      institution: "+2 High School Bhabua",
      degree: "Senior School Examination (12th), BSEB",
      score: "Percentage: 73%",
      period: "2021",
      location: "Kaimur, Bihar",
      icon: "📚",
      highlights: [
        "Science Stream with Computer Science",
        "Foundation in programming and mathematics",
        "Active in extracurricular activities"
      ]
    },
    {
      institution: "Rajya Samposhit Uccha Vidyalaya Adhaura",
      degree: "Secondary School Examination (10th), BSEB",
      score: "Percentage: 72.8%",
      period: "2019",
      location: "Kaimur, Bihar",
      icon: "🏫",
      highlights: [
        "Strong foundation in fundamentals",
        "Developed problem-solving skills",
        "Participated in science exhibitions"
      ]
    }
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education Journey</h2>
          <p className="section-subtitle">My academic background and learning path</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker">
                <div className="education-icon">{edu.icon}</div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="education-content">
                <div className="education-header">
                  <div className="education-main">
                    <h3 className="institution">{edu.institution}</h3>
                    <p className="degree">{edu.degree}</p>
                    <div className="education-meta">
                      <span className="score">{edu.score}</span>
                      <span className="period">{edu.period}</span>
                      <span className="location">📍 {edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="education-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}