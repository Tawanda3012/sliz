import React, { useState } from "react";
import "./Home.css";
import { BsMouse2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AboutSliz from "../../Components/AboutSliz";
import Women from "../img/Rectangle 311.png"
import Women2 from "../img/Rectangle 256.png"
import Football from "../img/Bannerimg3.png"

function Home() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div>
      <div className="hom">
        <div className="home-header">
          <div className="home-header-text">
            <h1>
              The Sports Leaders <br /> Institute of Zimbabwe
            </h1>
            <p>
              Aiming To Facilitate Optimum Growth Of <br /> Sports Leaders
              Inline With Global Trends
            </p>
          </div>
          <div className="header-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="line2"></div>
      <AboutSliz />
      <div className="line3"></div>
      <div className="container">
        <div className="bloc-tabs">
          <div className={toggleState === 1 ? "tabs active-tabs": "tabs"} onClick={ () => toggleTab(1)}>
            <h2>Our Mision</h2>
          </div>
          <div className={ toggleState === 2 ? "tabs tab2 active-tabs": "tabs "} onClick={ () => toggleTab(2)}>
            <h2>Our Values</h2>
          </div>
        </div>
       
        <div className="tabs tabs-active">
          <div className="content-tabs">
            <div className={toggleState === 1 ? "content active-content": "content"}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <img src={Women} className="img-fluid" alt="women" />
                  </div>
                  <div className="col-md-4">
                    <ul className="service-text">
                      <li>Sports Leadership Development</li>
                      <li>Programs & Network</li>
                      <li>Capaity Building Programs </li>
                      <li>Sport Camps</li>
                      <li>Sport & Leadership Exhibition</li>
                      <li>Grassroots Sport Development</li>
                      <li>Development Through Sport Programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "content active-content": "content"}>
              {/* <h2>Our Values</h2> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <img src={Women2} className="img-fluid" alt="women" />
                  </div>
                  <div className="col-md-4">
                    <ul className="service-text">
                      <li>Sports Leadership Development</li>
                      <li>Programs & Network</li>
                      <li>Capaity Building Programs </li>
                      <li>Sport Camps</li>
                      <li>Sport & Leadership Exhibition</li>
                      <li>Grassroots Sport Development</li>
                      <li>Development Through Sport Programs</li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container football">
        <div className="footbal-img">
         <img src={Football}  alt="" />
        </div>
       


      </section>
    </div>
  );
}

export default Home;
