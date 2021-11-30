import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link id="navbarTitle" to="/">COMP 380 Project</Link>
            <div id="links">
                <Link className="navbarLink" to="/">Long-term</Link>
                <Link className="navbarLink" to="/">Deep Dive</Link>
                <Link className="navbarLink" to="/">Supply and Demand</Link>
                <Link className="navbarLink" to="/">Why you should care</Link>
                <Link className="navbarLink" to="/Contact">Contact Us</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;