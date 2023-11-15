import React, { useContext } from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="footer_container">
        <h1 className={`footer_title`}>Uzmn</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className={`footer_link`}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className={`footer_link`}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className={`footer_link`}>
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://www.instagram.com/" rel='noreferrer' className="footer_social_link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/ysfuzmn" rel='noreferrer' className="footer_social_link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://dribbble.com/" rel='noreferrer' className="footer_social_link" target="_blank">
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>

        <span className={`footer_copy`}>
          2023 &#169; All right reserved
        </span>
      </div>
    </footer>
  );
};


export default Footer;
