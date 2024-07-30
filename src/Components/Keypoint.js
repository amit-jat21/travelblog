import React from 'react';
import pic from '../Assests/pic.png';
import './Keypoint.css';

const Keypoint = () => {
  return (
    <div className='container'>
      <div className='left-item'>
        <img src={pic} alt=''></img>
      </div>

      <div className='right-item'>
        <div className='right-cont'>
          <h3>Travel point</h3>
          <h1>We help you find your dream location</h1>
          <p className='p'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

          <div className='box-cont'>
            <div className='box'>
              <h2 className='box-heading'>500+</h2>
              <p>Holiday Packages</p>
            </div>
            <div className='box'>
              <h2 className='box-heading'>100</h2>
              <p>Luxury Hotels</p>
            </div>
            <div className='box'>
              <h2 className='box-heading'>7</h2>
              <p>Premium Airlines</p>
            </div>
            <div className='box'>
              <h2 className='box-heading'>2K+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keypoint;
