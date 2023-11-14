import React, { useState, useEffect } from 'react';
import "./ScrollDown.css";

const ScrollDown = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      
      const scrollProgress = (scrollPosition + windowHeight) / scrollHeight;

      
      setShowScroll(scrollProgress < 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextComponent = () => {
   
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    
      setShowScroll(false);
    } else {
     
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'auto', 
      });
    }
  };

  return (
    <div
      className={`scrolldown ${showScroll ? "show-scrolldown" : ""}`}
      onClick={scrollToNextComponent}
    >
      <i className='bx bx-down-arrow-alt scrolldown_icon'></i>
    </div>
  );
}

export default ScrollDown;
