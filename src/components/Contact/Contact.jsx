import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "./Contact.css";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4xr3jp7', 'template_biy7eyl', form.current, '50VI8fJNgDrRfnROG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  };
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>
            
            <div className="contact_info">


                <div className="contact_card">
                    <i class='bx bx-mail-send contact_card_icon'></i>
                    <h3 className="contact_card_title">Email</h3>
                    <span className="contact_card_data">lorem@gmail.com</span>
                    
                   <a href="mailto:lorem@gmail.com" className="contact_button">
                    Write me <i class='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>


                <div className="contact_card">
                    <i class='bx bxl-whatsapp contact_card_icon'></i>
                    <h3 className="contact_card_title">Whatsapp</h3>
                    <span className="contact_card_data">123-243-12-12</span>
                    
                   <a href="www.whatsapp.com" className="contact_button">
                    Write me <i class='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>


                <div className="contact_card">
                    <i class='bx bxl-messenger contact_card_icon'></i>
                    <h3 className="contact_card_title ">Messenger</h3>
                    <span className="contact_card_data">lorem</span>
                    
                   <a href="www.messenger." className="contact_button">
                    Write me <i class='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>

            </div>
            </div>
            <div className="contact_content">
                <h3 className="contact_title">Send Me Message</h3>

                <form  ref={form} onSubmit={sendEmail}
                className="contact_form">
                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag"></label>
                        <input type="text"  name='name' className='contact_form_input' placeholder='Insert your Name'/>

                        
                    </div>


                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag"></label>
                        <input type="email"  name='email' className='contact_form_input' placeholder='Insert your Email'/>
                        
                        
                    </div>

                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag"></label>
                        <textarea name="message"  cols="25" rows="3" className='contact_form_input' placeholder='Write your message'/>
                        
                        
                    </div>


                    <button><a href="" type='submit' className='button'>Send <i class='bx bx-send send_button'></i></a></button>


                </form>



                
            </div>
            
        </div>
    </section>
  )
}

export default Contact