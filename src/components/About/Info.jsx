// eslint-disable-next-line no-unused-vars
import React from 'react'

const Info =()  => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className='bx bx-briefcase about_icon'></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">1+ Year</span>
      </div>
      <div className="about_box">
      <i className='bx bx-award about_icon'></i>
        <h3 className="about_title">Completed Works</h3>
        <span className="about_subtitle">5 + Projects</span>
      </div>
      <div className="about_box">
      <i className='bx bx-support about_icon' ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7 </span>
      </div>
    </div>
  )
}

export default Info