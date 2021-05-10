import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import ProductCard from "../components/ProductCard/ProductCard";
import API from "../API/apiCalls";

const Product = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { filter } = useSelector((state) => state);

  useEffect(() => {
    async function productsData() {
      const response = await fetch(API.productsURL);
      const data = await response.json();
      setData(data);
    }

    async function categoriesData() {
      const response = await fetch(API.categoriesURL);
      const data = await response.json();
      setCategories(data);
    }

    productsData();
    categoriesData();
  }, []);

  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductList category={categories} />
      <section
        id="products-cards-container"
        className="product-cards-container"
      >
        <ul
          className="product-list"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {filter == null &&
            data.length > 0 &&
            data.map((item) => <ProductCard product={item} key={item.id} />)}
          {filter != null &&
            data.length > 0 &&
            data.map((item) =>
              item.category == filter ? (
                <ProductCard product={item} key={item.id} />
              ) : null
            )}
        </ul>
      </section>
    </main>
  );
};

export default Product;
