import React from 'react'

const Info =()  => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class='bx bx-briefcase about_icon'></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="about_box">
      <i class='bx bx-award about_icon'></i>
        <h3 className="about_title">Completed Works</h3>
        <span className="about_subtitle">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="about_box">
      <i class='bx bx-support about_icon' ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Lorem ipsum dolor sit amet.</span>
      </div>
    </div>
  )
}

export default Info