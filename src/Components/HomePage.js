import React from 'react';
import './HomePage.css';
import Header from '../Components/Header';

import tripadvisor from '../Assests/Group.png'
import expedia from '../Assests/Group 2.png'
import booking from '../Assests/Group (1).png'
import airbnb from '../Assests/Group 9235.png'
import orbitz from '../Assests/Group 3.png'
import expimg from '../Assests/work 1.png'
import homeimg from '../Assests/Screenshot 2024-07-16 051536.png'

function HomePage() {
  return (
    <div className="Home">
      <Header></Header>
      
      <main>
        <section className="hero">
          <div className="hero-text">
          <button className='explore'>Explore the world
          <img className='btn-img' src={expimg} alt=''></img></button>
            <h1>Travel <span className="highlight">top destination</span> of the world</h1>
            <p>We always make our customers happy by providing as many choices as possible</p>
            <div className="hero-buttons">
              <button className="get-started">Get Started</button>
              <button className="watch-demo">Watch Demo</button>
            </div>
          </div>
          <div className="hero-images">
            <div className="image-item large">
              <img src= {homeimg}alt="Destination 1"/>
            </div>
            
          </div>
        </section>
      </main>
      
      <div className="partners">
      <img src={tripadvisor} alt="Tripadvisor" />
      <img src={expedia} alt="Expedia" />
      <img src={booking} alt="Booking.com" />
      <img src={airbnb} alt="Airbnb" />
      <img src={orbitz} alt="Orbitz" />
    </div>
    </div>
  );
}

export default HomePage;
