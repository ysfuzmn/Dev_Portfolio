import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import Scrollup from './components/ScrollUp/Scrollup';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Header from './components/header/Header';
function App() {
  return (
    <div>
      <Header />
      <div className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Contact/>
      <Footer/>
      <Scrollup/>
      </div>
    </div>
  );
}

export default App;
