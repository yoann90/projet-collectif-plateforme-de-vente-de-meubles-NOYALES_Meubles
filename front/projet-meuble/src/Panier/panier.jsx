
import React, { useState, useEffect } from "react";

export default function Cart() {
 
    
    const [cartItems, setCartItems] = useState([]);
  const cartKey = "myCart";

  // Charger le panier depuis localStorage au chargement de la page
  useEffect(() => {
    const storedCart = localStorage.getItem(cartKey);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } 
  }, []);



  const addItemToCart = (item) => {

    localStorage.setItem(cartKey, JSON.stringify([...cartItems, item]));
    setCartItems([...cartItems, item]);

  };

  const removeItemFromCart = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };

  // Calculer le total du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button onClick={() => addItemToCart({ name: "Produit", price: 10 })}>
        Ajouter au panier
      </button>
    </div>
  )
  
  
}
