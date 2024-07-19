import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url('/src/assets/background-image.jpg')` }}>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery! We offer a variety of house plants to make your home a paradise.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
