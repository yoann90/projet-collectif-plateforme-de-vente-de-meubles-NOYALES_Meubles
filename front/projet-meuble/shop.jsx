import React from 'react'
import {Navbar,Header,Produit,AllProduits,Cart,ScrollToTopButton} from "./PagePrincipal/PagePrincipal";

export default function Shop() {
  return (
    <>
    
    <Navbar />
    <Header />
    <Produit />
    <AllProduits />
    <Cart />
    <ScrollToTopButton />
    </>
  )
}
