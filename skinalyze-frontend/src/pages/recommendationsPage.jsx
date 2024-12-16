import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/recommendations.css"
const RecommendationsPage = ({ userId }) => {
  const [products, setProducts] = useState([]); // Store fetched recommendations
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch recommendations from the backend
    const fetchRecommendations = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`/api/recommendations?userId=${userId}`);
        setProducts(response.data); // Populate products with API response
        setLoading(false); // Stop loading
      } catch (err) {
        setError("Failed to fetch recommendations. Please try again.");
        setLoading(false); // Stop loading
      }
    };

    fetchRecommendations();
  }, [userId]);

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div>No recommendations available. Update your profile to see suggestions!</div>;
  }

  return (
    <div>
      <h2>Recommended Products for You</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
