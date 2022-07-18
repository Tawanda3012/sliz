import React from "react";
import "./AboutSliz.css";
import { Link } from "react-router-dom";
import logo from "../img/Rectangle141.png";

function AboutSliz() {
  return (
    <section className="About-sliz">
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h2>About S.L.I.Z.</h2>
              <p>
                The Sports Leaders Institute of Zimbabwe, is the brainchild of
                some of the nations's finest sport administrators and coaches
                who realized the need for the nations's sport leaders to come
                together and share ideas on generic sports development.
              </p>
              <p>
                We aim to facilitate a conducive environment for optimum growth
                of Zimbabwe's sports leaders with emphasis on capacity and
                professional development inline with global trends.
              </p>
              <Link className="link" to="/about">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-abt-img">
              <img src={logo} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSliz;
