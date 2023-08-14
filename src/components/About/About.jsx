import React from 'react';
import CV from "../../assets/CV.pdf";
import AboutImg from "../../assets/profile.jpg";
import "./About.css";
import Info from "./Info";
const About =() => {
  return (
    <section className="about section" id='about'>
      <h2 className='section_title'>About Me</h2>
      <span className='section_subtitle'>My İntroduction</span>

      <div className="about_container container grid">
            
            <img src={AboutImg}  alt="" className='about_img'/>

            <div className="about_data">
            <Info/>
              <p className="about_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores culpa ut molestiae sunt distinctio!
              </p>
              <a href={CV} className='button button--flex'> <i class='bx bxs-download'></i>Download Cv </a>
            </div>
       </div>  
      
    </section>

  );
}

export default About;
