import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav/Nav"
// import NavTwo from "../Nav/NavTwo";



 function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={"header " + location}>
      <Nav />
      {/* <NavTwo/> */}
      
    </div>
  );
}

export default Header