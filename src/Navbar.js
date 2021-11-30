import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link id="navbarTitle" to="/">The Supply Chain</Link>
            <div id="links">
                <Link className="navbarLink" to="/Contact">Another Page</Link>
                <Link className="navbarLink" to="/">Another Page</Link>
                <Link className="navbarLink" to="/">Another Page</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;