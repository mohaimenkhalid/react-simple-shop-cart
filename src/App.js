import React,{ useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import data from "./data";

const App = () => {
    const [products, setProduct] = useState([...data]);
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        setProduct(results);
    }, [keyword]);
  return (
    <div className="App">
        <NavBar setKeyword={setKeyword} />
        <ProductList products={products} />
        <Cart />
    </div>
  );
}

export default App;
