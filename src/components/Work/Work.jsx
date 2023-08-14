import React from 'react'
import "./Work.css"
import Works from './Works'
export const Work = () => {
  return (
    <section className="work_section" id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Recent Work</span>


        <Works/>
    </section>
  )
}
export default Work;
