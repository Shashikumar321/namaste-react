import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
