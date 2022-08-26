import React, { useState } from "react";
import "./About.css";
import { BsMouse2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

function About() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="abou abou-hed">
        <div className="about-header">
          <div className="about-header-text">
            <h1>About us</h1>
          </div>
          <div className="about-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="about-line2"></div>
      <section className="About-sliz">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="about-text">
                <h2>About S.L.I.Z.</h2>
                <p>
                  The Sports Leaders Institute of Zimbabwe, is the brainchild of
                  some of the nations's finest sport administrators and coaches
                  who realized the need for the nations's sport leaders to come
                  together and share ideas on generic sports development.
                </p>
                <p className="p2">
                  We aim to facilitate a conducive environment for optimum
                  growth of Zimbabwe's sports leaders with emphasis on capacity
                  and professional development inline with global trends.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-abt-img">
                <img src={require("../img/Rectangle 248.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="soccer container">
        <div className="soccer-text">
          <p>
            Sport development, just like any other developmental issue, requires
            knowlegeble leadership technically and administratively. A careful
            and deliberate base study on sport development issues in Zimbabwe
            has shown that while the technical officials have managed to keep
            abreast with international sport specific trends, It has also been
            noted that the sport leader does not interact enough with other
            leaders from other sporting codes. <br /> <br /> These and other
            findings have led to the formation of Sports Leaders Institute of
            Zimbabwe.
          </p>
        </div>
      </section>
      <section className="scene container">
        <h2>Sports (SCIENCE & MANAGEMENT) Mentors</h2>
        <div className="row ">
          <div className="col-md-6 col-lg-4">
            <div className="tabz tabz-active">
              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content active-content" : "content"
                  }
                >
                  <div className="scene-text">
                    <h3>Dr Dennis Floyd</h3>
                    <p>
                      Recently retired from West Virginia University where Dr.
                      Jones accumulated 32 years of the most passionate,
                      professional, and wonderful students, friends, colleagues,
                      and stakeholders. Travelling the world, particularly
                      working in Africa to develop the African Sports Management
                      Association.{" "}
                    </p>

                    <Link className="linky" to="/">
                      View Profile
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2 ? "content active-content" : "content"
                  }
                >
                  <div className="scene-text">
                    <h3>Dr TawandaFloyd</h3>
                    <p>
                      Recently retired from West Virginia University where Dr.
                      Jones accumulated 32 years of the most passionate,
                      professional, and wonderful students, friends, colleagues,
                      and stakeholders. Travelling the world, particularly
                      working in Africa to develop the African Sports Management
                      Association.{" "}
                    </p>

                    <Link className="linky" to="/about">
                      View Profile
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    toggleState === 3 ? "content active-content" : "content"
                  }
                >
                  <div className="scene-text">
                    <h3>Dr David Floyd</h3>
                    <p>
                      Recently retired from West Virginia University where Dr.
                      Jones accumulated 32 years of the most passionate,
                      professional, and wonderful students, friends, colleagues,
                      and stakeholders. Travelling the world, particularly
                      working in Africa to develop the African Sports Management
                      Association.{" "}
                    </p>

                    <Link className="linky" to="/about">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className="sport-scene">
              <div className="bloc-tabz">
                <div
                  className={toggleState === 1 ? "tabz active-tabz" : "tabz"}
                  onClick={() => toggleTab(1)}
                >
                  <div className="group1">
                    <img
                      src={require("../img/Rectangle 160.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2 ? "tabz tab2 active-tabz" : "tabz"
                  }
                  onClick={() => toggleTab(2)}
                >
                  <div className="group1">
                    <img
                      src={require("../img/Rectangle 160.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={toggleState === 3 ? "tabz active-tabz" : "tabz"}
                  onClick={() => toggleTab(3)}
                >
                  <div className="group1">
                    <img
                      src={require("../img/Rectangle 160.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Afi container">
        <h4>Affiliated to:</h4>
        <div className="row">
          <div className="col-md-2 ">
            <div className="p">
              <img src={require("../img/image 5.png")} 
              className="img-fluid"
               alt="" />
              
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="p">
              <img
                src={require("../img/image 4.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="p">
              <img
                src={require("../img/image 8.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="p">
              <img
                src={require("../img/image 7.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="p">
              <img
                src={require("../img/image 11.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="p">
              <img
                src={require("../img/17795995_273698123057881_8604271747876962932_n 1.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    <div className="aboutfooter">
    <Footer/>
    </div>
    </div>
  );
}

export default About;
