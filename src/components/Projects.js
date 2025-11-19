import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "APTMT Dashboard",
      description: "A comprehensive dashboard for real-time data visualization and reporting system with automated data processing",
      image: "/home/jay.kumar@apmosys.mahape/myapp/public/istockphoto-520700958-612x612.jpg",
      features: [
        "Real-time data fetching and processing",
        "Automated report generation",
        "Interactive data visualization",
        "Role-based access control",
        "Responsive design for all devices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Docker", "Jenkins"],
      liveLink: "#",
      githubLink: "#",
      status: "Active"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "/home/jay.kumar@apmosys.mahape/myapp/public/istockphoto-520700958-612x612.jpg", 
      features: [
        "User authentication & authorization",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Admin dashboard analytics"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      liveLink: "#",
      githubLink: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.65 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.65 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
                <div className="project-status" data-status={project.status}>
                  {project.status}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
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