import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>Neha</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testinomials">Testinomials</a></li>
      <li><a href="#contact">contact</a></li>
      </ul> 
   </footer>
  )
}

export default Footer