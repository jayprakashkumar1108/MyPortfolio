import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: 70 },
        { name: "Angular", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Spring Boot", level: 65 },
        { name: "Java", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Docker", level: 55 },
        { name: "Jenkins", level: 50 },
        { name: "Git", level: 65 },
        { name: "Bash", level: 60 },
        { name: "Ansible", level: 70 },
        { name: "Packer", level: 75 }
      ]
    },
    {
      title: "Core Competencies",
      icon: "🎯",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 90 },
        { name: "OOP", level: 95 },
        { name: "System Design", level: 70 },
        { name: "Problem Solving", level: 90 },
        { name: "Computer Networking", level: 80 }
      ]
    }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies & Proficiencies</p>
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}