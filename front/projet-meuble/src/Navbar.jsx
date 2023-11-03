import React from 'react'
import {Link} from "react-router-dom"



function Navbar() {
    return (
      <>
        <nav>
          <div className="nav-bar">
            <ul className="nav-item">
              <li>
              <Link to="/Product">Product</Link>
               
              </li>
              <div className="search-bar">
                <label htmlFor="search-bar">search Products</label>
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
              <Link to="/cart">Cart</Link>
                
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  } 
  export default Navbar