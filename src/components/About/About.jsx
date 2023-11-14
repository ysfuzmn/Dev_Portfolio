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
              I usually do my projects in the Frontend area. I try to ensure that they are as high-performance as I can and comply with UI and UX design principles.
              </p>
              <a href={CV} className='button button--flex'> <i className='bx bxs-download'></i>Download Cv </a>
            </div>
       </div>  
      
    </section>

  );
}

export default About;
