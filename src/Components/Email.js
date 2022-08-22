import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Email.css"

function Email() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qft8mng', 'template_96ddhl8', form.current, 'q5M97J95KKW2sin_Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="fomu">
        <h2>Get In Touch With Us</h2>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="name" placeholder="your name" name="user_name" id="" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="your email" name="user_email" id="" />
        </div>
        <div className="form-group">
          <textarea name="subject" cols="65" rows="4"    placeholder="your message"></textarea>
         
        </div>
        <input type="submit"  className="but" value="submit" />
      </form>
    </div>
  );
}

export default Email;
