import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart.js";
import Logo from "url:../../../static/images/logo.png";
import "./Header.css";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { item } = useSelector((state) => state);

  return (
    <header>
      <div className="navigation" role="navigation">
        <Link to="/" rel="Home">
          <img
            loading="lazy"
            className="logo-img"
            src={Logo}
            alt="Sabka Bazaar Logo"
          />
        </Link>
        <nav>
          <ul className="list-n">
            <li>
              <Link to="/" role="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" role="link">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
                <Link to="/login" role="link">
                  Signin
                </Link>
              </li>
              <li className="link">
                <Link to="/register" role="link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="btn-cart"
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              alt="Cart Icon"
              className="cart-icon icon"
            />
            <span className="text" id="cart-items">
              {item ? item : 0} Items
            </span>
          </button>
          <div
            id="desktop-cart"
            className="cart-main-cont"
            style={{
              display: openCart ? "block" : "none",
            }}
          >
            {/* <div className="dim"></div> */}

            <Cart closeCart={setOpenCart} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
