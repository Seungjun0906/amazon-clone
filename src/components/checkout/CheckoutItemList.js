import React from "react";

// context
import { useStateValue } from "../../store/StateProvider";
// css
import "./CheckoutItemList.scss";

// components
import CheckoutItem from "./CheckoutItem";

function CheckoutItemList() {
  const [{ cartItems }, dispatch] = useStateValue();
  return (
    <>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default CheckoutItemList;
