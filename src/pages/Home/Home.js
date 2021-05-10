import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import API from "../../API/apiCalls";
import "../Home/Home.css";

const Home = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function bannersData() {
      const response = await fetch(API.bannersURL);
      const data = await response.json();
      setBanner(data);
      console.log(data);
    }

    bannersData();
  }, []);

  return (
    <div className="body-section">
      <Carousel banner={banner} />
    </div>
  );
};

export default Home;
