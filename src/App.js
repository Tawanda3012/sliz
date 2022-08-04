import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import News from "./Pages/News/News";
import Upcoming from "./Pages/Upcoming/Upcoming";
import Contact from "./Pages/Contact us/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>    
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/news/updates" element={<News/>} />
          <Route path="/upcoming/events" element={<Upcoming/>} />
          <Route path="/contact-us" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
