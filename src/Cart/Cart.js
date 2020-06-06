import React from "react";

const CartItem = ( {title, price} ) => {
  return (
      <div className="cart-item">
          <button>X</button>
          <div className="info">
              <span>{title}</span>
              <span>{price}</span>
          </div>
      </div>
  );
};
const Cart = ( {cartItems} ) => {
    const cartItem = Array.from(cartItems)
    return (<div className="cart">
        <h4>Cart Item</h4>
        <div className="cart-items">
            {cartItem.map(item => <CartItem key={item.id} {...item} />)}
        </div>
    </div>);
};

export default Cart;