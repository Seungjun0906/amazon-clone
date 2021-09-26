import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <div className="header__search-icon">
          <i class="fas fa-search"></i>
        </div>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-one">Hello</span>
          <span className="header__option-two">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Returns</span>
          <span className="header__option-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-one">Your</span>
          <span className="header__option-two">Prime</span>
        </div>
        <div className="header__option-cart">
          <div className="header__option-cart-icon">
            <i class="fas fa-shopping-cart "></i>
          </div>
          <span className="header__option-two header__option-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
