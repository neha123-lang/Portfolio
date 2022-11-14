import React from 'react'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import ME from '../../assets/man2img.png';
import './about.css';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>
                Experience
              </h5>
              <small>1+ Years of working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>
                Clients
              </h5>
              <small>5+ clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>
                Projects
              </h5>
              <small>4+ Completed Projects</small>
            </article>
            
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste vel temporibus, similique voluptatibus, minima at pariatur inventore facilis nostrum vitae aperiam ipsum nesciunt minus. Quas esse veritatis atque quod nihil!
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About