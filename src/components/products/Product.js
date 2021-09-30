import React from "react";

// Context
import { useStateValue } from "../../store/StateProvider";
// css
import "./Product.css";

function Product(props) {
  const [state, dispatch] = useStateValue();

  // Add to Cart
  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
              <span key={Math.random()}>⭐</span>
            ))}
        </div>
      </div>
      <img src={props.image} alt="products" className="product__img" />
      <button onClick={addToCartHandler} className="product__add-btn">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
