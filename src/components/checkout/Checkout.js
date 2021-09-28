import React from "react";

// css
import "./Checkout.css";
// components
import Subtotal from "../subtotal/Subotal";
import CheckoutItemList from "./CheckoutItemList";

function Checkout(props) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        <CheckoutItemList />
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
