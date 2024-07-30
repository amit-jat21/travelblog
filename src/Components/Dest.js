import React from 'react';
import Slider from 'react-slick';
import './Dest.css';
import touri from '../Assests/touri.png'
import tour2 from  '../Assests/Tour2.png'
import tour3 from '../Assests/tour3.png'
const images = [
  {
    src: touri,
    title: 'Paradise Beach, Bantayan Island',
    location: 'Rome, Italy',
    price: '$550.16',
    rating: '4.8',
  },
  {
    src: tour2,
    title: 'Ocean with full of Colors',
    location: 'Maldives',
    price: '$20.99',
    rating: '4.5',
  },
  {
    src: tour3,
    title: 'Mountain View, Above the cloud',
    location: 'United Arab Emirates',
    price: '$150.99',
    rating: '5.0',
  },
  {
    src: tour2,
    title: 'Paradise Beach, Bantayan Island',
    location: 'Rome, Italy',
    price: '$550.16',
    rating: '4.8',
  },
  {
    src: touri,
    title: 'Ocean with full of Colors',
    location: 'Maldives',
    price: '$20.99',
    rating: '4.5',
  },
  {
    src: tour3,
    title: 'Mountain View, Above the cloud',
    location: 'United Arab Emirates',
    price: '$150.99',
    rating: '5.0',
  },
];

const Dest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      

      <div style={{ position: 'relative', padding: '20px' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      </div>
    </div>







      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-card">
            <img src={image.src} alt={image.title} className="slider-image" />
            <div className="slider-content">
              <h4>{image.title}</h4>
              <p>{image.location}</p>
              <p className="price">{image.price}</p>
              <p className="rating">{image.rating} <i className="fas fa-star"></i></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%', height:"50px", width:"50px", bottom:"20px", alignContent:'center', justifyContent:"center", }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' ,height:"50px", width:"50px", bottom:"20px", alignContent:'center',  justifyContent:"center"}}
      onClick={onClick}
    />
  );
};

export default Dest;
