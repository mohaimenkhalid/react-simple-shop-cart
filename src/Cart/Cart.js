import React from "react";

const CartItem = ( {id, title, price, quantity, removeCartItem} ) => {
  return (
      <div className="cart-item">
          <button onClick={ () => removeCartItem(id) }>X</button>
          <div className="info">
              <span>{title} X {quantity}</span>
              <span>{price}</span>
          </div>
      </div>
  );
};
const Cart = ( {cartItems, removeCartItem} ) => {
    const cartItem = Array.from(cartItems);
    const total = cartItem.reduce((sum, cur) => sum+cur.price, 0)
    return (<div className="cart">
        <h4>Cart Item</h4>
        <div className="cart-items">
            {cartItem.map(item => <CartItem key={item.id} removeCartItem={removeCartItem} {...item} />)}
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