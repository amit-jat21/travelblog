import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import avtr from '../Assests/Ellipse 22.png'

// Example test data
const test = [
  {
    avatar: avtr,
    name: 'Mark Smith',
    occupation: 'Travel Enthusiast',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    rating: 5,
  },
  {
    avatar: avtr,
    name: 'Jane Doe',
    occupation: 'Travel Blogger',
    text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 4,
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="testimonial-slider-container">
      <h2>Testimonials</h2>
      <h3>Trust our clients</h3>
      <Slider {...settings}>
        {test.map((testi, index) => (
          <div key={index} className="testimonial-card">
            <img src={testi.avatar} alt={testi.name} className="testimonial-avatar" />
            <h4>{testi.name} / {testi.occupation}</h4>
            <div className="testimonial-rating">
              {[...Array(testi.rating)].map((star, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <p>{testi.text}</p>
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
      style={{ ...style, display: 'block', background: '#6200ea', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#6200ea', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default TestimonialSlider;
