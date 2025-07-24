import { IoMenu } from "react-icons/io5"
import "./Navbar.css"

// navbar
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-hamburger">
                <IoMenu className='navbar-hamburger-icon' />
            </div>
            <div className="navbar-dot-group">
                {[...Array(5)].map((_, index) => (
                    <div className="navbar-dot" key={index}></div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar