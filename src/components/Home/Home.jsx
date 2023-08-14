import React from 'react'
import "./Home.css"
import Social from './Social'
import Data from './data'

const Home = () => {
  return (
    <section className="home_section" id="home">
        <div className="home_container container grid">
            
            <div className="home_content grid">
                <Social/>
                <div className="home_img"></div>
                <Data/>
            </div>
            
        </div>
    </section>
  )
}

export default Home