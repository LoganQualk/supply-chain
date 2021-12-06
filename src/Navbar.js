import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import hamburgerIcon from './Content/hamburgerIcon.svg'

const Navbar = () => {
    const [hidden, setHidden] = useState(true);

    return (
        <nav id={"navbar"} className={hidden && 'hidden'}>
            <div id="navPages">
                <div id="navOverallControls">
                    <Link id="navbarTitle" to="/" exact>The Supply Chain</Link>
                    <img src={hamburgerIcon} id="expandNavButton" alt="expandNavButton" onClick={() => {
                        setHidden(!hidden);
                    }}></img>
                </div>
                <div id="links">
                    <NavLink className="navbarLink" to="/LongTerm" activeClassName="active"><span className="navLinkText">Long-Term</span></NavLink>
                    <NavLink className="navbarLink" to="/DeepDive" activeClassName="active"><span className="navLinkText">Deep Dive</span></NavLink>
                    <NavLink className="navbarLink" to="/SupplyAndDemand" activeClassName="active"><span className="navLinkText">Supply and Demand</span></NavLink>
                    <NavLink className="navbarLink" to="/WhyYouShouldCare" activeClassName="active"><span className="navLinkText">Why you should care</span></NavLink>
                    <NavLink className="navbarLink" to="/About" activeClassName="active"><span className="navLinkText">About</span></NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;