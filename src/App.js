import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Aboutt from "./Aboutt";
import Services from "./Services";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <h1>Peace & Comfort Homecare</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutt">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/aboutt" element={<Aboutt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>&copy; 2025 Business Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
 
};

export default App;