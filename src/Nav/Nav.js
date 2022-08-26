import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../Nav/Nav.css";
import { SidebarData } from "../Nav/SidebarData";
import { Link } from "react-router-dom";
// import background from "../img/banner.png";
import logo from "../img/logo.png";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div>
        <Link className="logo" to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

        <div className="menu-bars1" onClick={showSidebar}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiOutlineClose />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
