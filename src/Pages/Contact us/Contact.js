import React from "react";
import "./Contact.css";
import { BsMouse2Fill } from "react-icons/bs";
import Footer from "../../Components/Footer";
import icon from "../img/fa6.png"
import icon1 from "../img/ci_phone.png"

function Contact() {
  return (
    <div>
      <div className="abou abou-con">
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
      <div className="container">
        <div className="cont-img">
          <img
            src={require("../img/Rectangle 302.png")}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <p className="hed">Where We Are Located</p>
            <div className="con-add">
              <div className="add-img">
              <img src={icon} className="img-fluid" alt="women" />
                <p>
                  152/153 Long Cheng Plaza <br /> Samora Machel West <br />{" "}
                  Belvedere <br /> Harare
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="hed hed2">Contact Us</p>
            <div className="add-img1">
            <img src={icon1} className="img-fluid" alt="women" />
              <p>
                +263 242 4 740 204 <br />
                +263 242 4 741279 <br />
                +263 242 4 741 610 <br />
                +263 772 364 491 <br />
                +263 772 684 716 <br /> <br />
                slizinfo@sliz.co.zw <br />
                sliz.info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
