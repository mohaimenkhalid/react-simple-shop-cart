import React from "react";

const CartItem = ( {title, price, quantity} ) => {
  return (
      <div className="cart-item">
          <button>X</button>
          <div className="info">
              <span>{title} X {quantity}</span>
              <span>{price}</span>
          </div>
      </div>
  );
};
const Cart = ( {cartItems} ) => {
    const cartItem = Array.from(cartItems);
    const total = cartItem.reduce((sum, cur) => sum+cur.price, 0)
    return (<div className="cart">
        <h4>Cart Item</h4>
        <div className="cart-items">
            {cartItem.map(item => <CartItem key={item.id} {...item} />)}
            <div className="cart-item">
                <div className="info">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    </div>);
};

export default Cart;