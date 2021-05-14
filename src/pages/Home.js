import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="body-section">
      <Carousel />
      <Category />
    </div>
  );
};

export default Home;
