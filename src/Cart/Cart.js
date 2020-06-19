import React, {useState} from "react";

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
const Cart = ( {cartItems, removeCartItem, clearCart} ) => {
    const [checkoutOpen, setcheckoutOpen] = useState(false);
    const toggleCheckout = () => {
        setcheckoutOpen((status) => !status);
    }

    const cartItem = Array.from(cartItems);
    const total = cartItem.reduce((sum, cur) => sum+cur.price, 0);
    return (<div className="cart">
        <h4>Cart Item</h4>
        {cartItems.length === 0 ?
            <div className="cart-item">
                <div className="info">
                    <span><strong>Cart is Empty!</strong></span>
                </div>
            </div>
            :
            <>
                <div className="cart-items">
                    {cartItem.map(item => <CartItem key={item.id} removeCartItem={removeCartItem} clearCart={clearCart} {...item} />)}
                    <div className="cart-item">
                        <div className="info">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="info">
                            <span><button style={{fontSize:"20px",backgroundColor:"red", color:"white", border: "1px solid #FF0000", cursor:"pointer"}} onClick={ ()=> clearCart() }>Clear</button></span>
                            <span><button onClick={toggleCheckout} style={{fontSize:"20px",backgroundColor:"green", color:"white", border: "1px solid #008000", cursor:"pointer"}}>Checkout</button></span>
                        </div>
                    </div>
                </div>
            </>
        }
        {checkoutOpen === true ?
            (<div className="cart-item">
                <div className="info">
                    <span><input placeholder="address"/></span>
                    <span><button style={{fontSize:"20px",backgroundColor:"green", color:"white", border: "1px solid #008000", cursor:"pointer"}}>Confirm Order</button></span>
                </div>
            </div>) : ''
        }

    </div>);
};

export default Cart;