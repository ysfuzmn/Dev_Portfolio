import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState((prevToggleState) => (prevToggleState === index ? null : index));
  };

  const servicesData = [
    {
      title: "Web Developer",
      modalTitle: "Web Developer",
      modalDescription: "I am working on developing web applications.",
      modalServices: ["I work on web application development that turns ideas into responsive, user-friendly interfaces.",
       "I'm passionate about coding and trying to bring innovative solutions to the ever-evolving web environment.",
        "I am trying to improve myself in the web field by becoming skilled in various web technologies.",
         ],
      icon: "bx-layout",
    },
    {
      title: "UI/UX Designer",
      modalTitle: "UI/UX Designer",
      modalDescription: "I ensure that the sites I create comply with UI/UX design principles.",
      modalServices: ["I try to make web designs that comply with user-friendly UI/UX principles."],
      icon: "bx-ruler",
    },
    {
      title: "Search Engine Optimization",
      modalTitle: "Search Engine Optimization",
      modalDescription: "Description for Another Service",
      modalServices: ["I work to get better results by using search engine optimization on my websites.",],
      icon: "bx-search",
    },
    // You can add more service objects if needed
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">
        {servicesData.map((service, index) => (
          <div className="services_content" key={index}>
             <div>
              {service.icon && <i className={`bx ${service.icon} services_icon`}></i>}
              <h3 className="services_title">{service.title}</h3>
            </div>

            <span className="services_button" onClick={() => toggleTab(index)}>
              View More
              <i className="bx bx-right-arrow-alt services_button_icon"></i>{" "}
            </span>

            <div
              className={
                toggleState === index ? "services_modal active_modal" : "services_modal"
              }
            >
              <div className="services_modal_content">
                <i onClick={() => toggleTab(index)} className="bx bx-x services_modal_close"></i>
                <h3 className="services_modal_title">{service.modalTitle}</h3>
                <p className="services_modal_description">{service.modalDescription}</p>

                <ul className="services_modal_services grid">
                  {service.modalServices.map((item, i) => (
                    <li className="services_model service" key={i}>
                      <i className="bx bx-check-circle services_modal_icon"></i>
                      <p className="services_modal_info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
