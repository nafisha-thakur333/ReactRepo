import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
            <img className="w-48 h-32" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                 <div className="flex">Online status : {useShowOnlineStatus({onlinestatus})}</div>
                </li>
                <li className="px-4">
                  <Link to="/">Home</Link>
                </li> 
                <li className="px-4">
                  <Link to="/about">About  Us</Link>
                </li> 
                <li className="px-4">
                  <Link to="/contact">Contact Us</Link>
                </li> 
                <li className="px-4">
                <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4">Cart</li> 
                <button
                className="bg-[#0768b3] rounded-lg shadow-lg text-white px-[22px] py-[10px] mt-[-10] ml-[-4px] cursor-pointer border-none outline-none"
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
