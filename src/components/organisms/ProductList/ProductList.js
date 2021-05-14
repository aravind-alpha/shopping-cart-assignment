import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFilter } from "../../../redux/actions/rootAction";
import "./ProductList.scss";

const ProductList = (props) => {
  const { category } = props;
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  function getID(event) {
    if (event.target.name !== filter) {
      dispatch(setFilter(event.target.name));
    } else {
      dispatch(setFilter(null));
    }
  }

  return (
    <aside className="product-category">
      <ul>
        {category.length > 0 &&
          category.map(
            (element) =>
              element.enabled && (
                <li
                  key={element.id}
                  style={{ color: element.id == filter ? "red" : "black" }}
                >
                  <Link name={element.id} onClick={getID}>
                    {element.name}
                  </Link>
                </li>
              )
          )}
      </ul>
    </aside>
  );
};

export default ProductList;
