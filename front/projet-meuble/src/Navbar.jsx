import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <ul className="nav-item">
            <li>
              <Link to="/">Product</Link>
            </li>
            <div className="search-bar">
              <label htmlFor="search-bar">
                <PiMagnifyingGlassDuotone />
              </label>
              <input
                type="search"
                name="search-bar"
                className="search"
                id="search-bar"
                placeholder="Enter your product"
              />
            </div>
            <li>
              <Link to="/PageConnexion">Registration/Login</Link>
            </li>
            <li>
              <Link to="/cart">
                <BsCart4 />
              </Link>
            </li>
            <li>
              <Link to="/Admin"><BsFillPersonFill /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
