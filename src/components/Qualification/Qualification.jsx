import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
    const [toggleState , setToggleState ] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal İnfo</span>
       
        <div className="qualification_container container">

            <div className="qualification_tabs">

                <div className=
                {toggleState === 1 ?
                 "qualification_button qualification_active button--flex" 
                : "qualification_button  button--flex"
                }
                onClick={() => toggleTab(1)  }
                >

                    <i class='bx bxs-graduation qualification_icon'></i>Education
                </div>

                <div className=
                {toggleState === 2 ?
                    "qualification_button qualification_active button--flex" 
                   : "qualification_button  button--flex"
                   }
                   onClick={() => toggleTab(2)  }

                   >
                    <i class='bx bxs-briefcase'></i>Experience
                </div>        
            </div>


            <div className="qualification_sections">

                <div className={toggleState === 1 ?
                "qualification_content qualification_content_active" 
                : "qualification_content"
                }>

                 <div className="qualification_data">
                   
                   <div>
                        <h3 className="qualification_title">Web Development</h3>
                        <span className="qualification_subtitle">Turkey-Instute</span>
                    
                    <div className="qualification_calendar">
                        <i class='bx bx-calendar' >2023-Present</i>
                    </div>

                    </div> 

                    <div className="qualification_sign">
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>  
                    
                    </div>
                </div>


                <div className="qualification_data">
                    <div></div>
                    <div className="qualification_sign">
                    <span className="qualification_rounder"></span>
                    {/* <span className="qualification_line"></span>   */}
                    
                    </div>
                   <div>
                        <h3 className="qualification_title">Software Development</h3>
                        <span className="qualification_subtitle">Turkey-Instute</span>
                    
                    <div className="qualification_calendar">
                        <i class='bx bx-calendar' >2021-2022</i>
                    </div>

                    </div> 

                    
                </div>

                
                
                
                    
               
                    



                </div>

                <div className={toggleState === 2 ?
                "qualification_content qualification_content_active" 
                : "qualification_content"
                }>

                 <div className="qualification_data">
                   
                   <div className="qualification_text">
                        <h3 className="qualification_title">None</h3>
                        <span className="qualification_subtitle">None</span>
                    
                    <div className="qualification_calendar">
                        <i class='bx bx-calendar' >None</i>
                    </div>

                    </div> 

                    <div>
                    <span className="qualification_rounder"></span>
                    {/* <span className="qualification_line"></span>   */}
                    
                    </div>
                </div>


                {/* <div className="qualification_data">
                    <div></div>
                    <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>  
                    
                    </div>
                   <div>
                        <h3 className="qualification_title">Lorem</h3>
                        <span className="qualification_subtitle">Lorem</span>
                    
                    <div className="qualification_calendar">
                        <i class='bx bx-calendar' >2023-Present</i>
                    </div>

                    </div> 

                    
                </div> */}

                
                {/* <div className="qualification_data">
                   
                   <div>
                        <h3 className="qualification_title">Lorem</h3>
                        <span className="qualification_subtitle">Lorem</span>
                    
                    <div className="qualification_calendar">
                        <i class='bx bx-calendar' >2023-Present</i>
                    </div>

                    </div> 

                    <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>  
                    
                    </div>
                </div> */}
                
                    
                
                    



                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Qualification