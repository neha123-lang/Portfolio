import React from 'react'
import './Testinomials.css';
import AVTR1 from '../../assets/man3img.png';
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testinomials = () => {
  const details=[
    {
     
     avtar:AVTR1,
     review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa nobis officia nemo placeat cupiditate? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus animi, quia quasi velit nisi esse. Ipsum inventore exercitationem reprehenderit natus, ducimus minima, amet aperiam deserunt sunt magnam dolorem consectetur? Sunt.",

     name:'abcfor',
    },
    {
     
     avtar:AVTR1,
     review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa nobis officia nemo placeat cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus animi, quia quasi velit nisi esse. Ipsum inventore exercitationem reprehenderit natus, ducimus minima, amet aperiam deserunt sunt magnam dolorem consectetur.? Sunt',
    
     name:'abcfor',
    },
    {
     
     avtar:AVTR1,
     review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa nobis officia nemo placeat cupiditate?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus animi, quia quasi velit nisi esse. Ipsum inventore exercitationem reprehenderit natus, ducimus minima, amet aperiam deserunt sunt magnam dolorem consectetur? Sunt.",
     name:'abcfor',
    },
   ]
    
  return (
    <section id='testinomials'>
      <h5>Review from Clients</h5>
      <h2>Testinomials</h2>
      <Swiper className="container testinomials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
     
      >
     {
      details.map(({avtar,review,name},index)=>{
        return(
          <SwiperSlide key = {index}className='testinomial'>
          <div className="client__avtar">
            <img src={avtar} alt=''/>
           

          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
        </SwiperSlide>
       
        )
      })
     }

      </Swiper>
    </section>
  )
}

export default Testinomials