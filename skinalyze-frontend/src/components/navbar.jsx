import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/navbar.css";
import "../styles/left-section.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="tab"><Link to="/home" >Home</Link></div>
        <div className="tab">        <Link to="/profile-creation" >Profile Creation</Link>
        </div>
        <div className="tab">        <Link to="/recommendations">Recommendations</Link>
        </div>
      </div>
      <div className="nav-right">
        
        <Link to="/create-account">Sign Up/In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
