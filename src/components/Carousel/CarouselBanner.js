import React from "react";
import Slider from "react-slick";
import "./CarouselBanner.css";

const CarouselBanner = (props) => {
  const { banner } = props;

  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings}>
        {banner.map((data) => (
          <div key={data.id}>
            <img
              src={
                require(`../../../static/images/offers/${data.bannerImageUrl}`)
                  .default
              }
              alt={data.bannerImageAlt}
              width="100%"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CarouselBanner;
