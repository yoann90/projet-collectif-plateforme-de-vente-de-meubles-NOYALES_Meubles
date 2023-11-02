import "./App.css";
// import React from "react";
import {Navbar,Header,Produit,AllProduits,Cart,ScrollToTopButton} from "./PagePrincipal/PagePrincipal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./PageDetail/components/PageDetail";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      {/* <Route path="/" element={<Header />} /> */}
      </Routes>

   
    </BrowserRouter>
     
       <Header />
       <Furniture />

       <Produit />
      <Cart />
     
      <AllProduits />
      <ScrollToTopButton />
    </>
  )
}

export default App;

