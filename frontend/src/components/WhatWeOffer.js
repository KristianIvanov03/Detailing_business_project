import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';

const WhatWeOffer = () => {
    // Define Font Awesome icons for each service
  
    return (
      <section className="what-we-offer">
        <h2 className='heading'>What We Offer</h2>
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
          <button className='btn'>Explore More</button>
        </div>
      </section>
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
    }
  ];
  
  export default WhatWeOffer;