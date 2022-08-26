import React from 'react'
import "./Upcoming.css"
import { BsMouse2Fill } from "react-icons/bs";
import Up from '../../Components/Up';
import Footer from "../../Components/Footer"

function Upcoming() {
  return (
    <div>
       <div className="abou">
        <div className="news-header">
          <div className="news-header-text">
            <h1>Upcoming Events</h1>
          </div>
          <div className="events-icon up-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="about-line2"></div>
      <section className='eve'>
        <h2>Upcoming Events</h2>
        <div className="container-fluid">
          <Up/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Upcoming