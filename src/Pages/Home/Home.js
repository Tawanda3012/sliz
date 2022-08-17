import React, { useState } from "react";
import "./Home.css";
import { BsMouse2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AboutSliz from "../../Components/AboutSliz";
import Women from "../img/Rectangle 311.png";
import Women2 from "../img/Rectangle 256.png";
import Football from "../img/Bannerimg3.png";
import NU from "../img/Rectangle 328.png";
import up1 from "../img/Rectangle 159.png"
import formIg from "../img/Rectangle 165.png"
import EventsGallery from "../../Components/EventsGallery";
import Email from "../../Components/Email";
import Business from "../../Components/Business";
import Newz from "../../Components/Newz";
import Footer from "../../Components/Footer";





function Home() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
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
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <h2>Our Services</h2>
          </div>
          <div
            className={toggleState === 2 ? "tabs tab2 active-tabs" : "tabs "}
            onClick={() => toggleTab(2)}
          >
            <h2>Our Values</h2>
          </div>
        </div>

        <div className="tabs tabs-active">
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
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
            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
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
          <img src={Football} alt="" />
        </div>
      </section>
      <section className="news-updates">
        <h3 className="text-center">News & Updates</h3>
        <div className="container">
          <div className="nuz-upx">
            <div className="nuz">
              <div className="nuz-img">
                <img src={NU} className="img-fluid" alt="" />
              </div>
              <div className="nu-things">
                <div className="nuz-text">
                  <p>Kenya Pashda Confrence</p>
                  <p>02/013/2022</p>
                </div>

                <p className="y">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <Link className="rid" to="">
                  Read Article
                </Link>
              </div>
            </div>
            <div className="upz">
              <div className="upz1">
                <div className="upz-img">
                  <img src={up1} alt="" />
                </div>
                <div className="upz-text">
                  <p>Kenya Pashda Confrence</p>
                  <p>02/013/2022</p>
                  <p>
                    
                    lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              <div className="upz1 t">
              <div className="upz-img">
                  <img src={up1} alt="" />
                </div>
                <div className="upz-text">
                  <p>Kenya Pashda Confrence</p>
                  <p>02/013/2022</p>
                  <p>
                    
                    lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              <div className="upz1">
              <div className="upz-img">
                  <img src={up1} alt="" />
                </div>
                <div className="upz-text">
                  <p>Kenya Pashda Confrence</p>
                  <p>02/013/2022</p>
                  <p>
                    
                    lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="event-gallery">
        <div className="container">
          <h2>Events Gallery</h2>
          <EventsGallery />
        </div>
      </section>
      <section className="contact ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Email/>
            </div>
            <div className="col-md-4">
              <div className="fom-img">
                 <img src={formIg}  alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="business">
        <div className="container">
        <Business/>
       
        </div>
      </section>
      {/* <section className="newsimg">
       <Newz/>
      </section> */}
      <Footer/>
    </div>
  );
}

export default Home;
