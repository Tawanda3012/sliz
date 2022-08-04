import React from 'react'
import "./Business.css"
import partImg1 from "../img/Group 9.png"
import partImg2 from "../img/Rectangle 176.png"

function Business() {
  return (
    <div className="container">
      <h2>Our Partners</h2>
      <div className="partners">
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg2} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
      </div>
      <h2>Business Units</h2>
      <div className="partners">
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg2} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
        <div className="partner-img">
          <img src={partImg1} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Business