import React, {useContext} from "react";
import ThemeContext from "../ThemeContext";

const Product = ({id, title, brand, price, image_url, addToCart}) => {
  return (
      <div className="product">
          <img src={image_url} alt={title} />
          <div className="title">
              <span>{title}</span>
              <span>{brand}</span>
          </div>
          <div className="actions">
              <span>${price}</span>
              <button onClick={ () => addToCart(id) }>Add to Cart</button>
          </div>
      </div>);
};
const ProductList = ({ products, addToCart }) => {
    const {dark} = useContext(ThemeContext);
    return <div className={`product-list ${ dark ? 'dark' : 'light'}`}>
        {products.map(product => <Product key={product.id} {...product} addToCart={addToCart} />)}
    </div>;
};

export default ProductList;