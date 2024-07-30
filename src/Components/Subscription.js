import React from 'react';
import './Subscription.css';

const Subscription = () => {
  return (
    <div className="subscription-container">
      <h2>Subscribe to our newsletter</h2>
      <h3>Prepare yourself & let's explore the beauty of the world</h3>
      <div className="subscription-form">
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscription;
