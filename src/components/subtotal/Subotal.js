import React from "react";
import CurrencyFormat from "react-currency-format";

// Context
import { useStateValue } from "../../store/StateProvider";
import { getTotalAmount } from "../../store/reducer";

// css
import "./Subtotal.css";

function Subtotal() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.cartItems.length} items):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalAmount(state.cartItems)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subtotal__btn">Procedd to Checkout</button>
    </div>
  );
}

export default Subtotal;
