import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                 <div className="display">Online status : {useShowOnlineStatus({onlinestatus})}</div>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li> 
                <li>
                  <Link to="/about">About  Us</Link>
                </li> 
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li> 
                <li>
                <Link to="/grocery">Grocery</Link>
                </li>
                <li>Cart</li> 
                <button
                className="login"
                onClick={() => {
                  btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                }}>
                {btnNameReact}
                </button>
            </ul> 
        </div>
      </div>
    )
}


export default Header;
