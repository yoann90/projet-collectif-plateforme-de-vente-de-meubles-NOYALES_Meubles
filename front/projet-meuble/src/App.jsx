import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recap from "./PageDetail/components/PageDetail";
// import React from "react";
import {Navbar,Header,Produit,AllProduits,Cart,ScrollToTopButton} from "./PagePrincipal/PagePrincipal";
import Furniture from "./PageDetail/components/PageDetail";






function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      {/* <Route path="/" element={<Header />} /> */}
      <Route path="/detail" element={< Furniture />  } /> 
      </Routes>

   
    </BrowserRouter>
     <Navbar />
       {/* <Header /> */}
    
  
       <Produit />
      <Cart />
     
      <AllProduits />
      <ScrollToTopButton />
    </>
  )
}

export default App;

