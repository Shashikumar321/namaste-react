import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState(true);

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {}, []);

  return (
    <div className="-mx-52 h-16 flex justify-between bg-gray-50 shadow-md ">
      <div className="logo-container">
        <img className="w-16 ml-60" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex mt-5 mr-64">
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
            <Link className="links" to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="pr-4 -top-2">
            <button
              className="px-5 py-1 bg-green-200 rounded-lg"
              onClick={() => setLoginButton(!loginButton)}
            >
              {loginButton ? "Login" : "Logout"}
            </button>
          </li>
          <li className="pr-4 font-bold">
            { data.loggedInUser }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
