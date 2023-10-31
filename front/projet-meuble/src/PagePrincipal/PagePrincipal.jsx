import "./PagePrincipal.css" 
///import meuble from "./images/_(1).jpeg";
import meuble from "../../images/Age of Diesel.jpeg";

// import React from 'react'

function Navbar() {
    return (
      <>
      <nav>

       <div className="nav-bar">
       <ul className="nav-item">
        <li>Produit</li>
        <div className="sear-bar">
          <input type="search" name="search-bar" id="" />
          <label htmlFor="search-bar">search Produits</label>
        </div>
        <li>Inscription/Connexion</li>
        <li>Panier</li>
       </ul>
        
       </div>
    
      </nav>
    
     
      </>
    );
  }
  function Header() {
    return (
      <>
     <header>
      <div className="image-header">
        <img src={meuble} alt="" />
        <h1>Noyales meuble</h1>
      </div>

     </header>
    
     
      </>
    );
  }
  
  // export default Navbar;
  // export default Header;

  export {Navbar, Header}