import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Skinalyze. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
