import React from 'react'
import './Portfolio.css';
import img1 from '../../assets/man3img.png';
import img2 from '../../assets/man3img.png';
import img3 from '../../assets/man3img.png';
import img4 from '../../assets/man3img.png';
import img5 from '../../assets/man3img.png';
import img6 from '../../assets/man3img.png';
const Portfolio = () => {
const details=[
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
 {
  id:1,
  title:'abc',
  image:img1,
  github:'www.github.com',
  demo:'abcfor',
 },
]
 




  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portolio</h2>
      <div className="container portfolio__container">
       {details.map(({id,title,image,github,demo})=>{
        return(
           <article key={id}className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image}alt={title}/>
          </div>
          <h3>{title}</h3>
          
        <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Project demo</a>
          
          </div>
        
        
        </article>
        )
       })}
        
      </div>
    </section>
  )
}

export default Portfolio