import React from "react";
import { Link } from "react-router-dom";

// context
import { useStateValue } from "../../store/StateProvider";

// firebase
import { auth } from "../../firebase/firebase";
// css
import "./Header.css";

function Header() {
  const [state, action] = useStateValue();

  const authHandler = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <div className="header__search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__nav">
        <Link to={!state.user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={authHandler} className="header__option">
            <span className="header__option-one">Hello</span>
            <span className="header__option-two">
              {state.user ? "Sign Out" : "Sing In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__option-cart">
            <div className="header__option-cart-icon">
              <i className="fas fa-shopping-cart "></i>
            </div>
            <span className="header__option-two header__option-count">
              {state.cartItems?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
