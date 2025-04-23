import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: "./pic/Grow_project.png",
      title: "Laravel Volunteer Platform",
      description: "A collaborative project developed by me and my team, the Laravel Volunteer Platform connects volunteers with organizations in need. The platform features user registration and authentication, volunteer profile management, opportunity listings, application tracking, and an admin dashboard for overseeing activities.",
      githubLink: "https://github.com/Omar-Alhrabi/BetterTogether",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "HTML & CSS"]
    },
    {
      image: "./pic/E-Commerce.png",
      title: "PHP Watch E-Commerce Store",
      description: "An online watch store developed collaboratively with my team using core PHP. The platform features product browsing, user authentication, shopping cart functionality, and an admin panel for managing inventory, orders, and customer data.",
      githubLink: "https://github.com/Omar-Alhrabi/watch_store",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML & CSS"]
    }
    ,
   
    {
      image: "./pic/Master_piece.png",
      title: "Laravel Masterpiece",
      description: "Solo developed full-stack application built from scratch using Laravel. My final project showcasing all acquired skills.",
      githubLink: "https://github.com/yourusername/laravel-masterpiece",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "HTML & CSS"]
    } ,
    {
      image: "./pic/booking.png",
      title: "Hotel Booking Website",
      description: "A front-end hotel booking platform developed by me and my team. The project focuses on creating a responsive and interactive website where users can browse available hotels, check room availability, and make reservations. The platform features smooth animations, interactive UI elements, and a clean, user-friendly design.",
      githubLink: "https://github.com/Omar-Alhrabi/Java_Script_Project",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    }
    ,
    {
      image: "./pic/Hackathon_Project.png",
      title: "Hackathon Service Platform",
      description: "A front-end service platform developed during a 5-hour hackathon by me and my team. The project aimed to provide a responsive and interactive website that showcases a variety of digital services. It includes animated sections, service listings, and a clean user interface — all built from scratch under strict time constraints.",
      githubLink: "https://github.com/Omar-Alhrabi/Hackathon-Group5-AmmanCohort",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section className="section3" id="Project">
      <div className="project">
        <h2>My Projects</h2>
        <div className="projcard">
          {projects.map((project, index) => (
            <div className="projOne" key={index}>
              <div className="img-container">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <div className="img-overlay">
                    <i className="fab fa-github"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
              <div className="projbox">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
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
};

export default Projects;
