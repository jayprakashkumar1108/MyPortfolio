import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Apmosys Technologies Pvt. Ltd.",
      role: "Full Stack Developer",
      period: "Sept 2025 - Present",
      duration: "Full-time",
      location: "Navi Mumbai, Maharashtra",
      achievements: [
        "Single-handedly developed and maintained APTMT Dashboard project",
        "Implemented data fetching from reports and real-time database integration",
        "Worked extensively with DevOps tools: Jenkins, Docker, Ansible, Packer",
        "Created modular, reusable components for better code maintainability",
        "Ensured seamless data reflection and dashboard performance optimization"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Jenkins", "Ansible", "Packer"]
    },
    {
      company: "Apmosys Technologies Pvt. Ltd.",
      role: "Development Training Intern",
      period: "Mar 2025 - Sept 2025",
      duration: "Internship",
      location: "Navi Mumbai, Maharashtra",
      achievements: [
        "Received comprehensive training in full stack development using Spring Boot and Angular",
        "Built responsive, scalable web applications with REST API integration",
        "Gained hands-on experience with component-based architecture",
        "Worked on service integration and routing mechanisms in Angular"
      ],
      technologies: ["Spring Boot", "Angular", "Java", "TypeScript", "REST APIs"]
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Where I've worked and what I've accomplished</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="company">{exp.company}</h3>
                    <p className="role">{exp.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="period">{exp.period}</span>
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}