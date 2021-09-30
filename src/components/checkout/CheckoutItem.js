import React from "react";

// context
import { useStateValue } from "../../store/StateProvider";

// css
import "./CheckoutItem.scss";

function CheckoutItem({ item }) {
  const [state, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from cart
    dispatch({ type: "REMOVE_FROM_CART", id: item.id });
  };

  return (
    <li className="item">
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

        <button onClick={removeFromCart} className="item__btn">
          Remove from cart
        </button>
        {/* <span className="item__quantity">
          <label htmlFor="quantity">Qty</label>
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10+">10+</option>
          </select>
        </span> */}
      </div>
    </li>
  );
}

export default CheckoutItem;
