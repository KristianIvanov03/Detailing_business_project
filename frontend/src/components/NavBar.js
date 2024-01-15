import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/"><h2>Revive & Shine <span>Detailing</span></h2></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to ="/services">Services</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link>Appoint hour</Link></li>
                </ul>
            </nav>
            <div className="signup">
                <button><Link to="/signup">Sign Up</Link></button>
                <button>Log In</button>
            </div>
        </header>
    )
}

export default NavBar;