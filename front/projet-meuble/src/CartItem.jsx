
import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.photo} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button onClick={() => onRemove(item)}>Supprimer</button>
      </div>
    </div>
  );
}

export default CartItem;
