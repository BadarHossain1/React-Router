import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav >
                <h2>My Website</h2>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                
            </nav>
        </div>
    );
};

export default Header;