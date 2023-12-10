import {Link} from "react-router-dom"

const Home = () => {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Revive & Shine Detailing</h1>
            <p>Your destination for top-notch car detailing services. We bring your vehicle to life with our expert detailing techniques, cutting-edge products, and a passion for perfection.</p>
            <p>Experience the ultimate in automotive care and let your vehicle shine like never before. Whether it's a thorough exterior cleaning, interior rejuvenation, or a complete detailing package, we've got you covered.</p>
            <Link to="/services">
              <button className="btn">Explore Our Services</button>
            </Link>
          </div>
        </section>
      </div>
    )
}

export default Home