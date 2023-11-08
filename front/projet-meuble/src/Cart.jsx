import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function Cart({ cartItems, addItemToCart, removeItemFromCart, calculateTotal }){ 
  const cartKey = "myCart";

  // Charger le panier depuis localStorage au chargement de la page
  useEffect(() => {
    const storedCart = localStorage.getItem(cartKey);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

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
    <div className="box-cart">
      <div className="box-title">
        <img src="" alt="" />
        <h2>Panier</h2>
      </div>

      <div className="box-cart-product">
        {cartItems.length === 0 && <p>Votre panier est vide.</p>}
        {cartItems.length > 0 && (
          <ul className="remove">
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="price">
                  {item.photo && <img src={item.photo} alt="Product" />}{" "}
                  {item.name} - ${item.price}
                </div>
                <div className="description">{item.description}</div>
                <button
                  className="btn-remove"
                  onClick={() => removeItemFromCart(index)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="product-total">
        <p>Total: ${calculateTotal()}</p>
        <Link to="/checkout">Proceed To Checkout</Link>
      </div>
      <div className="continue">
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );

}