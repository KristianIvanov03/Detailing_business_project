// Services.js (Component for Services Page)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="service-header">
                <img src={service.image} alt={`Service ${index + 1}`} />
                <FontAwesomeIcon icon={faCar} size="2x" />
              </div>
              <div className='desc'>
                <h3 className='titles'>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      {/* Add more services as needed */}
    </div>
  );
};

const services = [
  {
    title: 'Exterior Detailing',
    description: 'Restore and enhance the appearance of your vehicle\'s exterior. Includes washing, waxing, and paint correction.',
    image: 'https://i.ibb.co/mBvyWBz/Exterior-Car-Detailing-Polishing-Cleaning-min.jpg', // Replace with the actual image path
  },
  {
    title: 'Interior Detailing',
    description: 'Revitalize your car\'s interior with thorough cleaning, vacuuming, and conditioning. Enjoy a fresh and comfortable space.',
    image: 'https://i.ibb.co/MCn663X/vci95f5u-TDn-Y4-U2-Th-Ldx-K2-ABTAw9-Xvk-P1671030463.jpg', // Replace with the actual image path
  },
  {
    title: 'Paint Protection',
    description: 'Preserve the shine and color of your car\'s paint. Our protective coatings provide long-lasting defense against environmental elements.',
    image: 'https://i.ibb.co/hm79dR7/what-is-paint-protection-film-ppf-the-complete-rundown-702418-1024x1024.jpg', // Replace with the actual image path
  },
  {
    title: 'Wheel and Tire Care',
    description: 'Give your wheels and tires the attention they deserve. Our services include cleaning, tire dressing, and protection.',
    image: 'https://i.ibb.co/MVWmMp8/Bridgestone-Tyre-Clinic-Drivers-Essential-Detailing-2.jpg', // Replace with the actual image path
  },
  {
    title: "Full Detail Package",
    description: "Our full detail package includes both exterior and interior detailing services. Treat your vehicle to a comprehensive cleaning and restoration, leaving it in top-notch condition.",
    image: "https://i.ibb.co/Y7D3zcR/car-detailing-business.jpg"
  }, 
  {
    title: "Headlight Restoration",
    description: "Improve visibility and enhance the aesthetics of your vehicle with our headlight restoration service. We can help restore clarity to cloudy or discolored headlights.",
    image: "https://i.ibb.co/0c3MPT4/Adobe-Stock-249301747-1.jpg"
  }
];

export default Services;
