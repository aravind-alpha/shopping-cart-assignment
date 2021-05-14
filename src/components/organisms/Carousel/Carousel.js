import React, { useState, useEffect, lazy } from "react";
import API from "../../../services/utils";

const CarouselBanner = lazy(() =>
  import("../../molecules/CarouselBanner/CarouselBanner")
);

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
