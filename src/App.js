import React,{ useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";
import useCart from "./useCart";

const App = () => {
    const [products, setProduct] = useState([...data]);
    const [keyword, setKeyword] = useState("");
    const { addToCart, removeCartItem, clearCart, cartItems } = useCart([], products);

    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        setProduct(results);
    }, [keyword]);


      return (
        <div className="App">
            <NavBar setKeyword={setKeyword} />
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart}/>
        </div>
      );
}

export default App;
