import React from 'react'
import "./Contact.css"
import { BsMouse2Fill } from "react-icons/bs";

function Contact() {
  return (
    <div>
       <div className="abou">
        <div className="news-header">
          <div className="news-header-text">
            <h1>Contact Us</h1>
          </div>
          <div className="con-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="about-line2"></div>
    </div>
  )
}

export default Contact