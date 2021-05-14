import React from "react";
import Carousel from "../organisms/Carousel/Carousel";
import Category from "../organisms/Category/Category";
import "../../styles/Home.scss";

const Home = () => {
  return (
    <div className="body-section">
      <Carousel />
      <Category />
    </div>
  );
};

export default Home;
