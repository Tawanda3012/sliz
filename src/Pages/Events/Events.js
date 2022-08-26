import React from 'react'
import "./Events.css"
import { BsMouse2Fill } from "react-icons/bs";
import Past from "../../Components/Past"
import Footer from "../../Components/Footer"



function Events() {
  return (
    <div>
       <div className="abou">
        <div className="events-header">
          <div className="events-header-text">
            <h1>Events Gallery</h1>
          </div>
          <div className="events-icon eve-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="about-line2"></div>
      <section className="past">
        <h2>Our Past Events</h2>
        <Past/>

      </section>

      <div className="eventsfooter">
        <Footer/>
      </div>
      
    </div>
  )
}

export default Events