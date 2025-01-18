import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className={onlineStatus ? "online-status" : "offline-status" } ></li>
          <li>
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="links" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="links" to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link className="links" to="/Cart">Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
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
