import React from "react";
import "./Footer.css";
import Newz from "./Newz";

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
        <div className="location">
           <h4>Our Location</h4>
          <p>
            152/153 Long Cheng Plaza <span>Samora Machel West</span>
            <span>Belvedere</span>
            <span>Harare</span>
          </p>
        </div>
        <div className="location loc2">
           <h4>Our Location</h4>
          <p>
            152/153 Long Cheng Plaza <span>Samora Machel West</span>
            <span>Belvedere</span>
            <span>Harare</span>
          </p>
        </div>
        <div className="location loc3">
           <h4>Our Location</h4>
          <p>
            152/153 Long Cheng Plaza <span>Samora Machel West</span>
            <span>Belvedere</span>
            <span>Harare</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
