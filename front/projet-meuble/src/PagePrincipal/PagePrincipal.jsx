import "./PagePrincipal.css" 
import React from 'react'

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
  
  export default Navbar