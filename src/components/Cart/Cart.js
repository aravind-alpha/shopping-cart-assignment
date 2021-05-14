import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeCartItem } from "../../redux/actions/rootAction";
import "./Cart.scss";

const Cart = (props) => {
  const { item, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function closeCart() {
    props.closeCart(false);
  }

  return (
    <div className="cart-wrapper">
      <div className="header-container">
        <h2 className="heading">
          My cart {item > 0 ? `(${item} Item)` : null}
        </h2>
        <button
          type="button"
          aria-label="Close"
          className="btn-close"
          onClick={closeCart}
        />
      </div>

      <ul className="cart_list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li
              className="cart_list-item"
              key={item.id}
              data-product-id={item.id}
            >
              <img
                src={
                  require(`../../../static/images/products/${item.imageURL}`)
                    .default
                }
                className="cart_list-img"
                alt={item.name}
              />

              <div className="cart_list-details">
                <h4 className="cart_list-name truncate">{item.name}</h4>
                <button
                  type="button"
                  className="btn-increment"
                  data-product-id={item.id}
                  onClick={() => {
                    dispatch(updateCartItem(item));
                  }}
                >
                  +
                </button>
                <span className="quantiy">{item.quantity}</span>
                <button
                  type="button"
                  className="btn-decrement"
                  data-product-id={item.id}
                  onClick={() => {
                    dispatch(removeCartItem(item));
                  }}
                >
                  -
                </button>
                <span className="into-qty">X</span>
                <span className="cart_list-price">Rs. {item.price}</span>
                <span className="cart_list-item-total">
                  Rs. {item.quantity * item.price}
                </span>
              </div>
            </li>
          ))
        ) : (
          <div className="text-center">
            <strong>No items in your cart</strong>
            <p>Your favourite items are just a click away</p>
          </div>
        )}
      </ul>

      <div className="checkout">
        <p className="checkout-heading">
          Promo code can be applied on the checkout page
        </p>
        {item > 0 ? (
          <button
            type="button"
            name="button"
            className="btn-cart-checkout checkout-button"
            onClick={closeCart}
          >
            <span className="checkout-text">Proceed to checkout</span>{" "}
            <span className="checkout-price">
              Rs.
              {cart.reduce(function (total, item) {
                return total + item.price * item.quantity;
              }, 0)}
            </span>
          </button>
        ) : (
          <button
            type="button"
            name="button"
            className="btn-cart-checkout checkout-button"
            onClick={closeCart}
          >
            <span className="checkout-text">Start Shopping</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
