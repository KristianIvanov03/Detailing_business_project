import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Revive & Shine <span>Detailing</span></h3>
          </div>
          <div className="footer-links">
            <ul>
                <li><Link>Services</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                <li><Link>Contacts</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <p>Connect with us:</p>
            <div className='links'>
            <a href="https://www.facebook.com/profile.php?id=100010212393796" rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href='https://www.instagram.com/kristian_ivanovvv/' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href='https://github.com/KristianIvanov03' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Revive & Shine Detailing. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;