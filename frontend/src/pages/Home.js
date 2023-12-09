import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Your hero content goes here */}
        <h1>Welcome to Revive & Shine Detailing</h1>
        <p>Your destination for top-notch car detailing services.</p>
        <Link to="/services">
          <button>Explore Our Services</button>
        </Link>
      </section>

      {/* About Us Teaser */}
      <section className="about-us-teaser">
        <h2>About Us</h2>
        <p>Discover the story behind Revive & Shine Detailing and our commitment to excellence.</p>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </section>

      {/* Services Highlights */}
      <section className="services-highlights">
        <h2>Our Services</h2>
        {/* Display a few key services with images and brief descriptions */}
        {/* For example: */}
        <div className="service">
          <img src="service-image.jpg" alt="Service" />
          <p>Professional Exterior Detailing</p>
        </div>
        {/* Repeat for other services */}
        <Link to="/services">
          <button>Explore All Services</button>
        </Link>
      </section>

      {/* Appointment Booking CTA */}
      <section className="appointment-cta">
        <h2>Book an Appointment</h2>
        <p>Schedule your detailing session online and experience the difference.</p>
        <Link to="/appointments">
          <button>Book Now</button>
        </Link>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        {/* Display a few customer testimonials with images */}
        {/* For example: */}
        <div className="testimonial">
          <img src="customer-avatar.jpg" alt="Customer" />
          <p>"Exceptional service! My car looks brand new. Highly recommended."</p>
          <p>- John Doe</p>
        </div>
        {/* Repeat for other testimonials */}
        <Link to="/reviews">
          <button>Read More Reviews</button>
        </Link>
      </section>

      {/* Current Promotions/Deals */}
      <section className="promotions">
        <h2>Current Promotions</h2>
        {/* Display information about ongoing promotions */}
        {/* For example: */}
        <p>Get 10% off on our premium interior detailing package this month.</p>
        <Link to="/promotions">
          <button>View All Promotions</button>
        </Link>
      </section>

      {/* Gallery/Portfolio Teaser */}
      <section className="gallery-teaser">
        <h2>Gallery</h2>
        <p>Explore our gallery to see the stunning transformations we've achieved.</p>
        <Link to="/gallery">
          <button>View Gallery</button>
        </Link>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Contact our team today.</p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </section>

      {/* Social Media Links */}
      <section className="social-media">
        <h2>Connect With Us</h2>
        {/* Display social media icons/links */}
        {/* For example: */}
        <div className="social-icons">
          {/* Add your social media icons here */}
          <Link to="/facebook">
            <img src="facebook-icon.png" alt="Facebook" />
          </Link>
          <Link to="/instagram">
            <img src="instagram-icon.png" alt="Instagram" />
          </Link>
          {/* Add more social media icons as needed */}
        </div>
      </section>
    </div>
    )
}

export default Home