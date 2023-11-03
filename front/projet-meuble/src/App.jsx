import "./App.css";
// import React from "react";
import {Navbar,Header,Produit,AllProduits,Cart,ScrollToTopButton} from "./PagePrincipal/PagePrincipal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./PageDetail/components/PageDetail";
import UserConnexion from './PageConnexion/page_connexion';





import PagePrincipal from "./PagePrincipal/PagePrincipal.jsx";
import Navbar from "./Navbar";
import Cart from "./Cart";
import TopButton  from "./TopButton"
import ShopCategory from "./ShopCategory";

// import {Navbar,Cart,ScrollToTopButton} from "./PageDetail/components/PageDetail";

// import Shop  from "../shop.jsx"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/page detail" element={< page />} /> */}
        </Routes>
      </BrowserRouter>
      <Navbar />
      {/* <Header />
       <Produit /> */}

      {/* <Header /> */}
      <UserConnexion />
      {/* <Furniture /> */}
      {/* <Produit /> */}
      {/* <Cart /> */}

      {/* <AllProduits /> */}
    <BrowserRouter>
    <Navbar />
    <TopButton />
   
    
    
    <Routes>
    
      
      <Route path="/detail" element={< Furniture />} />
      {/* <Route path="/PageConnexion" element={< PageConnexion />} /> */}
       {/* <Route path="/product" element={<Produit /> } >
       <Route path=":productId" element={<Produit /> } />
        </Route> */}
      <Route  path="/Chaise" element={<ShopCategory category="chaise" /> } />
      <Route  path="/Table" element={<ShopCategory category="Table" /> } />
      <Route  path="/Lampe" element={<ShopCategory category="Lampe" /> } />
      <Route  path="/Sofa" element={<ShopCategory category="Sofa" /> } />
      <Route  path="/Fauteuil" element={<ShopCategory category="Fauteuil" /> } />
      <Route  path="/Cart" element={<Cart /> } />
      <Route  path="/product" element={<PagePrincipal /> } />
    
      
      </Routes>
    </BrowserRouter>
     
       <Header />
       <Furniture />

       <Produit />
      <Cart />
     
      <AllProduits />
      <ScrollToTopButton />
    </>
  );
}

export default App;

