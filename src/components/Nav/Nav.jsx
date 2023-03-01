import { Link , useParams , useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";

import './Nav.css'

function Nav(props) {

    const { loggedIn, setLoggedIn } = props
    const uid = window.localStorage.getItem("uid");
    // enables redirect
    const navigate = useNavigate();

    const handleClick = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("uid");
        setLoggedIn(false);
        navigate("/");
    }

    return (
        <nav>
            <Link to="/" ><img src="src/images/GradeEd.png" className="logo"/></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" >About Us</Link></li>
            <li><Link to="/contactUs" >Contact Us</Link></li>
            <li>{!loggedIn && <Link to="/login" className="btn-account-class">Login In</Link>}</li>
            <li>{!loggedIn && <Link to="/register" className="btn-account-class">Sign Up</Link>}</li>
            <li>{loggedIn && <Link to={`/users/${uid}`} className="btn">View Account</Link>}</li>
            <li>{loggedIn && <button className="btn-account-class" onClick={handleClick}>Sign Out</button>}</li>
        </ul>
        <div>
        {loggedIn && <Link to="/projects" >Start a Fundraiser</Link>}
        </div>
        </nav>
    );
}
export default Nav;
