import React from "react";
import "./News.css";
import { BsMouse2Fill } from "react-icons/bs";
import Footer from "../../Components/Footer"

function News() {
  return (
    <div>
      <div className="abou">
        <div className="news-header">
          <div className="news-header-text">
            <h1>News & Updates</h1>
          </div>
          <div className="events-icon">
            <BsMouse2Fill />
            <h6>Scroll Down</h6>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="about-line2"></div>

      <div className="updates">
        <div className="updates-text">
          <div className="updates-img">
            <img
              src={require("../img/Rectangle 256.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <h2>Graduation Ceremony Moved to 21 December 2021</h2>
          <p>02/12/2022</p>

         <div className="recent-updates">
         <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis magnam culpa architecto ullam dolor aut natus quae ipsam
              autem maiores similique dolorem delectus amet cumque, tempore
              temporibus illum maxime deleniti hic placeat omnis accusantium
              esse qui quam. Quis veritatis assumenda obcaecati explicabo non
              
            </p>
         </div>

          <div className="recent-updates">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis magnam culpa architecto ullam dolor aut natus quae ipsam
              autem maiores similique dolorem delectus amet cumque, tempore
              temporibus illum maxime deleniti hic placeat omnis accusantium
              esse qui quam. Quis veritatis assumenda obcaecati explicabo non
              
            </p>
          </div>
          <div className="recent-updates">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis magnam culpa architecto ullam dolor aut natus quae ipsam
              autem maiores similique dolorem delectus amet cumque, tempore
              temporibus illum maxime deleniti hic placeat omnis accusantium
              esse qui quam. Quis veritatis assumenda obcaecati explicabo non
              
            </p>
          </div>
          <div className="recent-updates">
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis magnam culpa architecto ullam dolor aut natus quae ipsam
              autem maiores similique dolorem delectus amet cumque, tempore
              temporibus illum maxime deleniti hic placeat omnis accusantium
              esse qui quam. Quis veritatis assumenda obcaecati explicabo non
              
            </p>
          </div>
          <div className="recent-updates">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis magnam culpa architecto ullam dolor aut natus quae ipsam
              autem maiores similique dolorem delectus amet cumque, tempore
              temporibus illum maxime deleniti hic placeat omnis accusantium
              esse qui quam. Quis veritatis assumenda obcaecati explicabo non
              
            </p>
          </div>
        </div>
        <div className="local-news">
          <h3>Local News</h3>
          <div className="local-nuz">
            <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p>
          </div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
          <div className="local-nuz"> <p>Graduation Ceremony Moved to 21 <span>December 2021</span> </p></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default News;
