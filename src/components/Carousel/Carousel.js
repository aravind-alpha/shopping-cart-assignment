import React, { useState, useEffect } from "react";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import API from "../../API/apiCalls";
import "./CarouselBanner.css";

const Carousel = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function bannersData() {
      const response = await fetch(API.bannersURL);
      const data = await response.json();
      setBanner(data);
    }

    bannersData();
  }, []);

  return <CarouselBanner banner={banner} />;
};

export default Carousel;
