// src/components/recommendationsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/recommendationsPage.css';

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recommendations');
        setRecommendations(response.data.recommendations);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recommendations');
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div className="loading">Loading recommendations...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="recommendations-container">
      <h1>Recommended Skincare Products</h1>
      {recommendations.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        <div className="products">
          {recommendations.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.productPic} alt={product.product} className="product-image" />
              <div className="product-info">
                <h2>{product.product}</h2>
                <p>{product.skinConcern}</p>
                <a href={product.productUrl} target="_blank" rel="noopener noreferrer">View Product</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;
