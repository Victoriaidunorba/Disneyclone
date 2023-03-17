import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./styles";

function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src="https://disney-plus-clone-43569.web.app/images/slider-scale.jpg"
          alt="badag"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://github.com/lukef7fywmrp/disney-clone/blob/main/public/images/slider-4.jpeg?raw=true"
          alt="avengers"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://github.com/lukef7fywmrp/disney-clone/blob/main/public/images/slider-1.jpg?raw=true"
          alt="badging"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7487B12724430E5DF3FBDBC9D1E1F9334674F469BA03CEFCFF700138773493C0/scale?width=1440&aspectRatio=3.91&format=jpeg"
          alt="scale"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7450DF0759679B9050CE04F4037CD56C4B1128DE2071FD7FE5EF58C90A8B0A65/scale?width=1440&aspectRatio=3.91&format=jpeg"
          alt="scales"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/816003FE6AD4DFC19E3CA024601A7179135744283C9571FFBE0AB05E5A3E25D7/scale?width=1440&amp;aspectRatio=3.91"
          alt="scales"
        />
      </Wrap>
    </Carousel>
  );
}

export default SliderBanner;