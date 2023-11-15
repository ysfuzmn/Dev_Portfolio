  import React, { useState , useEffect} from 'react';
  import { DarkModeSwitch } from 'react-toggle-dark-mode';
  import "./Header.css";
  const Header =() => { 
    
    window.addEventListener("scroll", function() {
      const header = document.querySelector(".header");
      if (this.scrollY >= 80) header.classList.add("scroll-header"); 
      
      else header.classList.remove("scroll-header");
    });
    /* Toggle menu */
    const [Toggle, showMenu] = useState(false);
    const [activeNav , setActiveNav] = useState("#home")

    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;


    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);
  
    useEffect(() => {
    
    document.querySelector(".footer").classList.toggle("dark-mode", isDarkMode);
    document.querySelector("header").classList.toggle("dark-mode", isDarkMode);
    
    document.body.style.background = isDarkMode ? "#B7B7B7" : "white";



  localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
       

  }, [isDarkMode]);

         

    const handleToggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

   


    return (
      <header className={`header`}>
     
        <nav className="nav container">
          
          <a href="index.html" className='nav_logo'>Uzmn</a>
          
         
          <DarkModeSwitch
          checked={isDarkMode}
          onChange={handleToggleDarkMode}
          size={25}  
        />
        

          <div className={Toggle ? "nav_menu show-menu" : "nav_menu" }>
            <ul className="nav_list grid">
              
              <li className="nav_item">
                <a href="#home" 
                onClick={() => setActiveNav('#home')} 
                 className={activeNav === "#home" ? 
                "nav_link active-link" :"nav_link active-link"}>

                <i className='bx bx-home-alt nav_icon'></i>Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" 
                  onClick={() => setActiveNav('#about')} 
                   className={activeNav === "#about" ? 
                  "nav_link active-link" :"nav_link active-link"}>
                <i className='bx bx-user nav_icon' ></i>About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills"
                  onClick={() => setActiveNav('#skills')}
                   className={activeNav === "#skills" ? 
                  "nav_link active-link" :"nav_link active-link"}>
                <i className='bx bx-folder nav_icon'></i>Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services"
                  onClick={() => setActiveNav('#services')} 
                     className={activeNav === "#services" ? 
                    "nav_link active-link" :"nav_link active-link"}>
                <i className='bx bx-briefcase nav_icon'></i>Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" 
                onClick={() => setActiveNav('#portfolio')} 
                  
                className='nav_link'>
                <i className='bx bx-spreadsheet nav_icon'></i>Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#certificates"
                onClick={() => setActiveNav ('#certificates')} 
                 
                className='nav_link'>
                <i className='bx bx-message-rounded-detail nav_icon'></i>Certificates
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact"
                onClick={() => setActiveNav('#contact')} 
                  
                className='nav_link'>
                <i className='bx bx-message-rounded-detail nav_icon'></i>Contact
                </a>
              </li>
              
            </ul>

            <i className='bx bx-x nav_close' onClick={() => showMenu(!Toggle)}></i>   
          </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
        <i className='bx bx-grid-alt' ></i>
        </div>
        </nav>
      
      </header>
    );
  }

  export default Header;