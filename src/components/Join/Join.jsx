import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
export const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z7em49j', 'template_zc112ee', form.current, 'TfIs-yG2uTjvZq-sE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
   <div className="join" id='whyUs'>
    <div className="left-j">
        <div>
            <hr />
            <span className='stroke-text'>READY TO </span>
            <span >LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US?</span>
            </div>
    </div>
    <div className="right-j">
        <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter your email address' />
        <button className='btn btn-j'>Join Now</button>
        </form>
    </div>
   </div>
  )
}
