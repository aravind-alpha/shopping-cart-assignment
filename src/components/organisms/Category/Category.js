import React, { useState, useEffect } from "react";
import CategoryBanner from "../../molecules/CategoryBanner/CategoryBanner";
import API from "../../../services/utils";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function categoriesData() {
      const response = await fetch(API.categoriesURL);
      const data = await response.json();
      setCategories(data);
    }

    categoriesData();
  }, []);

  return (
    <>
      {categories.map(
        (item) =>
          item.enabled && <CategoryBanner category={item} key={item.key} />
      )}
    </>
  );
};

export default Category;
