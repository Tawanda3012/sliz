import React from "react";
import "./Footer.css";
import Newz from "./Newz";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Newz />
      <h2>Subscribe To Our Newsletter</h2>
      <input type="email" name="" placeholder="your email" id="" />
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
