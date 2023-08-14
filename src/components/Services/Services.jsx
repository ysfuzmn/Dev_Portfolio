import React, { useState } from "react";
import "./Services.css";
const Services = () => {
    const [toggleState , setToggleState ] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            <div className="services_content">

                <div>
                <i class='bx bx-layout services_icon'></i>
                    <h3 className="services_title">Product <br /> Designer</h3>
                </div>

            <span className="services_button" onClick={() => toggleTab(3)}>
                View More 
                <i class='bx bx-right-arrow-alt services_button_icon'></i> </span>

            <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal" }>
                
                <div className="services_modal_content">
                <i onClick={() => toggleTab(0)} class='bx bx-x services_modal_close'></i>
                    <h3 className="services_modal_title">Product Designer</h3>
                    <p className="services_modal_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere maiores dolores obcaecati corrupti doloribus assumenda?</p>

                    <ul className="services_modal_services grid">

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>



                    </ul>
                
                </div>
            </div>
            </div>

            <div className="services_content">

                <div>
                <i class='bx bx-layout services_icon'></i>
                    <h3 className="services_title">Product <br /> Designer</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>
                View More 
                <i class='bx bx-right-arrow-alt services_button_icon'></i> </span>
                <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal" }>

                <div className="services_modal_content">
                <i onClick={() => toggleTab(0)} class='bx bx-x services_modal_close'></i>
                    <h3 className="services_modal_title">Product Designer</h3>
                    <p className="services_modal_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere maiores dolores obcaecati corrupti doloribus assumenda?</p>

                    <ul className="services_modal_services grid">

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>



                    </ul>
                
                </div>
            </div>
            </div>

            <div className="services_content">

                <div>
                <i class='bx bx-layout services_icon'></i>
                    <h3 className="services_title">Product <br /> Designer</h3>
                </div>

                <span className="services_button" onClick={() => toggleTab(3)}>
                View More 
                <i class='bx bx-right-arrow-alt services_button_icon'></i> </span>
                <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal" }>
                <div className="services_modal_content">
                <i onClick={() => toggleTab(0)} class='bx bx-x services_modal_close'></i>
                    <h3 className="services_modal_title">Product Designer</h3>
                    <p className="services_modal_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere maiores dolores obcaecati corrupti doloribus assumenda?</p>

                    <ul className="services_modal_services grid">

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li className="services_model service">
                        <i class='bx bx-check-circle services_modal_icon'></i>
                            <p className="services_modal_info">Lorem ipsum dolor sit amet.</p>
                        </li>



                    </ul>
                
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services