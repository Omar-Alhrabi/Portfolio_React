import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="foot1">
          <p>&copy; copyright {new Date().getFullYear()}, All right reserved</p>
          <p className="iconsfo">
            <a href="https://github.com/Omar-Alhrabi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/omar-alhrabi-795113317/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:Omaralhrabi2@gamil.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;