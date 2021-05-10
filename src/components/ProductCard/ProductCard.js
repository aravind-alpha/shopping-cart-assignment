import React from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/action";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <li className="product-cards" id={product.category}>
      <h2 className="product-name truncate">{product.name}</h2>
      <img
        src={
          require(`../../../static/images/products/${product.imageURL}`).default
        }
        alt={product.name}
        className="product-img"
      />
      <p className="product-desc">{product.description}</p>
      <button
        className="btn-cta mobile tablet"
        data-prod-id={product.id}
        data-prod-name={product.name}
        data-prod-price={product.price}
        data-prod-img={product.imageURL}
        onClick={() => {
          dispatch(updateCartItem(product));
        }}
      >
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button
          onClick={() => {
            dispatch(updateCartItem(product));
          }}
          className="btn-cta"
          data-prod-id={product.id}
          data-prod-name={product.name}
          data-prod-price={product.price}
          data-prod-img={product.imageURL}
        >
          Buy Now
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
