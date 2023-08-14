import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills_section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical level</span>
        <div className="skills_container container grid">

            <Frontend/>
            <Backend/>

        </div>
    </section>
  )
}

export default Skills