import React from "react";
import "../styles/homePage.css";
import skincare1 from "../assets/images/home-skincare/skincare1.jpg"
import skincare2 from "../assets/images/home-skincare/skincare2.jpg"
import skincare3 from "../assets/images/home-skincare/skincare3.jpg"

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to Skinalyze</h1>
        <p>Your personalized skincare journey begins here.</p>
      </header>

      <section id="about" className="about-section">
        <h2>About Skinalyze</h2>
        <p>
          Skinalyze leverages advanced technologies like blockchain and AI to bring
          you affordable, effective, and personalized skincare solutions. 
        </p>
      </section>

      <section id="features" className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Personalized skincare recommendations based on your profile.</li>
          <li>Real-time price comparisons for the best deals.</li>
          <li>Ingredient safety checker for transparency.</li>
          <li>Community-verified reviews for authenticity.</li>
        </ul>
      </section>

      <section id="carousel" className="carousel-section">
        <h2>Explore Skinalyze</h2>
        <div className="carousel">
          <img src={skincare1} alt="Skincare 1" />
          <img src={skincare2}alt="Skincare 2" />
          <img src={skincare3} alt="Skincare 3" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
