import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Frontend Development",
      description: "Creating responsive, modern UI/UX designs with React, Angular, or Vue. I build intuitive user interfaces with clean, optimized code and seamless interactions."
    },
    {
      icon: "fa-solid fa-database",
      title: "Backend Development",
      description: "Building robust server architectures, RESTful APIs, and database management using Node.js, Express, MongoDB and SQL. Ensuring secure, scalable applications."
    },
    {
      icon: "fa-solid fa-server",
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment. Version control, testing, and continuous integration for complete project lifecycle management."
    }
  ];

  return (
    <section className="section2" id="Services">
      <div className="container1">
        <h1>My Services</h1>
        <div className="CardSrv">
          {services.map((service, index) => (
            <div className="card1" key={index}>
              <div className="icon-wrapper">
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;