import React from "react";

// css
import "./CheckoutItem.scss";

function CheckoutItem({ item }) {
  return (
    <div className="item">
      <div className="item__img-container">
        <img src={item.image} className="item__img" />
      </div>
      <div className="item__detail">
        <p className="item__title">{item.title}</p>
        <p className="item__price">
          <span>$</span>
          <span>{item.price}</span>
        </p>
        <div className="item__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>

        <button className="item__btn">Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
