import React, { useState } from 'react';
import "./Header.css";
const Header =() => { 
  
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add 
    ("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* Toggle menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav , setActiveNav] = useState("#home")

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className='nav_logo'>Uzmn</a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu" }>
          <ul className="nav_list grid">
            
            <li className="nav_item">
              <a href="#home" 
              onClick={() => setActiveNav 
              ('#home')} className={activeNav === "#home" ? 
              "nav_link active-link" :"nav_link active-link"}>

              <i class='bx bx-home-alt nav_icon'></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" 
                onClick={() => setActiveNav 
                ('#about')} className={activeNav === "#about" ? 
                "nav_link active-link" :"nav_link active-link"}>
              <i class='bx bx-user nav_icon' ></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills"
                onClick={() => setActiveNav 
                ('#skills')} className={activeNav === "#skills" ? 
                "nav_link active-link" :"nav_link active-link"}>
              <i class='bx bx-folder nav_icon'></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services"
                onClick={() => setActiveNav 
                  ('#services')} className={activeNav === "#services" ? 
                  "nav_link active-link" :"nav_link active-link"}>
              <i class='bx bx-briefcase nav_icon'></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" 
               onClick={() => setActiveNav 
                ('#portfolio')}
              className='nav_link'>
              <i class='bx bx-spreadsheet nav_icon'></i>Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#Contact" className='nav_link'>
              <i class='bx bx-message-rounded-detail nav_icon'></i>Contact
              </a>
            </li>
          </ul>

          <i class='bx bx-x nav_close' onClick={() => showMenu(!Toggle)}></i>   
        </div>

      <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
      <i class='bx bx-grid-alt' ></i>
      </div>
      </nav>
    
    </header>
  );
}

export default Header;