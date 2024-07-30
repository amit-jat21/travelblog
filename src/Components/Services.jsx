import React from 'react';
import Slider from 'react-slick';
import img from '../Assests/servieimg1.png'
import img1 from '../Assests/servicesimg2.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' , background:"whites", borderRadius: '50%', alignContent:'center' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%', alignContent:'center' }}
      onClick={onClick}
    />
  );
};

// CustomSlider Component
const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const Data = [
    { id: 1, title: 'Best Tour Guide', text: 'What looked like a small patch of purple grass, above five feet.', icon: img1 },
    { id: 2, title: 'Easy Booking', text: 'Square, was moving across the sand in their direction.', icon: img },
    { id: 3, title: 'Card 3', text: 'Square, was moving across the sand in their direction.', icon: img },
    { id: 4, title: 'Card 4', text: 'What looked like a small patch of purple grass, above five feet.', icon: img1 },
  ];

  return (
    <div className='slider-container'>
      <div className="services-header">
        <h3 className="text-[#ff0078] text-sm mb-2.5">SERVICES</h3>
        <h2 className="text-2xl mb-5">Our top value categories for you</h2>
        <Slider {...settings}>
          {Data.map((Data) => (
            <div key={Data.id} className="slider-card">
              <img src={Data.icon} alt={Data.title} className="slider-img" />
              <div className="slider-content">
                <h4>{Data.title}</h4>
                <p>{Data.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


const Services = () => {
  return <CustomSlider />;
};

export default Services;
