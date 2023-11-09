import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import meuble from "../images/canapés-colorés.jpeg";
import chaise from "../images/Chaise en Velours.jpeg";
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
    <div className="box-cart">
      <div className="box-title">
        <img src={meuble} alt="" />
        <h2>Panier</h2>
      </div>
      <div className="detail-product">
        <div className="detail-name">
          {/* <p>Product</p>
          <p>Description</p>
          <p>remove</p> */}
          {/* <hr /> */}
        </div>
      </div>
      <div className="box-cart-product">
        <ul className="remove">
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="price">
                {item.photo && <img src={chaise} />}
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
      </div>
      <button
        className="add"
        onClick={() =>
          addItemToCart({
            photo: { chaise },
            name: "Product",
            price: 40,
            description: "Lorem ipsum dolor sit amet",
          })
        }
      >
        Add to Cart
      </button>
      <div className="product-total">
        <p>Total: ${calculateTotal()}</p>
        <a href="">Proceed To Checkout</a>
      </div>
      <div className="continue">
        <Link to="/product"> Continue Shopping</Link>
      </div>
    </div>
  );
}