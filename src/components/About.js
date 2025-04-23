import React from 'react';

const About = () => {
  const skills = [
    {
      name: "Front-End Development",
      icon: "./pic/2023-blogpost-frontend-solution.png",
      description: "I have hands-on experience in Back-End development, focusing on server-side logic, databases, and API integration to ensure the functionality and performance of web applications."
    },
    {
      name: "Back-End Development",
      icon: "./pic/backend.png", 
      description: "I specialize in Front-End development, creating user-friendly interfaces and interactive experiences using modern web technologies that users directly interact with."
    }
    ,
    {
      name: "MySQL",
      icon: "./pic/Mysql.jpg", 
      description: "I am proficient in using MyAdmin SQL (phpMyAdmin) to manage MySQL databases, including creating tables, running queries, and structuring data efficiently."
    },
    {
      name: "Soft Skills",
      icon: "./pic/softskills.jpg",
      description: "I have developed strong soft skills such as effective communication, teamwork, problem-solving, time management, and emotional intelligence, which help me thrive in collaborative and professional environments."
}
  ];

  return (
    <section className="section1" id="about">
      <h1>About</h1>
      <div className="container">
        <div className="Profile-card">
          <div className="profile-pic">
            <img src="./pic/1.jpg" alt="Profile" />
          </div>

          <div className="profile-details">
            <div className="intro">
              <h2>Omar moha'd Alhrabi</h2>
              <h4>Web developer</h4>
            </div>

            <div className="contact-info">
              <div className="row">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="content">
                  <span>Phone</span>
                  <h5>00962-7 8556 1071</h5>
                </div>
              </div>
              <div className="row">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="content">
                  <span>Email</span>
                  <h5>omaralhrabi2@gmail.com</h5>
                </div>
              </div>
              <div className="row">
                <div className="icon">
                  <i className="fa-solid fa-map-marker"></i>
                </div>
                <div className="content">
                  <span>Location</span>
                  <h5>Jordan-Amman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <h1>About Me</h1>
          <p>Full-stack developer with a strong foundation in user-centric web application development, specializing
              in both front-end and back-end technologies. Gained extensive hands-on experience through my
              training at Orange Coding Academy. Proficient in HTML, CSS, JavaScript, SQL, PHP, and Laravel, with a
              passion for writing clean and efficient code and delivering innovative solutions. Keen to apply my
              technical expertise to a dynamic and progressive web development team</p>
          <h2>What I learned !!!</h2>
          <div className="work">
            {skills.map((skill, index) => (
              <div className="workbox" key={index}>
                <div className="icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="desc">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;