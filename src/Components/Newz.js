import React from 'react'
import newzimg1 from "../img/Rectangle 179.png"
import "./Newz.css"

function Newz() {
  return (
    <div className="newz-img">
        <div className="newz-img1">
            <img src={newzimg1} className="img-fluid"  alt="" />
            <div className="l"></div>
        </div>
        <div className="newz-img2">
            <div className="block1">
                <div className="block-img">
                <img src={newzimg1} alt="" className="img-fluid" />
                </div>
                <div className="block-img">
                <img src={newzimg1} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="block1">
            <div className="block-img">
                <img src={newzimg1} alt="" className="img-fluid" />
                </div>
                <div className="block-img">
                <img src={newzimg1} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newz