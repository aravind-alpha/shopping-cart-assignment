import React from "react";
import { Link } from "react-router-dom";
import "./CategoryBanner.scss";

const CategoryBanner = (props) => {
  const { category } = props;

  return (
    <div className="banner-component">
      <div className="image-container">
        <img
          loading="lazy"
          src={
            require(`../../../../static/images/category/${category.imageUrl}`)
              .default
          }
          alt={category.name}
          className="banner-image"
          width="100%"
          height="auto"
        />
      </div>
      <div className="content">
        <h2 className="heading">{category.name}</h2>
        <p className="desc">{category.description}</p>
        <Link to="/products" role="link" className="link-button">
          Explore {category.key}
        </Link>
      </div>
    </div>
  );
};

export default CategoryBanner;
