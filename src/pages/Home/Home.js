import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="body-section">
      <Carousel />
      <Category />
    </div>
  );
};

export default Home;
