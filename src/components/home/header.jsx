import { Link, NavLink } from "react-router-dom";
import '../home/nav.css'

const Header = () => {
    
    return (
        <div>
            <h2>Navbar</h2>
            <nav >
                <h2>My Website</h2>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
                
            </nav>
        </div>
    );
};

export default Header;