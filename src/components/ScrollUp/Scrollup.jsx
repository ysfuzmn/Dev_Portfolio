import React from 'react';
import "./Scrollup.css";
const Scrollup = () => {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add 
    ("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
    
  return (
    <a href="#" className="scrollup">
        <i class='bx bx-up-arrow-alt scrollup_icon'></i>
    </a>
  )
}

export default Scrollup