import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between bg-orange-100 shadow-md">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex m-10">
          <li className="w-4 h-4 pr-8"> {onlineStatus ? '🟢'  : '🔴' }</li>
          <li className="pr-4">
            <Link className="" to="/">Home</Link>
          </li>
          <li className="pr-4">
            <Link className="links" to="/about">About Us</Link>
          </li>
          <li className="pr-4">
            <Link className="links" to="/contact">Contact Us</Link>
          </li>
          <li className="pr-4">
            <Link className="links" to="/grocery">Grocery</Link>
          </li>
          <li className="pr-4">
            <Link className="links" to="/Cart">Cart</Link>
          </li>
          <li className="pr-4">
            <button
              className="px-5 py-1 bg-green-500 rounded-lg"
              onClick={() => setLoginButton(!loginButton)}
            >
              {loginButton ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
