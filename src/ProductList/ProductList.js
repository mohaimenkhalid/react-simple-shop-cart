import React from "react";

const Product = ({id, title, brand, price, image_url}) => {
  return (<div className="product">
      <img src={image_url} alt={title} />
      <div className="title">
          <span>{title}</span>
          <span>{brand}</span>
      </div>
      <div className="actions">
          <span>${price}</span>
          <button>Add to Cart</button>
      </div>
  </div>);
};
const ProductList = ({ products }) => {
    return <div className="product-list">
        {products.map(product => <Product key={product.id} {...product} />)}
    </div>;
};

export default ProductList;