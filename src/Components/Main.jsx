import React from 'react';
import HomePage from './HomePage';
import Services from './Services';
import Dest from './Dest';
import Keypoint from './Keypoint';
import FeaturesSection from './FeaturesSection';
import TestimonialSlider from './TestimonialSlider';
import Subscription from './Subscription';
import Form from "./Form"
import Footer from './Footer';
const Main = () => {
  return (
    <div>
         <HomePage></HomePage>
      <Services></Services>
      <Dest></Dest>
      <Keypoint></Keypoint>
      <FeaturesSection></FeaturesSection>
      <TestimonialSlider></TestimonialSlider>
      <Subscription></Subscription>
      <Form></Form>
      <Footer></Footer>
      
    </div>
  );
}

export default Main;
