import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnt7pdj', 'template_zn8tr1q', form.current, 'PW1fizG7JSuuNWSi0')

     e.target.reset()
  };
  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className="container contact__container">
  <div className="contact__options">
    <article className="contact__option">
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
   <h5>nehakuhfirueh@fmhgriu</h5>
   <a href="mailto:dummy@gmail.com" target='_blank'>Send a message</a>
    </article>
    <article className="contact__option">
      <FaFacebookMessenger className='contact__option-icon'/>
      <h4>Messanger</h4>
   <h5>ugtrjgoji</h5>
   <a href="https/hfiru.com " target='_blank'>Send a message</a>
    </article>
    <article className="contact__option">
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsaap</h4>
   <h5>8920396189</h5>
   <a href="https://wa.me/+918920396189" target='_blank'>Send a message</a>
    </article>
  </div>
  {/* END OF OPTIONS */}
  <form  ref={form} onSubmit={sendEmail}>
    <input type='text' name = 'name' placeholder ='Your Full Name' required/>
    <input type='email' name='email' placeholder='Your Mail' required/>
    <textarea name='message' id=''  rows='7' placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
</div>
    </section>
  )
}

export default Contact