import React,{ useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";
import useCart from "./useCart";
import ThemeContext from "./ThemeContext";

const App = () => {
    const [products, setProduct] = useState([...data]);
    const [keyword, setKeyword] = useState("");
    const { addToCart, removeCartItem, clearCart, cartItems } = useCart([], products);
    const [dark, setDark] = useState(false);

    const toggleDark = () => {
        setDark(isDark => !isDark);
    }

    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        setProduct(results);
    }, [keyword]);


      return (
          <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
            <div className={`App ${ dark ? 'dark' : 'light'}`}>
                <NavBar setKeyword={setKeyword} />
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart}/>
            </div>
          </ThemeContext.Provider>
      );
}

export default App;
