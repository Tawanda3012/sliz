import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav/Nav"




 function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={"header " + location}>
      <Nav />
      
      
    </div>
  );
}

export default Header