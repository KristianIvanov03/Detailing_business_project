import {Link} from "react-router-dom"
import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from "../hooks/useLogout"

const NavBar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();
    const handleClick = () => {
        logout();
    }
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
            {!user && (
                <div className="signup">
                    <button><Link to="/signup">Sign Up</Link></button>
                    <button><Link to="/login">Log In</Link></button>
                </div>
            )}
            {user && (
                <div className="signup">
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
              </div>
            )}
        </header>
    )
}

export default NavBar;