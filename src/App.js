import React from 'react'
import "./App.css";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" />
        </Routes>
        <Routes className='nav-two'>
          <Route exact path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
