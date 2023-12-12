import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className='heading'>Why Choose Us</h2>
      <div className="card-container">
        <div className="card">
          <FontAwesomeIcon icon="tools" size="3x" />
          <h3 className='titles'>Expert Detailing</h3>
          <p>Our team consists of skilled professionals who excel in the art of car detailing. We bring expertise and precision to every job.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon="cubes" size="3x" />
          <h3 className='titles'>Quality Products</h3>
          <p>We use only the finest quality detailing products to ensure that your vehicle receives the care it deserves. Your satisfaction is our priority.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon="smile" size="3x" />
          <h3 className='titles'>Customer Satisfaction</h3>
          <p>Your satisfaction matters to us. We strive to exceed your expectations, providing exceptional service and leaving your car in pristine condition.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;