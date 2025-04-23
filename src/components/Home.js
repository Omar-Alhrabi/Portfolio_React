import React from 'react';

const Home = () => {
  return (
    <section className="home" id="Home">
      <div className="home-content">
        <h1 className="anim">Hi, I'm Omar Alhrabi</h1>
        <h3 className="anim">Full Stack-Developer</h3>
        <p className="anim">"I am a web developer, specializing in creating interactive, high-performance websites. I transform ideas into digital reality that enhances user experience and achieves business goals."</p>
        <div className="btn anim">
          <a href="#Contact">Hire me</a>
        </div>
      </div>
      <div className="icons anim">
        <a href="https://www.linkedin.com/in/omar-alhrabi-795113317/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:Omaralhrabi2@gamil.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/Omar-Alhrabi" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;