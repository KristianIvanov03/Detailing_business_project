// AboutUsPage.jsx
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <section className="company-info">
        <h2>Our Company</h2>
        <p>
          Welcome to Revive & Shine Detailing! We are passionate about providing top-notch car detailing services
          and ensuring the satisfaction of our customers.
        </p>
        <p>
          At Revive & Shine Detailing, we believe in the transformative power of car detailing. A clean and well-maintained
          vehicle not only enhances its appearance but also protects its value. Our team is dedicated to delivering
          exceptional results with attention to detail.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Revive & Shine Detailing, our mission is to provide exceptional car detailing services
          that go beyond the ordinary. We are committed to delivering top-notch quality, using
          cutting-edge techniques and premium products to ensure the satisfaction of every customer.
        </p>
        <p>
          Our team is dedicated to enhancing and preserving the beauty of your vehicle, leaving it
          in pristine condition. We strive for excellence in every detail, setting a standard for
          the automotive detailing industry.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className='members'>
        <div className="team-member">
          <h3>Kristian Ivanov</h3>
          <p>Founder & CEO</p>
        </div>

        <div className="team-member">
          <h3>"name"</h3>
          <p>Lead Detailer</p>
        </div>
        <div className="team-member">
          <h3>"name"</h3>
          <p>Junior Detailer</p>
        </div>
        </div>

        {/* Add more team members as needed */}

      </section>
    </div>
  );
};

export default AboutUsPage;
