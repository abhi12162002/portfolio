import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
const Contact = () => {
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact</h2>
     <div className='container contact_container'>
      <div className='contact_options'>
         <article className='contact_option'>
         <MdOutlineEmail />
           <h4>Email</h4>
           <h5>abhisolanky12162002@gmail.com</h5>
           <a href='mailto:abhisolanky12162002@gmail.com'>Send A Message</a>
         </article>

         <article className='contact_option'>
           <BsWhatsapp />
           <h4>Whats App</h4>
           <h5>+123456789</h5>
           <a href='https://api.whatsapp.com/send?phone+917357422005'>Send A Message</a>
         </article>
        </div>
  <form>
    <input type="text" name="name" placeholder='Your Full Name ' required/>
    <input type="email" name="email" placeholder="Your Emial" required/>
    <textarea type="submit" rows="7" placeholder="Your Message" required ></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>

     </div>
    </section>
  )
}

export default Contact;
