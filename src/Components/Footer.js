import React, { useRef } from "react";
import "./Footer.css";
import Newz from "./Newz";
import { Link } from "react-router-dom";
import  emailjs from "emailjs-com";


function Footer() {
 
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
    <div className="footer">
      <Newz />
      <h2>Subscribe To Our Newsletter</h2>



         <form ref={form} onSubmit={sendEmail}>
         <input type="email" placeholder="your email" name="user_email" id="" />
    

    
    <input type="submit"  className="sen" value="submit" />

         </form>
      
      <div className="footer-logo">
        <div className="logo-lin1"></div>
        <div className="futa-logo">
          <img src={require("../img/image 12.png")} alt="" />
        </div>
        <div className="logo-lin2"></div>
      </div>
      <div className="footer-contact">
        <div className="location loc1">
          <h4>Our Location</h4>
          <p>
            152/153 Long Cheng Plaza <span>Samora Machel West</span>
            <span>Belvedere</span>
            <span>Harare</span>
          </p>
        </div>
        <div className="location loc2">
          <h4>Quick Links</h4>
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/about">
            Events Gallery
          </Link>
          <Link className="link" to="/about">
            News & Updates
          </Link>
          <Link className="link" to="/about">
            Upcoming Events
          </Link>
        </div>
        <div className="location loc3">
          <h4>Contact Us</h4>
          <p>
            +263 242 4 740 204 <span>+263 242 4 741279</span>
            <span>+263 242 4 741 610</span>
            <span>+263 772 364 491</span>
            <p>+263 772 684 716</p>
          </p>
          <Link  to="www.slizinfo@sliz.co.zw">

            slizinfo@sliz.co.zw
          </Link>
          <Link    to="www.sliz.info@gmail.com">
            sliz.info@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
