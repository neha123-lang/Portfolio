import React from 'react'
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Contact from './components/contact/Contact.jsx';
import Experience from './components/experience/Experience.jsx';
import Testinomial from './components/testinomials/Testinomials.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Nav from './components/nav/Nav.jsx';
import footer from './components/footer/Footer.jsx';
import Footer from './components/footer/Footer.jsx';



const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testinomial />
    <Contact />
    {/* < Footer/> */}
    
    </>
  )
}

export default App;