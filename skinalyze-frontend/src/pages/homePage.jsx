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
        <p id="tagline">Your personalized skincare journey begins here.</p>
      </header>

      <section id="about" className="about-section">
        <h2>About Skinalyze</h2>
        <p>
        Skinalyze is your trusted skincare guide, crafted to help you unlock the secrets to healthy, radiant skin. By focusing on your unique skin type, concerns, and preferences, we provide personalized skincare recommendations tailored to your needs.

Whether you’re addressing dryness, acne, or sensitivity, or simply enhancing your skincare routine, Skinalyze takes the guesswork out of choosing the right products. Explore a world of effective solutions and trusted advice, all designed to help you feel confident in your skin.
        </p>
      </section>

      <section id="features" className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Personalized Skin Guidance.</li>
          <li>Curated Product Recommendations.</li>
          <li>Comprehensive Skin Profiles.</li>
          <li>Simple and Intuitive.</li>
          <li>Clean and Effective Products.</li>
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
