const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <h2>Revive & Shine <span>Detailing</span></h2>
            </div>
            <nav>
                <ul>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Appoint hour</li>
                </ul>
            </nav>
            <div className="signup">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </header>
    )
}

export default NavBar;