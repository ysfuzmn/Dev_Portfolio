// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";



const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jdtkgyc', 'template_biy7eyl', form.current, 'nyEZvyLVm9crp1rE8')
        .then((result) => {
          console.log(result.text);
          alert('Your email has been sent successfully!');
        })
        .catch((error) => {
          console.log(error.text);
          alert('Error sending email. Please try again later.');
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
                    <i className='bx bx-mail-send contact_card_icon'></i>
                    <h3 className="contact_card_title">Email</h3>
                    <span className="contact_card_data">ysfuzmn2077@gmail.com</span>
                    
                   <a href="mailto:ysfuzmn2077@gmail.com" className="contact_button">
                    Write me <i className='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>


                <div className="contact_card">
                    <i className='bx bxl-whatsapp contact_card_icon'></i>
                    <h3 className="contact_card_title">Whatsapp</h3>
                    <span className="contact_card_data">506 114 49 98</span>
                    
                    <a href="https://www.whatsapp.com" className="contact_button">
                    Write me <i className='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>


                <div className="contact_card">
                    <i className='bx bxl-messenger contact_card_icon'></i>
                    <h3 className="contact_card_title ">Messenger</h3>
                    <span className="contact_card_data">Uzmn</span>
                    
                    <a href="https://www.messenger.com" className="contact_button">
                    Write me <i className='bx bx-right-arrow-alt contact_button_icon' ></i>
                    </a>

                </div>

            </div>
            </div>
            
            <div className="contact_content">
                <h3 className="contact_title">Send Me Message</h3>

                <form  ref={form} onSubmit={sendEmail}
                className="contact_form">
                    <div className="contact_form_div">
                   
                    <input type="text" name='name' id="name" className='contact_form_input' required placeholder='Insert your Name'/>
                </div>

                <div className="contact_form_div">
                    <input type="email" name='email' id="email" className='contact_form_input' required placeholder='Insert your Email'/>
                </div>

                <div className="contact_form_div">
                    <textarea name="message" id="message" cols="25" rows="3" className='contact_form_input' required placeholder='Write your message'/>
                </div>


                    <button><a  type='submit' className='button'>Send <i className='bx bx-send send_button'></i></a></button>


                </form>



                
            </div>
            
        </div>
    </section>
  )
}

export default Contact