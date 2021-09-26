import React from "react";

// css
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <div className="product__description">
        <p>{props.title}</p>
        <p className="product__price">
          <span>$</span>
          <span>{props.price}</span>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>
      <img src={props.image} alt="products" className="product__img" />
      <button className="product__add-btn">Add to cart</button>
    </div>
  );
}

export default Product;
