import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="Logo">Portfolio</h1>
        <div>
          <ul className={`navlink ${menuOpen ? 'active' : ''}`}>
            <li><a href="#Home" className="Active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Testimonial">Testimonial</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
          <li className="navResp" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;